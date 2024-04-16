import Benefit from "./components/Benefit";
import Cares from "./components/Cares";
import Intro from "./components/Intro";
import Value from "./components/values";
import Opportunities from "./components/Opportunities";
import "./page.css";
import Subscribe from "./components/Subscribe";

const page = () => {
  return (
    <div>
      <Intro />
      <Value />
      <Benefit />
      <Cares />
      <Opportunities />
      <Subscribe />
    </div>
  );
};

export default page;
