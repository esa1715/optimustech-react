import './VagasAbertas.css'
import VagaInfo from '../VagaInfo'

const VagasAbertas = () => {
    return (
        <div className='vagas__abertas'>
            <div className='vagas__abertas__container'>
            <section className='vagas__abertas__content'>
                <h2 className='vagas__abertas__area'>Design</h2>
                <div className='vagas__abertas__items'>
                    <VagaInfo
                    titulo="Product Designer"
                    periodo="Full-time"
                    salario="Faixa salarial: R$7.000"
                    />
                    <VagaInfo
                    titulo="UX Designer"
                    periodo="Full-time"
                    salario="Faixa salarial: R$6.000"
                    />
                </div>
            </section>
            </div>
            <div className='vagas__abertas__container'>
            <section className='vagas__abertas__content'>
                <h2 className='vagas__abertas__area'>Desenvolvimento de Software</h2>
                <div className='vagas__abertas__items'>
                    <VagaInfo
                    titulo="Desenvolvedor(a) iOS"
                    periodo="Full-time"
                    salario="Faixa salarial: R$8.000"
                    />
                    <VagaInfo
                    titulo="Desenvolvedor(a) Front-end"
                    periodo="Full-time"
                    salario="Faixa salarial: R$7.000"
                    />
                    <VagaInfo
                    titulo="Desenvolvedor(a) Back-end"
                    periodo="Full-time"
                    salario="Faixa salarial: R$8.000"
                    />
                </div>
            </section>
            </div>
        </div>
    )
}

export default VagasAbertas