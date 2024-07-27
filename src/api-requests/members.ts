import axios from "axios";

type Member = {
  name: { firstName: string; lastName: string };
  image: string;
  sports: string[];
};

// Function to fetch sports data
export const getMembers = async () => {
  try {
    const response = await axios.get(
      "https://sports-case.scholten.dev/nils/members"
    );
    // Return the data directly
    return response.data;
  } catch (error: any) {
    // Throw error to be caught by useQuery
    throw new Error("error");
  }
};

export const addMember = async (data: Member) => {
  try {
    await axios.post("https://sports-case.scholten.dev/nils/members", {
      name: data.name,
    });
  } catch (error: any) {
    // Throw error to be caught by useQuery
    throw new Error(error);
  }
};

export const deleteMember = async (id: string) => {
  try {
    await axios.delete(`https://sports-case.scholten.dev/nils/member/${id}`);
    return true;
  } catch (error: any) {
    // Throw error to be caught by useQuery
    throw new Error(error);
  }
};
