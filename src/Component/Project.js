import '../style/Experience.css';
function Project({ ProjectDetails }) {
    return (
        <div>
            <h1 className='eduhh'>Projects</h1>
            {ProjectDetails.map((project) =>
                <div
                    key={project.Name}
                    className='eddu'>
                    <div className='elemnt itemm1'>
                        <img src={require(`../Images/${project.Image}`)} alt="salman" className='image' />
                    </div>
                    <div className='elemnt itemm2'>
                        <a className='proh' href="https://salmanansari14.github.io/MY/" target="_blank">
                            <h1 >{project.Name}</h1>
                        </a>
                        <span>{project.TechnologyUsed}</span>
                    </div>
                    <div className='elemnt itemm3'>
                        <ul type='a'>
                            <li>{project.Desc1}</li>
                            <li>{project.Desc2}</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )}
export default Project;