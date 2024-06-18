import './Homepage.css';
import github_icon from '../../../assets/github_icon.png'

function Homepage(){
    return(
        <div className='homepage_container'>
            <div className='homepage_left'>
                <p className='homepage_left_h1'>
                    <span className='red_color'>Hi,</span> my name is 

                </p>
                <p className='homepage_left_h2'>
                    Persistance Muza
                </p>
                <p className='homepage_left_h3'>
                    Computer Science student at <span className='red_color'>LPU</span>
                </p>
                <p className='homepage_left_description'>
                As a computer science student, I'm passionate about technology and solving complex problems. I spend my days coding, debugging, and learning new programming languages. My coursework includes algorithms, data structures, and software development. With a strong analytical mindset, I enjoy tackling projects that challenge my creativity. I'm always eager to stay updated with the latest tech trends and aspire to innovate in the digital world

                </p>
                <div>
                    <a href='#' target='_blank'>
                    <img
                    src={github_icon}
                    alt='githubimage'
                    className='homepage_logo'
                    />
                    </a>
                    <a href='#' target='_blank'>
                    <img
                    src={github_icon}
                    alt='githubimage'
                    className='homepage_logo'
                    />
                    </a>
               
                </div>
                <a href='muzapersistance10@gmail.com'>
                    <button className='homepage_left_button'>Get In Touch</button>
                </a>

            </div>
            <div className='homepage_right'>
                <img src='data:image/jpeg;base64,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' alt='GIF'/>
            </div>
        </div>
    )
}

export default Homepage;