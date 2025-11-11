import Counter from "../../components/Counter";
import Profile from "../../components/Profile";
import ShoppingList from "../../components/ShoppingList";
import TodoList from "../../components/TodoList";
import FetchData from "../../dataComponents/FetchData";

const LandingPage = () => {
  return (
    <>
      {
        /* <Counter />
      <TodoList />
      <Profile />
      <ShoppingList /> */

        <FetchData />
      }
    </>
  );
};

export default LandingPage;
