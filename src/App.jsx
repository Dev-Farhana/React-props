import './App.css'
import ListItem from './ListItem';

function App() {
  const animals = [ "frog", "Lion", "Cow", "Snake", "Liazrd"];

  return (
      <div>
          <h1>Animals: </h1>
       <ListItem animals={animals} />
      </div>
  )
}

export default App

