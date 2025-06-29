import '../style/aboutMe.css'
import Photo from '../assets/Photo.png'

export default function AboutMe({ onResumeClick }) {
    return (

        <div className="about-me">
            <div className='about-me-left'>
                <img src={Photo} alt="title" />
            </div>
            <div className='about-me-right'>
                <p className='content1'>Hello</p>
                <p className='content2'>Here's who I am & what I do</p>
                <button onClick={onResumeClick}>RESUME</button>
                <p className='content3'>QA professional with over 5 years of experience in manual and automated testing, consistently delivering results across multiple organizations.</p>
                <p className='content3'>Expertise spans designing and executing test strategies, API automation with Postman and Rest Assured, and UI automation with Playwright and Selenium. Proven
                    ability to develop automation frameworks and collaborate with cross-functional teams to ensure seamless integration.</p>
            </div>
        </div>
    )
}