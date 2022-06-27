import React, { useContext, useState } from 'react'
import { Container, ReportIntro, Form } from './styles'
import { Link, useHistory } from 'react-router-dom'
import { Button } from 'reactstrap';
import { OrderContext } from '../../contexts/OrderContext';
import { api } from '../../services/api';

interface IProductInOrder {
    pp?: number,
    p?: number,
    m?: number,
    g?: number,
    gg?:number,
    order_product_value: number,
    fk_id_product: string,
    hasPromotion: false,

}
interface Order {
    id: string;
    dateCreated: Date;
    fk_id_payment_options: string;
    fk_id_user: string;
    dateSubmitted: Date;
    isOpen: boolean;
    installment?: string;
    totalValue: number;
    productHasOrder: IProductInOrder[]
}

export default function ReportPage() {


    const {sales, startDate, setStartDate, endDate, setEndDate,
         setSales, setProductsPercentage, productsPercentage, setGroupedProductListInPeriod, productsWithSaleDate, setProductsWithSaleDate} = useContext(OrderContext)
    //const [totalValue, setTotalValue ] = useState(0)
    
    //const [ productsWithSaleDate, setProductsWithSaleDate ] = useState()

    const history = useHistory();
    let List: Array<any> = []
    let productsList: Array<any> = []
    let valueList: Array<any> = []
    let totalValue: number = 0
    let saleProductsInPeriod: Array<any>= [];

    //let chartLabels: Array<any> = []
    //let chartData: Array<any> = []

    

    function getSales(startDate: any, endDate: any) {

        //.toISOString()
        const start_dateNonFormatted= startDate
        const end_dateNonFormatted= endDate

        const start_date= start_dateNonFormatted.toISOString()
        const end_date= end_dateNonFormatted.toISOString()
         
        
        api.get('/sales/' + start_date + '/' + end_date).then((response) => {
           response.data.map((data: Order) => {
            List.push(data)
           })
           //setSales([...List])
           setSales(List)
            //sales.push(response.data)
            console.log("TESTE SALES response data", response.data)
            console.log("TESTE SALES LIST", List)
            
        }).catch((error) => {
            console.log("ERROR", error)
        })   
        setTimeout(() => {
            console.log("====SALES====", sales)
            handleGenerateReport()
            //history.push('/sales/listsalespage')
        }, 1000)
        console.log("TESTE STARTDATE", start_date)
        console.log("TESTE ENDDATE", end_date)
    }


    function handleGenerateReport() {
        List.map((sale: any) => {
            
            sale.product_has_order.map((product: any) => {
                product.date = sale.date_submitted
                productsList.push(product)
                valueList.push(product.order_product_value);
            })
        })
        console.log("LISTA DE VALORES", valueList)
        console.log("LISTA DE PRODUTOS", productsList)
        getMaxOcurrences(productsList)

        var soma = 0;
        for(var i = 0; i < valueList.length; i++) {
            soma += valueList[i];
        }
        totalValue = soma
        
        console.log("TOTAL VALUE ", totalValue)
        removeDuplicates(productsList)
        handlePercentage()
        handleSalesChart()
        setTimeout(() => {
            history.push("/report/showreport")
        }, 1000)
        
    }

     function handleSalesChart() {
        //let productsWithSaleDate: Array<any> = []
        
        let newSalesList: Array<any> = []
        let soldAmount: number = 0
        let contador_teste = 0
        let total_de_tamanhos = 0
        //let testList: Array<any> = []
       

        productsList.map((product) => {
            console.log("========================", product.pp + product.p + product.m + product.g + product.gg)
            soldAmount = product.pp + product.p + product.m + product.g + product.gg;
            total_de_tamanhos += soldAmount
            
            productsWithSaleDate.push({


                name: product.product_name,
                sold_amount: soldAmount,
                sale_date: product.date.split('T')[0]
            })
        console.log("total de tamanhos", total_de_tamanhos)})
        productsWithSaleDate.forEach((product: any) => {
            contador_teste+=1
            
            let obj = newSalesList.find(productTotals => productTotals.sale_date === product.sale_date);
            if (obj) {
              obj.sold_amount = Number(obj.sold_amount) + Number(product.sold_amount)
            } else {
                newSalesList.push(product);
            }
          });
        setProductsWithSaleDate(newSalesList)
        console.log("++++TESTANDO+++", productsWithSaleDate)
        console.log("CONTADOR TESTE",contador_teste)
    }

    function getMaxOcurrences(arr: Array<any> = []) {
        let item = arr[0];
        let ocurrencesMap: any = {};
      
        for (let i in arr) {
          const current = arr[i];
      
          if (ocurrencesMap[current]) ocurrencesMap[current]++;
          else ocurrencesMap[current] = 1;
      
          if (ocurrencesMap[item] < ocurrencesMap[current]) item = current;
        }
        
        const maxOcurrences = {
            item: item, 
            ocurrences: ocurrencesMap[item]
        }

        console.log("MAIS VENDIDOS", maxOcurrences)
        return { 
            maxOcurrences
        };
      }

      function removeDuplicates(lista: Array<any>) {
       
        lista.forEach(product => {
          let obj = saleProductsInPeriod.find(productTotals => productTotals.product_name === product.product_name);
          if (obj) {
            obj.order_product_value = obj.order_product_value + product.order_product_value
            obj.p = obj.p + product.p
            obj.pp = obj.pp + product.pp
            obj.m = obj.m + product.m
            obj.g = obj.g + product.g
            obj.gg = obj.gg + product.gg
          } else {
            saleProductsInPeriod.push(product);
          }
        });
        
        console.log("LISTA RESUMIDA", saleProductsInPeriod);
        setGroupedProductListInPeriod(saleProductsInPeriod)
      }

      function handlePercentage() {
        let totalProductValue: Array<any>= []
        let productsValueList: Array<any>= []
        let percentageList = 0;

            saleProductsInPeriod.map((product) => {

                productsValueList.push(product.order_product_value);

                productsValueList.map((value: any) => {
                    percentageList = (value / totalValue) * 100
                })
                

                totalProductValue.push(
                    {
                        nome: product.product_name,
                        percent: percentageList
                    }
                )
            })
            setProductsPercentage(totalProductValue)

           
            console.log("LISTA DE PORCENTAGEM", totalProductValue)
      }


    return (
        <Container>
        <Form>

            <ReportIntro>

                <h1>Relatório Inteligente</h1>

                <p>Data Inicial:</p>
                <input type='date' onChange={event => setStartDate(new Date(event.target.value))}/>

                <p>Data Final:</p>
                <input type='date' onChange={event => setEndDate(new Date(event.target.value))}/>

            </ReportIntro>

           
            <button type='button' className="register" onClick={() => getSales(startDate, endDate)}>Gerar Relatório</button>
            

        </Form>
    </Container>
    )
}
