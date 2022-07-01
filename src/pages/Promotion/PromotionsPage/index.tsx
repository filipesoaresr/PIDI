import React, { useContext, useEffect, useState } from 'react'
import { Container, PromoIntro, PromoDisplay } from './styles'
import Promotion from '../../../components/Promotion'
import { Link } from 'react-router-dom'
import { api } from '../../../services/api';
import { PromotionContext } from '../../../contexts/PromotionContext';
import { BiCaretLeft, BiError } from 'react-icons/bi';
import { Button } from 'reactstrap';
import { toast } from 'react-toastify';

interface PromotionPage {
    id: string,
    name: string,
    //startDate: Date,
    endDate: Date,
    discount: string,
    products: [],
    //PromotionHasProduct: []
}

interface PromotionPageProps {
    promotions: PromotionPage[];
}

export default function PromotionsPage() {

    const {promotions} = useContext(PromotionContext);
    const [ promotionName, setPromotionName ] = useState('')
    const [ result, setResult ] = useState([])
    const [notFound, setNotFound] = useState(false)


    function handleSearch(promotion_name: string){

        if(!localStorage.getItem('token')){
            return toast.error('É preciso estar logado para realizar essa ação!')
        }

        console.log(promotion_name)
        api.get(`/promotions/search/${promotion_name}`).then(response => {
            console.log("DAta", response.data)
            setResult(response.data)

            if(response.data.length == 0) {
                setNotFound(true)
            }
            
        })
    }

    function handleGetBack(){
        setNotFound(false)
    }

    return (
        <Container>
            <PromoIntro>
             
                        <h1>Promoções</h1>

                        <input type='text' placeholder='Digite o Nome da Promoção'  onChange={(event) => setPromotionName(event.target.value)}/>
                        <br/>
                        <button type='submit' onClick={() => handleSearch(promotionName)}>Consultar</button>
             
            </PromoIntro>
               
            { result.length == 0 && notFound && (
                <div id="warningNotFound">
                    <p>PROMOÇÃO NAO ENCONTRADA</p>
                    <BiError size="35" style={{color: "#F9DC5C", verticalAlign: 'middle', marginLeft: "1rem"}}/>
                </div>
                )
            }

            <PromoDisplay>

                {result.length != 0 && (
                        result.map((promotion: PromotionPage) => (
                            <Promotion
                                _id={promotion.id}
                                name={promotion.name}
                                endDate={promotion.endDate}
                                discount={promotion.discount}
                                products={promotion.products}
                            />
                    ))
                )}


                { result.length == 0 && !notFound && (
                    promotions.map((promotion: PromotionPage) => (
                        <Promotion
                            _id={promotion.id}
                            name={promotion.name}
                            endDate={promotion.endDate}
                            discount={promotion.discount}
                            products={promotion.products}
                        />
                    ))
                )
                }
                
            </PromoDisplay>

            { result.length != 0 && (
                    <Button id="cleanSearchButton"  size="sm" onClick={() => {setResult([])}}>
                        Limpar Busca
                    </Button>  
            )}

            { result.length == 0 && notFound && (
                 <button type='button' className="getBack" onClick={() => handleGetBack()}>
                    <BiCaretLeft size="28" style={{color: "white", verticalAlign: 'middle'}}/>
                    Voltar
                </button>   
            )
            }
            

            {
                localStorage.getItem('token') && (
                <Link to='/promotion/newpromotion'>
                    <button type='submit' className ="register">+ Cadastrar</button>
                </ Link>
                )
            }

        </Container>
    )
}
