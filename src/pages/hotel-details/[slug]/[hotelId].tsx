import { GetServerSideProps } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import { Hotel } from '@/types/hotel';

interface HotelDetailsPageProps {
  hotel: Hotel;
}

const HotelDetailsPage = ({ hotel }: HotelDetailsPageProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="page-container">
      <Head>
        <title>{hotel.title} | Hotel Details</title>
        <meta name="description" content={hotel.description} />
      </Head>

      {/* Navbar */}
      <nav className="navbar">
        <label htmlFor="menu-toggle" className="menu-btn">&#9776;</label>
        <input type="checkbox" id="menu-toggle" />

        <div className="navbar-right">
          <a href="#">&#127760; United States</a>
          <a href="#">Trip Boards</a>
          <a href="#">List your property</a>
          <a href="#">Help</a>
          <a href="#">My trips</a>
          <a href="#">Sign in</a>
        </div>
      </nav>

      {/* Back Navigation */}
      <div className="back-nav">
        <a href="#">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          See all properties
        </a>
      </div>

      {/* Gallery */}
      <div className="gallery-container">
        <div className="gallery-grid">
          {hotel.images.length > 0 && (
            <>
              <div className="gallery-image main-image">
                <img src={hotel.images[0]} alt={`${hotel.title} main view`} />
              </div>
              <div className="side-images">
                {hotel.images.slice(1, 3).map((image, index) => (
                  <div key={index} className="gallery-image">
                    <img src={image} alt={`${hotel.title} view ${index + 2}`} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="tabs">
        <a 
          href="#" 
          className={`tab ${activeTab === 'Overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('Overview')}
        >
          Overview
        </a>
        <a 
          href="#" 
          className={`tab ${activeTab === 'Amenities' ? 'active' : ''}`}
          onClick={() => setActiveTab('Amenities')}
        >
          Amenities
        </a>
        <a 
          href="#" 
          className={`tab ${activeTab === 'Policies' ? 'active' : ''}`}
          onClick={() => setActiveTab('Policies')}
        >
          Policies
        </a>
      </div>

      <div className="container">
        <div className="property-type">Entire home</div>
        <h1 className="property-title">{hotel.title}</h1>

        <div className="details">
          <div className="left">
            <div className="info">
              <div className="info-item">
                <p><i className="fas fa-bed"></i> <strong>{hotel.bedroomCount} bedrooms</strong></p>
                <p><i className="fas fa-user-friends"></i> Sleeps {hotel.guestCount}</p>
              </div>
              <div className="info-item">
                <p><i className="fas fa-bath"></i> <strong>{hotel.bathroomCount} bathroom</strong></p>
              </div>
            </div>

            <h3>Popular amenities</h3>
            <ul className="amenities">
              {hotel.amenities.map((amenity, index) => (
                <li key={index}><i className="fas fa-check"></i> {amenity}</li>
              ))}
            </ul>

            <h3>Host Information</h3>
            <p>{hotel.hostInfo}</p>

            <h3>Location</h3>
            <p>{hotel.address}</p>
          </div>

          <div className="right">
            <div className="booking-card">
              <div className="price-container">
                <span className="price-night">Contact Host</span>
                <span className="per-night">for pricing</span>
              </div>

              <button className="book-button">Contact Host</button>
              <div className="property-id"><b>Property #</b> {hotel.hotelId}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const { hotelId } = params as { hotelId: string; slug: string };
    
    // For testing purposes, return mock data
    const mockHotel: Hotel = {
      hotelId: hotelId,
      slug: 'sample-hotel',
      images: ['/lake_view.jpg', '/cottage_exterior.jpg', '/living_room_1.jpg'],
      title: 'Juneau Vacation Home: Stunning View + Beach Access',
      description: 'Beautiful vacation home with amazing views',
      guestCount: 4,
      bedroomCount: 2,
      bathroomCount: 1,
      amenities: [
        'Barbecue grill',
        'Outdoor Space',
        'Kitchen',
        'Washer',
        'Parking available',
        'Dryer'
      ],
      hostInfo: 'Experienced host with great reviews',
      address: 'Auke Bay, Juneau, Alaska',
      latitude: 58.3819,
      longitude: -134.6450,
      rooms: [
        {
          roomSlug: 'master-bedroom',
          roomImage: '/bedroom1.jpg',
          roomTitle: 'Master Bedroom',
          bedroomCount: 1
        }
      ]
    };

    return {
      props: {
        hotel: mockHotel,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default HotelDetailsPage;