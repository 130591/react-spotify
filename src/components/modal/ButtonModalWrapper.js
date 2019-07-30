import React from "react";

import { Button } from "../../components/buttons/index";

export const ButtonWrapper = ({ execute, cancele }) => {
  return (
    <div className="buttonContainer">
      <Button styled={"btn--cancele"} onPress={cancele}>
        cancelar
      </Button>
      <Button styled={"btn--playlist"} onPress={execute}>
        Criar
      </Button>
    </div>
  );
};
