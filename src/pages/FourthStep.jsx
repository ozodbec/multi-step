import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function FourthStep() {
  const [addOns, setAddOns] = useState({ onlineService: 0, largerStorage: 0, customizableProfile: 0 });

  useEffect(() => {
    const storedAddOns = JSON.parse(localStorage.getItem('addOns'));
    if (storedAddOns) {
      setAddOns(storedAddOns);
    }
  }, []);

  const arcadePrice = 9;
  const onlineServicePrice = addOns.onlineService;
  const largerStoragePrice = addOns.largerStorage;
  const customizableProfilePrice = addOns.customizableProfile;
  const totalPrice = arcadePrice + onlineServicePrice + largerStoragePrice + customizableProfilePrice;

  const handleConfirm = () => {
    localStorage.setItem('confirmed', 'true');
    window.location.href = '/confirm';
  };

  return (
    <div className="relative flex flex-col items-start gap-5 w-1/3 mt-12">
      <h1 className="text-[40px] text-denim font-bold">Finishing up</h1>
      <p className="text-gray-500">Double-check everything looks OK before confirming.</p>
      <div className="bg-gray-100 p-5 rounded-lg w-full">
        <div className="flex justify-between">
          <span className="font-bold">Arcade (Monthly)</span>
          <span className="font-bold">${arcadePrice}/mo</span>
        </div>
        <Link to="#" className="text-blue-500 underline">Change</Link>
        <hr className="my-2"/>
        {onlineServicePrice > 0 && (
          <div className="flex justify-between">
            <span className="text-gray-500">Online service</span>
            <span className="text-gray-500">+${onlineServicePrice}/mo</span>
          </div>
        )}
        {largerStoragePrice > 0 && (
          <div className="flex justify-between">
            <span className="text-gray-500">Larger storage</span>
            <span className="text-gray-500">+${largerStoragePrice}/mo</span>
          </div>
        )}
        {customizableProfilePrice > 0 && (
          <div className="flex justify-between">
            <span className="text-gray-500">Customizable profile</span>
            <span className="text-gray-500">+${customizableProfilePrice}/mo</span>
          </div>
        )}
        <div className="flex justify-between font-bold mt-4">
          <span>Total (per month)</span>
          <span className="text-blue-500">+${totalPrice}/mo</span>
        </div>
      </div>
      <div className="w-full flex justify-between mt-5">
        <Link to="/threestep" className="text-[#9699AA] px-3 py-4">Go Back</Link>
        <button onClick={handleConfirm} className="bg-denim px-6 py-4 text-white font-bold rounded-lg">
          Confirm
        </button>
      </div>
    </div>
  );
}

export default FourthStep;
