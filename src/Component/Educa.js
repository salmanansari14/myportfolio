import '../style/Educa.css'
import Educom from './Educom';

function Educa({ EducationDetails }) {
    return (
        <div className='education'>
            <h1 className='eduh'> EDUCATION 👨‍🎓</h1>
            
            {EducationDetails.map((EducationDetails) =>
                <Educom EducationDetails={EducationDetails} key = {EducationDetails.k} />
                
            )}
        </div>
    )
}
export default Educa;