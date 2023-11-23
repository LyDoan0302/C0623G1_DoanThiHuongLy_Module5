import axios from "axios";

export const getAll = async () => {
  try {
    let res = await axios.get("http://localhost:3002/books");
    return res.data;
  } catch (e) {
    return undefined;
  }
};

export const saveBook = async (book) => {
  try {
    await axios.post("http://localhost:3002/books", book);
    return true;
  } catch (e) {
    return false;
  }
};

export const update = async (book) => {
  try {
    await axios.patch("http://localhost:3002/books/${book.id}", book);
    return true;
  } catch (e) {
    return false;
  }
};

export const deleteBook = async (idBook) => {
  try {
    await axios.delete(`http://localhost:3002/books/${idBook}`);
    return true;
  } catch (e) {
    return false;
  }
};
