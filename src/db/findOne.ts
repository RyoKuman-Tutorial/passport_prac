import userData from "./users";

function findOne(id: string) {
  const result = userData.filter((e) => e.id === id);
  return result[0] || false;
}

export default findOne;
