import React from 'react'
import image from "./Images/work.jpg"
function History() {
  return (
    <div>
        <div className="grid lg:flex">
        <div className='w-full lg:w-1/2'>
                <img src={image} alt="" />
            </div>
            <div className='w-full lg:w-1/2 bg-[#1e2637]'>
                <div className='text-white p-6'>
                    <h1 className='text-3xl font-semibold'>ABOUT HMC</h1>
                    <p className='mt-3'>Et ex velit eu duis aute laborum tempor adipisicing tempor. Elit amet proident laboris labore voluptate proident voluptate dolor. Pariatur qui commodo sint nostrud fugiat labore labore ea proident nostrud. Ea nisi pariatur officia velit ea non enim dolor dolor adipisicing.Et ex velit eu duis aute laborum tempor adipisicing tempor. Elit amet proident laboris labore voluptate proident voluptate dolor. Pariatur qui commodo sint nostrud fugiat labore labore ea proident nostrud.</p>
                    <p className='mt-3'>Et ex velit eu duis aute laborum tempor adipisicing tempor. Elit amet proident laboris labore voluptate proident voluptate dolor. Pariatur qui commodo sint nostrud fugiat labore labore ea proident nostrud. Ea nisi pariatur officia velit ea non enim dolor dolor adipisicing.Et ex velit eu duis aute laborum tempor adipisicing tempor. Elit amet proident laboris labore voluptate proident voluptate dolor. Pariatur qui commodo sint nostrud fugiat labore labore ea proident nostrud.</p>
                    <button className="mt-2  text-black bg-[#c1d52e] font-semibold px-6 py-2 justify-center">LEARN MORE</button>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default History