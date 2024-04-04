"use client";

import React from "react";

import Header from "^/app/screens/header";

import Project from "^/app/screens/projects";

import Footer from "^/app/screens/footer";

export default function Home() {
  return (
    <>
      <div className='containerIndex'>
        <Header />
        <Project />
        <Footer />
      </div>
    </>
  );
}
