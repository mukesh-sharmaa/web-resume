import '../style/Resume.css';
import Cards from './Cards';
import Education from './Education';
import Skills from './Skills';

export default function Resume() {
    return (
        <div className="resume-container">
            <h1>EXPERIENCE</h1>
            <Cards />
            <h1>TECHNICAL SKILLS</h1>
            <Skills />
            <h1>EDUCATION</h1>
            <Education />
        </div>
    )
}