import { MdLocationPin } from "react-icons/md";

import { useState } from "react";


export default function RevenuePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "Karm patel",
    email: "karmpatel.dev@gmail.com",
    address: "a 502 asfsafslkfh ss lksjf sljfk sf ",
    phone: "+918372948"
  });


  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

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
                <MdLocationPin size={14} />
                <div className="pr-1">Delhi</div>
              </div>

            </div>
          </div>
        </div>
        <div className="flex  border-t-[1px] border-neutral-200 w-full mt-4 ">

          <div className="flex w-full">


            <div className="flex flex-col gap-2 w-full mt-4 mx-4  ">
              {Object.keys(userData).map((key) => (
                <div key={key}>
                  <label className="text-sm cursor-default font-normal tracking-tighter text-neutral-900">{key}</label>
                  {isEditing ? (
                  <input 
                  type="text" 
                  
                  
                  name={key}
                  value={userData[key]}
                  onChange={handleChange}
                  className="border-[1px] border-neutral-200 placeholder:text-sm placeholder:text-neutral-500 px-3 py-2 w-full rounded-md bg-white " />
              ) : (<div className="border-[1px] border-neutral-200 placeholder:text-sm placeholder:text-neutral-500 px-3 py-2 w-full rounded-md bg-white">{userData[key]}</div>

              )}
                </div>
              ))}
              <button
                onClick={() => setIsEditing(!isEditing) }
                className="mt-4 max-w-36 px-3 cursor-pointer py-2 bg-neutral-900 text-neutral-50 rounded-md mb-2 tracking-tighter duration-300 transition-all"
                >{isEditing ? "save" : "Update details"}
              </button>
              </div>
              



          </div>

        </div>
      </div>
    </>
  )
}


