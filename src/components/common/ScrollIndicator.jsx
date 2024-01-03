import React from "react";
import { useEffect, useState } from "react";
("use client");

const ScrollIndicator = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handler = () => {
      const documentElement = document.documentElement;
      // get the scroll top position
      const scrolled = documentElement.scrollTop;
      // calculate the max height of the document
      const maxHeight =
        documentElement.scrollHeight - documentElement.clientHeight;
      // calculate the percentage
      const scrollPercent = (scrolled / maxHeight) * 100;
      // update state
      setScroll(scrollPercent);
    };

    // add event listener
    window.addEventListener("scroll", handler);
    // remove event listener on unmount
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <div className="bg-indigo-300 fixed top-5 h-5 w-screen">
      <div
        className="bg-indigo-500 h-full"
        style={{ width: scroll + "%" }}
      ></div>
    </div>
  );
};

export default ScrollIndicator;
