import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeBanner from "../components/Home/HomeBanner";
import TripList from "../components/Home/TripList";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <HomeBanner />
          <TripList />
        </div>
      </main>
      <Footer />
    </>
  );
}
