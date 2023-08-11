import React from "react";

function Button({ btnLabel, onClickButton }) {
  const onClickHandler = () => {
    onClickButton();
  };
  return (
    <>
      <button
        onClick={onClickHandler}
        type="button"
        className="ml-50 text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-4 py-1.5  mb-2"
      >
        {btnLabel}
      </button>
    </>
  );
}

export default Button;
