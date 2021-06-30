import './App.css';
import { NavBar } from './components/navBar/navBar';
import './components/navBar/navBar.scss';
import { ItemListContainer } from './components/itemListContainer/itemListContainer';

function App() {
  return (
    <main className="app">
      <NavBar/>
      <ItemListContainer greeting={'Bienvenido!'} />
    </main>
  )
}

export default App;
