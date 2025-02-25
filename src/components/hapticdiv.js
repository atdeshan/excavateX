import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { RGBAFormat } from "three";

const HapticDiv = () => {
  const [inView, setInView] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          // Trigger haptic feedback
          if (navigator.vibrate) {
            navigator.vibrate(100); // Vibrates for 100ms
          }
        } else {
          setInView(false);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the div is visible
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);

  return (
    <div>
      
      
      
      <motion.div
        ref={divRef}
        initial={{ scale: 1 }}
        animate={inView ? { scale: 1.2 } : { scale: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{
          padding: "5px",
          width: "auto",
          height: "auto",
          backgroundColor: "rgba(252, 157, 3, 0.9)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
      >
        <div className="pricing">
        <table>
          <thead>
            <tr>
              <th>Hours</th>
              <th>Rate (Per Hour)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Under 10 Hours</td>
              <td>1500 LKR</td>
            </tr>
            <tr>
              <td>10 - 50 Hours</td>
              <td>1400 LKR</td>
            </tr>
            <tr>
              <td>50 - 100 Hours</td>
              <td>1300 LKR</td>
            </tr>
            <tr>
              <td>Above 100 Hours</td>
              <td>1200 LKR</td>
            </tr>
          </tbody>
        </table>
      </div>
      </motion.div>
    </div>
    
    
  );
};

export default HapticDiv;
