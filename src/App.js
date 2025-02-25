import './App.css';
import Header from './componentes/Header';
import Metricas from './componentes/Metricas';
import Vagas from './componentes/Vagas';

function App() {
  return (
    <div className="App">
      <Header />
      <Metricas />
      <Vagas />
    </div>
  );
}

export default App;