import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-start min-h-screen bg-sky-500">
      <div className="w-full md:w-1/2 p-4 m-2.5 mt-5">{children}</div>
    </div>
  );
};

export default AuthLayout;
