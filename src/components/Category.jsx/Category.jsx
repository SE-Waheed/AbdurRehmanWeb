import { useNavigate } from "react-router-dom";
const category = [
    {
        image:`https://img.freepik.com/free-vector/colorful-round-tasty-pizza_1284-10219.jpg`,
   name:'pizza'
    },
    // {
    //     image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png',
    //     name: 'burger'
    // },
    {
        image: `https://img.freepik.com/free-psd/fresh-beef-burger-isolated-transparent-background_191095-9018.jpg?ga=GA1.1.1814296068.1730618891&semt=ais_hybrid`,
        name: 'Burger'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png',
        name: 'shawarama'
    },
    {
        image: `https://img.freepik.com/free-photo/fresh-cola-drink-glass_144627-16204.jpg?ga=GA1.1.1814296068.1730618891&semt=ais_hybrid`,
        name: 'cold Drink'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png',
        name: ' Sandwiches'
    },
    {
        image: `https://img.freepik.com/free-photo/close-up-fried-chicken-drumsticks_23-2148682835.jpg?ga=GA1.1.1814296068.1730618891&semt=ais_hybrid`,
        name: ' Fried Chicken'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png',
        name: 'Seafood Fast Food'
    }
]

const Category = () => {
    const navigate=useNavigate()
    return (
        <div>
            <div className="flex flex-col mt-5">
                {/* main 1 */}
                <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
                    {/* main 2  */}
                    <div className="flex ">
                        {/* category  */}
                        {category.map((item, index) => {
                            const {name}=item
                            return (
                                <div key={index} className="px-3 lg:px-10">
                                    {/* Image  */}
                                    <div className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-pink-500 transition-all hover:bg-pink-400 cursor-pointer mb-1 " >
                                        <div onClick={()=>navigate(`/categoryPage/${name}`)} className="flex justify-center mb-12">
                                            {/* Image tag  */}
                                            <img src={item.image} alt="img" />
                                        </div>
                                    </div>

                                    {/* Name Text  */}
                                    <h1 className=' text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase '>{item.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* style  */}
            <style dangerouslySetInnerHTML={{ __html: ".hide-scroll-bar {  -ms-overflow-style: none;  scrollbar-width: none;}.hide-scroll-bar::-webkit-scrollbar {  display: none;}" }} />
        </div>
    );
}

export default Category;