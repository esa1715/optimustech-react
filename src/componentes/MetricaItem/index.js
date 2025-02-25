import './MetricaItem.css'

const MetricaItem = ({ titulo, subtitulo, texto }) => {
    return (
        <div className='metricaitem'>
            <h2 className='metricaitem__tit'>{titulo}</h2> 
            <h3 className='metricaitem__sub'>{subtitulo}</h3>
            <p className='metricaitem__text'>{texto}</p>
        </div>
    )
}

export default MetricaItem