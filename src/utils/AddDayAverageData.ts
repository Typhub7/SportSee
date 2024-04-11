import { UserAverageSessionsData } from "../model/UserAverageSessionsModel";

/**
* format fetched average data
* @param {Object}
*/
function formatAverageData( data : UserAverageSessionsData) {
    const userData = data.sessions
  const week = ["L", "M", "M", "J", "V", "S", "D"];
  return {
    sessions: userData.map((session, index) => ({
    sessionLength: session.sessionLength,
    day: week[index],
    })),
  };
}

export default formatAverageData;