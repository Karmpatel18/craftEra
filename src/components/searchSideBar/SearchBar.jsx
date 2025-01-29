

function SearchBar() {
  return (
    <div className="flex  w-full flex-col space-y-4">
      <div
        className="flex w-full gap-1  rounded-md p-[4px] border-[1px] border-neutral-200">
        <select className="block w-full px-3 text-sm font-medium tracking-tighter text-neutral-900 py-2 min-w-sm outline-none ">
          <option value="option1">ALL CATEGORIES</option>
          <option value="option2">PAINTINGS</option>
          <option value="option3">SCULPTURES</option>
          <option value="option4">SCULPTURES</option>
          <option value="option5">SCULPTURES</option>
          <option value="option6">SCULPTURES</option>
        </select>
        <div className="border-l-[1px] my-[10px] mx-2 border-neutral-200"></div>
        <input type="search" placeholder="search" className="placeholder:tracking-tighter placeholder:text-neutral-900 w-full outline-none   px-1 py-2   " />
        <div className="flex py-2 px-3  bg-neutral-900 text-neutral-50 rounded-[4px] items-center justify-center">Search</div>
      </div>

    </div>
  )
}

export default SearchBar
