const artAndCrafts = [
  {
    image: "https://images.pexels.com/photos/1579708/pexels-photo-1579708.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    image: "https://images.pexels.com/photos/297494/pexels-photo-297494.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    image: "https://images.pexels.com/photos/2372978/pexels-photo-2372978.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    image: "https://images.pexels.com/photos/69903/pexels-photo-69903.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    image: "https://images.pexels.com/photos/3778180/pexels-photo-3778180.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    image: "https://images.pexels.com/photos/4612227/pexels-photo-4612227.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function HeroScroll() {
  return (
    <div className="my-10 mx-10">
      <div className="max-w-fit mx-auto">
        <div className="relative rounded-xl overflow-hidden group">
          {/* Left Blur */}
          
            {/* <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-neutral-200 via-neutral-50/80 to-transparent pointer-events-none z-10"></div> */}
          
          {/* Right Blur */}
          {/* <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10"></div> */}

          <div className="relative overflow-hidden cursor-pointer">
            <div className="flex animate-marquee">
              {[...artAndCrafts, ...artAndCrafts].map((item, index) => (
                <div key={index} className="flex-none w-80 mx-4">
                  <div className="bg-neutral-50 rounded-xl overflow-hidden transform transition-transform">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-52 w-full object-cover rounded-xl"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
