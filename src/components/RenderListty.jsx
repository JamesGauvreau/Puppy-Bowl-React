import { useState } from "react";

const RenderListty = ({ players, setId }) => {
	const [userInput, setUserInput] = useState('');

	const inputHandler = (event) => {
    const input = event.target.value;
    setUserInput(input);
	};

	const playersFilter = () => {
		const setFilter = players.filter(
			(item) => item.name.toLowerCase().includes(userInput.toLowerCase())
		);

		if (setFilter.length > 0) {
			setId(setFilter[0].id);
		} else {
			alert('No Dogs Found...');
		}
	};
	
	return (
    <>
			<div>
				<input
					type="text"
					placeholder="Search"
					value={userInput}
        	onChange={inputHandler}
				/>
				<button onClick={() => playersFilter()} >Search</button>
			</div>

      {players.map((pupper) => <>
        <div id={pupper.id}>
          <h1 key={pupper.name}>{pupper.name}</h1>
          <img alt={pupper.name} src={pupper.imageUrl} />
          <ul>
            <li>{pupper.breed}</li>
            <li>{pupper.status}</li>
          </ul>
					<button onClick={()=> setId(pupper.id)} >Puppy Details</button>
        </div>
      </>)}
    </>
  );
};

export default RenderListty;