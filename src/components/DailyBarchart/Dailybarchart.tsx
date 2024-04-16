import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { UserActivityData } from "../../model/UserActivityModel";
import './dailybarchart.css'


const Dailybarchart = ({ userActivity }: { userActivity: UserActivityData }) => {
   const userSessions = userActivity.sessions;
  console.log(userSessions)

  return (
    <div className='dailybarchart_container'>
      <BarChart width={835} height={280} data={userSessions} barSize={10} barGap={8}>
      <CartesianGrid strokeDasharray="2 2" horizontal={true} vertical={false} />
      <XAxis dataKey="day" axisLine={{ stroke: "#9B9EAC"}} tickLine={false} tick={{ fill: "#9B9EAC", fontWeight: 500, fontSize: 14 }}
        tickMargin={14} tickFormatter={(value) => parseInt(value.substring(8)).toString()}/>
      <YAxis yAxisId="ybar-left" orientation="left" dataKey="calories" tickCount={3} hide={true}/>
      <YAxis yAxisId="ybar-right" orientation="right" dataKey="kilogram" axisLine={false} tickLine={false} tickCount={3} tickMargin={20}
        minTickGap={16} domain={["dataMin - 2", "dataMax + 1"]}/> 
      <Legend verticalAlign="top" content={<CustomLegend />} />
      <Tooltip 
        offset={40}
        wrapperStyle={{ outline: "none", fontWeight: 600 }}
        cursor={{ fill: 'rgba(196, 196, 196, 0.5)' }}
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