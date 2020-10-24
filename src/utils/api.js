export async function getAllPlayers(name) {
  let url = `https://www.balldontlie.io/api/v1/players/`;
  if (name) {
    url += `?search=${name}`;
  }
  const response = await fetch(url);
  const results = await response.json();
  return results.data;
}
