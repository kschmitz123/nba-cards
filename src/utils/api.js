export async function getAllPlayers(name, page = 1) {
  let url = `https://www.balldontlie.io/api/v1/players/?page=${page}`;
  if (name) {
    url += `&search=${name}`;
  }
  const response = await fetch(url);
  const results = await response.json();
  return results;
}
