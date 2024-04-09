import { UserPerformanceData } from "../model/UserPerformanceModel";

function convert(string:string) {
    let traduct = string;

    switch (traduct) {
        case "cardio":
            traduct = "Cardio";
            break;
        case "intensity":
            traduct = "Intensité";
            break;
        case "speed":
            traduct = "Vitesse";
            break;
        case "strength":
            traduct = "Force";
            break;
        case "endurance":
            traduct = "Endurance";
            break;
        case "energy":
            traduct = "Energie";
            break;
        default:
    }
    return traduct;
}

export function mapUserPerformance(userData : UserPerformanceData) {
    const kindTranslated = Object.values(userData.kind).map(convert);
    console.log(kindTranslated)
    const performance = userData.data.map((item, index) => ({
        value: item.value,
        kind: kindTranslated[index],
    })).reverse();
    console.log(performance)
    
    return {
        kind: kindTranslated,
        performance: performance,
    };
}