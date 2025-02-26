import Talentos from "../Talentos";
import VagasAbertas from "../VagasAbertas";
import './Vagas.css'


function Vagas() {
  return (
    <div className="App">
      <section className="vagas">
      <Talentos />
      <VagasAbertas />
      </section>
    </div>
  );
}

export default Vagas;