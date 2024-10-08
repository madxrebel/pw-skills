"use client"

import Product from '@/components/Product'
import { products } from '@/constants'
import React, { useState } from 'react'

const Products = () => {

    

    

    return (
        <section>
            <div className='h-auto w-100 flex flex-wrap flex-col items-center text-center p-10'>
                <div className='w-full h-auto flex flex-wrap flex-col items-center'>
                    <p className='text-indigo-800 font-bold text-3xl md:text-4xl text-center'>Our Products</p>
                    <div className='w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12'></div>
                </div>
                <div className='w-[90%] flex flex-wrap justify-around'>
                    {
                        products.map(product => (
                            <div key={product.title}>
                                <Product product={product} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Products


