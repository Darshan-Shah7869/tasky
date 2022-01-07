const axios = require("axios");

export default class Weather {
  constructor() {
    this.data = {};
  }

  async getData() {
    const apiKey = "d6d4573a75cb52529f3a15165bbed09a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Ahmedabad&appid=${apiKey}&units=metric`;

    const output = await axios.get(url);
    console.log(output);
    return output;
  }
}
