import RestaurantSearchFilterProvider from "./RestaurantSearchFilterProvider";

function Providers({ children }) {
  return (
    <RestaurantSearchFilterProvider>{children}</RestaurantSearchFilterProvider>
  );
}
export default Providers;
