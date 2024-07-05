import React,{useState} from 'react';
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App(){
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Challenger",
      artist: "David",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Hall of Fame",
      artist: "Bekham",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "One Day",
      artist: "Smith",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Together",
      artist: "Dunice",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Rockstar",
      artist: "John",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "One life",
      artist: "Zikago",
      added: false,
    },
  ];

  const [songData,setSongData]=useState(data);
  const handleClick = (index) => {
    setSongData((prev)=>{
      return prev.map((item,itemindex) => {
        if(itemindex === index) return {...item, added: !item.added};
        return item;
      } )}
    )
  } 

  return (
    <div className="w-full h-screen bg-zinc-300">
      <Navbar data={songData} />
      <div className="px-2 gap-3 flex flex-wrap mt-10 justify-content ">
        {songData.map((item,index) => (
          <Card data={item} handleClick={handleClick} index={index} />
        ))}
      </div>
    </div>
  );
}

export default App;