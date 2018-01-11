const request = require('request');

var getWeather = (lat, lng, callback) => {
request({
    url: `https://api.darksky.net/forecast/58aa18e685f112b60dfce56011264346/${lat},${lng}`,
    json: true
}, (error, response, body) => {
    if(error){
        callback('Unable to connect to Forecast.IO servers');
    } else if(!error && response.statusCode === 200){
        callback(undefined, {
            temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature
        });
    } else{
        callback('Unable to fetch weather');        
    }
});   
};

module.exports = {
    getWeather
};