import React from "react";
import { FaBed } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate();

  const handleReservation = (roomType) => {
    navigate(`/reservation/${hotel.name}/${roomType}`);
  };

  return (
    <div className="hotel-card">
      <img src={hotel.image} alt={hotel.name} className="hotel-image" />
      <h2 className="hotel-title">{hotel.name}</h2>
      <div className="hotel-rooms">
        {hotel.rooms.map((room, index) => (
          <div key={index} className="hotel-room">
            <span className="room-info">
              <FaBed className="icon" /> {room.type}
            </span>
            <button className="reserve-button" onClick={() => handleReservation(room.type)}>
              Réserver
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelCard;
