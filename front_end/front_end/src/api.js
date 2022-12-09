export async function getListing(id){
    return fetch('https://api.artic.edu/api/v1/artworks/' + id, {
		method: 'GET'
	});
}

export async function getListings(){
    return fetch('https://api.artic.edu/api/v1/artworks/', {
		method: 'GET'
	});
}

export async function login(id){
    return fetch('https://api.artic.edu/api/v1/artworks/' + id, {
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