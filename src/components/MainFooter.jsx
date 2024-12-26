
function MainFooter() {
  return (
    <div className='font-poppins font-light tracking-wide bg-neutral-500 text-white'>
      <div className="flex flex-row justify-between px-8 py-4">
        <div>&#169; 2024 CraftEra</div>
        <div className="hover:cursor-pointer flex flex-col relative group">Get in touch <span
          className=" rounded-full absolute left-0 inset-5  w-0 h-[1px] bg-neutral-100 transition-all duration-300 group-hover:w-full"
        ></span></div>
        <div>privacy policy</div>
      </div>
    </div>
  )
}

export default MainFooter
