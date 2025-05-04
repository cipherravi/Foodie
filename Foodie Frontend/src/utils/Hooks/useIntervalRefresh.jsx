import { useEffect } from "react";

function useIntervalRefresh(getRestaurants) {
  useEffect(() => {
    const intervalId = setInterval(() => {
      getRestaurants((data) => {
        sessionStorage.setItem("allRestaurant", JSON.stringify(data));
        sessionStorage.setItem("dataTimestamp", Date.now().toString());
      });
    }, 600000);

    // Cleanup interval when component is unmounted
    return () => {
      clearInterval(intervalId);
    };
  }, []);
}

export default useIntervalRefresh;
