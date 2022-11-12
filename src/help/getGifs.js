export const getGifs = async ( category ) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=DGmdRZlXM7Ufrj9FAQ3pDsZ2oZ4PWPWP&q=${ category }&limit=10`;
  const resp = await fetch ( url );
  const { data } = await resp.json();

  const gifs = data.map ( e => ({
    id: e.id,
    title: e.title,
    url: e.images.downsized_medium.url
  }))

  return gifs;
};