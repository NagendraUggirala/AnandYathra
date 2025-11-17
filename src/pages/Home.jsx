import React from "react";

import HomeBanner from "../components/Home/HomeBanner";
import TripList from "../components/Home/TripList";
import Ourservices from "../components/Home/Ourservices";

export default function Home() {
  return (
    <>
      

      <main className="bg-gray-50">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <HomeBanner />
          <TripList />
          <Ourservices />
        
        </div>
      </main>
    </>
  );
}
