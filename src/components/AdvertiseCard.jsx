
// function AdvertiseCard() {
//   return (
//     <div className='p-8'>
//       <div className='rounded-sm w-fit h-[360px] object-cover overflow-hidden'>
//         <img src='https://images.pexels.com/photos/297494/pexels-photo-297494.jpeg?auto=compress&cs=tinysrgb&w=800'/>
//       </div>
//     </div>
//   )
// }

// export default AdvertiseCard

import { useState, useEffect } from "react";

const images = [
  {
    url: "https://images.pexels.com/photos/297494/pexels-photo-297494.jpeg?auto=compress&cs=tinysrgb&w=800",
    
  },
  {
    url: "https://images.pexels.com/photos/2372978/pexels-photo-2372978.jpeg?auto=compress&cs=tinysrgb&w=800",
    
  },
  {
    url: "https://images.pexels.com/photos/1604991/pexels-photo-1604991.jpeg?auto=compress&cs=tinysrgb&w=800",
  
  },
  {
    url: "https://images.pexels.com/photos/2372982/pexels-photo-2372982.jpeg?auto=compress&cs=tinysrgb&w=800",
   
  },
];

export default function AdvertiseCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Automatically change slide every 3 seconds
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer); // Clear timer on component unmount
  }, []);

  return (
    <div className="p-8">
      <div className=" w-fit  h-full overflow-hidden rounded-sm">
        <div
          className="relative flex h-min transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-fit h-full"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-[736px] object-cover"
              />
              
              
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
}
