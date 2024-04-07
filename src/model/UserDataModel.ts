import { UserActivityData } from "./UserActivityModel";
import { UserAverageSessionsData } from "./UserAverageSessionsModel";
import { UserMainData } from "./UserMainDataModel";
import { UserPerformanceData } from "./UserPerformanceModel";


export type UserData = {
    userMainData: UserMainData;
    userActivity: UserActivityData;
    userAverageSessions: UserAverageSessionsData;
    userPerformance: UserPerformanceData;
  };