import style from './Orders.module.css'
import VerticalBar from "./Orders-Components/VerticalBar";
import OrderCard from "./Orders-Components/Card";
import CardProduct from './Orders-Components/CardProduct';
import { useState, useEffect } from 'react';

const Order = () => {

    const [orders, setOrders] = useState();
    const token = localStorage.getItem('accessToken');

    const getOrders = () => fetch('http://localhost:8080/orders', {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "authorization": `Bearer ${token}`
            }
            })
        .then(response => response.json()) 
        .then(json => {
            console.log(json)
            return setOrders(json)})
        .catch(err => console.log(err));

    useEffect(()=>{
        getOrders();
        
    }, [])

    return(
        <div className={style.Container}>
            <VerticalBar/>
            <section className={style.SectionCards}>
                <div className={style.Cards}>
                    {!orders ? <div>Loading</div> : 
                    orders.map(order =>{
                        return <OrderCard
                        key={order.id}
                        client={order.client}
                        dataEntry={order.dataEntry}
                        userId={order.userId}
                        status={order.status}
                        products={order.products}
                        />
                    })}
                </div>
            </section>
            
        </div>
    )
}

export default Order