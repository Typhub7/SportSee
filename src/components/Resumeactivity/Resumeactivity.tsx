import Keydata from '../KeyData/Keydata'
import caloriesIcon from "../../assets/calories-icon.png";
import proteinsIcon from "../../assets/protein-icon.png";
import glucidesIcon from "../../assets/carbs-icon.png";
import lipidesIcon from "../../assets/fat-icon.png";
import "../Resumeactivity/resumeactivity.css"
import { UserMainData } from "../../model/UserMainDataModel";


const Resumeactivity = ({ userMainData }: { userMainData: UserMainData }) => {
  const userData= userMainData.keyData
  console.log(userData)
  return (
    <aside className='resume_container flex flex-col'>
        <Keydata iconurl={caloriesIcon} value={`${userData.calorieCount}kCal`} etiquette='Calories' />
        <Keydata iconurl={proteinsIcon} value={`${userData.proteinCount}g`} etiquette='Proteines' />
        <Keydata iconurl={glucidesIcon} value={`${userData.carbohydrateCount}g`} etiquette='Glucides' />
        <Keydata iconurl={lipidesIcon} value={`${userData.lipidCount}g`} etiquette='Lipides' /> 
    </aside>
  )
}

export default Resumeactivity