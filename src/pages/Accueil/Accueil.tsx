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
import { UserError } from "../../model/UserError";

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
  * @param {UserActivityData | UserError} userActivity - The user activity data.
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

  const [error, setError] = useState <UserError | null>(null)
  
   
  /**
   * Fetches user data asynchronously.
   * @returns {Promise<void>} A promise that resolves when the data is fetched.
   */
  const fetchData = async (): Promise<void> => {
      setError(null)
      const userActivity = await RetrieveUserActivity(userId)
      const userAverageSessions = await RetrieveUserAverageSessions(userId)
      const userPerformance = await RetrieveUserPerformance(userId)
      const userMainData = await RetrieveUserData(userId)
      const userMainDataNoError = userMainData[1]
      const userMainDataError = userMainData[0]
      const userActivityDataNoError = userActivity[1]
      const userActivityDataError = userActivity[0]
      const userAverageSessionsNoError = userAverageSessions[1]
      const userAverageSessionsError = userAverageSessions[0]
      const userPerformanceDataNoError = userPerformance[1]
      const userPerformanceDataError = userPerformance[0]

      if (userMainDataError !== null) {
        setError(userMainDataError)
      }

      if (userActivityDataError !== null) {
        setError(userActivityDataError)
      }

      if (userAverageSessionsError !== null) {
        setError(userAverageSessionsError)
      }

      if (userPerformanceDataError !== null) {
        setError(userPerformanceDataError)
      }
      
      if (userMainDataNoError !== null) {
        setstate({userActivity:userActivityDataNoError, userAverageSessions:userAverageSessionsNoError, userPerformance: userPerformanceDataNoError, userMainData: userMainDataNoError });
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
          {(state !== null && error === null) && (
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
          {error !== null && <NoDataFound message={error.message} />}
        </div> 
        {/* Red testing button on lower right of the screen */}
        <div className="floating_button" onClick={handleButtonClick}>
          Id actuel : {userId}
        </div>    
    </div>
  )
}

export default Accueil;