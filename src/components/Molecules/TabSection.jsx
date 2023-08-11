import React from "react";
import Tab from "../Atoms/Tab";

function TabSection({ item, onTabSectionClick }) {

  const handleTabClick = (key) => {
    onTabSectionClick(key)
  }

  return (
    <>
      <div className="col-span-1">
        <Tab onTabClick={handleTabClick} tab={item} />
      </div>
    </>
  )
}

export default TabSection;
