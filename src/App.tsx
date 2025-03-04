import './App.css';
import { useState } from 'react';
import ChuckCard from './components/chuck_card';
import ChuckInfo from './components/chuck_info';
import ChuckJoke from './components/chuck_joke';
import Joke from './joke';

function App() {

	const [chuckGreeting, setChuckGreeting] = useState<string>("I am Chuck Norris!!!")
	const [whalesSaved, setWhalesSaved] = useState<number>(700)
	const [roundHouseKicks, setRoundHouseKicks] = useState<number>(300000)
	const [jokes, setJokes] = useState<Array<Joke>>([{
		"id": 1,
		"joke": "Chuck Norris doesn’t read books. He stares them down until he gets the information he wants.",
	},
	{
		"id": 2,
		"joke": "Time waits for no man. Unless that man is Chuck Norris.",
	},
	{
		"id": 3,
		"joke": "The dinosaurs looked at Chuck Norris the wrong way once. You know what happened to them.",
	},
	{
		"id": 4,
		"joke": "Chuck Norris does not own a stove, oven, or microwave, because revenge is a dish best served cold.",
	}])


	function stuff()
	{
		return '<ChuckJoke id={1} joke={stuff()} />   <ChuckJoke id={1} joke={"still not funny"}  /></h2>'

	}


	return (
		<div className="App">

			<h1>React props and state</h1>
			<ChuckCard greeting={chuckGreeting} />

			<h2>Chuck Info: </h2>
			<ChuckInfo whalesSaved={whalesSaved} roundHouseKicks={roundHouseKicks} />

			<h2>Jokes:  { jokes.map(j => {
				return <ChuckJoke key={j.id} id={j.id} joke={j.joke} />
			})   } </h2>

		</div>
	); //jokes.map(  id={jokes[0].id} jokes={jokes[0].joke})
}

export default App;
