import '../style/Experience.css';

function Experience() {


    return (
        <div>
            <h1 className='eduhh'>Projects</h1>
            <div className='eddu'>
                <div className='elemnt itemm1'>
                    <img src={require('../Images/rrr.png')} alt="salman" className='image' />
                </div>
                <div className='elemnt itemm2'>
                    <a className='proh' href="https://salmanansari14.github.io/MY/" target="_blank">
                    <h1 >Todo List Web App</h1>
                    </a>
                    <span>HTML, CSS, RactJs</span>
                </div>
                <div className='elemnt itemm3'>
                    <ul type='a'>
                        <li>
                            It is a frontend React app (Todo List)
                        </li>
                        <li>I have made a Todo list app where you can note your daily tasks so that they help you to complete the task </li>
                    </ul>
                </div>
            </div>
            <div className='eddu'>
                <div className='elemnt itemm1'>
                    <img src={require('../Images/rrr.png')} alt="salman" className='image' />
                </div>
                <div className='elemnt itemm2'>
                    <a className='proh' href="">
                    <h1>Portfolio Website itself</h1>
                    
                    </a>
                    <span>HTML, CSS, ractJs</span>
                </div>
                <div className='elemnt itemm3'>
                    <ul type='a'>
                        <li type='-'> is a frontend React app (Portfolio website)</li>
                        <li> In this I have insert a contact form </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
export default Experience;