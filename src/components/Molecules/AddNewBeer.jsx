import React from "react";
import Button from "../Atoms/Button";

function AddNewBeer({ onClickddNewbeerBtn }) {
  const handleOnClickButton = () => {
    onClickddNewbeerBtn();
  };
  return (
    <>
      <div class="col-end-10 col-span-1">
        <Button btnLabel={` Add a new beer`} onClickButton={handleOnClickButton} />
      </div>
    </>
  );
}

export default AddNewBeer;
