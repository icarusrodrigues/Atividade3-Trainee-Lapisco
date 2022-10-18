import './App.css';
import Columns from './components/Columns';
// import Button from './components/Button';
import TypeButtons from './components/TypeButtons';

function App() {
  return (
    <div className="App">
      <div className="cart">
        <h1>Lista de Compras 🛒</h1>
        <h3>O que deseja adicionar ao carrinho?</h3>

        <input id="item_name" placeholder="Nome do item" />

        <TypeButtons />

        <input type="number" id="item_price" placeholder="Preço em reais" />

        <Columns />

      </div>
    </div>
  );
}

export default App;
