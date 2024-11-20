"use client"
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export interface DataTypes {
    id:number
    title:string
    image:string
    model:string
    brand:string
    category:string
    description:string
    price:number
}

const Dashboard = () => {
    const [data, setData] = useState<DataTypes[]>([])

    useEffect(() => {
        axios.get("https://fakestoreapi.in/api/products?limit=40").then(res => {
            setData(res.data.products)
        })
    }, [])

  return (
    <div className='flex flex-wrap justify-between gap-10 p-6'>{data.map(item => <div key={item.id}>
        <div className='w-[300px] border-[2px] border-slate-500 p-4 rounded-lg'>
            <img src={item.image} alt="Img" width={300} height={300} />
            <h3 className='font-bold text-[25px] line-clamp-1'>{item.title}</h3>
            <div className='flex'>
                <p className='font-bold'>{item.brand}</p> - <p className='line-clamp-1'>{item.model}</p>
            </div>
            <div className='font-bold'>{item.category}</div>
            <p className='line-clamp-3'>{item.description}</p>
            <div className='flex justify-between'>
                <strong>{item.price}$</strong>
                <Link href={`/dashboard/${item.id}`}>More</Link>
            </div>
        </div>
    </div>)}</div>
  )
}

export default Dashboard