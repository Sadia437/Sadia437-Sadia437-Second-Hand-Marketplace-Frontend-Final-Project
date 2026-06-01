
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import { DayPicker } from "react-day-picker";
import bg from "../../../assets/icons/service icon.png";
import { Link } from "react-router-dom";

const ServicesBanner = ({selected,setSelected}) => {

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
      className="md:flex justify-between text-white "
    >
      <div className="md:w-1/2 p-5 md:p-22 space-y-6">
        <h1 className="text-2xl md:text-5xl font-semibold">
          Your Special Service from
          <span className="text-primary"> Redefine Life.</span>
        </h1>
        <p>
          Embrace a renewed sense of vitality and confidence with advanced
          anti-aging therapies. At Relive, we help you unlock the best version
          of yourself—inside and out.
        </p>
        <Link to="/contact">
          {" "}
          <PrimaryButton>Contact Us</PrimaryButton>
        </Link>
      </div>
      <div className="py-10 md:my-0 md:w-1/2 flex justify-center items-center">
        <div className="shadow-xl shadow-primary p-5 rounded-lg">
          <DayPicker
            animate
            mode="single"
            selected={selected}
            onSelect={setSelected}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesBanner;
