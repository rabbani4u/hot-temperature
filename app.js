const API_KEY = `ec04a619eec05d03d8abd0f22b85e8d1`;
const loadWeatherData = city => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric
  `;

  fetch(url)
    .then(response => response.json())
    .then(data => displayTemerature(data));
};

const displayTemerature = data => {
  // console.log(data);
  const temp = document.getElementById("temperature");
  temp.innerText = data.main.temp;
  document.querySelector(".lead").innerText = data.weather[0].main;

  //Show Icon
  const icon = document.getElementById("icon");
  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  icon.setAttribute("src", iconUrl);
};

document.getElementById("btn-search").addEventListener("click", function () {
  const searchField = document.getElementById("input-field");
  let city = searchField.value;
  document.getElementById("city").innerText = city;

  loadWeatherData(city);
});
