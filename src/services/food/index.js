import React, { useContext } from "react";

export const FoodContext = React.createContext({});
export const useFood = () => useContext(FoodContext);
export const FoodProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState();

  return <FoodContext.Provider value={{}}>{children}</FoodContext.Provider>;
};
