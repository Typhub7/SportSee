import Keydata from '../KeyData/Keydata'
import caloriesIcon from "../../assets/calories-icon.png";
import proteinsIcon from "../../assets/protein-icon.png";
import glucidesIcon from "../../assets/carbs-icon.png";
import lipidesIcon from "../../assets/fat-icon.png";
import "../Resumeactivity/resumeactivity.css"

interface KeyData {
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
  }

const data : KeyData[] = [
    {   calorieCount: 1930,
        proteinCount: 155,
        carbohydrateCount: 290,
        lipidCount: 50
    }
]

const Resumeactivity = () => {
    const keyData = data[0];
  return (
    <aside className='resume_container flex flex-col'>
        <Keydata iconurl={caloriesIcon} value={`${keyData.calorieCount}kCal`} etiquette='Calories' />
        <Keydata iconurl={proteinsIcon} value={`${keyData.proteinCount}g`} etiquette='Proteines' />
        <Keydata iconurl={glucidesIcon} value={`${keyData.carbohydrateCount}g`} etiquette='Glucides' />
        <Keydata iconurl={lipidesIcon} value={`${keyData.lipidCount}g`} etiquette='Lipides' /> 
    </aside>
  )
}

export default Resumeactivity