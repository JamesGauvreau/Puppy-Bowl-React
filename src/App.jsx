import NavBar from "./components/NavBar";
import RenderListty from "./components/RenderListty";
import RenderPuppy from "./components/RenderPuppy";
import LeFormDePup from "./components/LeFormDePup";
import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const [players, setPlayers] = useState([]);
  const [id, setId] = useState('');

  useEffect(() => {
    const fetchAPI = async() => {
      const dog = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2306-FSA-ET-WEB-FT-SF/players/${id}`);
      const owner = await dog.json();
      const puppies = owner.data.players;
			console.log('players', puppies)
      setPlayers(puppies);
    };
    fetchAPI();
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={id ? <RenderPuppy id={id} setId={setId}/> : <RenderListty players={players} setId={setId} />} />
        <Route path="/LeFormDePup" element={<LeFormDePup />} />
      </Routes>
    </>
  );
};

export default App;