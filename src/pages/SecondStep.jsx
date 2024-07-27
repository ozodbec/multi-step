import { useState } from "react";
import { Link } from "react-router-dom";

function SecondStep() {
  
  const [selectedCard, setSelectedCard] = useState('arcade');

  
  const handleCard = (plan) => {
    setSelectedCard(plan);
  };

  return (
    <>
      <div className="relative flex flex-col items-start gap-5 w-1/3 mt-12">
        <div>
          <h1 className="text-[40px] text-denim font-bold">Select Your Plan</h1>
          <p className="text-gray-500">You have the option of monthly or yearly billing.</p>
        </div>
        <div className="flex items-center justify-between gap-5 w-full mt-10">
          <div
            className={` cursor-pointer border-2 flex flex-col gap-10 w-full p-4 rounded-lg ${selectedCard === 'arcade' ? ' border-2 border-purple shadow-md' : ''}`}
            onClick={() => handleCard('arcade')}
          >
            <div className="w-[50px]">
              <img src='../../public/assets/images/icon-arcade.svg' alt="" width={50} />
            </div>
            <span>
              <h5 className="text-[18px] text-denim font-bold">Arcade</h5>
              <span>$9/mo</span>
            </span>
          </div>
          <div
            className={` cursor-pointer border-2 flex flex-col gap-10 w-full p-4 rounded-lg ${selectedCard === 'advanced' ? ' border-2 border-purple shadow-md' : ''}`}
            onClick={() => handleCard('advanced')}
          >
            <div className="w-[50px]">
              <img src='../../public/assets/images/icon-pro.svg' alt="" width={50} />
            </div>
            <span>
              <h5 className="text-[18px] text-denim font-bold">Advanced</h5>
              <span>$12/mo</span>
            </span>
          </div>
          <div
            className={` cursor-pointer border-2 flex flex-col gap-10 w-full p-4 rounded-lg ${selectedCard === 'pro' ? ' border-2 border-purple shadow-md' : ''}`}
            onClick={() => handleCard('pro')}
          >
            <div className="w-[50px]">
              <img src='../../public/assets/images/icon-advanced.svg' alt="" width={50} />
            </div>
            <span>
              <h5 className="text-[18px] text-denim font-bold">Pro</h5>
              <span>$15/mo</span>
            </span>
          </div>
        </div>
        <div className="flex w-full mt-5 items-start justify-center gap-5 bg-[#F8F9FF]  py-4 rounded-2xl">
          <h4 className="text-[#022959] font-bold">Monthly</h4>
          <span><input type="checkbox" className="toggle toggle-primary" defaultChecked /></span>
          <h4 className="text-[#A2A5B4] font-bold">Yearly</h4>
        </div>
      <div>
          <button className=" absolute bottom-0 right-0 bg-denim px-3 py-4 text-white font-bold rounded-lg" type="submit">Next Page</button>
          <Link to="/"  className="absolute bottom-0 left-0 px-3 py-4 mt-5 items-center justify-center gap-5 text-[#9699AA] rounded-2xl ">Go back</Link>
        </div>
      </div>
    </>
  );
}

export default SecondStep;
