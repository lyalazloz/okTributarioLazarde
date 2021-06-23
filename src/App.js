import './App.css';
import {NavBar} from './components/navBar/navBar'
import {ItemListContainer} from './components/itemListContainer/itemListContainer'

export function App() {
  const greeting= "Próximamente Nuestro Catálogo"

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting= {greeting}/>
      <h1>hola</h1>
    </div>
  );
}

export default App;
