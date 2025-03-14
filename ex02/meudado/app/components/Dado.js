import React from "react";

const Dado = ({ valor }) => {
  const imagens = {
    1: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg",
    2: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Dice-2-b.svg",
    3: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Dice-3-b.svg",
    4: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Dice-4-b.svg",
    5: "https://upload.wikimedia.org/wikipedia/commons/0/08/Dice-5-b.svg",
    6: "https://upload.wikimedia.org/wikipedia/commons/2/26/Dice-6-b.svg",
  };

  return (
    <div>
      <img 
        src={imagens[valor]} 
        alt={`Dado mostrando ${valor}`} 
        width={100} 
        className="imagemDado"
      />
    </div>
  );
};

export default Dado;
