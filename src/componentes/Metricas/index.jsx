import './Metricas.css'
import MetricaItem from '../MetricaItem'


const Metricas = () => {
    return (
        <div className='metricas'>
            <section className='metricas__container'>
                <div className='metricas__content'>
                    <MetricaItem
                        titulo="400+"
                        subtitulo='Projetos concluídos'
                        texto='Nós ajudamos a construir mais de 400 projetos incríveis.'
                    />
                    <MetricaItem
                        titulo="100+"
                        subtitulo='Colaboradores'
                        texto='Temos mais de 100 colaboradores no nosso time que se preocupam com nossos clientes.'
                    />
                    <MetricaItem
                        titulo="20k"
                        subtitulo='Downloads'
                        texto='Nossos projetos que estão disponíveis em lojas já foram baixados mais de 20.000 vezes.'
                    />
                    <MetricaItem
                        titulo="500+"
                        subtitulo='Reviews 5 estrelas'
                        texto='Estamos orgulhosos de contar com mais de 500 reviews 5 estrelas em nossos produtos.'
                    />
                </div>
            </section>
        </div>
    )
}

export default Metricas