import { createContext, useState, useEffect, ReactNode } from "react";
import { api } from "../services/api";

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
    installment: string;
    totalValue: number;
    productHasOrder: IProductInOrder[]
}

interface OrderProviderProps {
    children: ReactNode;
}

export const OrderContext = createContext<any>([]);

export function OrderProvider({ children }: OrderProviderProps) {

    const [orders, setOrders] = useState<Order[]>([])

    const [id, setId] = useState();
    const [dateCreated, setDateCreated] = useState('');
    const [dateSubmitted, setDateSubmitted] = useState('');
    const [isOpen, setIsOpen] = useState(true);
    const [fk_id_payment_options, setFk_id_payment_options] = useState('');
    const [fk_id_user, setFk_id_user] = useState('');
    const [totalValue, setTotalValue] = useState(0);
    const [installment, setInstallment] = useState('A vista');
    const [productHasOrder, setProductHasOrder] = useState<IProductInOrder[]>([]);

    const [oneOrder, setOneOrder] = useState<Order>();

    const [pp, setPP] = useState(0);
    const [p, setP] = useState(0);
    const [m, setM] = useState(0);
    const [g, setG] = useState(0);
    const [gg, setGG] = useState(0);
    
    const [sales, setSales] = useState<Order[]>([])
    const [startDate, setStartDate] = useState<Date>()
    const [endDate, setEndDate] = useState<Date>()

    async function getOneOrder(id: string) {
        api.get(`/orders/${id}`).then((response) => {
          
           setOneOrder(response.data)
           console.log("ID", id)
           console.log("RESPONSE DATA", response.data)
           console.log("ONE ORDER", oneOrder)
       }).catch((error) => {
           console.log("ERROR", error)
       })   
   }


    function getOrders() {
        api.get('/orders').then((response) => {
            setOrders(response.data)
        })
    }

    useEffect(() => {
        let isMounted = true;
        if(isMounted) {
            getOrders()
            //getOneOrder()  
        }

        return () => {
            isMounted = false;
        };
         
    }, [])

    return (
        <OrderContext.Provider value={{
            orders,
            setOrders,
            id,
            setId,
            dateCreated, 
            setDateCreated,
            dateSubmitted, 
            setDateSubmitted,
            isOpen, 
            setIsOpen,
            fk_id_payment_options, 
            setFk_id_payment_options,
            fk_id_user, 
            setFk_id_user,
            totalValue, 
            setTotalValue,
            installment,
            setInstallment,
            productHasOrder,
            setProductHasOrder,
            getOrders,
            getOneOrder,
            pp,
            setPP,
            p,
            setP,
            m,
            setM,
            g,
            setG,
            gg,
            setGG,
            oneOrder,
            setOneOrder,
            sales,
            setSales,
            startDate,
            setStartDate,
            endDate,
            setEndDate
        }}>
            {children}
        </OrderContext.Provider>
    )

}