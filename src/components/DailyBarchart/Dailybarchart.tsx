import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './dailybarchart.css'

type BarChartData = {
  day: string;
  kilogram: number;
  calories: number;
};

const sessions: BarChartData[] = [
  {
    day: '2020-07-01',
    kilogram: 80,
    calories: 240
  },
  {
    day: '2020-07-02',
    kilogram: 80,
    calories: 220
  },
  {
    day: '2020-07-03',
    kilogram: 81,
    calories: 280
  },
  {
    day: '2020-07-04',
    kilogram: 81,
    calories: 290
  },
  {
    day: '2020-07-05',
    kilogram: 80,
    calories: 160
  },
  {
    day: '2020-07-06',
    kilogram: 78,
    calories: 162
  },
  {
    day: '2020-07-07',
    kilogram: 76,
    calories: 390
  }
];

//{["dataMin - 2", "dataMax + 1"]}
const Dailybarchart = () => {
  //const { userData  } = useUserContext();
  //const sessions = userData.userActivity;

  return (
    <div className='dailybarchart_container'>
      <BarChart width={835} height={300} data={sessions} barSize={10} barGap={8}>
      <CartesianGrid strokeDasharray="2 2" horizontal={true} vertical={false} />
      <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#9B9EAC", fontWeight: 500, fontSize: 14 }}
        tickMargin={14} tickFormatter={(value) => parseInt(value.substring(8)).toString()}/>
      <YAxis yAxisId="ybar-left" orientation="left" dataKey="calories" tickCount={3} hide={true}/>
      <YAxis yAxisId="ybar-right" orientation="right" dataKey="kilogram" axisLine={false} tickLine={false} tickCount={3} tickMargin={20}
        minTickGap={16} domain={[74,82]}/> 
      <Legend verticalAlign="top" content={<CustomLegend />} />
      <Tooltip 
        offset={40}
        wrapperStyle={{ outline: "none", fontWeight: 600 }}
        content={<CustomTooltip  />}
        />
        <Bar yAxisId="ybar-right" dataKey="kilogram" name="kg" fill="black" radius={[10, 10, 0, 0]} />
        <Bar yAxisId="ybar-left"  dataKey="calories" name="kCal" fill="red" radius={[10, 10, 0, 0]} />
      </BarChart>
    </div>
  );
}

// documentation de recharts implique de typer en any
// eslint-disable-next-line @typescript-eslint/no-explicit-any 
const CustomTooltip = (data: any) => {
  try {
    const kg = data.payload[0]?.payload.kilogram;
    const kCal = data.payload[0]?.payload.calories;

    return (
      <div className="custom-tooltip">
        <p className="label">{`${kg}kg`}</p>
        <p className="label">{`${kCal}Kcal`}</p>
      </div>
    );
  } catch {
    return null;
  }
};

const CustomLegend: React.FC = () => {
	return (
		<div className="dailyBarChart_legend flex flex-row justify-between">
			<p className="dailyBarChart_legend_title">Activité quotidienne</p>
			<div className="dailyBarChart_legend_element flex flex-row justify-around">
        <p className="legend legend_black">Poids (kg)</p>
        <p className="legend legend_red">Calories brûlées (kCal)</p>
      </div>
		</div>
	)
}

export default Dailybarchart;