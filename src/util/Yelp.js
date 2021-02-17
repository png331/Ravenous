const apiKey = '906Ysr5qEQeeZkxqqM4mpTmsufgM5Oa71ZMJl-hbgBkklVWop9eA9k7U2oCg5yKDtb_INH9DxQ2TXNXoeocLmiB3JaYDngN6nB3UEnxAnOoq-6FOFxwloYD9uAosYHYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json()
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
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
            else {
                alert('Unable to find any places with this criterea');

            }
        }).catch(error => {
             console.log(error);
        })
    }
}

export default Yelp;