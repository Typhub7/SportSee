import { Line, LineChart, Tooltip, XAxis,YAxis, Rectangle, TooltipProps } from "recharts";
import { UserAverageSessionsData } from "../../model/UserAverageSessionsModel";
import formatAverageData from "../../utils/AddDayAverageData";
import getDayLetter from "../../utils//obtainLetterDay"
import './averagesessionchart.css'

const CustomTooltip = ({ active, payload }:TooltipProps<number, string>) => {
    if (active && payload && payload.length)  {
      return (
          <p>{`${payload[0].value} `}min</p>
      );
    }
    return null;
  };

interface CustomCursorProps {
    points: { x: number, y: number }[];
    width: number;
}

const CustomCursor = ({ points, width }: CustomCursorProps) => {
    const rectangleWidth = width - points[0].x
return (
    <Rectangle
    fill="#000000"
    opacity={0.13}
    x={points[0].x}   
    width={rectangleWidth}
    height={320}
    />
    );
};


const AverageChart = ({ userAverageSessions }: { userAverageSessions: UserAverageSessionsData }) => {
    const userSessions = formatAverageData(userAverageSessions);
    
   return (
    <div className='averagesessionchart_container'>
        <div className="average_title">
				Durée moyenne des sessions
        </div>
        <LineChart width={258} height={263} data={userSessions.sessions}  >
            <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0" x2="100%" y2="0">
                    <stop offset="25%" stopColor="rgba(255, 255, 255, 0.4)" />
                    <stop offset='100%' stopColor="rgba(255, 255, 255, 1)" />
                </linearGradient>
            </defs>
            <Line 
                type="natural" 
                dataKey="sessionLength" 
                stroke='url(#lineGradient)'
                strokeWidth={2} 
                dot={false}
                activeDot={{ fill: 'white', r: 4, stroke: 'rgba(255,255,255,0.3)', strokeWidth: 8 }}
            />

            <Tooltip
                content={<CustomTooltip />}
                cursor={<CustomCursor points={[]} width={258} />}
                wrapperStyle={{ background: "#FFFFFF", outline: "none" }}
            />
            
            <XAxis 
                dataKey='day'
                axisLine={false}
                tickLine={false}

                interval="preserveEnd"
        
                tick={{ opacity: 0.5, fill: '#FFFFFF' }}
            />
            <YAxis
                hide={true}
                dataKey='sessionLength'
                domain={([dataMin, dataMax]) => { const demiAmplitude = (dataMax - dataMin) / 2; return [(dataMin - demiAmplitude), (dataMax + demiAmplitude)] }} />


            

        </LineChart>
        <div className="DurationSessionsLineChart__labels">
            {userSessions.sessions.map((session, index) => {
                const dayLetter = getDayLetter(session.day);
                return (
                <span key={`${index}-${session.day}`}>{dayLetter}</span>)
            })}
        </div>
    </div>
    );
}
export default AverageChart
