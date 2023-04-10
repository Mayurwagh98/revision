import React, { useState } from "react";

let HOC = (OriginalComponent) => {
  let NewComponent = () => {
    const [money, setMoney] = useState(10);

    const handleInc = () => {
      setMoney(money * 2);
    };

    return <OriginalComponent handleInc={handleInc} money={money} />;
  };

  return NewComponent;
};

export { HOC };
