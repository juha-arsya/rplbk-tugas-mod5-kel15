import React, { useContext } from "react";
import { Context } from "../App";

export default function page1() {
  const data = useContext(Context);

  return (
    <div>
      <>
        {data
          .filter((x) => {
            return x.url[35] == "/" || (x.url[34] == 1 && x.url[35] == 0);
          })
          .map((d) => {
            return <p>{d.name}</p>;
          })}
      </>
    </div>
  );
}
