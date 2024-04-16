import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Resumeactivity from "../../components/Resumeactivity/Resumeactivity";
import Dailybarchat from "../../components/DailyBarchart/Dailybarchart";
import AverageChart from "../../components/AverageSessionChart/AverageSessionChart";
import ScoreChart from "../../components/ScoreChart/Scorechart";
import ChartRadar from "../../components/RadarChart/RadarChart";
import Sidebar from "../../components/SideBar/Sidebar";
import Usertitle from "../../components/UserTitle/Usertitle";
import './accueil.css'
import { UserData } from "../../model/UserDataModel";
import { RetrieveUserActivity, RetrieveUserAverageSessions, RetrieveUserData, RetrieveUserPerformance } from "../../api/Api";

const Accueil = () => {
  const params = useParams<{ userId: string }>();
  const userId = params.userId ? Number(params.userId) : 12;

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
          <Sidebar />
          <div className="pagecontent_container grow overflow-hidden">
          {state!== null &&<Usertitle name={state.userMainData.userInfos.firstName} greetings={'Félicitation ! Vous avez explosé vos objectifs hier 👏'}/>}
            <div className="allstat_container flex row justify-between ">
              <div className="leftstat_container">
              {state!== null &&<Dailybarchat userActivity={state.userActivity}/>}
                <div className="three_container flex row">
                {state!== null &&<AverageChart userAverageSessions={state.userAverageSessions}/>}
                {state!== null &&<ChartRadar UserPerformance={state.userPerformance}/>}
                {state!== null &&<ScoreChart userMainData={state.userMainData}/>}
                </div>
              </div>
              <div className="rightstat_container">
              {state!== null &&<Resumeactivity userMainData={state.userMainData}/>}
              </div>
            </div>
          </div>
        </div>      
      </div>

  )
}

export default Accueil;