import React, { useState, useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import { ProgressBar } from "react-bootstrap";
import uuid from "uuid";

export default function Combat() {
  const [storeCard] = useContext(DataContext);

  useEffect(() => {}, []);

  return (
    <>
      {storeCard.stats.map((skills, index) => (
        <div className="skills_container" key={uuid()}>
          <p className="skills" key={uuid()}>
            {skills.stat.name}
            {console.log(skills)}
          </p>
          <ProgressBar
            key={uuid()}
            variant="length"
            now={storeCard.stats[index].base_stat}
            label={`${storeCard.stats[index].base_stat}`}
          />
        </div>
      ))}
    </>
  );
}
