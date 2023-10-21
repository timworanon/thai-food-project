import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-8 grid md:grid-cols-3 gap-6'>
        {/* Cards 1 */}
        <div className=' rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-4 pt-4'>Fresh Cooking</p>
                <p className='px-4 '>Daily Serve</p>
                <button className='border-white bg-white text-black font-bold mx-4 absolute bottom-4 hover:bg-orange-600 hover:border-orange-600 hover:text-white'>Order Now!</button>
            </div>
            <img 
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://images.pexels.com/photos/5030168/pexels-photo-5030168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
        </div>
        {/* Cards 2 */}
        <div className=' rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-4 pt-4'>Thai Tasty</p>
                <p className='px-4 '>Select Your Spicy</p>
                <button className='border-white bg-white text-black font-bold mx-4 absolute bottom-4  hover:bg-orange-600 hover:border-orange-600 hover:text-white'>Order Now!</button>
            </div>
            <img 
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src="https://images.pexels.com/photos/12100417/pexels-photo-12100417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
        </div>
        {/* Cards 3 */}
        <div className=' rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-4 pt-4'>Best of Thai</p>
                <p className='px-4 '>NO.1</p>
                <button className='border-white bg-white text-black font-bold mx-4 absolute bottom-4  hover:bg-orange-600 hover:border-orange-600 hover:text-white'>Order Now!</button>
            </div>
            <img 
            className='max-h-[160px] md:max-h-[200px] w-full h-full object-cover rounded-xl'
            src="https://hot-thai-kitchen.com/wp-content/uploads/2021/10/Untitled-design-5.jpg" alt="/" />
        </div>
    </div>
  )
}

export default HeadlineCards