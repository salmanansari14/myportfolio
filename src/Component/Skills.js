import '../style/Skill.css'

function Skills({ skillsDetails }) {
    return (
        <div className="skillitem">
            <h2 className='skillh' >{skillsDetails.head}</h2>
            <p className='sk'>{skillsDetails.first}</p>
            <p className='sk'>{skillsDetails.second}</p>
            <p className='sk'>{skillsDetails.third}</p>
        </div>
    )
}
export default Skills;