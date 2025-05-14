import RestaurantSearchFilterProvider from "./RestaurantSearchFilterProvider";
import { AuthProvider } from "./AuthContext";
import UserInfoProvider from "./UserInfoContext";
import AppStore from "../Store/AppStore";
import { Provider } from "react-redux";

function Providers({ children }) {
  return (
    <Provider store={AppStore}>
      <AuthProvider>
        <UserInfoProvider>
          <RestaurantSearchFilterProvider>
            {children}
          </RestaurantSearchFilterProvider>
        </UserInfoProvider>
      </AuthProvider>
    </Provider>
  );
}
export default Providers;
