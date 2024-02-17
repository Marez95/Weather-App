import "./Main.css"

function Main({ data }) {
    return (
      <div className="main">
        <p>Temperature: {data?.main && data?.main?.temp} °F</p>
        <p>Maximum temperature: {data?.main && data?.main?.temp_max} °F</p>
        <p>Minimum temperature: {data?.main && data?.main?.temp_min} °F</p>
        <p>Feels like: {data?.main && data?.main?.feels_like} °F</p>
        <p>Humidity: {data?.main && data?.main?.humidity} g/kg</p>
        <p>City: {data?.name}</p>
        <p>Country: {data?.sys && data?.sys?.country}</p>
        <p>
          Weather description: {data?.weather && data?.weather[0]?.main} (
          {data?.weather && data?.weather[0]?.description})
        </p>
        <p>Wind speed: {data?.wind && data?.wind?.speed} km/h</p>
        <p>Coordinates:</p>
        <p>Latitude: {data?.coord && data?.coord?.lat}</p>
        <p>Longitude: {data?.coord &&  data?.coord?.lon}</p>
      </div>
    )
}

export default Main;