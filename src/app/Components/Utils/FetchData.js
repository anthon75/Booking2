const baseUrl = 'https://booking-com15.p.rapidapi.com/api/v1'

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '22dc433356mshc54aed8b1f3ece8p1bdbdejsn4495f9bf5153',
		'x-rapidapi-host': 'booking-com15.p.rapidapi.com'
	}
} //the configuration for the request

export const getHotlDestination = async () => {
	const response = await fetch(`${baseUrl}/hotels/searchDestination?query=man`, options)      //promise
	const data = await response.json();   //this converts the promise to Json
	console.log(data)     // will console.log the promise
	console.log(response)
	return data //this now makes the converted promise to be availabble for use later on.

} //the main function to fetch the data from the API


const url = 'https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights?query=man'
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}


