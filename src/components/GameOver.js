import './GameOver.css';

const GameOver = ({ retry, score }) => {
	return (
		<div className='gameover'>
			<h1>The End!</h1>
			<h2>
				Final Score: <span>{score}</span>!
			</h2>
			<button onClick={retry}>Restart</button>
		</div>
	);
};

export default GameOver;
