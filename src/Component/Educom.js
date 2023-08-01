
function Educom({ EducationDetails }) {
    return (
        <div>
            <div className='edu'>
                <div className='elem item1'>
                    {/* <img src  require={EducationDetails.Image} alt="salman" className='image' /> */}
                    <img src={require('../Images/rrr.png')} alt="salman" className='image' />
                </div>
                <div className='elem item2'>
                    <h1>{EducationDetails.ClgName}</h1>
                    <p>{EducationDetails.Duration}</p>
                    <span>{EducationDetails.DurationClg}</span>
                </div>
                <div className='elem item3'>
                    <ul type='a'>
                        <li type='-'> {EducationDetails.List1} </li>
                        <li> {EducationDetails.List2} </li>
                        <li> {EducationDetails.List3} </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
export default Educom;