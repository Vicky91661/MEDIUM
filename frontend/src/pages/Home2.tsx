import React, { useEffect, useState } from 'react'

function Home2() {
    const [scrolled,setScrolled] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
           if(window.scrollY>70){
            setScrolled(true)
           }else{
            setScrolled(false)
           } 
        })

    },[])
  return (
    <div >
        <div className='max-w-[100vw]'> 
            <div className={`flex h-[60vh] border-b-black border-b-2 items-center pl-32 ${scrolled?"bg-white":"bg-[#ffc017]"} transition-all delay-200 ease-in`}>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-[120px] font-header_font font-bold'>Stay Curious.</h1>
                    <p className='text-3xl font-main_font font-medium tracking-tight'>Discover stories, thinking, and expertise from writers <br /> on any topic.</p>
                    <div><button className={` bg-black px-16  py-3 rounded-full text-white text-2xl ${scrolled?" bg-green-700 ":"bg-black"} transition-all delay-200 ease-in`}>Start reading</button></div>
                </div>            
            </div>
            <div className='h-[100vh]'> dfsjio</div>
            <div></div>
        </div>
    </div>
  )
}

export default Home2