import axios from 'axios';
import { Hotel } from '../types/hotel';

export const fetchHotelDetails = async (hotelId: string): Promise<Hotel> => {
  try {
    const response = await axios.get(`/api/hotel/${hotelId}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch hotel details');
  }
};
