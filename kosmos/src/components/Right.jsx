import React, { useEffect } from "react";
import DivFormOption from "./RightComponents/DivFormOption";
import DivFormSelec from "./RightComponents/DivFormSelec";
import DivFormInput from "./RightComponents/DivForm";

const Right = (props) => {
  const { data, delItem } = props;
  console.log(data)

  useEffect(() => {}, [data]);
  return (
    <div className="right-section">
      <form>
        {
            data.map(el => el.component === "text" ? (
                <DivFormInput key={el.uid} data={el} delItem={delItem} />
            ): null)
        }
        {
            data.map(el => el.component === "options" ? (
                <DivFormOption key={el.uid} data={el} delItem={delItem}/>
            ): null)
        }
        {
            data.map(el => el.component === "select" ? (
                <DivFormSelec key={el.uid} data={el} delItem={delItem}/>
            ): null)
        }
      </form>
    </div>
  );
};

export default Right;
