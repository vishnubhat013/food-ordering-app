import { FaPhoneAlt } from "react-icons/fa";

export default function Contact(){
  return(
    <div className="flex flex-col gap-5 w-full justify-center items-center min-h-screen">
     <h1 className="text-orange-500 text-5xl font-semibold">
      Contact Us
    </h1>
    <div className="flex items-center space-x-4 text-xl">
        <span className="text-orange-500"><FaPhoneAlt size={20}/></span>
        <span>
        +91 1234567890</span>
      </div>
    </div>
  )
}
