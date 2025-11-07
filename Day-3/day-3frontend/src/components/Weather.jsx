const Weather = ({ temperature }) => {
  if (temperature > 30) {
    return <div>It's hot outside!</div>;
  } else if (temperature >= 15) {
    return <div>The weather is moderate.</div>;
  } else {
    return <div>It's cold outside!</div>;
  }
};
export default Weather;
