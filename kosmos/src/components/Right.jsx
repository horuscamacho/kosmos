import React, { useEffect } from "react";
import DivFormOption from "./RightComponents/DivFormOption";
import DivFormSelec from "./RightComponents/DivFormSelec";
import DivFormInput from "./RightComponents/DivForm";

const Right = (props) => {
  const { data, delItem } = props;

  useEffect(() => {}, [data]);
  return (
    <div className="right-section">
      <form>
        {data.map((el) =>
          el[0].component === "text" ? (
            <DivFormInput key={el.uid} data={el} delete={delItem} />
          ) : null
        )}
        {data.map((el) =>
          el[0].component === "options" ? (
            <DivFormOption key={el.uid} data={el} delete={delItem} />
          ) : null
        )}
        {data.map((el) =>
          el[0].component === "select" ? (
            <DivFormSelec key={el.uid} data={el} delete={delItem} />
          ) : null
        )}
      </form>
    </div>
  );
};

export default Right;
