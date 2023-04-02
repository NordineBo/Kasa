import React, { useEffect, useState } from "react";
import "./ApartmentGrid.scss";
import ApartmentCard from "./ApartmentCard.jsx";

function ApartmentGrid() {
  const [apartment, setApartments] = useState([]);
  useEffect(fetchApartment, []);
  function fetchApartment() {
    fetch("db.json")
    .then((res) => res.json())
    .then((res) => setApartments(res))
    .catch(console.error);
  }

  return (
    <div className="grid">
      {apartments.map((apartment) => (  
        <ApartmentCard title={apartment.title} imageUrl={apartment.cover} />
      ))}
      </div>
  );
  }
export default ApartmentGrid;