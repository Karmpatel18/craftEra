import { MdLocationPin } from "react-icons/md";




export default function RevenuePage() {
  return (
    <>
      <div className="h-full w-fit  flex flex-col p-4 ">
        
        <div className="userOverview  h-auto gap-15 w-fit flex items-center mx-4">

          <div className=" w-[198px]  rounded-full overflow-hidden flex items-center justify-center">
            <img src="/assets/images.jpeg" alt="" />
          </div>
          <div className="  w-fit flex flex-col gap-2  ">

            <div className=" tracking-tighter   flex text-3xl font-medium">
              <h2>leonardo da vinci</h2>
            </div>
            <div className="text-sm  font-light tracking-tight">
              member since 572 to 505 years ago
            </div>
            <div className="flex  ">
              <ul className="flex gap-3">
                <li className=" text-[10px] text-neutral-700 bg-neutral-200 rounded-full items-center px-2 py-1">Portraits</li>
                <li className=" text-[10px] text-neutral-700 bg-neutral-200 rounded-full items-center px-2 py-1">Religious Paintings</li>
                <li className=" text-[10px] text-neutral-700 bg-neutral-200 rounded-full items-center px-2 py-1">Mythological & Allegorical Works</li>
              </ul>
            </div>
            <div className="p-1 text-md font-normal tracking-tighter text-neutral-600 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti unde delectus libero reprehenderit aut, commodi quae error
            </div>

            <div className=" flex items-center ">
              <div className=" px-2 py-1 bg-neutral-900 text-sm text-neutral-50 flex gap-1 rounded-full font-light  items-center">
                <MdLocationPin size={14}/>
               <div className="pr-1">Delhi</div>
              </div>
             
            </div>
          </div>
        </div>
        <div className="flex  border-t-[1px] border-neutral-200 w-full mt-4 ">
          
          <div className="flex w-full">
           
              
              <div className="flex flex-col w-full mt-4 mx-4 ">
                <label className="text-sm font-normal tracking-tighter text-neutral-900">Name</label>
                <input type="text" placeholder="name" className="border-[1px] border-neutral-200 placeholder:text-sm placeholder:text-neutral-500 px-3 py-2 w-full rounded-md bg-white" />
              </div>
            
            

          </div>

        </div>
      </div>
    </>
  )
}


