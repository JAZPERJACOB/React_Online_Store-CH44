let catalog = [
    {
        "title":"Black LifeStyle Hoodie",
        "category":"Sweater",
        "price": 54.99,
        "image": "blackhoodie.jpg",
        "_id": "1",
    }

];

class DataService {

    getProducts(){
        return catalog;
    }

};

export default DataService;