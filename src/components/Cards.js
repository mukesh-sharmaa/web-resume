import '../style/cards.css'
import experience from '../data/experience.json'

export default function Cards() {
    return (

        <>
            {experience.map((item, ide) => (
                <div className="cards-container" key={ide}>
                    <div className='first-div-resume'>
                        <h2>{item.position}</h2>
                        <h3>{item.company}</h3>
                        <h3>{item.startDate} - {item.endDate}</h3>
                    </div>
                    <div className='second-div-resume'>
                        <ul className='ul-resume'>
                            {item.responsibilities.map((resp, i) => (
                                <li key={i}>{resp}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))
            }
        </>

    )
}