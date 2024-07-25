"use client";

import React, { useState, useEffect} from "react";
import RingLoader from 'react-spinners/RingLoader'

import Mainimg from "^/app/screens/mainimg";
import Project from "^/app/screens/projects";
import Footer from "^/app/screens/footer";
import ContactUs from "^/app/screens/contact";

import Snow from '^/app/components/snow'

import {
  GlobalStyles,
  StyledContainerIndex,
  StyledLoading
} from '^/app/globals'
import { colors } from '^/app/utils/colors';

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
      <StyledContainerIndex>
        {loading ? ( 
        <StyledLoading>
          <RingLoader color={`${colors.colorPrimary}`} loading={loading} size={150} speedMultiplier={1.2}/>
        </StyledLoading>
       ) : (
        <>
          <Mainimg />
          <Project />
          <ContactUs />
          <Footer />
          <Snow />
        </>  
      )}
      </StyledContainerIndex>
      <GlobalStyles />
    </>
  );
}
