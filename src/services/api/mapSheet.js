/**
 *
 * @param {Array} data array of element that match head by index
 * @param {Array} head
 */
export const mapByMenu = (data) => {
  const head = data[2];
  data = data.slice(3).map((item) => {
    let object = {};
    item.map((i, ind) => (object[head[ind]] = i));
    return object;
  });
  return data;
};

export const mapByResDetail = (data) => {
  return data[1].reduce((p, c, ind) => {
    p[data[0][ind]] = c;
    return p;
  }, {});
};

export const mapByRestaurant = (data) => {
  const head = data[0];
  data = data.slice(1).map((item) => {
    let object = {};
    item.map((i, ind) => (object[head[ind]] = i));
    return object;
  });
  return data;
};
