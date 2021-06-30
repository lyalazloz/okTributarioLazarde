import './App.css';
import { NavBar } from './components/navBar/navBar';
import './components/navBar/navBar.scss';
import { ItemListContainer } from './components/itemListContainer/itemListContainer';
import {Auxiliar} from "./auxiliar"

function App() {
  return (
    <main className="app">
      <NavBar/>
      <ItemListContainer greeting={'Bienvenido!'} />
      <Auxiliar/>
    </main>
  )
}

export default App;
