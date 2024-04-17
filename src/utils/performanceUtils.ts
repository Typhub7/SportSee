import { UserPerformanceData } from "../model/UserPerformanceModel";

// Function to translate performance kind
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

/** Function to map user performance data and translate the performance kind.
 * @param {UserPerformanceData} userData - The user performance data.
 * @returns {Object} The mapped user performance data with translated performance kinds.
 */

export function mapUserPerformance(userData : UserPerformanceData) {
    // Translate performance kind
    const kindTranslated = Object.values(userData.kind).map(convert);

    // Map performance data with translated performance kinds
    const performance = userData.data.map((item, index) => ({
        value: item.value,
        kind: kindTranslated[index],
    })).reverse();
    
    return {
        kind: kindTranslated,
        performance: performance,
    };
}