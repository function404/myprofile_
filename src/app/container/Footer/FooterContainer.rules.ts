'use client';

import { useEffect, useRef } from 'react';
import { useAnimation, useInView } from 'framer-motion';

export const useFooterContainerRules = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
 
    const mainControls = useAnimation();
 
    useEffect(() => {
       if (isInView) {
          mainControls.start('visible');
       }
    }, [isInView, mainControls]);

    return {
        ref,
        mainControls,
    }
}
