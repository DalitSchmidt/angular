// Using the 'APIColorsFactory' factory we communicate with the API and for this purpose we define the name of the factory (in our case 'APIColorsFactory') and callback function, that receives the 'http' parameter with which to perform various requests against the API
app.factory('APIColorsFactory', function( $http ) {
    const API_URL = 'http://localhost:3000/api/colors'

    // The factory returns object and different methods
    return {
        // Using the 'searchColor' function which takes the 'color' parameter allows searches of color in the API
        searchColor: function( color ) {
            // The function return the color we were searches and to get the color we 'get' request by 'http' parameter to the url `http://localhost:3000/api/colors/${color}`
            return $http.get(`http://localhost:3000/api/colors/${color}`)
        },

        createColor: function ( color ) {
            return $http.post(`http://localhost:3000/api/colors`)
        },

        read: function ( color ) {
            return $http.get(`http://localhost:3000/api/colors`)
        },

        deleteColorsByID: function () {


            return $http.delete(`http://localhost:3000/api/colors/${color_id}`)
        }
    }
})