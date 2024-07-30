import { Form, useActionData, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import FormInput from "../components/FormInput";

// action 
export const action = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get('name');
  const email = formData.get('email');
  const phoneNumber = formData.get('phone');
  return { name, email, phoneNumber };
};

function FirstStep() {
  const userData = useActionData();
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      localStorage.setItem('userData', JSON.stringify(userData));
      navigate('/secondstep');
    }
  }, [userData, navigate]);

  return (
    <Form method="post" className="relative w-1/3 mt-12 flex flex-col gap-5">
      <div>
        <h1 className="text-[40px] text-denim font-bold">Personal Info</h1>
        <span className="text-gray-500">Please provide your name, email address, and phone number.</span>
      </div>
      <FormInput label="Name" type="text" placeholder="Enter your name..." name="name" />
      <FormInput label="Email Address" type="email" placeholder="Enter your email..." name="email" />
      <FormInput label="Phone Number" type="text" placeholder="Enter your phone number..." name="phone" />
      <div>
        <button className="absolute bottom-0 right-0 bg-denim px-6 py-4 text-white font-bold rounded-lg" type="submit">Next Page</button>
      </div>
    </Form>
  );
}

export default FirstStep;
