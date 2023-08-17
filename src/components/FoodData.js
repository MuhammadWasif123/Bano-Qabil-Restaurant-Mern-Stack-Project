const Fooddata = [
  {
    id: 1,
    fname: "Chicken Biryani",
    imgsource:
      "https://img.freepik.com/free-photo/plate-biryani-with-bunch-food-it_505751-3819.jpg",
    description: "Karachi Style,Spicy Biryani",
    safeimg:
      "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
    somedata: "1415 + order placed recently from here",
    price: "PKR 290",
    rating: "4.4",
    arrowimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
  },
  {
    id: 2,
    fname: "Zinger Burger",
    imgsource:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8emluZ2VyJTIwYnVyZ2VyfGVufDB8fDB8fHww&w=1000&q=80",
    description: "Served with Coleslaw & Fries",
    safeimg:
      "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
    somedata: "1415 + order placed recently from here",
    price: "PKR 450",
    rating: "4.1",
    arrowimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
  },
  {
    id: 3,
    fname: "Chicken Shashlik",
    imgsource:
      "https://img.freepik.com/premium-photo/chicken-shashlik-chicken-manchurian-with-salad-fried-rice-served-dish-isolated-grey-background-side-view-indian-pakistani-food_689047-3033.jpg?w=2000",
    description: "Spicy Gravy & Served with Rice",
    safeimg:
      "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
    somedata: "1415 + order placed recently from here",
    price: "PKR 520",
    rating: "4.0",
    arrowimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
  },
  {
    id: 4,
    fname: "Beef Nihari",
    imgsource:
      "https://media.istockphoto.com/id/1389015478/photo/nihari-with-naan.jpg?s=612x612&w=0&k=20&c=YBmZlHo-cZxJ1FOsEwR0PR5SWNTKWbhw6VsOWi0REoM=",
    description: "Mouth Watering Nihari & Nans",
    safeimg:
      "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
    somedata: "1415 + order placed recently from here",
    price: "PKR 850",
    rating: "3.8",
    arrowimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
  },
  {
    id: 5,
    fname: "Chicken Broast",
    imgsource:
      "https://img.freepik.com/free-photo/crispy-fried-chicken-plate-with-salad-carrot_1150-20212.jpg?w=2000",
    description: "Crispy Broast, Bun & Fries",
    safeimg:
      "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
    somedata: "1415 + order placed recently from here",
    price: "PKR 480",
    rating: "4.9",
    arrowimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
  },
  {
    id: 6,
    fname: "Chicken Tikka",
    imgsource:
      "https://media.istockphoto.com/id/967274038/photo/homemade-chicken-tikka-masala.webp?b=1&s=170667a&w=0&k=20&c=8eSCPcx7Hx3ckeHtSlaCHW8rx2mRntHz5lXGx9-XZHU=",
    description: "Spicy Tikka with Chutney",
    safeimg:
      "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
    somedata: "1415 + order placed recently from here",
    price: "PKR 420",
    rating: "3.9",
    arrowimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
  },
  {
    id: 7,
    fname: "Pizza",
    imgsource:
      "https://www.verdictfoodservice.com/wp-content/uploads/sites/17/2023/04/Rudys-Pizza-Napoletana.jpg",
    description: "Creamy & Saucy,Ketchup",
    safeimg:
      "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
    somedata: "1415 + order placed recently from here",
    price: "PKR 800",
    rating: "4.3",
    arrowimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
  },
  {
    id: 8,
    fname: "Mughlai Karahi",
    imgsource:
      "https://images.unsplash.com/photo-1603496987351-f84a3ba5ec85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGthcmFoaXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    description: "Creamy & Sizzling",
    safeimg:
      "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
    somedata: "1415 + order placed recently from here",
    price: "PKR 1500 Half",
    rating: "4.7",
    arrowimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
  },
  {
    id: 9,
    fname: "Chicken Parathe",
    imgsource:
      "https://b.zmtcdn.com/data/pictures/chains/5/110225/3978e28854b7496dbef9496546734811_o2_featured_v2.jpg",
    description: "Mouthwatering & Delicious",
    safeimg:
      "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
    somedata: "1415 + order placed recently from here",
    price: "PKR 220",
    rating: "3.5",
    arrowimg:
      "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
  },
];

export default Fooddata;