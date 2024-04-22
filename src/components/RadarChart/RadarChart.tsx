import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import { UserPerformanceData } from "../../model/UserPerformanceModel";
import { mapUserPerformance } from '../../utils/performanceUtils';
import './radarchart.css'
import { ResponsiveContainer } from 'recharts';

/** 
 * Radar chart component displaying user performance data.
 * 
 * @param UserPerformance The user performance data to be displayed on the chart.
 * @returns {JSX.Element} The radar chart component.
 */
const ChartRadar = ({ UserPerformance }: { UserPerformance: UserPerformanceData }) => {
    const mappedUserData = mapUserPerformance(UserPerformance)
    
	return (
		<div className='radarChartContainer'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart  cx="50%" cy="50%" innerRadius="10%" outerRadius="73%" data={mappedUserData.performance}>
                    <PolarGrid radialLines={false} polarRadius={[9,20,45,65,90]} />
                    <PolarAngleAxis dataKey="kind" dy={2} tickSize={1} tick={{ fill: 'white' }} />
                    <Radar name="kind" dataKey="value" fill="red" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
		</div>
	)
}

export default ChartRadar