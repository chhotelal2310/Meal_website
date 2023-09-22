import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <h3 className='text-orange-500  font-bold text-2xl text-center'>Quick Delivery App</h3>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[550px] mx-auto my-4' src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp' alt=''/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>Get The App</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience on-demand</h1>
                <p>
                Certainly, here's a simplified explanation of a meal plan:

A meal plan is a structured approach to organizing your daily food intake. It typically consists of:

Breakfast:The first meal of the day, providing energy and nutrients to kickstart your morning.

Lunch:A midday meal, often balanced with protein, vegetables, and carbohydrates to sustain you through the afternoon.

Dinner: The evening meal, usually well-rounded with a protein source, vegetables, and grains for a satisfying end to the day.

Snacks: Small, nutritious bites between meals to curb hunger and maintain energy levels.

Each day's meals are carefully selected to meet dietary goals, such as weight management or balanced nutrition, while considering personal preferences and dietary restrictions. Portion sizes and food choices can vary based on individual needs. Consulting with a dietitian or healthcare professional can help create a customized plan.
                </p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'> Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Delivery