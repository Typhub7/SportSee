//import Dailybarchat from "../../components/DailyBarchart/Dailybarchart";
import Header from "../../components/Header/Header";
import Resumeactivity from "../../components/Resumeactivity/Resumeactivity";
import ScoreChart from "../../components/ScoreChart/Scorechart";
import Submenu from "../../components/SubMenu/Submenu";
import Usertitle from "../../components/UserTitle/Usertitle";
import { UserProvider } from "../../context/UserProvider";
import { useUserContext } from "../../context/UserContext";


import './accueil.css'


const Accueil = () => {
  const userId = 12;
  /*const userData = useUserContext(); // Récupérez les données utilisateur avec le hook useUserContext
  console.log("userdata dans accueil",userData)
  
  // Vérifiez si les données utilisateur sont disponibles
  if (!userData) {
    return <div>Loading...</div>; // Affichez un message de chargement si les données ne sont pas encore disponibles
  }

  // Extrayez les données d'activité utilisateur du contexte
  const userActivity = userData.userActivity;
  console.log("userActivity dans accueil", userActivity)
  */
  //<Dailybarchat userActivity={userActivity}/>

  return (
    <UserProvider userId={userId}>
      <div className='accueil_container'>
        <Header />
        <div className="main_container flex column">
          <Submenu />
          <div className="pagecontent_container grow overflow-hidden">
            <Usertitle name={'Thomas'} greetings={'Félicitation ! Vous avez explosé vos objectifs hier 👏'}/>
            <div className="allstat_container flex row ">
              <div className="leftstat_container">
              
                <div className="three_container flex row">
                  <ScoreChart score ={0.12} />
                </div>
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