import React from 'react'

function BlogCard() {


    const str = `📱 ByteDance, TikTok’s owners, generated around $120 billion in revenue last year, 89% of the revenue Meta generated in the same year.
    Also today: the truth about virality, pushing Medium to its limits, and how to be the type of person everyone wants to know
    By Harris Sockel
    Last week, nearly four years after it began winding its way through Congress, President Biden signed a bill to ban TikTok in the U.S. unless its owner,
    the Chinese tech company ByteDance, sells the app. (Ironically, the Biden campaign joined TikTok in February.)`


  return (
    <div className='flex bg-slate-500 w-[40vw] justify-center items-center gap-10 p-4 py-10 rounded-md font-main_font'>
        <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
                <img className='rounded-full  cursor-pointer' src="https://miro.medium.com/v2/resize:fill:40:40/1*Pym1Q3ZATveDLVE_PQwqwQ.jpeg" alt="" />
                <h3 className='text-lg cursor-pointer'>The Daily Edition</h3>
                <h3 className='text-lg '>In The Medium Blog</h3>
            </div>
            <div>
                <h1 className='text-2xl font-semibold mt-2 cursor-pointer'>Where the TikTok ban goes from here</h1>
            </div>
            <div>
                <h1 className='text-lg cursor-pointer'>{str.substring(0,100)}{str.substring(100,200)}....</h1>
               
            </div>
        </div>
        <div>
            <img className='w-56' src="https://miro.medium.com/v2/resize:fill:112:112/1*ssGEj8AGUJloXQe21o4OgQ.png" alt="" />
        </div>
    </div>
  )
}

export default BlogCard