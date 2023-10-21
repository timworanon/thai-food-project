import React, { useState } from 'react'
import { data } from '../data/data.js'

const Food = () => {
    //console.log(data)
    const [foods ,setFoods] = useState(data)

    //Filter food type
    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category
            })
        )
    }

    //Fillter by price
    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price
            })
        )
    }


  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Item</h1>

        {/* Fillter row */}
        <div className='flex flex-col lg:flex-row justify-between'>
            {/* Fillter type */}
            <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={() => setFoods(data)} className='m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white '>All</button>
                    <button onClick={() => filterType('stir-fried')} className='m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white '>Stir-fried</button>
                    <button onClick={() => filterType('soup')} className='m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white '>Soup</button>
                    <button onClick={() => filterType('salad')} className='m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white '>Salad</button>
                    <button onClick={() => filterType('dessert')} className='m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white '>Dessert</button>
                </div>
                    
            </div>
            
            {/* Fillter price */}
            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between max-w-[300px] w-full'> 
                    <button onClick={() => filterPrice('฿')} className='m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white '>฿</button>
                    <button onClick={() => filterPrice('฿฿')} className='m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white '>฿฿</button>
                    <button onClick={() => filterPrice('฿฿฿')} className='m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white '>฿฿฿</button>
                </div>
            </div>
        </div>

        {/* Display foods */}
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4'>
            {foods.map((item, index) => (
                <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                    <img src={item.image} alt={item.name}
                    className='w-full h-[200px] object-cover rounded-t-lg'/>
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold text-orange-600'>{item.name}</p>
                        <p>
                            <span className='bg-yellow-500 text-white px-2 py-1 rounded-full'>{item.price}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Food