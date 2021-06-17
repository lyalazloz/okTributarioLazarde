import './App.css';
import {NavBar} from './components/navBar/navBar'
import {ItemListContainer} from './components/itemListContainer/itemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
      <h1>hola</h1>
    </div>
  );
}

export default App;
