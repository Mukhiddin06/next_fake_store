"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
import { DataTypes } from '../page'
import Link from 'next/link'

const SinglePage = () => {
    const { slug } = useParams()
    const [data, setData] = useState<DataTypes | null>(null)

    useEffect(() => {
        axios.get(`https://fakestoreapi.in/api/products/${slug}`).then(res => {
            setData(res.data.product)
        })
    }, [])

    // console.log(data)
    return (
        <>
            <div className='w-[1200px] mx-auto flex items-center justify-between space-x-10'>
                <img src={data?.image} alt="Img" width={600} height={600} />
                <div>
                    <h2 className='font-bold text-[25px] leading-[36px]'>{data?.model}</h2>
                    <h3 className='font-bold text-[18px] my-5'>{data?.title}</h3>
                    <p className='font-bold text-[18px]'>{data?.brand}</p>
                    <p className='font-bold text-[18px] text-slate-700 my-5'>{data?.category}</p>
                    <p>{data?.description}</p>
                    <strong className='mt-[13px] block text-green-600'>{data?.price} $</strong>
                </div>
            </div>
            <Link className='block w-[200px] px-[24px] py-[13px] bg-blue-600 text-white text-[18px] font-bold mx-auto text-center rounded-[30px] mb-[30px]' href="/dashboard">Back</Link>
        </>
    )
}

export default SinglePage