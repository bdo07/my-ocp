import axios from 'axios';

// إعداد الاتصال بالـ API
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 1000,
});

// دالة لاسترجاع الفنادق
export const getHotels = async () => {
  try {
    const response = await api.get('/hotels');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching hotels');
  }
};

// دالة للبحث عن الفنادق
export const searchHotels = async (query, startDate, endDate) => {
  try {
    const response = await api.get('/search', {
      params: { query, startDate, endDate },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error searching hotels');
  }
};

// دالة لإنشاء حجز
export const createReservation = async (reservationData) => {
  try {
    const response = await api.post('/reservation', reservationData);
    return response.data;
  } catch (error) {
    throw new Error('Error creating reservation');
  }
};

// دالة لإضافة فندق
export const addHotel = async (hotelData) => {
  try {
    const response = await api.post('/hotels', hotelData);
    return response.data;
  } catch (error) {
    throw new Error('Error adding hotel');
  }
};
