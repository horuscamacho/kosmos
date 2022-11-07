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
        {/* {data.map((el) =>
          el[0].component === "text" ? (
            <DivFormInput key={el[0].uid} data={el} deleteItem={delItem} />
          ) : null
        )}
        {data.map((el) =>
          el[0].component === "options" ? (
            <DivFormOption key={el[0].uid} data={el} deleteItem={delItem} />
          ) : null
        )}
        {data.map((el) =>
          el[0].component === "select" ? (
            <DivFormSelec key={el[0].uid} data={el} deleteItem={delItem} />
          ) : null
        )} */}
        {
            data.map(el => el.component === "text" ? (
                <DivFormInput data={el} />
            ): null)
        }
        {
            data.map(el => el.component === "options" ? (
                <DivFormOption data={el} />
            ): null)
        }
        {
            data.map(el => el.component === "select" ? (
                <DivFormSelec data={el} />
            ): null)
        }
      </form>
    </div>
  );
};

export default Right;
