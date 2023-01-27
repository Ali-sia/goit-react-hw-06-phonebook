import { nanoid } from '../../node_modules/nanoid/index';

export const addContact = ({ name, number }) => {
  return {
    type: 'contacts/addContact',
    payload: {
      contactId: nanoid(),
      name,
      number,
    },
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
};

export const setFilter = value => {
  return {
    type: 'filter/setFilter',
    payload: value,
  };
};
