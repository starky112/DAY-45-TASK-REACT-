import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    if (!city) return;

    const response = await fetch(
      `https://wttr.in/${city}?format=j1`
    );

    const data = await response.json();

    setWeather(data.current_condition[0]);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial",
      }}
    >
      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{
          padding: "10px",
          width: "200px",
        }}
      />

      <button
        onClick={getWeather}
        style={{
          padding: "10px",
          marginLeft: "10px",
        }}
      >
        Search
      </button>

      {weather && (
        <div
          style={{
            marginTop: "20px",
            border: "1px solid gray",
            padding: "20px",
            width: "300px",
            marginInline: "auto",
            borderRadius: "10px",
          }}
        >
          <h2>{city}</h2>

          <p>
            Temperature: {weather.temp_C}°C
          </p>

          <p>
            Weather: {weather.weatherDesc[0].value}
          </p>

          <p>
            Humidity: {weather.humidity}%
          </p>

          <p>
            Wind Speed: {weather.windspeedKmph} km/h
          </p>
        </div>
      )}
    </div>
  );
}

export default App;