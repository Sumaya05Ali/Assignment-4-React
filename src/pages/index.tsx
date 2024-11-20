import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  // Option 2: Use predefined values
  const defaultSlug = 'your-hotel-slug';
  const defaultHotelId = '123';
  
  return {
    redirect: {
      destination: `/hotel-details/${defaultSlug}/${defaultHotelId}`,
      permanent: false,
    },
  };
};

export default function Home() {
  return null;
}

