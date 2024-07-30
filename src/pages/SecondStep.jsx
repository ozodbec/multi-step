import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SecondStep() {
  const [selectedCard, setSelectedCard] = useState('arcade');
  const navigate = useNavigate();

  const handleCard = (plan) => {
    setSelectedCard(plan);
  };

  const handleNext = () => {
    localStorage.setItem('selectedPlan', selectedCard);
    navigate('/threestep');
  };

  return (
    <div className="relative flex flex-col items-start gap-5 w-1/3 mt-12">
      <div>
        <h1 className="text-[40px] text-denim font-bold">Select Your Plan</h1>
        <p className="text-gray-500">You have the option of monthly or yearly billing.</p>
      </div>
      <div className="flex items-center justify-between gap-5 w-full mt-10">
        {['arcade', 'advanced', 'pro'].map(plan => (
          <div key={plan}
            className={`cursor-pointer border-2 flex flex-col gap-10 w-full p-4 rounded-lg ${selectedCard === plan ? 'border-2 border-purple shadow-md' : ''}`}
            onClick={() => handleCard(plan)}
          >
            <div className="w-[50px]">
              <img src={`../../public/assets/images/icon-${plan}.svg`} alt={plan} width={50} />
            </div>
            <span>
              <h5 className="text-[18px] text-denim font-bold">{plan.charAt(0).toUpperCase() + plan.slice(1)}</h5>
              <span>${plan === 'arcade' ? 9 : plan === 'advanced' ? 12 : 15}/mo</span>
            </span>
          </div>
        ))}
      </div>
      <div className="flex w-full mt-5 items-start justify-center gap-5 bg-[#F8F9FF] py-4 rounded-2xl">
        <h4 className="text-[#022959] font-bold">Monthly</h4>
        <input type="checkbox" className="toggle toggle-primary" defaultChecked />
        <h4 className="text-[#A2A5B4] font-bold">Yearly</h4>
      </div>
      <div>
        <button onClick={handleNext} className="absolute bottom-0 right-0 bg-denim px-6 py-4 text-white font-bold rounded-lg">Next Page</button>
        <Link to="/" className="absolute bottom-0 left-0 px-3 py-4 mt-5 text-[#9699AA]">Go Back</Link>
      </div>
    </div>
  );
}

export default SecondStep;
