
import { PieChart, Pie} from 'recharts';


const ScoreChart = ({ score }: { score: number}) => {
    const data = [
        { name: 'Score', value: score * 100 },
    ];
    return (
      <PieChart width={258} height={253}>
        <Pie
            data={data}
            cx="50%"
            cy="50%"
            startAngle={70}
            endAngle={430 * score + 70}
            innerRadius={"60%"}
            outerRadius={"70%"}
            dataKey="value"
            cornerRadius={10}
            fill="#8884d8"
            paddingAngle={5}
        >

        </Pie>
      </PieChart>
    );
}

export default ScoreChart
