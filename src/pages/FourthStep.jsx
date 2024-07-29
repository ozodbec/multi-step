import React from 'react';
import { Link } from 'react-router-dom';

function FourthStep() {
  return (
    <div className="relative flex flex-col items-start gap-5 w-1/3 mt-12">
      <h1 className="text-[40px] text-denim font-bold">Summary</h1>
      <div>
        {/* Summary details here */}
      </div>
      <div>
        <button className="absolute bottom-0 right-0 bg-denim px-3 py-4 text-white font-bold rounded-lg">Submit</button>
        <Link to="/threestep" className="absolute bottom-0 left-0 px-3 py-4 mt-5 text-[#9699AA]">Go back</Link>
      </div>
    </div>
  );
}

export default FourthStep;
