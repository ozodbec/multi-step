import React from 'react';

function ConfirmPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full ">
      <div className="mb-5">
        <img src="/public/assets/images/icon-thank-you.svg" alt="Confirmation" />
      </div>
      <h1 className="text-[38px] text-denim font-bold">Thank you!</h1>
      <p className=" text-gray-500 mt-2 leading-7 text-[18px] text-center text-xl">
        Thanks for confirming your subscription! We hope you have <br />fun using our platform.
        If you ever need support, please feel <br /> free to email us at support@loremgaming.com.
      </p>
    </div>
  );
}

export default ConfirmPage;
