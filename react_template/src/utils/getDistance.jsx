import axios from 'axios';

const API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY'; // <-- put your API key here

export async function getDistanceBetweenLocations(origin, destination) {
  const url = 'https://maps.googleapis.com/maps/api/distancematrix/json';

  try {
    const response = await axios.get(url, {
      params: {
        origins: origin,
        destinations: destination,
        key: API_KEY,
      },
    });

    const element = response.data.rows[0].elements[0];

    if (element.status === "OK") {
      return {
        distanceText: element.distance.text,  // Example: "500 km"
        distanceValue: element.distance.value, // In meters
      };
    } else {
      throw new Error('No distance data found.');
    }
  } catch (error) {
    console.error('Failed to fetch distance:', error);
    throw error;
  }
}
