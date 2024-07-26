import axios, { AxiosError } from "axios";

type Sport = {
  name: string;
};

// Function to fetch sports data
export const getSports = async () => {
  try {
    const response = await axios.get(
      "https://sports-case.scholten.dev/nils/sports"
    );
    // Return the data directly
    return response.data;
  } catch (error: any) {
    // Throw error to be caught by useQuery
    throw new Error("error");
  }
};

export const addSport = async (data: Sport) => {
  try {
    await axios.post("https://sports-case.scholten.dev/nils/sports", {
      name: data.name,
    });
  } catch (error: any) {
    // Throw error to be caught by useQuery
    throw new Error(error);
  }
};

export const deleteSport = async (id: string) => {
  try {
    await axios.delete(`https://sports-case.scholten.dev/nils/sports/${id}`);
    return true;
  } catch (error: any) {
    // Throw error to be caught by useQuery
    throw new Error(error);
  }
};
