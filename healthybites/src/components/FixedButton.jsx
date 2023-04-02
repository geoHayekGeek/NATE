import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const FixedButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    return showButton ? (
        <button className="btn text-white" onClick={handleClick} style={{ position: "fixed", bottom: "20px", right: "20px", borderRadius: "50%", backgroundColor: "rgba(0,0,0,0)", border: "none" }}>
            <FontAwesomeIcon icon={faChevronUp} />
        </button>
    ) : null;
  };
    

export default FixedButton;