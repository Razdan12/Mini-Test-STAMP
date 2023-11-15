const lat = "-6.200000";
const lon = "106.816666";
const apiKey = "f2cadbfb22851455feb8bbfd940a5891";

const getWeatherForecast = async () => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=id`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.list) {
      const temperatures = data.list.map((day) => day.main.temp);
      console.log("Weather Forecast:");
      let currentDate = "";
      let options = {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
      };
      let locale = "en-US";
      temperatures.forEach((temperature, index) => {
        const day = data.list[index].dt_txt.split(" ")[0];
        const date = new Date(day);
        const dateNow = new Date(Date.now());
        const formattedDate = date.toLocaleDateString(locale, options);
        const formattedDateNow = dateNow.toLocaleDateString(locale, options);
       
        if (formattedDate !== formattedDateNow) {
          if (formattedDate !== currentDate) {
            console.log(`${formattedDate} : ${temperature}°C `);
            currentDate = formattedDate;
          }
        }
      });
    } else {
      throw new Error("Data ramalan cuaca tidak ditemukan");
    }
  } catch (error) {
    console.error(error.message);
  }
};

getWeatherForecast();
