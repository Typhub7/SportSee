import { Line, LineChart, Tooltip, XAxis,YAxis } from "recharts";
import { UserAverageSessionsData } from "../../model/UserAverageSessionsModel";
import './averagesessionchart.css'


const AverageChart = ({ userAverageSessions }: { userAverageSessions: UserAverageSessionsData }) => {
    const userSessions = userAverageSessions.sessions;
   console.log(userSessions)

   return (
    <div className='averagesessionchart_container'>
        <div className="average_title">
				Durée moyenne des sessions
			</div>
            <LineChart width={258} height={263} data={userSessions} >
                <Line 
                    type="natural" 
                    dataKey="sessionLength" 
                    stroke="#FFFFFF"
                    strokeWidth={2} 
                    dot={false}
                    activeDot={{ fill: 'white', stroke: 'rgba(255,255,255,0.3)', strokeWidth: 8, r: 4 }}
                />
                <XAxis 
                    dataKey='day' 
                    axisLine={false}
                    tickLine={false}
                    tick={{ opacity: 0.5, fill: '#FFFFFF' }}
                />
                <YAxis
                    hide={true}
                    dataKey='sessionLength'
                    domain={([dataMin, dataMax]) => { const halfDiff = (dataMax - dataMin) / 2; return [(dataMin - halfDiff), (dataMax + halfDiff)] }} />


                <Tooltip cursor={false}
                    wrapperStyle={{ outline: "none", fontWeight: 600 }}
                    labelFormatter={value => `${value} min`}
                />

            </LineChart>
    </div>
    );
}
export default AverageChart