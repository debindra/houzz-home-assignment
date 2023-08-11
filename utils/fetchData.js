const getAllBeers = async(page = 1)=>{
    const baseUrl = "https://api.punkapi.com/v2";
    const res = await fetch(`${baseUrl}/beers?page=${page}&per_page=10`);
    return await res.json();
  }

  export default getAllBeers

