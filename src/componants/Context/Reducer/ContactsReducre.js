import { allContacts } from "../APIs";

export const getAllContacts = async (page, setAllContacts) => {
  try {
    const res = await allContacts(page);
    if (res.data) {
      setAllContacts((prev) => {
        if (prev) {
          console.log(res.data.data);
          return [...prev.concat(res.data.data)];
        } else return res.data.data;
      });
    }
  } catch (e) {
    console.log(e);
  }
};
