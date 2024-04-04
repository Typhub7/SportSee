/**
 * Fetch data from a URL
 * @param {string | URL} url - The URL from which to fetch data
 * @returns {Promise<any>} A Promise resolving to the fetched data or an error
 */

export async function RetrieveData(url: string | URL) {
    try{
        const response = await fetch(url)
        console.log(response)
        const data = await response.json()
        console.log(data)
        return data
    } catch {
        console.log('Erreur appel api')
    }
}