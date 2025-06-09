const baseUrl = 'https://booking-com15.p.rapidapi.com/api/v1'

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd7c2662b6dmshde88699afb76e6fp197e8bjsnbcaa1127c54d',
		'x-rapidapi-host': 'booking-com15.p.rapidapi.com'
	}
} //the configuration for the request

 export const getHotlDestination = async () => {   
    const response = await fetch( `${baseUrl}/hotels/searchDestination?query=man`,options)      //promise
	const data = await response.json();   //this converts the promise to Json
	console.log(data)     // will console.log the promise
	console.log (response)
	return data //this now makes the converted promise to be availabble for use later on.

} //the main function to fetch the data from the API


const url = 'https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights?fromId=BOM.AIRPORT&toId=DEL.AIRPORT&stops=none&pageNo=1&adults=1&children=0%2C17&sort=BEST&cabinClass=ECONOMY&currency_code=AED';

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}


