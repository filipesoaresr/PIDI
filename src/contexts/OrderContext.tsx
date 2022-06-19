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

    const [id, setId] = useState('');
    const [dateCreated, setDateCreated] = useState('');
    const [dateSubmitted, setDateSubmitted] = useState('');
    const [isOpen, setIsOpen] = useState(true);
    const [fk_id_payment_options, setFk_id_payment_options] = useState('');
    const [fk_id_user, setFk_id_user] = useState('');
    const [totalValue, setTotalValue] = useState(0);
    const [installment, setInstallment] = useState('A vista');
    const [productHasOrder, setProductHasOrder] = useState<IProductInOrder[]>([]);

    const [pp, setPP] = useState(0);
    const [p, setP] = useState(0);
    const [m, setM] = useState(0);
    const [g, setG] = useState(0);
    const [gg, setGG] = useState(0);
    



    function getOrder() {
        api.get('/orders').then((response) => {
            console.log("++++++++++POS-REQUISIÇÃO++++++++++=", response.data)
            setOrders(response.data)
        })
    }


    useEffect(() => {
        //console.log("=========TOKEN=======", token)
        getOrder()
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
            getOrder,
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
        }}>
            {children}
        </OrderContext.Provider>
    )

}