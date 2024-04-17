import { PieChart, Pie, Cell} from 'recharts';
import { UserMainData } from "../../model/UserMainDataModel";
import './scorechart.css'

/** 
 * Score chart component displaying the user's score and progress towards their goal.
 * 
 * @param userMainData The main user data containing the score information.
 * @returns {JSX.Element} The score chart component.
 */
const ScortChart = ({ userMainData }: { userMainData: UserMainData }) => {
  const score = userMainData.todayScore !== undefined ? userMainData.todayScore : userMainData.score!;
    const data = [
        { name: 'Score', value: score * 100 },
    ];
    return (
    <div className='scoreChartContainer '>
      <div className="scoreChartTitle">Score</div>
      <div className='scoreChartPie_container'>
        <PieChart width={180} height={180} >
          
          <Pie
              data={data}
              cx="50%"
              cy="50%"
              startAngle={80}
              endAngle={360 * score + 80}
              innerRadius={"87%"}
              outerRadius={"100%"}
              dataKey="value"
              cornerRadius={10}
              fill="#8884d8"
              paddingAngle={5}
          >
            <Cell stroke="" fill="red" />
          </Pie>
        </PieChart>
      </div>
      <div className="scoreValue">
        <div className="scorePercentage">{score * 100}%</div>
        <div className="scoreObjectifText">de votre objectif</div>
      </div>
    </div>
    );
}

export default ScortChart
