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
        <div className='font-poppins  flex flex-col border-t-[1px] border-neutral-200 bg-neutral-50 text-neutral-800'>
            <div className="flex flex-row justify-between px-24 py-6  ">
                

                {/* get in touch section */}
                <div className="flex flex-col">
                <div className="text-2xl font-semibold">Contact Us</div>
                <div className="text-sm font-normal mt-2 text-neutral-500">Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.</div>
                <div className=" hover:cursor-pointer flex  flex-row items-center gap-2 relative group text-sm"
                    onClick={sendEmail}>drop your message here <BiSolidMessageSquareDetail /> <span
                        className="flex rounded-full absolute left-0 inset-5  w-0 h-[1.5px] bg-neutral-800 transition-all duration-300 group-hover:w-[192px]"
                    ></span></div>
                    </div>



                {/* social media section */}
                <div className="flex-col">
                <div className="text-2xl font-semibold">Follow Us</div>
                <div className="text-sm font-normal mt-2 text-neutral-500">Stay connected with us on social media</div>
                <div className="flex text-xl flex-row gap-4 h-8 items-center mt-4">
                    <a href="link to x account" target="_blank" rel="noopener noreferrer">
                        <div className="flex p-2  hover:cursor-pointer h-8 items-center justify-center w-8 rounded-full bg-white hover:bg-neutral-100 duration-100 border-[1px] border-neutral-200"><FaXTwitter /></div>
                    </a>
                    <a href="link to x account" target="_blank" rel="noopener noreferrer">
                        <div className="flex p-2  hover:cursor-pointer h-8 items-center justify-center w-8 rounded-full bg-white hover:bg-neutral-100 duration-100 border-[1px] border-neutral-200"><FaInstagram /></div>
                    </a>
                </div>
                </div>
            </div>
            <div className="flex  m-8 border-t-[1px] border-neutral-200"></div>
            <div className="pointer-events-none text-neutral-500 text-sm text-center mb-8">&#169; 2024 Craftera. All rights reserved.</div>
        </div>
    )
}


export default MainFooter
