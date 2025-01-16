import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BiSolidMessageSquareDetail } from "react-icons/bi";




const MainFooter = () => {
    // const companyEmail = "karmpatel1203@example.com";
    // const mailtoURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}`;
    // window.open(mailtoURL, "_blank");

    // Replace the email address below with your desired recipient email
    const sendEmail = () => {
        const email = "craftera.inc@gmail.com";
        const subject = "Hello!";
        const body = "I would like to get in touch with your team.";

        // Construct the mailto link
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open the mailto link
        window.location.href = mailtoLink;
    };


    return (
        <div className='font-poppins font-light tracking-wide bg-neutral-800 text-white'>
            <div className="flex flex-row justify-between px-8 py-5 items-center ">
                <div className="pointer-events-none">&#169; 2024 CraftEra</div>

                {/* get in touch section */}
                <div className="hover:cursor-pointer flex flex-row items-center gap-2 relative group"
                    onClick={sendEmail}>Get in touch <BiSolidMessageSquareDetail /> <span
                        className=" rounded-full absolute left-0 inset-5  w-0 h-[1.5px] bg-neutral-100 transition-all duration-300 group-hover:w-full"
                    ></span></div>



                {/* social media section */}
                <div className="flex text-xl flex-row gap-4 h-6 items-center">
                    <a href="link to x account" target="_blank" rel="noopener noreferrer">
                        <div className="hover:shadow-xl hover:cursor-pointer"><FaXTwitter /></div>
                    </a>
                    <a href="link to x account" target="_blank" rel="noopener noreferrer">
                        <div className="hover:shadow-xl hover:cursor-pointer"><FaInstagram /></div>
                    </a>
                </div>
            </div>
        </div>
    )
}


export default MainFooter
