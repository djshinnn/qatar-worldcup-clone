import React, { useMemo, useState } from "react";

export const MatchContext = React.createContext(null);

export const MatchContextProvider = ({ children }) => {
  const [isFilter, setIsFilter] = useState(false);

  const values = useMemo(
    () => ({ isFilter, setIsFilter }),
    [isFilter, setIsFilter]
  );

  return (
    <MatchContext.Provider value={values}>{children}</MatchContext.Provider>
  );
};

export default function useMatchInfo() {
  const context = React.useContext(MatchContext);

  if (context === undefined) {
    throw new Error(
      "useMatchInfo hook must be used with a MatchContextProvider component"
    );
  }

  return context;
}
