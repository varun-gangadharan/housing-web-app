export async function getListing(id){
    return fetch('https://api.artic.edu/api/v1/artworks/' + id, {
		method: 'GET'
	});
}

export async function getListings(){
    return fetch('http://localhost:8888/api/listings', {
		method: 'GET',
		});
	return [
		{
			price: 2000,
			location: "123 green street",
			bedrooms: 3,
			bathrooms: 2,
			squareFootage: 900,
			company: "Living Co.",
			picture: "https://www.bhg.com/thmb/0Fg0imFSA6HVZMS2DFWPvjbYDoQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg"
		},
		{
			price: 1800,
			location: "123 green street",
			bedrooms: 5,
			bathrooms: 3,
			squareFootage: 900,
			company: "Living Inc.",
			picture: "https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg"
		},
		{
			price: 4000,
			location: "123 green street",
			bedrooms: 19,
			bathrooms: 20,
			squareFootage: 8000,
			company: "Living Co.",
			picture: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brewster-mcleod-architects-1486154143.jpg"
		},
	];
}

export async function login(email,password){
    return fetch('url/api/users?where={"email":"' + email + '", "password":"' + password + '"}', {
		method: 'GET'
	});
}

export async function signup(firstName,secondName,email,password){
    return fetch('url/api/users/', {
		method: 'POST',
		body: JSON.stringify({
			firstName: firstName,
			secondName: secondName,
			password: password,
			email: email
		})
	});
}