"use client";

import React from "react";

import Header from "./screens/header";

import Project from "./screens/projects";

export default function Home() {
  return (
    <>
      <div className='containerIndex'>
        <Header />
        <Project />
      </div>
    </>
  );
}
