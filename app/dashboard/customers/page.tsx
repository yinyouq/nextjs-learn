import { ReactElement } from "react";
import { Metadata } from 'next';
 
export const metadata:Metadata = {
  title: 'customers'
};

export default function Page():ReactElement{
    return <p>Customers</p>
}