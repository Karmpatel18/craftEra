import { PiShoppingCartLight } from "react-icons/pi";
import { useParams, useNavigate } from "react-router-dom";
import { useState , useEffect } from 'react'
import { HiMiniArrowLeft } from "react-icons/hi2";

const BuyCart = () => {
  const images = [
    "https://images.pexels.com/photos/2964117/pexels-photo-2964117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/3778180/pexels-photo-3778180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/30248649/pexels-photo-30248649/free-photo-of-industrial-art-space-with-abstract-paintings.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];
  const [heroImage , setHeroImage] = useState(images[0]);
  
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  // const [heroImage, setHeroImage] = useState(images[0]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://backend-practice-production-7f56.up.railway.app/api/v1/product/${id}`);
        const data = await response.json();

        if (response.ok) {
          setProduct(data);
        } else {
          setError(data.error);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("Failed to load product details.");
      }
    };
    fetchProduct();
  }, [id]);

  if (error) {
    return (
      <div className="p-4 mt-28">
        <p className="text-red-500">{error}</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Back to Products
        </button>
      </div>
    );
  }
  if (!product) {
    return <div className="p-4 mt-28">Loading...</div>;
  }

  
  
  


  return (
    <div className="mt-28">
    <button
    onClick={() => navigate("/")}
    className="flex items-center gap-1 px-3 py-1 ml-32 border-[1px] border-neutral-200 rounded-md text-neutral-900  "
    ><HiMiniArrowLeft />back</button>
    <div className=' px-24 font-poppins flex flex-row w-full bg-white h-[680px]'>
      {/* left section */}
      <div className='flex-1 flex-col flex '>
        <div className=' h-[360px] w-auto m-8 rounded-xl  '>
          <img className='h-[100%] w-[100%] object-cover rounded-sm' src={heroImage}
            loading="lazy"
            alt="Hero" />
        </div>
        <div className='flex w-auto h-auto m-8 mt-0 gap-4 opacity-85'>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`w-24 h-16 object-cover cursor-pointer rounded-sm border-2 transition-transform transform  ${image === heroImage ? "border-neutral-950" : "border-transparent"}`}
              onClick={() => setHeroImage(image)}
            />
          ))}
        </div>
      </div>
      {/* right section */}
      <div className='flex-1 m-8'>
        <div className='flex flex-col font-medium tracking-tighter text-3xl  '>
        {product.name}
        </div>
        <div className="mt-4 text-sm text-neutral-600 font-normal">
        {product.description}
        </div>
        <div className="border-[1px] border-neutral-200  my-2 rounded-md mt-6 ">
        <div className="flex flex-row mx-4 my-2 p-1 justify-between">
          <div className=" font-normal text-sm ">
          Product Price:
          </div>
          <div className="font-medium text-sm">
          {product.price}
          </div>

        </div>
        <div className="border-t-[1px] border-neutral-200 mx-4 flex"></div>
        <div className="flex flex-row mx-4 my-2  p-1 justify-between">
          <div className=" font-normal text-sm ">
          Logistics:
          </div>
          <div className="font-medium text-sm">
            N/A
          </div>

        </div>
        <div className="border-t-[1px] border-neutral-200 mx-4 flex"></div>
        <div className="flex flex-row mx-4 my-2  p-1 justify-between">
          <div className=" font-normal text-sm ">
          GST (18%):
          </div>
          <div className="font-medium text-sm">
          $1.44
          </div>

        </div>
        


        <div className="border-b-[1px] border-neutral-200  mx-4 "></div>
        <div className="flex flex-row mx-4 my-2  p-1 justify-between">
          <div className=" font-medium text-lg tracking-tight ">
          Final Price :
          </div>
          <div className="font-medium text-xl" >
          $9.44
          </div>

        </div>
        </div>
        
        <div className="cursor-pointer text-center w-full border-[1px] border-neutral-200 hover:bg-neutral-100 py-3 rounded-md text-md font-medium text-neutral-950">
          Pay with Razorpay
        </div>

        <div className="flex gap-2  mt-2">
          <div className=" cursor-pointer bg-neutral-950 hover:bg-neutral-700  w-full py-3 rounded-md text-white text-md font-medium text-center">Buy now</div>
          <div className='flex border-[1px] border-neutral-200 font-medium text-md bg-white  rounded-md cursor-pointer w-[56px] h-[50px] items-center justify-center hover:bg-pink-500  hover:text-white duration-150 ' ><PiShoppingCartLight/></div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default BuyCart
