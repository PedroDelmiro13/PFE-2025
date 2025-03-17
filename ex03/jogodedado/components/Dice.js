const imagens = {
    1: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg",
    2: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Dice-2-b.svg",
    3: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Dice-3-b.svg",
    4: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Dice-4-b.svg",
    5: "https://upload.wikimedia.org/wikipedia/commons/0/08/Dice-5-b.svg",
    6: "https://upload.wikimedia.org/wikipedia/commons/2/26/Dice-6-b.svg",
  };
  
  const Dice = ({ value }) => {
    return (
      <div style={{ display: "inline-block", margin: "20px" }}>
        <h2>{value != null ? `Rolagem: ${value}` : "Role os dados!"}</h2>
        {value != null && (
          <img
            src={imagens[value]} 
            alt={`Dado com valor ${value}`}
            style={{
              width: "100px", 
              height: "100px", 
              borderRadius: "8px", 
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", 
            }}
          />
        )}
      </div>
    );
  };
  export default Dice;