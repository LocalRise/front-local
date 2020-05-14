export const fetchData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = [1, 2, 3, 4, 5, 6, 7, 8];
      resolve(data);
    });
  }, 10000);
};
