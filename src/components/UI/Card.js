import React from "react";

import { useMemo } from "react";
import "./Card.css";

function Card({ className, children }) {
  const classes = useMemo(() => `card ${className}`, [className]);

  return <div className={classes}>{children}</div>;
}

export default Card;
