export const fetchData = async () =>
  new Promise((resolve) => setTimeout(resolve, 2000, [1, 2, 3, 4, 5, 6, 7, 8]));
