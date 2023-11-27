import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setUserLocation } from '@/src/store/features/locationSlice';

const GetVisitor = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserLocation = async () => {
      try {
        // Get user's geolocation
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const { latitude, longitude } = position.coords;

        // Fetch detailed location information using Nominatim API
        const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);

        const { address } = response.data;

        // Extract necessary location details
        const { city, country, address: displayAddress, postcode } = address;

        // Dispatch the retrieved location details to the Redux store
        dispatch(
          setUserLocation({
            city: city || '',
            country: country || '',
            address: displayAddress || '',
            postcode: postcode || '',
          })
        );
      } catch (error) {
        console.error('Error getting location:', error);
      }
    };

    getUserLocation();
  }, [dispatch]);

  return null; // Or your desired JSX for rendering
};

export default GetVisitor;
