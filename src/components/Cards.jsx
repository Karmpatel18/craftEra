
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cards(props) {
  const navigate = useNavigate(); 

  const handleCardClick = () => {
    navigate('/buycart', { state: { cardTitle: props.cardTitle, productPrice: props.productPrice } });
  };

  return (
    <div
      className="font-poppins bg-neutral-100 hover:bg-neutral-300/50 rounded-sm mt-6 duration-500 hover:scale-[101%] hover:shadow-lg"
      onClick={handleCardClick} 
      style={{ cursor: 'pointer' }} 
    >
      <div className="h-72 w-64">
        <div className="p-2 h-[100%] w-[100%] object-cover">
          <img
            className="rounded-[2px] h-[100%] w-[100%] object-cover"
            src="https://images.pexels.com/photos/4272616/pexels-photo-4272616.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt={props.cardTitle}
          />
        </div>
      </div>
      <div className="ml-2">
        <div className="pt-2 font-normal tracking-normal text-sm text-neutral-600">{props.cardTitle}</div>
        <div className="font-medium text-md tracking-widest text-neutral-900">RS. {props.productPrice}</div>
      </div>
    </div>
  );
}

export default Cards;
