import { CiSearch } from "react-icons/ci";

function SearchBar() {
  return (
    <div className="flex  w-full ">
      <div
        className="flex w-full focus-within:outline-1 outline-offset-2 rounded-md focus-within:outline-neutral-900">
        <input type="search" placeholder="search" className="w-full outline-none border-[1px] border-r-0 border-neutral-200  px-3 py-2 rounded-r-none rounded-md bg-neutral-100 " />
        <div className="flex py-2 px-3 bg-neutral-900 text-neutral-50 rounded-r-md items-center justify-center"><CiSearch size={20}/></div>
      </div>
      
    </div>
  )
}

export default SearchBar
