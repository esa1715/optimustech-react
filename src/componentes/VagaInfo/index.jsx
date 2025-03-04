import './VagaInfo.css'

const VagaInfo = ({ titulo, periodo, salario }) => {
    return (
        <div className='vaga'>
            <div className='vaga__content'>
                <span className="vaga__tit">{titulo}</span>
                <div className="vaga__info">
                    <span className='vaga__periodo'>{periodo}</span>
                    <span className='vaga__salario'>{salario}</span>
                </div>
            </div>
        </div>
    )
}

export default VagaInfo