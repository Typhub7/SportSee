import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import { UserPerformanceData } from "../../model/UserPerformanceModel";
import { mapUserPerformance } from '../../utils/performanceUtils';
import './radarchart.css'

const ChartRadar = ({ UserPerformance }: { UserPerformance: UserPerformanceData }) => {
    const mappedUserData = mapUserPerformance(UserPerformance)
    
	return (
		<div className='radarChartContainer'>
            <RadarChart width={258} height={263} cx="50%" cy="50%" innerRadius="10%" outerRadius="73%" data={mappedUserData.performance}>
                <PolarGrid radialLines={false} />
                <PolarAngleAxis dataKey="kind" dy={3} tickSize={10} tick={{ fill: 'white' }} />
                <Radar name="kind" dataKey="value" fill="red" fillOpacity={0.7} />
            </RadarChart>
		</div>
	)
}

export default ChartRadar