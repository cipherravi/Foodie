import RestaurantSearchFilterProvider from "./RestaurantSearchFilterProvider";
import AppStore from "../Store/AppStore";
import { Provider } from "react-redux";

function Providers({ children }) {
  return (
    <Provider store={AppStore}>
      <RestaurantSearchFilterProvider>
        {children}
      </RestaurantSearchFilterProvider>
    </Provider>
  );
}
export default Providers;
