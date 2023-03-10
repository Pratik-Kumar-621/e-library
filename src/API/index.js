import axios from "axios";

export const getSubjects = async (subject) => {
  try {
    const cache = JSON.parse(localStorage.getItem(`${subject}`) || "{}");
    if (new Date(cache.expireAt).getTime() > Date.now()) {
      return cache.data;
    }
    const res = await axios.get(
      `https://openlibrary.org/subjects/${subject}.json?limit=10&offset=0`
    );
    // caching subject data
    const cacheToSave = {
      expireAt: Date.now() + 3 * 60 * 60 * 1000,
      data: res.data,
    };
    localStorage.setItem(`${subject}`, JSON.stringify(cacheToSave));
    return res.data;
  } catch (error) {
    return error.message;
  }
};

export const searchSubjects = async (subject, limit, offset) => {
  try {
    const cache = JSON.parse(
      localStorage.getItem(`${subject}_${offset}`) || "{}"
    );
    if (new Date(cache.expireAt).getTime() > Date.now()) {
      return cache.data;
    }

    const res = await axios.get(
      `https://openlibrary.org/search.json?q=${subject}&limit=${limit}&offset=${
        offset * 10
      }`
    );

    // Caching search data
    const cacheToSave = {
      expireAt: Date.now() + 3 * 60 * 60 * 1000, // 3 Hr
      data: res.data,
    };
    localStorage.setItem(`${subject}_${offset}`, JSON.stringify(cacheToSave));

    return res.data;
  } catch (error) {
    return error.message;
  }
};
