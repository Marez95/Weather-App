import "./Main.css"

function Main({ data }) {
    return (
      <div className="main">
        <p><u>Temperature:</u> {data?.main && data?.main?.temp} °F</p>
        <p><u>Maximum temperature:</u> {data?.main && data?.main?.temp_max} °F</p>
        <p><u>Minimum temperature:</u> {data?.main && data?.main?.temp_min} °F</p>
        <p><u>Feels like:</u> {data?.main && data?.main?.feels_like} °F</p>
        <p><u>Humidity:</u> {data?.main && data?.main?.humidity} g/kg</p>
        <p><u>City:</u> {data?.name}</p>
        <p><u>Country:</u> {data?.sys && data?.sys?.country}</p>
        <p>
          <u>Country:</u> {data?.weather && data?.weather[0]?.main} (
          {data?.weather && data?.weather[0]?.description})
        </p>
        <p><u>Wind speed:</u> {data?.wind && data?.wind?.speed} km/h</p>
        <p><u>Coordinates:</u></p>
        <p><u>Latitude:</u> {data?.coord && data?.coord?.lat}</p>
        <p><u>Longitude:</u> {data?.coord &&  data?.coord?.lon}</p>
      </div>
    )
}

export default Main;