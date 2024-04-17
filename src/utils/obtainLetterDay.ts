
/** Function to get the letter corresponding to the day of the week from a given date string.
 * @param {string} dateString - The date string.
 * @returns {string} The letter corresponding to the day of the week.
 *  Not use but ready to deploy if needed
 */

function getDayLetter(dateString: string): string {
    // Create a Date object from the date string
    const date = new Date(dateString);

    // Array containing the names of the days of the week
    const daysOfWeek = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];

    // Use getDay() to get the day of the week index (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
    const dayOfWeekIndex = date.getDay();

    // Return the letter corresponding to the day of the week
    return daysOfWeek[dayOfWeekIndex];
}

export default getDayLetter;