import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import { UserPerformanceData } from "../../model/UserPerformanceModel";
import { mapUserPerformance } from '../../utils/performanceUtils';
import './radarchart.css'
import { ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';

/** 
 * Radar chart component displaying user performance data.
 * 
 * @param UserPerformance The user performance data to be displayed on the chart.
 * @returns {JSX.Element} The radar chart component.
 */
const ChartRadar = ({ UserPerformance }: { UserPerformance: UserPerformanceData }) => {
    const mappedUserData = mapUserPerformance(UserPerformance)
    // Vérifie la largeur de la fenêtre pour décider de la taille du tickSize
    const tickSize = window.innerWidth <= 1300 ? 16 : 10; 
    // Ajuste le outerRadius en fonction de la largeur de l'écran
    const outerRadius = window.innerWidth <= 1300 ? '53%' : '73%'; 

    // Met à jour polarRadius lors du montage et démontage du composant en réponse aux changements de taille de la fenêtre
    function calculatePolarRadius() {
        return window.innerWidth <= 1300 ? [4, 10, 28, 43, 58] : [9, 20, 45, 65, 90];
    }
	const [polarRadius, setPolarRadius] = useState(calculatePolarRadius());
    useEffect(() => {
        const handleResize = () => {
            setPolarRadius(calculatePolarRadius());
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); 

    return (
		<div className='radarChartContainer'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart  cx="50%" cy="50%" innerRadius="10%" outerRadius={outerRadius} data={mappedUserData.performance}>
                    <PolarGrid radialLines={false} polarRadius={polarRadius} />
                    <PolarAngleAxis dataKey="kind" dy={2} tickSize={tickSize} tick={{ fill: 'white' }} />
                    <Radar name="kind" dataKey="value" fill="red" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
		</div>
	)
}

export default ChartRadar