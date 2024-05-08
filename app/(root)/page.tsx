import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalance from "@/components/TotalBalance";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Darshan", lastName: "Bhandary", email: "drshnbhandary@gmail.com" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName + " " + loggedIn?.lastName || "Guest"}
            subtext="Acess and manage your account, view your balance and more."
          />
          <TotalBalance
            accounts={[]}
            totalBank={1}
            totalCurrentBalance={15000.01}
          />
        </header>
        RECENT TRANSCATION
      </div>
      <RightSideBar user={loggedIn} transactions={[]} banks={[{currentBalance: 5000},{currentBalance:6000}]} />
    </section>
  );
};

export default Home;
