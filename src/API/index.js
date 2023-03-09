import axios from "axios";

export const getSubjects = async (subject, offset) => {
  try {
    const res = await axios.get(
      `https://openlibrary.org/subjects/${subject}.json?limit=10&offset=${offset}`
    );
    return res.docs;
  } catch (error) {
    return error.message;
  }
};

export const searchSubjects = async (subject, offset) => {
  try {
    const res = await axios.get(
      `https://openlibrary.org/search.json?q=${subject}`
    );
    return res.data;
  } catch (error) {
    return error.message;
  }
};
