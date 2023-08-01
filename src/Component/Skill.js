import '../style/Skill.css'
import Skills from './Skills.js'

function Skill({ skillsDetails }) {
    return (
        <div className='skill' >
            <h1 className='ss'>SKILLS🔧</h1>

            <div className='skillitemm'>
                {skillsDetails.map((skillsDetails) =>
                    <Skills  skillsDetails={skillsDetails} key = {skillsDetails.k} />
                )}
            </div>
        </div>
    )
}
export default Skill;