const useRestaurantFilteredData = (allRestaurant, searchInput) => {
  const filteredData = allRestaurant?.filter((restaurant) => {
    const restaurantName = restaurant?.info?.name
      ?.toLowerCase()
      ?.replace(/\s+/g, "");
    const searchTerm = searchInput?.toLowerCase()?.replace(/\s+/g, "");
    return restaurantName?.includes(searchTerm);
  });
  return { filteredData };
};

export default useRestaurantFilteredData;
