const Greetings = ({ daytime }) => {
  return (
    <h2>
      {daytime === "morning"
        ? "Good Morning"
        : daytime === "afternoon"
        ? "Good Afternoon"
        : "Good Evening"}
    </h2>
  );
};

export default Greetings;
