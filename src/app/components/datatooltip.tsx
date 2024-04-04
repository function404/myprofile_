"use client";

import React from 'react';

import { Tooltip } from "react-tooltip";

import "react-tooltip/dist/react-tooltip.css";


export default function Datatooltip() {
    return (
        <>
            <Tooltip id={`tooltip-1`} arrowColor="rgb(0, 194, 204)" style={{ backgroundColor:" rgb(0, 194, 204)", borderRadius: "12px" }} />
            <Tooltip id={`tooltip-2`} arrowColor="rgb(0, 194, 204)" style={{ backgroundColor:" rgb(0, 194, 204)", borderRadius: "12px" }} />
            <Tooltip id={`tooltip-3`} arrowColor="rgb(0, 194, 204)" style={{ backgroundColor:" rgb(0, 194, 204)", borderRadius: "12px" }} />
        </>
    )
}