import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function ThreeStep() {
  const navigate = useNavigate();
  const [addons, setAddons] = useState({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  });

  const handleNext = () => {
    navigate("/fourthstep");
  };

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setAddons({ ...addons, [name]: checked });
  };

  return (
    <div className="relative flex flex-col items-start gap-5 w-1/3 mt-12">
      <h1 className="text-[40px] text-denim font-bold">Pick add-ons</h1>
      <p className="text-[#9699AA] font-[500]">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="w-full">
        <label className={`flex justify-between items-center p-4 border ${addons.onlineService ? 'border-[#483EFF]' : 'border-[#D6D9E6]'} rounded-lg mb-5`}>
          <div>
            <input
              type="checkbox"
              name="onlineService"
              checked={addons.onlineService}
              onChange={handleChange}
              className="mr-3"
            />
            <span className="font-bold">Online service</span>
            <p className="text-[#9699AA]">Access to multiplayer games</p>
          </div>
          <span className="text-[#483EFF] font-bold">+$1/mo</span>
        </label>

        <label className={`flex justify-between items-center p-4 border ${addons.largerStorage ? 'border-[#483EFF]' : 'border-[#D6D9E6]'} rounded-lg mb-5`}>
          <div>
            <input
              type="checkbox"
              name="largerStorage"
              checked={addons.largerStorage}
              onChange={handleChange}
              className="mr-3"
            />
            <span className="font-bold">Larger storage</span>
            <p className="text-[#9699AA]">Extra 1TB of cloud save</p>
          </div>
          <span className="text-[#483EFF] font-bold">+$2/mo</span>
        </label>

        <label className={`flex justify-between items-center p-4 border ${addons.customizableProfile ? 'border-[#483EFF]' : 'border-[#D6D9E6]'} rounded-lg mb-5`}>
          <div>
            <input
              type="checkbox"
              name="customizableProfile"
              checked={addons.customizableProfile}
              onChange={handleChange}
              className="mr-3"
            />
            <span className="font-bold">Customizable profile</span>
            <p className="text-[#9699AA]">Custom theme on your profile</p>
          </div>
          <span className="text-[#483EFF] font-bold">+$2/mo</span>
        </label>
      </div>

      <div className="w-full flex justify-between mt-5">
        <Link to="/secondstep" className="px-3 py-4 text-[#9699AA] font-[500]">
          Go back
        </Link>
        <button
          onClick={handleNext}
          className="bg-denim px-7 py-4 text-white font-bold rounded-lg"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default ThreeStep;
