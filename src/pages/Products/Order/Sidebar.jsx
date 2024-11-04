// src/components/Sidebar.jsx
// import { HomeIcon, UserIcon, SettingsIcon } from 'some-icon-library'; // import your preferred icons
import { Link } from 'react-router-dom'; // or 'next/link' if using Next.js

const Sidebar = () => {
   return (
      <aside className="w-64 h-screen p-4 bg-gray-800 text-white">
         <nav>
            <ul>
               <li className="mb-4">
                  <Link to="/userDashboard" className="flex items-center space-x-2 text-lg font-semibold hover:text-gray-400">
                     {/* <HomeIcon /> */}
                     <span>Home</span>
                  </Link>
               </li>
               <li className="mb-4">
                  <Link to="/userDashboard/OrderHistory" className="flex items-center space-x-2 text-lg font-semibold hover:text-gray-400">
                     {/* <UserIcon /> */}
                     <span>Order History</span>
                  </Link>
               </li>
               <li className="mb-4">
                  <Link to="/userDashboard/Wishlist" className="flex items-center space-x-2 text-lg font-semibold hover:text-gray-400">
                     {/* <SettingsIcon /> */}
                     <span>WishList</span>
                  </Link>
               </li>
            </ul>
         </nav>
      </aside>
   );
};

export default Sidebar;
