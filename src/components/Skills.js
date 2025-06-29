import '../style/skills.css';
import skills from '../data/skills.json';

export default function Skills() {
    return (
        <div className='skill-container'>
            {skills.map((item, key) => (
                <p  key={key} className='skill-item'>{item}</p>
            ))}
        </div>
    )
}