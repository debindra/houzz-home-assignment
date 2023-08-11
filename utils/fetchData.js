export const getAllBeers = async (page) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const res = await fetch(`${baseUrl}/beers?page=${page}&per_page=2`);
  return res.json();
};


