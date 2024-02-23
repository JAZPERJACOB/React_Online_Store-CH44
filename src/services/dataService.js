let catalog = [
    {
        "title":"Black Hoodie",
        "category":"Sweater",
        "price": 54.99,
        "image": "blackhoodie.jpg",
        "_id": "1",
    },
    {
        "title":"Aqua Hoodie",
        "category":"Sweater",
        "price": 54.99,
        "image": "bluehoodie.jpg",
        "_id": "2",
    },
    {
        "title":"LifeStyle Basketball Shorts",
        "category":"Shorts",
        "price": 44.99,
        "image": "shorts.jpg",
        "_id": "3",
    },
    {
        "title":"LifeStyle Sneakers",
        "category":"Shoes",
        "price": 99.99,
        "image": "sneakers.jpg",
        "_id": "4",
    },
    {
        "title":"LifeStyle Tank Top",
        "category":"Shirt",
        "price": 24.99,
        "image": "tanktop.jpg",
        "_id": "5",
    },
    {
        "title":"LifeStyle T-Shirt",
        "category":"Shirt",
        "price": 34.99,
        "image": "tshirt.jpg",
        "_id": "6",
    },

];


class DataService {

    getProducts(){
        return catalog;
    }

    addToCart(prod) {
        // add a product to local storage
        //local storage support string, json
        let cart = this.readCart();
        cart.push(prod);

        const jsonCart = JSON.stringify(cart);
        localStorage.setItem("cart", jsonCart);
        console.log(cart);
    }

    readCart() {
        // reads the cart from local storage
        const jsonCart = localStorage.getItem("cart");
        if(jsonCart) {
            return JSON.parse(jsonCart);
        }
        else {
            return []; // empty cart
        }
    }

};

export default DataService;