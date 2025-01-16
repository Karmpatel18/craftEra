import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from 'react'





const BuyCart = () => {

  const images = [
    "https://images.pexels.com/photos/5788376/pexels-photo-5788376.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3817675/pexels-photo-3817675.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/20184610/pexels-photo-20184610/free-photo-of-flowers-in-vase.jpeg?auto=compress&cs=tinysrgb&w=800",
  ];

  const [heroImage, setHeroImage] = useState(images[0]);


  return (
    <div className='mt-28 font-poppins flex flex-row w-[100%] bg-neutral-900/50 h-[100%] rounded-2xl'>
      {/* left section */}
      <div className='flex-1 flex-col flex justify-between'>
        <div className=' h-[360px] w-auto m-8 rounded-xl  '>
          <img className='h-[100%] w-[100%] object-cover rounded-xl' src={heroImage}
            loading="lazy"
            alt="Hero" />
        </div>
        <div className='flex w-auto h-auto m-8 mt-0 justify-between opacity-75'>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`w-24 h-16 object-cover cursor-pointer rounded-md border-2 transition-transform transform hover:scale-110 ${image === heroImage ? "border-blue-500" : "border-transparent"}`}
              onClick={() => setHeroImage(image)}
            />
          ))}
        </div>
      </div>
      {/* right section */}
      <div className='flex-1 p-2'>
        <div className='flex flex-col font-semibold text-4xl m-8 '>
          Painting title
        </div>
        <div className="mx-8">
          this painting is an art master piece by leo nardo da vinchi he was a great fucking bastar amnd gneeiworuwr
        </div>
        <div className="border-b-2 border-slate-200 mx-8 my-2 rounded-lg"></div>
        <div className="flex flex-row mx-8 p-1 justify-between">
          <div className=" font-normal text-lg ">
            Price :
          </div>
          <div className="font-normal text-lg">
            hi
          </div>

        </div>
        <div className="flex flex-row mx-8 p-1 justify-between">
          <div className=" font-normal text-lg ">
            Price :
          </div>
          <div className="font-normal text-lg">
            there
          </div>

        </div>
        <div className="flex flex-row mx-8 p-1 justify-between">
          <div className=" font-normal text-lg ">
            Price :
          </div>
          <div className="font-normal text-lg">
            hello
          </div>

        </div>


        <div className="border-b-2 border-slate-200 mx-8 my-2 rounded-lg"></div>
        <div className="flex flex-row mx-8 p-2 justify-between">
          <div className=" font-normal text-xl ">
            Total cost :
          </div>
          <div className="font-normal text-xl" >
            cost
          </div>

        </div>
        <div className="mx-8 font-semibold text-xl mt-2">Payment option</div>
        <div className="mx-8 mt-4 p-1">
          <RadioGroup defaultValue="option-one" className="space-y-2 ">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">UPI payment</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">cash on delivery</Label>
            </div>
          </RadioGroup>

        </div>

        <div className="flex flex-row space-x-4 mx-8 mt-6">
          <button className="bg-gray-800 hover:bg-gray-900 duration-500 w-full p-2 rounded-lg text-white text-xl font-medium">Buy now</button>
          <div className='font-light text-4xl bg-white px-4 py-2 rounded-lg cursor-pointer  hover:bg-pink-500  hover:text-white duration-150' >+</div>
        </div>
      </div>
    </div>
  )
}

export default BuyCart
