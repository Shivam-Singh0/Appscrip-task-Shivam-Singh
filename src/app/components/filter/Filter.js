"use client";

import { useContext, useState } from "react";
import styles from "./filter.module.css";
import Image from "next/image";
import arrowDown from "./arrow-down.png";
import arrowUp from "./arrow-up.png";
import { UseContext } from "../Context";

const Filter = () => {
  const {ShowFilter} = UseContext();
  const [filters, setFilters] = useState({
    customizable: false,
    idealFor: {
      men: { status: false, name: "Men" },
      women: { status: false, name: "Women" },
      babyAndKids: { status: false, name: "Baby & Kids" },
    },
    occasion: {
      all: { status: false, name: "All" },
    },
    work: {
      all: { status: false, name: "All" },
    },
    fabric: {
      all: { status: false, name: "All" },
    },
    segment: {
      all: { status: false, name: "All" },
    },
    suitableFor: {
      all: { status: false, name: "All" },
    },
    rawMaterials: {
      all: { status: false, name: "All" },
    },
    pattern: {
      all: { status: false, name: "All" },
    },
  });

  const [expanded, setExpanded] = useState({
    idealFor: true,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false,
  });

  const toggleCheckbox = (category, subCategory) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: {
        ...prevFilters[category],
        [subCategory]: {
          ...prevFilters[category][subCategory],
          status: !prevFilters[category][subCategory].status,
        },
      },
    }));
  };

  const toggleSection = (section) => {
    setExpanded((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const renderSection = (sectionKey, sectionLabel) => (
    <div className={styles.section}>
        
      <div style={{display: "flex", justifyContent: "space-between", cursor: "pointer"}} onClick={() => toggleSection(sectionKey)}>
       
        <h3  className={styles.header}>
        {sectionLabel} 

      </h3> <Image src={expanded[sectionKey] ? arrowUp : arrowDown} alt="arrow" height={16} width={16} />
    
      </div>
      <p>All</p>
      {expanded[sectionKey] && (
        <div className={styles.options}>
          {Object.keys(filters[sectionKey]).map((key) => (
            <label key={key}>
              <input
                type="checkbox"
                checked={filters[sectionKey][key].status}
                onChange={() => toggleCheckbox(sectionKey, key)}
              />
              <span>{filters[sectionKey][key].name}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );

  if (!ShowFilter) {
    return null;
  }

  return (
    <div className={styles.sidebar}>
      {/* Customizable */}
      <div className={styles.section} style={{borderBottom: "1px solid #E5E5E5", width: "100%", paddingBottom: "1rem"}}>
        <label>
          <input
            type="checkbox"
            checked={filters.customizable}
            onChange={() =>
              setFilters((prev) => ({
                ...prev,
                customizable: !prev.customizable,
              }))
            }
          />
          <span style={{fontWeight: "bold"}}>CUSTOMIZABLE</span>
        </label>
      </div>

      {/* Dynamic Sections */}
      {renderSection("idealFor", "IDEAL FOR")}
      {renderSection("occasion", "OCCASION")}
      {renderSection("work", "WORK")}
      {renderSection("fabric", "FABRIC")}
      {renderSection("segment", "SEGMENT")}
      {renderSection("suitableFor", "SUITABLE FOR")}
      {renderSection("rawMaterials", "RAW MATERIALS")}
      {renderSection("pattern", "PATTERN")}
    </div>
  );
};

export default Filter;
