export default function FoodList() {

const dummyData = [
{
    title: "Biryani",
    img: "/src/assets/img1.jpg",
    paragraph: "Bht hi barhiyah Biryani, mazeydaar",
    quantity: 7
},
{
    title: "Burger",
    img: "/src/assets/img2.jpg",
    paragraph: "Juicy burger with extra cheese",
    quantity: 5
},
{
    title: "Pizza",
    img: "/src/assets/img3.webp",
    paragraph: "Cheesy pizza with crispy crust",
    quantity: 10
},
{
    title: "Pasta",
    img: "/src/assets/img4.jpg",
    paragraph: "Creamy white sauce pasta",
    quantity: 4
},{
    title: "Karahi",
    img: "/src/assets/img5.jpg",
    paragraph: "Spicy chicken karahi full of flavor",
    quantity: 6
},
{
    title: "Fries",
    img: "/src/assets/img6.jpg",
    paragraph: "Crispy golden french fries",
    quantity: 12
},
{
    title: "Sandwich",
    img: "/src/assets/img7.jpg",
    paragraph: "Fresh club sandwich with sauce",
    quantity: 3
},
{
    title: "Shawarma",
    img: "/src/assets/img8.jpg",
    paragraph: "Arabic style shawarma roll",
    quantity: 8
},
{
    title: "Nihari",
    img: "/src/assets/img9.jpg",
    paragraph: "Traditional beef nihari, super tasty",
    quantity: 2
},
{
    title: "Ice Cream",
    img: "/src/assets/img10.jpg",
    paragraph: "Cold and sweet vanilla ice cream",
    quantity: 15
}
];

return (
    <ul id='foodlist'>
    {
        dummyData.map(function(foodItem, index) {
        return (
            <li key={index}>
            <div id='imgArea'>
                <img src={foodItem.img} alt="" />
            </div>
            <div>
                <h4>{foodItem.title}</h4>
                <p>{foodItem.paragraph}</p>
                <p className= 'quantity'>{foodItem.quantity == 0 ? 'Sold Out' : `Quantity: ${foodItem.quantity}`} {foodItem.quantity >= 20 ? "Buy 1 Get 1 Free" : ""}</p>
            </div>
            </li>
        )
        })
    }
    </ul>
)
}