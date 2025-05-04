const useItemFilter = (finalData, searchInput) => {
  const searchTerm = searchInput?.toLowerCase()?.replace(/\s+/g, "");

  const filteredData = finalData
    ?.filter((item) => {
      const itemName = item?.name?.toLowerCase()?.replace(/\s+/g, "");
      return itemName?.includes(searchTerm);
    })
    ?.sort((a, b) => {
      const aName = a?.name?.toLowerCase()?.replace(/\s+/g, "");
      const bName = b?.name?.toLowerCase()?.replace(/\s+/g, "");

      const aStarts = aName.startsWith(searchTerm) ? 0 : 1;
      const bStarts = bName.startsWith(searchTerm) ? 0 : 1;

      // Prioritize starting matches first
      if (aStarts !== bStarts) {
        return aStarts - bStarts;
      }

      // Then sort alphabetically
      return aName.localeCompare(bName);
    });

  return { filteredData };
};

export default useItemFilter;
