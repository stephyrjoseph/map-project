const BASE_API_URL = "https://api.foursquare.com/v3";
const API_KEY = "fsq3NoI1+prZ0u5blQQT08XQMmZ2fXx5ax1bN7KUsN1KrOY="



async function search(lat, lng, searchTerms,categoryId) {



    const response = await axios.get(`${BASE_API_URL}/places/search?`, {
        params: {
            query: encodeURI(searchTerms),
            ll: lat + "," + lng,
            sort: "DISTANCE",
            radius : 8000,
            limit : 30,
            categories: categoryId
   
           
        },
        headers: {
            accept: 'application/json',
            Authorization: API_KEY
        }


    })
    console.log(response.data)
    return response.data;

}
async function getPhotoFromFourSquare(fsqId) {
    const response = await axios.get(`${BASE_API_URL}/places/${fsqId}/photos`, {
        headers: {
            Accept: "application/json",
            Authorization: API_KEY
        }
    });
    return response.data;
}







