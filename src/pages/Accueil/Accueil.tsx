import Dailybarchat from "../../components/DailyBarchart/Dailybarchart";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Resumeactivity from "../../components/Resumeactivity/Resumeactivity";
import ScoreChart from "../../components/ScoreChart/Scorechart";
import Submenu from "../../components/SubMenu/Submenu";
import Usertitle from "../../components/UserTitle/Usertitle";
import './accueil.css'
import { UserData } from "../../model/UserDataModel";
import { RetrieveUserActivity, RetrieveUserAverageSessions, RetrieveUserData, RetrieveUserPerformance } from "../../api/Api";


const Accueil = () => {
  const userId = 12;
  const [state,setstate] = useState<UserData | null>(null)
  const fetchData = async () => { 
    const userActivity = await RetrieveUserActivity(userId)
    const userAverageSessions = await RetrieveUserAverageSessions(userId)
    const userPerformance = await RetrieveUserPerformance(userId)
    const userMainData = await RetrieveUserData(userId)
    setstate({userActivity,userAverageSessions,userPerformance,userMainData})
  }
  
  useEffect (() => {fetchData()},[])

  return (
    <div className='accueil_container'>
        <Header />
        <div className="main_container flex column">
          <Submenu />
          <div className="pagecontent_container grow overflow-hidden">
            <Usertitle name={'Thomas'} greetings={'Félicitation ! Vous avez explosé vos objectifs hier 👏'}/>
            <div className="allstat_container flex row ">
              <div className="leftstat_container">
              {state!== null &&<Dailybarchat userActivity={state.userActivity}/>}
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

  )
}

export default Accueil;