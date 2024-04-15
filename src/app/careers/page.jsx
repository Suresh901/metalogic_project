import Benefit from "./components/Benefit";
import Cares from "./components/Cares";
import Intro from "./components/Intro";
import Value from "./components/values";

const page = () => {
  return (
    <div>
      <Intro />
      <Value />
      <Benefit />
      <Cares />
    </div>
  );
};

export default page;
