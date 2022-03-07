// 1- importo createContext
import React, {createContext, useState, useEffect} from 'react';

// 2- Creo contexto y lo exporto
export const CartContext = createContext()

// 3- Creo mi provider

export const CartProvider = ({children}) => {    

    const [cart, setCart] = useState([]) // array vacio para ir llenando

        // 5- detallo funciones a pasar → por medio de "value"
        const addItem =(item, cantidad)=>{
                        
            const product = {...item, cantidad}

            const compareItem = cart.find((prod) => prod.id === item.id)

            if(cantidad !== 0){
                if(compareItem){
                    //compareItem.cantidad += cantidad;
                    const consulta = window.confirm('⛔ ¿Deseas agregar más unidades a este item?')
                    
                    if(consulta  === true){
                        compareItem.cantidad += cantidad;
                    }
                    
                }else{
                    setCart([...cart, product])
                }
            } 

            //console.log('PRODUCTO: ' + product)

            //console.log('CANTIDAD: ')
            //console.log(product.cantidad)
            
            //console.log('CARRITO: ')
            //console.log(cart)
        }

        const removeItem =(itemID)=>{
            const actualizarCart = cart.filter((cart) => {
                return cart.id !== itemID
            })
            setCart (actualizarCart)
        }

        const clearCart = (cart)=>{
            return setCart([])
        }


    // 4- devuelvo/retorno valores x medio de children
    return <CartContext.Provider value={{cart, setCart, addItem, removeItem, clearCart}}>
        {children}
    </CartContext.Provider>

}
