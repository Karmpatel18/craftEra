
import RevCard from "../cards/RevCard"
function OrdersPage() {
  return (
    <div className="block h-full w-full bg-white">
      <div className="py-3 px-2  flex justify-between border-b-[1px]  border-neutral-200 ">
        <div className="text-xl  flex items-center px-2 font-medium tracking-tighter">Overview</div>
        <div className="calender flex  border-[1px] px-3 py-2 border-neutral-200 rounded-md gap-4 items-center  w-fit">
          <div className="img  cursor-pointer w-fit flex items-center justify-center ">
            <svg height="24" width="24" viewBox="0 0 24 24" fill="whit" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14H16C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12H8Z" fill="black" />
              <path d="M7 17C7 16.4477 7.44772 16 8 16H12C12.5523 16 13 16.4477 13 17C13 17.5523 12.5523 18 12 18H8C7.44772 18 7 17.5523 7 17Z" fill="black" />
              <path  d="M7 2C7.55228 2 8 2.44772 8 3V4H16V3C16 2.44772 16.4477 2 17 2C17.5523 2 18 2.44772 18 3V4.10002C20.2822 4.56329 22 6.58104 22 9V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V9C2 6.58104 3.71776 4.56329 6 4.10002V3C6 2.44772 6.44772 2 7 2ZM20 10H4V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V10Z" fill="black" />
            </svg>
          </div>
          <div className="Months">
            Feb-1 to Feb-28,2025
          </div>
         
        </div>
      </div>
      <div className="content w-full ">
      <h1 className="text-xl px-4 py-3 font-medium tracking-tighter">Performance</h1>
      <div className="RevCards w-full justify-evenly flex flex-wrap  py-2  ">
        <RevCard title="Total Sales" sign="$" amount="25,000"/>
        <RevCard title="Net Sales" sign="$" amount="10,000"/>
        <RevCard title="Total Tax" sign="$" amount="1500"/>
        <RevCard title="Variation Sold" amount="8"/>
        <RevCard title="Total Orders" amount="10"/>
        <RevCard title="Product Sold" amount="150"/>
      </div>
      </div>
    </div>
  )
}

export default OrdersPage
