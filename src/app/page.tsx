"use client";

import React from "react";

import "./globals.css";

export default function Home() {
  return (
    <>
    <div style={{
      backgroundColor: "linear-gradient(120deg, rgba(0, 194, 204, .9), rgba(0, 194, 204, .3), rgba(0, 194, 204, .2), rgba(0, 194, 204, .1))"
    }}>
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
      }}>
        <h1>Welcome to Function404</h1>
        <p>Come soon portifolio of a Mobile and Web Developer (function404)</p>
      </div>
    </div>
    </>
  );
}
