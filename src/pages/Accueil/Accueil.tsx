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

  /** 
  * Test section for generating user IDs and handling button clicks.
  * 
  * Utilizes useState to manage the number of clicks and defines a sequence of user IDs.
  * Calculates the index of the array corresponding to the user ID based on the number of clicks.
  */
  const [clickCount, setClickCount] = useState(0); // 
  const userIDs = [ 12, 18, 25];
  const userId = userIDs[clickCount % userIDs.length];
  const handleButtonClick = () => {
    // Increment the number of clicks every time the button is clicked.
    setClickCount(clickCount + 1);
  };

  /** Represents the state containing user activity, average sessions, performance, and main data.
  * @param {UserActivityData | null} userActivity - The user activity data.
  * @param {UserAverageSessionsData | null} userAverageSessions - The user average sessions data.
  * @param {UserPerformanceData | null} userPerformance - The user performance data.
  * @param {UserMainData | null} userMainData - The user main data.
  */
  const [state, setstate] = useState<{ 
    userActivity: UserActivityData | null; 
    userAverageSessions: UserAverageSessionsData | null; 
    userPerformance: UserPerformanceData | null; 
    userMainData: UserMainData | null; 
  } | null>(null);
  
  /**
   * Fetches user data asynchronously.
   * @returns {Promise<void>} A promise that resolves when the data is fetched.
   */
  const fetchData = async (): Promise<void> => {
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[userId])

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
        {/* Red testing button on lower right of the screen */}
        <div className="floating_button" onClick={handleButtonClick}>
          Id actuel : {userId}
        </div>    
    </div>
  )
}

export default Accueil;