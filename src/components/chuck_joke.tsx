interface ChuckJokeProps {
	id:number
	joke:string
}

const ChuckJoke: React.FC<ChuckJokeProps> = ({id, joke}) => <p >{joke}</p>



export default ChuckJoke;
