import Benefit from "./ui/Benefit";
import Cares from "./ui/Cares";
import Intro from "./ui/Intro";
import Value from "./ui/values";
import Opportunities from "./ui/Opportunities";
import "./page.css";
import Subscribe from "./ui/Subscribe";

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
