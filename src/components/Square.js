export function Square({ value, onSquareClick }) {
    return (
        <button className="square" onClick={onSquareClick}>
            {value === 1 ? 'X' : (value === -1 ? 'O' : '')}
        </button>
    );
}