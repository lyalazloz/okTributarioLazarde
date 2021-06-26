import './App.css';
import { NavBar } from './components/navBar/navBar';
import './components/navBar/navBar.scss';
import { ItemListContainer } from './components/itemListContainer/itemListContainer';

function App() {
  return (
    <div className="app">
      <NavBar/>
      <ItemListContainer greeting={'Bienvenido!'} />
    </div>
  )
}

export default App;
