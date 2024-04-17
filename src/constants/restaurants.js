// price rating
const affordable = 1
const fairPrice = 2
const expensive = 3

const restaurantData = [
    {
        id: 1,
        name: "Aloha Burgers",
        rating: 4.6,
        categories: [5, 7],
        priceRating: affordable,
        image: require('../assets/images/burger-restaurant.jpg'),
        duration: "30 - 45 min",
        location: {
            latitude: 1.5347282806345879,
            longitude: 110.35632207358996,
        },
        courier: {
            //avatar: images.//avatar_1,
            name: "Amy"
        },
        menu: [
            {
                menuId: 1,
                name: "Crispy Chicken Burger",
                image: require('../assets/images/crispy-chicken-burger.jpg'),
                description: "Burger with crispy chicken, cheese and lettuce",
                calories: 200,
                price: 10
            },
            {
                menuId: 2,
                name: "Crispy Chicken Burger with Honey Mustard",
                image: require('../assets/images/honey-mustard-chicken-burger.jpg'),
                description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
                calories: 250,
                price: 15
            },
            {
                menuId: 3,
                name: "Crispy Baked French Fries",
                image: require('../assets/images/baked-fries.jpg'),
                description: "Crispy Baked French Fries",
                calories: 194,
                price: 8
            }
        ]
    },
    {
        id: 2,
        name: "Pizza Wave",
        rating: 4.2,
        categories: [2, 4, 6],
        priceRating: expensive,
        image: require('../assets/images/pizza-restaurant.jpg'),
        duration: "15 - 20 min",
        location: {
            latitude: 1.556306570595712,
            longitude: 110.35504616746915,
        },
        courier: {
            //avatar: images.//avatar_2,
            name: "Jackson"
        },
        menu: [
            {
                menuId: 4,
                name: "Hawaiian Pizza",
                image: require('../assets/images/hawaiian-pizza.jpg'),
                description: "Canadian bacon, homemade pizza crust, pizza sauce",
                calories: 250,
                price: 15
            },
            {
                menuId: 5,
                name: "Tomato & Basil Pizza",
                image: require('../assets/images/pizza.jpg'),
                description: "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
                calories: 250,
                price: 20
            },
            {
                menuId: 6,
                name: "Tomato Pasta",
                image: require('../assets/images/tomato-pasta.jpg'),
                description: "Pasta with fresh tomatoes",
                calories: 100,
                price: 10
            },
            {
                menuId: 7,
                name: "Mediterranean Chopped Salad ",
                image: require('../assets/images/salad.jpg'),
                description: "Finely chopped lettuce, tomatoes, cucumbers",
                calories: 100,
                price: 10
            }
        ]
    },
    {
        id: 3,
        name: "HotsiDogsy",
        rating: 4.3,
        categories: [3],
        priceRating: expensive,
        image: require('../assets/images/hot-dog-restaurant.jpg'),
        duration: "20 - 25 min",
        location: {
            latitude: 1.5238753474714375,
            longitude: 110.34261833833622,
        },
        courier: {
            //avatar: images.//avatar_3,
            name: "James"
        },
        menu: [
            {
                menuId: 8,
                name: "Chicago Style Hot Dog",
                image: require('../assets/images/chicago-hot-dog.jpg'),
                description: "Fresh tomatoes, all beef hot dogs",
                calories: 100,
                price: 20
            }
        ]
    },
    {
        id: 4,
        name: "Sushi Place",
        rating: 4.5,
        categories: [8],
        priceRating: expensive,
        image: require('../assets/images/japanese-restaurant.jpg'),
        duration: "10 - 15 min",
        location: {
            latitude: 1.5578068150528928,
            longitude: 110.35482523764315,
        },
        courier: {
            //avatar: images.//avatar_4,
            name: "Ahmad"
        },
        menu: [
            {
                menuId: 9,
                name: "Sushi sets",
                image: require('../assets/images/sushi.jpg'),
                description: "Fresh salmon, sushi rice, fresh juicy avocado",
                calories: 100,
                price: 50
            }
        ]
    },
    {
        id: 5,
        name: "TheKitchen 24HS",
        rating: 4.1,
        categories: [1, 2],
        priceRating: affordable,
        image: require('../assets/images/noodle-shop.jpg'),
        duration: "15 - 20 min",
        location: {
            latitude: 1.558050496260768,
            longitude: 110.34743759630511,
        },
        courier: {
            //avatar: images.//avatar_4,
            name: "Muthu"
        },
        menu: [
            {
                menuId: 10,
                name: "Kolo Mee",
                image: require('../assets/images/kolo-mee.jpg'),
                description: "Noodles with char siu",
                calories: 200,
                price: 5
            },
            {
                menuId: 11,
                name: "Sarawak Laksa",
                image: require('../assets/images/sarawak-laksa.jpg'),
                description: "Vermicelli noodles, cooked prawns",
                calories: 300,
                price: 8
            },
            {
                menuId: 12,
                name: "Nasi Lemak",
                image: require('../assets/images/nasi-lemak.jpg'),
                description: "A traditional Malay rice dish",
                calories: 300,
                price: 8
            },
            {
                menuId: 13,
                name: "Nasi Briyani with Mutton",
                image: require('../assets/images/nasi-briyani-mutton.jpg'),
                description: "A traditional Indian rice dish with mutton",
                calories: 300,
                price: 8
            },

        ]
    },
    {

        id: 6,
        name: "SweetSpot Cakes",
        rating: 3.9,
        categories: [9, 10],
        priceRating: affordable,
        image: require('../assets/images/kek-lapis-shop.jpg'),
        duration: "35 - 40 min",
        location: {
            latitude: 1.5573478487252896,
            longitude: 110.35568783282145,
        },
        courier: {
            //avatar: images.//avatar_1,
            name: "Jessie"
        },
        menu: [
            {
                menuId: 14,
                name: "Teh C Peng",
                image: require('../assets/images/teh-c-peng.jpg'),
                description: "Three Layer Teh C Peng",
                calories: 100,
                price: 2
            },
            {
                menuId: 15,
                name: "ABC Ice Kacang",
                image: require('../assets/images/ice-kacang.jpg'),
                description: "Shaved Ice with red beans",
                calories: 100,
                price: 3
            },
            {
                menuId: 16,
                name: "Kek Lapis",
                image: require('../assets/images/kek-lapis.jpg'),
                description: "Layer cakes",
                calories: 300,
                price: 20
            }
        ]

    }


]

export default restaurantData;