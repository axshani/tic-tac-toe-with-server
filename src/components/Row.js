import { Square } from "./Square"

export function Row({ squares, rowNumber, handleClick }) {
  return (
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => handleClick(rowNumber, 0)} />
      <Square value={squares[1]} onSquareClick={() => handleClick(rowNumber, 1)} />
      <Square value={squares[2]} onSquareClick={() => handleClick(rowNumber, 2)} />
    </div>
  )
}