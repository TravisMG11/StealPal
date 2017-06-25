export const asArray = ({ restaurants }) => (
  Object.keys(restaurants).map(key => restaurants[key])
);
