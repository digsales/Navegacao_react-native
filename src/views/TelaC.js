import React from "react";
import TextoCentral from "../components/TextoCentral";

export default (props) => {
  const route = props.route || 0;

  return (
    <TextoCentral corFundo={"green"}>
      Tela C - {route.params.numero || 0}
    </TextoCentral>
  );
};
