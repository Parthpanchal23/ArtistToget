import React from "react";

const LangSwitcher = () => {
  return (
    <div>
       
      <select
        // className="selectpicker language-switcher"
        data-selected-text-format="count"
        data-size="5"
      >
        <option selected>English</option>
        <option>Français</option>
        <option>Español</option>
        <option>Deutsch</option>
      </select>
    </div>
  );
};

export default LangSwitcher;
