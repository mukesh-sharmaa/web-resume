import '../style/education.css';
import education from '../data/education.json';

export default function Education() {
    return (
        <>
            {education.map((item, idx) => (
                <div key={idx} className='education-container'>
                    <h2>{item.course}</h2>
                    <h3>{item.institute}, {item.location}</h3>
                    <h3>{item.startDate} - {item.endDate}</h3>
                </div>
            ))}
        </>
    )
}