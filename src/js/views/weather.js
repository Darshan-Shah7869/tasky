export const renderWeather = (data) => {
  return `<div class="welcome">Welcome</div>
    <div class="name">Darshan shah</div>
    <div class="weatherBox">
      <div class="city">Ahmedabad</div>
      <div class="currentBox">
        <p style="margin-top: 1rem" class="currentWeather">
          current: ${data.main.temp} deg
        </p>
        <p class="currentWeather">max: ${data.main.temp_min} deg</p>
        <p class="currentWeather">min: ${data.main.temp_max} deg</p>
      </div>
    </div>`;
};
