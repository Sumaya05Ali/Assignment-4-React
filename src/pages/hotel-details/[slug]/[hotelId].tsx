import { GetServerSideProps } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import { SimpleCard, SimpleCardContent, SimpleCardHeader, SimpleCardTitle } from '@/components/CustomCard';

// Types
interface Hotel {
  hotelId: string;
  slug: string;
  images: string[];
  title: string;
  description: string;
  guestCount: number;
  bedroomCount: number;
  bathroomCount: number;
  amenities: string[];
  hostInfo: string;
  address: string;
  latitude: number;
  longitude: number;
  rooms: {
    roomSlug: string;
    roomImage: string;
    roomTitle: string;
    bedroomCount: number;
  }[];
}

interface HotelDetailsPageProps {
  hotel: Hotel;
}

// Components
const RoomsBeds = ({ hotel }: { hotel: Hotel }) => {
  return (
    <SimpleCard className="w-full">
      <SimpleCardHeader>
        <SimpleCardTitle>Rooms & beds</SimpleCardTitle>
      </SimpleCardHeader>
      <SimpleCardContent>
        <div className="space-y-6">
        <div>
            <h3 className="text-lg font-semibold mb-2">{hotel.bathroomCount} bathroom</h3>
            <p>Full Bathroom</p>
          </div>
        </div>
      </SimpleCardContent>
    </SimpleCard>
  );
};

 

const Amenities = ({ amenities }: { amenities: string[] }) => {
  return (
    <SimpleCard>
      <SimpleCardHeader>
        <SimpleCardTitle>Amenities</SimpleCardTitle>
      </SimpleCardHeader>
      <SimpleCardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-center gap-3">
              <i className="fas fa-check text-gray-600"></i>
              <span>{amenity}</span>
            </div>
          ))}
        </div>
        <button className="mt-6 text-blue-600 hover:underline">
          See all amenities
        </button>
        </SimpleCardContent>
    </SimpleCard>
  );
};

const HouseRules = () => {
  const rules = [
    {
      icon: "clock",
      title: "Check-in/out",
      description: ["Check in after 3:00 PM", "Check out before 11:00 AM"]
    },
    {
      icon: "child",
      title: "Children",
      description: "Children allowed: ages 0-17"
    },
    {
      icon: "ban",
      title: "Pets",
      description: "No pets allowed"
    },
    {
      icon: "calendar-times",
      title: "Events",
      description: "No events allowed"
    },
    {
      icon: "smoking-ban",
      title: "Smoking",
      description: "Smoking is not permitted"
    }
  ];

  return (
    <SimpleCard>
      <SimpleCardHeader>
        <SimpleCardTitle>House Rules</SimpleCardTitle>
      </SimpleCardHeader>
      <SimpleCardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rules.map((rule, index) => (
            <div key={index} className="flex gap-4">
              <div className="text-gray-600">
                <i className={`fas fa-${rule.icon} text-xl`}></i>
              </div>
              <div>
                <h4 className="font-semibold mb-1">{rule.title}</h4>
                {Array.isArray(rule.description) ? (
                  rule.description.map((desc, i) => (
                    <p key={i} className="text-gray-600">{desc}</p>
                  ))
                ) : (
                  <p className="text-gray-600">{rule.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        </SimpleCardContent>
    </SimpleCard>
  );
};
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
          onClick={(e) => { e.preventDefault(); setActiveTab('Overview'); }}
        >
          Overview
        </a>
        <a 
          href="#" 
          className={`tab ${activeTab === 'Amenities' ? 'active' : ''}`}
          onClick={(e) => { e.preventDefault(); setActiveTab('Amenities'); }}
        >
          Amenities
        </a>
        <a 
          href="#" 
          className={`tab ${activeTab === 'Policies' ? 'active' : ''}`}
          onClick={(e) => { e.preventDefault(); setActiveTab('Policies'); }}
        >
          Policies
        </a>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {activeTab === 'Overview' && (
              <>
                <div className="property-type mb-4">Entire home</div>
                <h1 className="text-3xl font-bold mb-6">{hotel.title}</h1>
                <div className="mb-8">
                  <RoomsBeds hotel={hotel} />
                </div>
                <div className="mb-8">
                <SimpleCard>
      <SimpleCardHeader>
        <SimpleCardTitle>About This Property</SimpleCardTitle>
      </SimpleCardHeader>
      <SimpleCardContent>
                      <p className="text-gray-700">{hotel.description}</p>
                      <div className="mt-6">
                        <h3 className="font-semibold mb-2">Host Information</h3>
                        <p>{hotel.hostInfo}</p>
                      </div>
                      <div className="mt-6">
                        <h3 className="font-semibold mb-2">Location</h3>
                        <p>{hotel.address}</p>
                      </div>
                      </SimpleCardContent>
                      </SimpleCard>
                </div>
              </>
            )}

            {activeTab === 'Amenities' && (
              <Amenities amenities={hotel.amenities} />
            )}

            {activeTab === 'Policies' && (
              <HouseRules />
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-4">
            <SimpleCard>
            <SimpleCardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold">Contact Host</div>
                    <div className="text-gray-600">for pricing</div>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Contact Host
                  </button>
                  <div className="mt-4 text-center text-sm text-gray-600">
                    <b>Property #</b> {hotel.hotelId}
                  </div>
                  </SimpleCardContent>
</SimpleCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const { hotelId } = params as { hotelId: string };
    
    // Mock data
    const mockHotel: Hotel = {
      hotelId: hotelId,
      slug: 'sample-hotel',
      images: ['/lake_view.jpg', '/cottage_exterior.jpg', '/living_room_1.jpg'],
      title: 'Juneau Vacation Home: Stunning View + Beach Access',
      description: 'Beautiful vacation home with amazing views of Lena Cove. Perfect for those looking to enjoy a relaxing retreat surrounded by nature.',
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
        },
        {
          roomSlug: 'second-bedroom',
          roomImage: '/bedroom2.jpg',
          roomTitle: 'Second Bedroom',
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
