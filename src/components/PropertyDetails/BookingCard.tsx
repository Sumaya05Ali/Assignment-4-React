import { FC } from 'react';
import { Hotel } from '@/types/hotel';

interface BookingCardProps {
  hotel: Hotel;
}

const BookingCard: FC<BookingCardProps> = ({ hotel }) => {
  return (
    <div className="booking-card">
      <div className="price-container">
        <span className="price-night">Contact Host</span>
        <span className="per-night">for pricing</span>
      </div>

      <div className="dates-container">
        <div className="date-input">
          <div className="date-label">Start date</div>
          <div className="date-value">Select date</div>
          <svg className="date-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        </div>
        <div className="date-input">
          <div className="date-label">End date</div>
          <div className="date-value">Select date</div>
          <svg className="date-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        </div>
      </div>

      <div className="travelers-input">
        <div>Travelers</div>
        <div>{hotel.guestCount} travelers</div>
      </div>

      <button className="book-button">Contact Host</button>
      <div className="property-id"><b>Property #</b> {hotel.hotelId}</div>
    </div>
  );
};

export default BookingCard;
