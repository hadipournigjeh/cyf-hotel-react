import React, {useEffect, useState} from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
// import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  

  const [booking, setBookings] = useState([]);

  useEffect(() => {
    console.log("Welcome in my hotel project");

    fetch(`https://cyf-react.glitch.me`)
    .then(res => res.json())
    .then(data => setBookings(data))
    .catch(error => console.log(error));
  })

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
    setBookings(prev => prev.filter((item) => item.firstName.toLowerCase() === searchVal || item.surname.toLowerCase() === searchVal))
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {/* <SearchResults results={FakeBookings} /> */}
        <SearchResults />
      </div>
    </div>
  );
};

export default Bookings;
