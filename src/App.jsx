import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from "./pages/Frontend/layout/Layout"
import Home from "./pages/Frontend/Home"
import Registration from "./pages/Auth/Registration/Registration"
import Login from "./pages/Auth/Login/Login"
import ContactUs from "./pages/ContactUs/ContactUs"
import Dashboard from "./pages/admin/Dashboard/Dashboard"
import AllProducts from "./pages/Products/allProduct/AllProducts"
// import Cart from "./pages/Products/cart/Cart"
import Cart from "./pages/Products/cart/Cart";
import Order from "./pages/Products/order/Order"
import ProductInfo from "./pages/Products/ProductInfo/ProductInfo"
import Team from "./pages/Frontend/Team/Team"
import About from "./pages/Frontend/About/About"
import { useAuthContext } from "./context/AuthContext/AuthContext";
import ProtectedRouteForAdmin from "./ProtectedRoute/ProtectedRouteForAdmin";
import CategoryPage from "./pages/Products/categoryPage/CategoryPage";
import User from "./pages/user/user";
import Watchlist from "./pages/watchList/Watchlist";
import UserDashboard from "./pages/userDashboard/UserDashboard";
import OrderHistory from "./pages/userDashboard/OrderHistory";
import Wishlist from "./pages/userDashboard/Wishlist";
function App() {
const {isAuth}=useAuthContext()
console.log(isAuth)
const router=createBrowserRouter(
createRoutesFromElements(
  <>
 

 <Route path="/" element={<Layout/>}>  
 <Route path="" element={<Home/>}/>
 <Route path="/ContactUs" element={<ContactUs/>}/>
 <Route path="/Team" element={<Team/>}/>
 <Route path="/About" element={<About/>}/>
 <Route path="/Products"/>
<Route path="/allProducts" element={<AllProducts/>}/>
<Route path="/Cart" element={<Cart/>}/>
<Route path="/Order" element={<Order/>}/>
<Route path="/watchList" element={<Watchlist/>}/>

<Route path="/ProductInfo/:id" element={<ProductInfo/>}/>
<Route path="/categoryPage/:name" element={<CategoryPage/>}/>
{/* <Route path="/order" element={<C/>}/> */}
<Route path="/user" element={<User/>}/>




<Route path="/userDashboard" element={<UserDashboard/>} >
<Route path="OrderHistory" element={<OrderHistory/>}/>
<Route path="WishList" element={<Wishlist/>}/>
</Route>






</Route>
<Route path="/Auth" >
<Route path="Registration" element={<Registration/>}/>
<Route path="Login" element={<Login/>}/>
</Route>
<Route path="admin"element={<ProtectedRouteForAdmin isAuth={isAuth} isAdmin={true}/>}>
<Route path="/admin/Dashboard" element={ <Dashboard/> }/>

</Route>

{/* <Route path="/userDashboard" element={<UserDashboard/>} >
<Route path="OrderHistory" element={<OrderHistory/>}/>
<Route path="WishList" element={<Wishlist/>}/>
</Route> */}


</>
)
)
  return (
 <>

<RouterProvider router={router} />
<ToastContainer />


 </>
  )
}

export default App
