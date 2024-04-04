"use client";

import React, { useState, useEffect} from "react";
import RingLoader from 'react-spinners/RingLoader'

import Header from "^/app/screens/header";
import Project from "^/app/screens/projects";
import Footer from "^/app/screens/footer";

import Snow from '^/app/components/snow'

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const randomTimeout = Math.floor(Math.random() * 4 + 2) * 1000;
    const timer = setTimeout(() => {
      setLoading(false);
    }, randomTimeout);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className='containerIndex'>
        {loading ? ( 
        <div className='loading'>
          <RingLoader color={'rgb(0, 155, 163)'} loading={loading} size={150} speedMultiplier={1.2}/>
        </div>
       ) : (
        <>
          <Header />
          <Project />
          <Footer />
          <Snow />
        </>  
      )}
      </div>
    </>
  );
}
