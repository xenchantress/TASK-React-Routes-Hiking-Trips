import React, { useState } from "react";
import { useParams, useSearchParams } from 'react-router-dom';
import tripsData from "../tripsData";
import SearchBar from "./SearchBar";
import TripItem from "./TripItem";
import { Navigate } from 'react-router-dom';

function TripsList() {
  const [query, setQuery] = useState("");
  const { tripId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleDifficultyFilter = (difficulty) => {
    setSearchParams({ difficulty });
  };

  const filteredTrips = tripsData
    .filter((trip) => trip.name.toLowerCase().includes(query.toLowerCase()))
    .filter((trip) => !searchParams.get('difficulty') || trip.difficulty === searchParams.get('difficulty'))
    .map((trip, index) => <TripItem trip={trip} key={index} />);

  const trip = tripsData.find((t) => t.slug === tripId);

  if (!trip) {
    return <Navigate to="/" />;
  }

  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Explore Trips
        </h2>
        <br />
        <SearchBar setQuery={setQuery} />
        <center>
          <button onClick={() => handleDifficultyFilter('easy')}>Easy</button>
          <button onClick={() => handleDifficultyFilter('moderate')}>Moderate</button>
          <button onClick={() => handleDifficultyFilter('hard')}>Hard</button>
        </center>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>

        <div className="row justify-content-center">{filteredTrips}</div>
      </div>
    </section>
  );
}

export default TripsList;














































// import React, { useState } from "react";
// import tripsData from "../tripsData";
// import SearchBar from "./SearchBar";
// import TripItem from "./TripItem";
// //import { useSearchParams } from 'react-router-dom';

// function TripsList() {
//   const [query, setQuery] = useState("");
//   const trips = tripsData
//   const {tripId}= useParams();
//   import { useSearchParams } from 'react-router-dom';

//   const TripsList = () => {
//     const [searchParams, setSearchParams] = useSearchParams();
  
//     const handleDifficultyFilter = (difficulty) => {
//       setSearchParams({ difficulty });
//     };

//   const trip = tripsData.find((t) => t.slug === tripId);

//   if (!trip) {
//     return <Navigate to="/" />;
//   }

//     // .filter((trip) => trip.name.toLowerCase().includes(query.toLowerCase()))
//     // .map((trip, index) => <TripItem trip={trip} key={index} />);
// };
//   return (
//     <section className="page-section portfolio" id="portfolio">
//       <div className="container">
//         <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
//           Explore Trips
//         </h2>
//         <br />
//         <SearchBar setQuery={setQuery} />
//         <center>
//         <button onClick={() => handleDifficultyFilter('easy')}>Easy</button>
//       <button onClick={() => handleDifficultyFilter('moderate')}>Moderate</button>
//       <button onClick={() => handleDifficultyFilter('hard')}>Hard</button>
//           {/* <button className="btn btn-primary btn-xl">Easy</button>
//           <button className="btn btn-primary btn-xl">Moderate</button>
//           <button className="btn btn-primary btn-xl">Hard</button> */}
//         </center>
//         <div className="divider-custom">
//           <div className="divider-custom-line"></div>
//           <div className="divider-custom-icon">
//             <i className="fas fa-star"></i>
//           </div>
//           <div className="divider-custom-line"></div>
//         </div>

//         <div className="row justify-content-center">{trips}</div>
//       </div>
//     </section>
//   );
// }

// export default TripsList;
