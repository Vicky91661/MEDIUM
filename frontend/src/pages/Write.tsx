import { useState } from 'react';
import ReactQuill from 'react-quill';
import "./WriteStyle.css"
import Preview from './Preview';
const Write = () => {
    const [value,setValue] = useState("")
  return (
    <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto py-[3rem] font-main_font ">
        <input type="text" placeholder="Title" className="text-5xl outline-none w-full font-medium bg-red-400 py-2 px-2" />
        <ReactQuill theme="bubble" value={value} 
        onChange={setValue} 
        placeholder='Tell Your Story....' 
        className='my-5 write'/>
        
        <Preview/>
        
    </div>
  )
}

export default Write