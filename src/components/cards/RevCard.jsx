
const RevCard = (Props) => {
    return (
        <div className='w-[320px] h-[125px] mx-1.5 my-1 block transition-all duration-300  border-[1px] hover:shadow-md rounded-sm border-neutral-200'>
            <div className="Info  w-fit  my-5.5 mb-0 flex gap-2 items-center justify-start  px-3.5">
            <h1 className='font-normal tracking-tighter'>{Props.title}</h1>
                <div className="InfoBtn">
                    <a href="#">
                         <svg width="15" height="15" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                            <path  d="M8.568 1.031A6.8 6.8 0 0 1 12.76 3.05a7.06 7.06 0 0 1 .46 9.39 6.85 6.85 0 0 1-8.58 1.74 7 7 0 0 1-3.12-3.5 7.12 7.12 0 0 1-.23-4.71 7 7 0 0 1 2.77-3.79 6.8 6.8 0 0 1 4.508-1.149zM9.04 13.88a5.89 5.89 0 0 0 3.41-2.07 6.07 6.07 0 0 0-.4-8.06 5.82 5.82 0 0 0-7.43-.74 6.06 6.06 0 0 0 .5 10.29 5.81 5.81 0 0 0 3.92.58zM7.375 6h1.25V5h-1.25v1zm1.25 1v4h-1.25V7h1.25z" />
                        </svg>
                    </a>
                </div>
            </div>
            <div className="amount flex justify-start mx-2.5  p-2">
                <h1 className='text-3xl font-medium tracking-tight'>{Props.sign}{Props.amount}</h1>
            </div>
        </div>
    )
}

export default RevCard

