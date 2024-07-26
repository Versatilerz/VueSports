import axios, { AxiosError } from "axios";

type Sport = {
  name: string;
};

// Function to fetch sports data
export const getSports = async () => {
  try {
    const response = await axios.get(
      "https://404404fb-e9a1-458e-bc65-95b20051eec1.mock.pstmn.io/sports"
    );
    // Return the data directly
    return response.data;
  } catch (error: any) {
    // Throw error to be caught by useQuery
    throw new Error(error);
  }
};

export const addSport = async (data: Sport) => {
  console.log(data);
  try {
    await axios.post(
      "https://404404fb-e9a1-458e-bc65-95b20051eec1.mock.pstmn.io/sports",
      { name: data.name }
    );
  } catch (error: any) {
    // Throw error to be caught by useQuery
    throw new Error(error);
  }
};
