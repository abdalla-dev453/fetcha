const restaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    category: "Pizza",
    image: "https://picsum.photos/600/400?1",

    menu: [
      {
        id: 101,
        name: "Pepperoni Pizza",
        price: 1200,
      },
      {
        id: 102,
        name: "Margherita Pizza",
        price: 1000,
      },
    ],
  },

  {
    id: 2,
    name: "Burger Hub",
    category: "Burger",
    image: "https://picsum.photos/600/400?2",

    menu: [
      {
        id: 201,
        name: "Cheese Burger",
        price: 700,
      },
      {
        id: 202,
        name: "Double Burger",
        price: 950,
      },
    ],
  },

  {
    id: 3,
    name: "Sushi World",
    category: "Japanese",
    image: "https://picsum.photos/600/400?3",

    menu: [
      {
        id: 301,
        name: "Salmon Roll",
        price: 1500,
      },
    ],
  },
];

export default restaurants;