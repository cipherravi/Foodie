import RestaurantSearchFilterProvider from "./RestaurantSearchFilterProvider";
import { AuthProvider } from "./AuthContext";
import AppStore from "../Store/AppStore";
import { Provider } from "react-redux";

function Providers({ children }) {
  return (
    <Provider store={AppStore}>
      <AuthProvider>
        <RestaurantSearchFilterProvider>
          {children}
        </RestaurantSearchFilterProvider>
      </AuthProvider>
    </Provider>
  );
}
export default Providers;
