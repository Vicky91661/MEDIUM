import { IoIosSearch } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";
import { PiNotePencilThin } from "react-icons/pi";
import medium_log from "./../assets/medium_logo.svg"
function HeaderWithAuth() {
  return (
    <div className='px-10 py-2 flex justify-between'>
        <div className="flex items-center gap-5 ">
            <img className='h-[60px]' src={medium_log} alt="" />
            <div className='flex items-center gap-2'>
                <IoIosSearch className='text-2xl'/>
                <input type="text" className='bg-[#F9F9F9] rounded-full px-2 py-1 outline-none focus:ring-[#ffc117d6] 
                focus:ring-2 focus:ring-offset-1' placeholder="Search"/>
            </div>
            
        </div>
        <div className='flex items-center gap-12'>
            <div className='flex items-center gap-2 text-xl font-'>
                <PiNotePencilThin className='text-3xl'/>
                <p>Write</p>
            </div>
            <div className='text-3xl'><CiBellOn /></div>
            <div>
                <img className='rounded-full h-10' src="https://miro.medium.com/v2/resize:fill:64:64/0*9h8hzlS8ofZshdRK" alt="" />
            </div>
        </div>
    </div>
  )
}

export default HeaderWithAuth