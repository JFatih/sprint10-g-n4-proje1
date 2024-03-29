import axios from "axios";

export const getContacts = async () => {
  let data = [];
  await axios
    .get("https://65b36193770d43aba479a2f2.mockapi.io/users")
    .then((res) => {
      data = res.data;
    });
  return data;
};

export const getContactsDetails = async (contactId) => {
  let data = [];
  await axios
    .get(`https://65b36193770d43aba479a2f2.mockapi.io/users/${contactId}`)
    .then((res) => {
      data = res.data;
    });
  return data;
};

export const deleteContact = async (contactId) => {
  let data = [];
  await axios
    .delete(`https://65b36193770d43aba479a2f2.mockapi.io/users/${contactId}`)
    .then((res) => {
      data = res.data;
    });
  return data;
};

export const addContact = async (datas) => {
  let data = [];
  await axios
    .post(`https://65b36193770d43aba479a2f2.mockapi.io/users`, datas)
    .then((res) => {
      data = res.data;
    });
  return data;
};
