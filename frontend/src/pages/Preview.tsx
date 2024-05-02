import React from 'react'
import {LiaTimesSolid} from "react-icons/lia"
function Preview() {
  return (
    <div className=' absolute inset-0 bg-white z-30 px-10'>
        <div className=' w-[95%] md:w-[80%] lg:w-[80%] mx-auto size my-[2rem]'>
            <span className=' absolute right-[1rem] md:right-[5rem] top-[3rem] text-xl lg:text-4xl cursor-pointer'>
                <LiaTimesSolid/>
            </span>
            <div className='flex flex-col md:flex-row gap-10 mt-[8rem]'>
                <div className='flex-[1]'>
                    <h1>Story Preview</h1>
                    <div>
                        Add Image
                    </div>
                    <input type="file"  />

        
                </div>
                <div className='flex-[1]'>
                    right
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Preview