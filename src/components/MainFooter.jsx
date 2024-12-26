import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";




function MainFooter() {
    const companyEmail = "karmpatel1203@example.com";
    const mailtoURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}`;
    window.open(mailtoURL, "_blank");

    return (
        <div className='font-poppins font-light tracking-wide bg-neutral-500 text-white'>
        <div className="flex flex-row justify-between px-8 py-4 items-center">
            <div>&#169; 2024 CraftEra</div>
            <div className="hover:cursor-pointer flex flex-col relative group"
            onClick = {() => window.open(mailtoURL, "_blank")}>Get in touch <span
            className=" rounded-full absolute left-0 inset-5  w-0 h-[1px] bg-neutral-100 transition-all duration-300 group-hover:w-full"
            ></span></div>
            <div className="flex flex-row gap-4 h-6 items-center"><FaXTwitter/><FaInstagram/></div>
        </div>
        </div>
    )
    }

export default MainFooter
