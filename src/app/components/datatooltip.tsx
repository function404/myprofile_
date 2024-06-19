"use client";

import React from 'react';

import { Tooltip } from "react-tooltip";

import { colors } from '^/app/utils/colors';

import "react-tooltip/dist/react-tooltip.css";


export default function Datatooltip() {
    return (
        <>
            <Tooltip id={`tooltip-0`} arrowColor={`${colors.colorPrimary}`} style={{ backgroundColor: colors.colorPrimary, borderRadius: "12px", color: colors.colorBlack }} />
            <Tooltip id={`tooltip-1`} arrowColor={`${colors.colorPrimary}`} style={{ backgroundColor: colors.colorPrimary, borderRadius: "12px", color: colors.colorBlack }} />
            <Tooltip id={`tooltip-2`} arrowColor={`${colors.colorPrimary}`} style={{ backgroundColor: colors.colorPrimary, borderRadius: "12px", color: colors.colorBlack }} />
            <Tooltip id={`tooltip-3`} arrowColor={`${colors.colorPrimary}`} style={{ backgroundColor: colors.colorPrimary, borderRadius: "12px", color: colors.colorBlack }} />
            <Tooltip id={`tooltip-4`} arrowColor={`${colors.colorPrimary}`} style={{ backgroundColor: colors.colorPrimary, borderRadius: "12px", color: colors.colorBlack }} />
        </>
    )
}