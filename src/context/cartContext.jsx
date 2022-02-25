// 1- importo createContext
import React, {createContext, useState, useEffect} from 'react';

// 2- Creo contexto y lo exporto
export const CartContext = createContext()

// 3- Creo mi provider

export const CartProvider = ({children}) => {    

    const [cart, setCart] = useState([]) // array vacio para ir llenando

        // ----- Producto que traigo de una API ---- 
        /* const [productos, setProductos]= useState(
            useEffect(()=>{
                axios('https://breakingbadapi.com/api/characters')
                .then((res)=>setProductos(res.data))

        },[])) */

        /* 
        // levanta OK
        console.log(
            productos.map((x)=>{
                return(
                console.log(x.name)
                )
            })
        ) 
        */


    /* ------------------- */

        // 5- detallo funciones a pasar → por medio de "value"

        const addItem =(item, cantidad)=>{
            
            const product = {...item, cantidad}
            setCart([...cart, product])

            //console.log('PRODUCTO: ' + product)
            console.log('CARRITO: ' + cart)
        }

        const removeItem =(itemID)=>{

        }


    // 4- devuelvo/retorno valores x medio de children
    return <CartContext.Provider value={{cart, setCart, addItem, removeItem}}>
        {children}
    </CartContext.Provider>

}
