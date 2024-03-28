import Dailybarchat from "../../components/DailyBarchart/Dailybarchart";
import Header from "../../components/Header/Header";
import Resumeactivity from "../../components/Resumeactivity/Resumeactivity";
import Submenu from "../../components/SubMenu/Submenu";
import Usertitle from "../../components/UserTitle/Usertitle";
import { UserProvider } from "../../context/UserContext";
/*import { UserProvider } from "../../context/UserContext";
<UserProvider userId={12}>
</UserProvider>*/
import './accueil.css'

const Accueil = () => {
  return (
    <UserProvider userId={12}>
      <div className='accueil_container'>
        <Header />
        <div className="main_container flex column">
          <Submenu />
          <div className="pagecontent_container grow overflow-hidden">
            <Usertitle name={'Thomas'} greetings={'Félicitation ! Vous avez explosé vos objectifs hier 👏'}/>
            <div className="allstat_container flex row ">
              <div className="leftstat_container">
                <Dailybarchat />
              </div>
              <div className="rightstat_container">
                <Resumeactivity/>
              </div>
            </div>
          </div>
        </div>      
      </div>
    </UserProvider>
  )
}

export default Accueil;