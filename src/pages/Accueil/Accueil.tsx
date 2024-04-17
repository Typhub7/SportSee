import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Resumeactivity from "../../components/Resumeactivity/Resumeactivity";
import Dailybarchat from "../../components/DailyBarchart/Dailybarchart";
import AverageChart from "../../components/AverageSessionChart/AverageSessionChart";
import ScoreChart from "../../components/ScoreChart/Scorechart";
import ChartRadar from "../../components/RadarChart/RadarChart";
import Sidebar from "../../components/SideBar/Sidebar";
import Usertitle from "../../components/UserTitle/Usertitle";
import './accueil.css'
import { UserMainData } from "../../model/UserMainDataModel";
import { UserPerformanceData } from "../../model/UserPerformanceModel";
import { UserAverageSessionsData } from "../../model/UserAverageSessionsModel";
import { UserActivityData } from "../../model/UserActivityModel";
import { RetrieveUserActivity, RetrieveUserAverageSessions, RetrieveUserData, RetrieveUserPerformance } from "../../api/Api";
import NoDataFound from "../../components/NoDataFound/NoDataFound";

const Accueil = () => {
  /*  Partie pour tester les id génère le bouton de test 
      Utiliser useState pour gérer le nombre de clics
      Définir une séquence d'IDs
      Calculer l'index du tableau correspondant à l'ID utilisateur en fonction du nombre de clics */
  const [clickCount, setClickCount] = useState(0); // 
  const userIDs = [19, 12, 18, 25];
  const userId = userIDs[clickCount % userIDs.length];


  const [state, setstate] = useState<{ 
    userActivity: UserActivityData | null; 
    userAverageSessions: UserAverageSessionsData | null; 
    userPerformance: UserPerformanceData | null; 
    userMainData: UserMainData | null; 
} | null>(null);
  
  const fetchData = async () => {
      const userActivity = await RetrieveUserActivity(userId)
      const userAverageSessions = await RetrieveUserAverageSessions(userId)
      const userPerformance = await RetrieveUserPerformance(userId)
      const userMainData = await RetrieveUserData(userId)
      
      if (userMainData !== null) {
        setstate({ userActivity, userAverageSessions, userPerformance, userMainData });
      } else {
        setstate(null);
      }
  }
  
  useEffect (() => {
    fetchData()
  },[userId])

  const handleButtonClick = () => {
    // Incrémenter le nombre de clics à chaque fois que le bouton est cliqué
    setClickCount(clickCount + 1);
  };
  
  return (
    <div className='accueil_container'>
        <Header />
        <div className="main_container flex column">
          <Sidebar />
          <div className="pagecontent_container grow overflow-hidden">
          {state !== null &&  (
            <>
            {state.userMainData !== null && (<Usertitle name={state.userMainData.userInfos.firstName} greetings={'Félicitation ! Vous avez explosé vos objectifs hier 👏'}/>)}
            <div className="allstat_container flex row justify-between ">
              <div className="leftstat_container">
              {state.userActivity !== null && (<Dailybarchat userActivity={state.userActivity}/>)}
                <div className="three_container flex row">
                {state.userAverageSessions !== null && (<AverageChart userAverageSessions={state.userAverageSessions}/>)}
                {state.userPerformance !== null && (<ChartRadar UserPerformance={state.userPerformance}/>)}
                {state.userMainData !== null && (<ScoreChart userMainData={state.userMainData}/>)}
                </div>
              </div>
              <div className="rightstat_container">
              {state.userMainData !== null && (<Resumeactivity userMainData={state.userMainData}/>)}
              </div>
            </div>
          </>)}
          </div>
          {state ==null && <NoDataFound />}
        </div> 
        {/* Bouton de toggle d'id en survol dans l'angle en bas à droite */}
        <div className="floating_button" onClick={handleButtonClick}>
          Id actuel : {userId}
        </div>    
    </div>
  )
}

export default Accueil;