
/*'use server';
import {useEffect, useState} from 'react'
import axios from "axios";

export const Teste = () => {
    let [data, setData] =useState<any>()
    
    let url = 'https://pd-satur-nodejs-set-10cb88bf8e994930acc0c928bc718f7b.community.saturnenterprise.io'
    const user_token = 'f089371aee2849489767f18bf8700769'

    
   useEffect(()=>{
    axios.get(url).then((res)=>{
        console.log("funfou",res.data)
        let myObj = JSON.stringify(res.data);
        console.log("datateste",myObj)
        setData(myObj)
     }).catch((err:Error)=>{
         console.error(err)
     })
   },[])

   
    
    return (
        <div>
            OLA MUNDO
            {data}
        </div>
    )
}*/
import React from "react";
import ReactDOMServer from "react-dom/server";

export default function TestServerComponent() {
  // Simule uma busca de dados no servidor
  const data = ["Item 1", "Item 2", "Item 3"];

  // Utilize ReactDOMServer para renderizar o HTML 
  const html = ReactDOMServer.renderToString(
    <div>
      <h1>Server Component Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return html;
};