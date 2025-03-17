"use client"
import { useState } from "react";
import Dice from "../components/Dice";
import Button from "../components/Button";
import Reboot from "../components/Reboot";
import "./page.css";

const Home = () => {
  const [round, setRound] = useState(0);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [player1Roll, setPlayer1Roll] = useState(null);
  const [player2Roll, setPlayer2Roll] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const rollDice = (player) => {
    const roll = Math.floor(Math.random() * 6) + 1;

    if (player === 1) {
      setPlayer1Roll(roll);
      setCurrentPlayer(2);
    } else {
      setPlayer2Roll(roll);
      setCurrentPlayer(1);

      if (player1Roll > roll) {
        setPlayer1Score(player1Score + 1);
      } else if (roll > player1Roll) {
        setPlayer2Score(player2Score + 1);
      }

      setRound(round + 1);
    }
  };

  const resetGame = () => {
    alert("Jogo reiniciando");
    location.reload();
  };

  if (round > 5) {
    const finalWinner =
      player1Score > player2Score
        ? "Jogador 1"
        : player2Score > player1Score
        ? "Jogador 2"
        : "Empate";
    alert(`Fim do Jogo! Vencedor: ${finalWinner}`);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "10px", borderRadius: "15px", padding: "20px" }}>
      <h1>Jogo de Dados</h1>
      <h2>Rodada: {Math.min(round, 5)}/5</h2>
      <h3>
        Pontuação Jogador 1: {player1Score} | Pontuação Jogador 2: {player2Score}
      </h3>
      <div className="dice-container">
        <Dice value={player1Roll} />
        <Dice value={player2Roll} />
      </div>
      <div className="button-container">
        <Button
          onClick={() => rollDice(1)}
          disabled={currentPlayer != 1 || round > 5}
          text="Jogador 1"
        />
        <Button
          onClick={() => rollDice(2)}
          disabled={currentPlayer != 2 || round > 5}
          text="Jogador 2"
        />
      </div>
      <Reboot onClick={resetGame} />
    </div>
  );
};
export default Home;