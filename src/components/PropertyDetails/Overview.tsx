import { FC } from 'react';
import { Hotel } from '@/types/hotel';

interface OverviewProps {
  hotel: Hotel;
}

const Overview: FC<OverviewProps> = ({ hotel }) => {
  return (
    <div className="overview">
      <div className="info">
        <div className="info-item">
          <p>
            <i className="fas fa-bed"></i> <strong>{hotel.bedroomCount} bedrooms</strong>
          </p>
          <p>
            <i className="fas fa-user-friends"></i> Sleeps {hotel.guestCount}
          </p>
        </div>
        <div className="info-item">
          <p>
            <i className="fas fa-bath"></i> <strong>{hotel.bathroomCount} bathroom</strong>
          </p>
        </div>
      </div>

      <h3>Popular amenities</h3>
      <ul className="amenities">
        {hotel.amenities.map((amenity, index) => (
          <li key={index}>
            <i className="fas fa-check"></i> {amenity}
          </li>
        ))}
      </ul>

      <h3>Location</h3>
      <div className="map">
        <div>
          <img src="/images/map.png" alt="Area map" />
        </div>
        <p className="address">
          <i className="fas fa-map-marker-alt"></i> {hotel.address}
        </p>
      </div>
    </div>
  );
};

export default Overview;