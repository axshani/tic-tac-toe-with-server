import { useEffect, useState } from "react";
import { Row } from "./Row"
import { move, newGame } from "../services/api";

export function Board() {
  const [squares, setSquares] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);

  useEffect(() => {
    async function fetchGame() {
      const res = await newGame()
      setSquares(res.board)
    }
    fetchGame()
  }, [])

  async function handleClick(i, j) {
    try {
      const res = await move(i, j)
      setSquares(res.board)

      if (res.winner) {
        if (window.confirm("The winner is: " + (res.winner === 1 ? "Player1" : "Player2"))) {
          window.location.reload()
        }
      } else {
        if (res.tie) {
          if (window.confirm("It's a TIE !!!")) {
            window.location.reload()
          }
        }
      }
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <>
      <div className="title">{"Tic Tac Toe"}</div>
      <Row squares={squares[0]} rowNumber={0} handleClick={handleClick} />
      <Row squares={squares[1]} rowNumber={1} handleClick={handleClick} />
      <Row squares={squares[2]} rowNumber={2} handleClick={handleClick} />
    </>
  );
}