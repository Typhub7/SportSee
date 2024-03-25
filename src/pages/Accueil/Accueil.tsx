import Dailybarchat from "../../components/DailyBarchart/Dailybarchart";
import Header from "../../components/Header/Header";
import Submenu from "../../components/SubMenu/Submenu";
import Usertitle from "../../components/UserTitle/Usertitle";
/*import { UserProvider } from "../../context/UserContext";
<UserProvider userId={12}>
</UserProvider>*/
import './accueil.css'

const Accueil = () => {
  return (
    <div className='accueil_container'>
      <Header />
      <div className="main_container flex column w-full">
        <Submenu />
        <div className="pagecontent_container grow overflow-hidden">
          <Usertitle name={'Thomas'} greetings={'Félicitation ! Vous avez explosé vos objectifs hier 👏'}/>
          <div className="allstat_container">
            <div className="leftstat_container">
            <Dailybarchat />
            </div>
            <div className="rightstat_container">

            </div>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Accueil;