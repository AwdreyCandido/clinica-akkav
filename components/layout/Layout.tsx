import React from "react";
import Navigation from "../navigation/Navigation";

const Layout: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}) => {
  return (
    <main className=" h-screen flex bg-body overflow">
      <Navigation />
      <section className="w-full h-screen overflow-y-auto sm:px py-8 px-16">
        {children}
      </section>
    </main>
  );
};

export default Layout;
