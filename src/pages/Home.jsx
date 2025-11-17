import React from "react";

import HomeBanner from "../components/Home/HomeBanner";
import TripList from "../components/Home/TripList";
import Ourservices from "../components/Home/Ourservices";

export default function Home() {
  return (
    <>
      
      <main className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <HomeBanner />
          <TripList />
          <Ourservices />
        
        </div>
      </main>
    </>
  );
}
