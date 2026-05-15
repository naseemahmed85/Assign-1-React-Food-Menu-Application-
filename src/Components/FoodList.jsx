
export default function FoodList() {

const dummyData = [
{
    title: "Biryani",
    img: "img1.jpg",
    paragraph: "Bht hi barhiyah Biryani, mazeydaar",
    quantity: 7
},
{
    title: "Burger",
    img: "/img2.jpg",
    paragraph: "Juicy burger with extra cheese",
    quantity: 5
},
{
    title: "Pizza",
    img: "/img3.webp",
    paragraph: "Cheesy pizza with crispy crust",
    quantity: 10
},
{
    title: "Pasta",
    img: "/img4.jpg",
    paragraph: "Creamy white sauce pasta",
    quantity: 4
},
{
    title: "Karahi",
    img: "/img5.jpg",
    paragraph: "Spicy chicken karahi full of flavor",
    quantity: 6
},
{
    title: "Fries",
    img: "/img6.jpg",
    paragraph: "Crispy golden french fries",
    quantity: 12
},
{
    title: "Sandwich",
    img: "/img7.jpg",
    paragraph: "Fresh club sandwich with sauce",
    quantity: 3
},
{
    title: "Shawarma",
    img: "/img8.jpg",
    paragraph: "Arabic style shawarma roll",
    quantity: 8
},
{
    title: "Nihari",
    img: "/img9.jpg",
    paragraph: "Traditional beef nihari, super tasty",
    quantity: 2
},
{
    title: "Ice Cream",
    img: "/img10.jpg",
    paragraph: "Cold and sweet vanilla ice cream",
    quantity: 15
}
];

return (
    <ul id='foodlist'>

    {
        dummyData.map((foodItem, index) => {

        return (

            <li className='foodCard' key={index}>

            <div id='imgArea'>

                <img src={foodItem.img} alt={foodItem.title} />

                {
                    foodItem.quantity >= 10 &&
                    <span className='offerTag'>
                        Popular
                    </span>
                }

            </div>

            <div className='foodContent'>

                <h4>{foodItem.title}</h4>

                <p>{foodItem.paragraph}</p>

                <p className='quantity'>

                {
                    foodItem.quantity === 0
                    ? "Sold Out"
                    : `Available Quantity: ${foodItem.quantity}`
                }

                </p>

                <div className='cardBtns'>

                    <button className='orderBtn'>
                        Order Now
                    </button>

                    <button className='detailsBtn'>
                        Details
                    </button>

                </div>

            </div>

            </li>

        )

        })
    }

    </ul>
)
}