const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=87f21986cc28d16fd76971a62c1d7f25&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}