import '../style/Header.css';

export default function Header({name, title, onNavigation}){
    return(
        <div className="header-container">
            <div className='header-title'>
                <p className='header-name'>{name}</p>
                <p className='header-title'>/</p>
                <p className='header-title'>{title}</p>
            </div>
            <div className='link-header'>
                <ul>
                    <li onClick={() => onNavigation("aboutMe")}>ABOUT ME</li>
                    <li onClick={() => onNavigation("resume")}>RESUME</li>
                </ul>
            </div>
        </div>
    )
}