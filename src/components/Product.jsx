import Image from 'next/image'
import React from 'react'
import { useState } from 'react';

const Product = ({ product }) => {

    const [isProductClicked, setIsProductClicked] = useState(false);

    return (
        <div 
            className=
            {
                `w-64 flex flex-col items-center mb-12 
                ${
                    isProductClicked ? 'border-white border-2' : 'border-transparent'
                }
                rounded-xl p-2`
            }  
            onClick={() => setIsProductClicked(!isProductClicked)}
        >
            <Image 
                    src={product.imgURL}
            />
            <p className='text-3xl font-bold text-white'>{product.title}</p>
            <p className='text-gray-500'>{product.desc}</p>
        </div>
  )
}

export default Product



{/* <div 
key={product.title}
onClick={() => {
    setIsProductClicked(!isProductClicked)
}}
className={`w-64 flex flex-col items-center mb-12 
${
    isProductClicked ? 'border-white border-2' : 'border-transparent'
}
rounded-xl p-2`}>
<Image src={product.imgURL} alt=''/>
<p className='text-3xl font-bold text-white'>{product.title}</p>
<p className='text-gray-500'>{product.desc}</p>
</div> */}
