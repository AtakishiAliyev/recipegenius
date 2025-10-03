import { Button, Input } from "antd";
import { useState } from "react";

const Register = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="py-4 px-6">
      <div className="flex flex-col items-center justify-center">
        <div className=" flex items-center justify-center mb-[25px] ">
          <h1 className="text-xl text-black font-medium font-poppins">
            {isRegister ? "Login" : "Sign Up"}
          </h1>
        </div>

        <form className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
          <div className="flex flex-col gap-[15px]">
            <Input placeholder="Email" />
            <Input placeholder="Password" />
          </div>

          <div className="mt-4">
            <Button>{isRegister ? "Login" : "Sign Up"}</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
