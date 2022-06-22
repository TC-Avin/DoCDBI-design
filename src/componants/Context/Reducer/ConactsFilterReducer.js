import { filterContacts } from "../APIs";

export const filterAllContacts = async (filterOptions, setAllContacts) => {
  Object.keys(filterOptions).forEach(
    (k) =>
      (filterOptions[k].length === 0 || filterOptions[k] === "") &&
      delete filterOptions[k]
  );
  try {
    console.log(filterOptions);
    const res = await filterContacts(filterOptions);
    if (res.data) {
      setAllContacts(res.data.data);
    }
  } catch (e) {
    console.log(e);
  }
};
