
import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <NavLink to="/" activeClassName="activeLink" end>
        Home
      </NavLink>
      <NavLink to="/trips" activeClassName="activeLink">
        Trips
      </NavLink>
      </nav>
  );
}

export default Nav;



















// import React from 'react';

// function Nav() {
//   return (
//     <nav
//       className="navbar navbar-expand-lg bg-secondary text-uppercase "
//       id="mainNav"
//     >
//       <div className="container">
//         <a className="navbar-brand" href="#">
//           Hike
//         </a>

//         <div className="collapse navbar-collapse" id="navbarResponsive">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item mx-0 mx-lg-1">
//               <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item mx-0 mx-lg-1">
//               <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#">
//                 Trips
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Nav;
