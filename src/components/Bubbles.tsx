'use client';
import React from 'react';

const Bubbles = () => {
  return (
    <>
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className= "absolute w-2 h-2 md:w-3 md:h-3 bg-white rounded-full opacity-10 animate-bounce pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        ></div>
      ))}
    </>
  );
};

export default Bubbles;
