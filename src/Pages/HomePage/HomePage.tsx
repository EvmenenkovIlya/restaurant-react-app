import "./HomePage.scss";
import { Main } from "./components/Main/Main";
import { HowItWorks } from "./components/HowItWorks/HowItWoks";
import { Dishes } from "./components/Dishes/Dishes";
import { Target } from "./components/Target/Target";
import { Mobile } from "./components/Mobile/Mobile";
import { Contacts } from "./components/Contacts/Contacts";

export const HomePage = () => {
  return (
    <>
      <Main />
      <HowItWorks />
      <Dishes />
      <Target />
      <Mobile />
      <Contacts />
    </>
  );
};
