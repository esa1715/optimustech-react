import './App.css';
import Depoimentos from './componentes/Depoimentos';
import Formulario from './componentes/Formulario';
import Header from './componentes/Header';
import Metricas from './componentes/Metricas';
import Vagas from './componentes/Vagas';

function App() {
  return (
    <div className="App">
      <Header />
      <Metricas />
      <Vagas />
      <Depoimentos />
      <Formulario />
    </div>
  );
}

export default App;