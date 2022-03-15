import { createContext, useState, useEffect, ReactNode } from "react";
import { api } from "../services/api";


interface Product {
    _id: string;
    productType: string;
    name: string;
    collection: string;
    dateCreated: string;
    pp: number;
    p: number;
    m: number;
    g: number;
    gg: number;
    promotion: string;
    value: string;
}

interface ProductProviderProps {
    children: ReactNode;
}

export const ProductContext = createContext<any>([]);

export function ProductProvider({children}: ProductProviderProps) {

    const [products, setProducts] = useState<Product[]>([])

    const [id, setId] = useState('');

    const [productType, setProductType] = useState('');
    const [name, setName] = useState('');
    const [colection, setColection] = useState('');
    const [date, setDate] = useState('');
    const [value, setValue] = useState('');
    const [pp, setPP] = useState(0);
    const [p, setP] = useState(0);
    const [m, setM] = useState(0);
    const [g, setG] = useState(0);
    const [gg, setGG] = useState(0);



    useEffect(() => {
        api.get('/products').then((response) => {
            setProducts(response.data.product)
        })
    }, [])
   

    return (
        <ProductContext.Provider value={{
        products,
        setProducts,
        id,
        setId,
        productType,
        setProductType,
        name,
        setName,
        colection,
        setColection,
        date,
        setDate,
        value,
        setValue,
        pp,
        setPP,
        p,
        setP,
        m,
        setM,
        g,
        setG,
        gg,
        setGG 
        }}>
            {children}
        </ProductContext.Provider> 
    )

}