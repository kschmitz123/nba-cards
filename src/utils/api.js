export async function getALlPlayers(name) {
  let url = `https://www.balldontlie.io/api/v1/players`;
  if (name) {
    url += `?search=${name}`;
  }
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
