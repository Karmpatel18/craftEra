
export default function Profile() {
  return (
    <>
      <div className="profileOverview h-full w-full  block items-start overflow-y-scroll">
        <div className="Info mt-3 text-3xl flex justify-center font-bold mb-1.5">
          <h1>User Information</h1>
        </div>
        <div className="userOverview  h-auto gap-15 w-full flex items-start">

          <div className="userPic mt-23 ml-20 w-[24%]  rounded-full overflow-hidden flex items-center justify-center">
            <img src="public/assets/images.jpeg" alt="" />
          </div>
          <div className="userDisplay mt-1.5 w-[76%]  border-amber-900">

            <div className="name ml-5.5 mt-5 flex text-3xl font-medium">
              <h2>leonardo da vinci</h2>
            </div>
            <div className="history ml-6 font-extralight">
              member since 572 to 505 years ago
            </div>
            <div className="expertisein ml-6.5 mt-2">
              <ul className="flex gap-3">
                <li className="border rounded-md items-center p-1">Portraits</li>
                <li className="border rounded-md items-center p-1">Religious Paintings</li>
                <li className="border rounded-md items-center p-1">Mythological & Allegorical Works</li>
              </ul>
            </div>
            <div className="description ml-5.5 mt-2 p-1 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti unde delectus libero reprehenderit aut, commodi quae error qui accusamus maiores? Voluptatum amet saepe labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam accusamus illo corporis assumenda in consectetur perspiciatis natus dicta tempora dolorem dolore officia necessitatibus modi eligendi exercitationem voluptates, quo distinctio iusto similique voluptatibus enim ullam. Expedita optio laborum sequi nobis ullam rem repellat ea velit ipsam dolores, magni reprehenderit. Sed nihil quisquam eveniet eos quibusdam quam delectus totam saepe, maiores pariatur. Sunt eligendi quia voluptas cum tempore aspernatur iste. Saepe vero et hic? Blanditiis iste dicta, minus dolores nesciunt tenetur beatae iusto enim. Ipsum deserunt amet in temporibus, sint non.
            </div>

            <div className="bottom flex items-center justify-between">
              <div className="location ml-3.5 p-2 flex text-1xl font-medium w-fit items-center">
                <img className="h-7.5" src="public/assets/location.svg" alt="" />
                <h1>swarg</h1>
              </div>
              <div className="Editbtn ">
                <button className="mr-3 border-2 font-light w-15 rounded-md hover:bg-slate-300 cursor-pointer
                ">Edit</button>
              </div>
            </div>
          </div>
        </div>
        <div className="profileUpdate mt-10 border-t-[1px] border-neutral-200 w-full block ">
          <div className="info Info mt-3 text-3xl flex justify-center font-bold mb-1.5">
            <h1>Update Information</h1>
          </div>
          <div className="toUpdate w-full">
            <div className="m-2 flex">
              <div className="tag pl-8 pr-9 ">
                Name:-
              </div>
              <div className="input border">
                <input type="text" size={112} />
              </div>
            </div>




            //extra 
            
            <div className="m-2 flex">
              <div className="tag pl-8 pr-9 ">
                Name:-
              </div>
              <div className="input border">
                <input type="text" size={112} />
              </div>
            </div><div className="m-2 flex">
              <div className="tag pl-8 pr-9 ">
                Name:-
              </div>
              <div className="input border">
                <input type="text" size={112} />
              </div>
            </div><div className="m-2 flex">
              <div className="tag pl-8 pr-9 ">
                Name:-
              </div>
              <div className="input border">
                <input type="text" size={112} />
              </div>
            </div><div className="m-2 flex">
              <div className="tag pl-8 pr-9 ">
                Name:-
              </div>
              <div className="input border">
                <input type="text" size={112} />
              </div>
            </div><div className="m-2 flex">
              <div className="tag pl-8 pr-9 ">
                Name:-
              </div>
              <div className="input border">
                <input type="text" size={112} />
              </div>
            </div><div className="m-2 flex">
              <div className="tag pl-8 pr-9 ">
                Name:-
              </div>
              <div className="input border">
                <input type="text" size={112} />
              </div>
            </div><div className="m-2 flex">
              <div className="tag pl-8 pr-9 ">
                Name:-
              </div>
              <div className="input border">
                <input type="text" size={112} />
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}


