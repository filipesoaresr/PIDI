import { createContext, useState, useEffect, ReactNode } from "react";
import any from "react/jsx-runtime";
import { api } from "../services/api";


interface Payment {
    id: string;
    name: string;
    flag?: string;
    installment: string;
}

interface PaymentProviderProps {
    children: ReactNode;
}

export const PaymentContext = createContext<any>([]);

export function PaymentProvider({ children }: PaymentProviderProps) {

    const [payments, setPayments] = useState<Payment[]>([])

    const [id, setId] = useState('');

    const [name, setName] = useState('');
    const [flag, setFlag] = useState('');
    const [installment, setInstallment] = useState('');


    function getPaymentOptions() {
        api.get('/payment_options').then((response) => {
            setPayments((response.data))
        })
    }


    useEffect(() => {

        //console.log("=========TOKEN=======", token)
        getPaymentOptions()
    }, [])


    return (
        <PaymentContext.Provider value={{
            payments,
            setPayments,
            id,
            setId,
            name,
            setName,
            installment,
            setInstallment,
            flag,
            setFlag,
            getPaymentOptions
        }}>
            {children}
        </PaymentContext.Provider>
    )

}
