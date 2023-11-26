import axios from "axios";

const DEFAULT_HEADERS = {
    "api-key": "786ZM786",
  };

export const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (loc) => {
        console.log(loc);
      },
      (err) => {
        console.error(err.message);
      }
    );
  }
};

export const registerVisitor = async () => {
  try {
    await axios.get(
      `https://zimopro.co.uk/api/zimo-web/zimogroup-create-visitor`,
      {
        headers: DEFAULT_HEADERS,
      }
    );
  } catch (e) {
    console.error("WHILE GETTING VISITOR", e.message);
  }
};

/**
 * @returns {latitude, longitude}
 */
const getUserLocation = () => {
  return new Promise(function (resolve, reject) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        function (error) {
          reject(error);
        }
      );
    } else {
      reject(new Error("Geolocation is not supported by this browser."));
    }
  });
};

/**
 * @param lat => user latitute, default will be null
 * @param lng => user longitude, default will be null
 * @returns visitor object
 */
const fetchAddress = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      );
      const data = await response.json();
    //   console.log("dataaa",data);
      return data;
    } catch (error) {
      console.error('Error fetching address:', error);
    }
  };

export { getUserLocation , fetchAddress };