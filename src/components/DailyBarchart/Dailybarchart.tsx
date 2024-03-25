import { BarChart, Bar,	XAxis, YAxis,	CartesianGrid,Tooltip,Legend} from 'recharts';

type BarChartData = {
  day: string;
  weight: number;
  calories: number;
};

const data : BarChartData[]= [
  { day: 'Day 1', weight: 69, calories: 200 },
  { day: 'Day 2', weight: 69.5, calories: 220 },
  { day: 'Day 3', weight: 70, calories: 240 },
  // Ajoutez d'autres données pour les jours suivants...
];

const Dailybarchart = () => {
  return (
    <BarChart width={800} height={400} data={data}>
      <CartesianGrid strokeDasharray="2 2" horizontal={true}
						vertical={false} />
      <XAxis dataKey="name" axisLine={false} tickLine={false} />
      <YAxis orientation="right" axisLine={false} tickLine={false} />
      <Legend />
      <Tooltip
						offset={40}
						wrapperStyle={{ outline: "none", fontWeight: 600 }}
						content={<CustomTooltip />}
					/>
      <Bar dataKey="kilogram" name="kg" fill="black" radius={[10, 10, 0, 0]}
						barSize={10} />
					<Bar dataKey="calories" name="kCal" fill="red" radius={[10, 10, 0, 0]}
						barSize={10} />
    </BarChart>
  );
}

const CustomTooltip = (data  : BarChartData[]) => {
	try {
		const kg = data.payload[0]['value'];
		const kCal = data.payload[1]['value'];

		return (
			<div className="custom-tooltip">
				<p className="label">{`${kg}kg`}</p>
				<p className="label">{`${kCal}Kcal`}</p>
			</div>
		);
	}
	catch {
		return null;
	}
};

export default Dailybarchart;