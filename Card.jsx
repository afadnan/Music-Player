import React from "react";
function Card({data,handleClick,index}) {

    const {image,name,artist,added} = data;



  return (
    <div className="w-60 rounded-md bg-zinc-100 p-4 flex gap-4 relative m-10 ">
      <div className="w-20 h-20 bg-orange-600 rounded-md ">
        <img className="w-full h-full coverfit" src={image} alt="" />
      </div>
      <div className="">
        <h3 className="text-xl leading-none font-semibold mb-3">{name}</h3>
        <h6 className="text-sm"> {artist} </h6>
        <button onClick={ ()=>handleClick(index)  }
          className={`px-3 whitespace-nowrap py-1 ${added == false ? "bg-orange-600":"bg-teal-600"} text-xs text-white rounded-full translate-y-9 -translate-x-10 `}
        >
          {added == false ? "Add to favorites" : "Added"}
        </button>
      </div>
    </div>
  );
}

export default Card;

