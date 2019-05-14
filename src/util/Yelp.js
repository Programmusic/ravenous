// Client ID ggYDvyvsmfAvjFXZ4SkflA
const apiKey = "neQ_5AgSyuBNRR4QBeBm_ko-uHTKR7yPw5TI95UoAIy7TglXURRI4WjA7ex2uq4cIyKK2suwscCwtkGtk2mtVOaeJHAId4tA8tPcxTs7j1ZBsLeZbQE7lfcwD_HZXHYx";

const Yelp = {

search(term, location, sortBy) {
     return fetch(
  k  `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
    {
      headers: {
      Authorization: `Bearer ${apiKey}`
    }
  }).then(response => {
    return response.json()
  }).then(jsonResponse => {
    if(jsonResponse.businesses){
      return jsonResponse.businesses.map(business =>{
        return {
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }
      })
    }
  });

},
};

export default Yelp;
