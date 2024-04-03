import logo from './logo.svg';
import './App.css';
import useFetch from './hooks/useFetch';

function App() {
  const {data} = useFetch({url: "https://rickandmortyapi.com/api/character", method: "GET"});
  console.log(data);

  return (
    <>

    </>
  );
}

export default App;
