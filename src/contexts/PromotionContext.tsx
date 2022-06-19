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

    function getPromotions() {
        api.get('/promotions').then((response) => {
            setPromotions(response.data);
            
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
            setProductsInPromo
        }}>
            {children}
        </PromotionContext.Provider>
    )
}