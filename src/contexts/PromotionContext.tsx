import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

interface Promotion {
    _id: string,
    name: string,
    startDate: Date,
    endDate: Date,
    discount: string,
}

interface PromotionProviderProps {
    children: ReactNode;
}

export const PromotionContext = createContext<any>([]);

export function PromotionProvider({children}: PromotionProviderProps) {

    const [id, setId] = useState('');

    const [name, setName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [discount, setDiscount] = useState('');

    const [promotions, setPromotions] = useState<Promotion[]>([])
    const [productsInPromo, setProductsInPromo] = useState('')

    const [ onePromotion, setOnePromotion] = useState<Promotion>()

    function getPromotions() {
        api.get('/promotions').then((response) => {
            setPromotions(response.data);
            
        })
    }

    async function getOnePromotion(id: string) {
        api.get(`/promotions/${id}`).then((response) => {
          
           setOnePromotion(response.data)
           console.log("ID", id)
           console.log("RESPONSE DATA", response.data)
           console.log("ONE Promotion", onePromotion)
        
       }).catch((error) => {
           console.log("ERROR", error)
       })   
   }

    useEffect(() => {
        getPromotions()
    }, [])
   


    return (
        <PromotionContext.Provider value={{
            promotions,
            setPromotions,
            id,
            setId,
            name,
            setName,
            startDate,
            setStartDate,
            endDate,
            setEndDate,
            discount,
            setDiscount,
            productsInPromo,
            setProductsInPromo,
            getPromotions,
            getOnePromotion,
            onePromotion, setOnePromotion
        }}>
            {children}
        </PromotionContext.Provider>
    )
}