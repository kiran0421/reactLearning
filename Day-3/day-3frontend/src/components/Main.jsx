import Greetings from "./Greetings";
import Weather from "./Weather";
const Main = () => {
  const temperature = 22;
  const timesofday = "morning";
  return (
    <div>
      <h1>Main Component</h1>
      <p>This is the main content area.</p>
      <p>
        Current temperature is {temperature}.
        <Weather temperature={temperature} />
      </p>
      <p>{temperature < 25 && "We hope you are enjoying the weather!"}</p>
      <p>{temperature > 25 ? "It's hot outside!" : "Enjoy your day!"}</p>

      <Greetings daytime={timesofday} />
    </div>
  );
};
export default Main;
