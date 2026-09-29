'use client'

import React from 'react'
import { Tooltip } from 'react-tooltip'

import 'react-tooltip/dist/react-tooltip.css'

export const DataTooltipComponent = () => {
    const tooltipIds = ['0', '1', '2', '3', '4', 'I', 'G', 'L', 'T']

    return (
        <>
            {tooltipIds.map(id => (
                <Tooltip 
                    key={`tooltip-${id}`}
                    id={`tooltip-${id}`} 
                    arrowColor={`rgb(244, 244, 244)`} 
                    style={{ 
                        zIndex: 9999, 
                        backgroundColor: 'rgb(244, 244, 244)', 
                        borderRadius: '10px', 
                        color: 'rgb(0, 0, 0)',
                        fontWeight: 600,
                        padding: '6px 14px',
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'
                    }} 
                />
            ))}
        </>
    )
}
