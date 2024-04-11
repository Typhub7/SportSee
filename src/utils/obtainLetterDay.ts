function getDayLetter(dateString: string): string {
    // Créer un objet Date à partir de la chaîne de caractères de la date
    const date = new Date(dateString);

    // Tableau contenant les noms des jours de la semaine 
    const daysOfWeek = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];

    // Utiliser getDay() pour obtenir le numéro du jour de la semaine (0 pour dimanche, 1 pour lundi, ..., 6 pour samedi)
    const dayOfWeekIndex = date.getDay();

    // Retourner la lettre du jour correspondant
    return daysOfWeek[dayOfWeekIndex];
}

export default getDayLetter;