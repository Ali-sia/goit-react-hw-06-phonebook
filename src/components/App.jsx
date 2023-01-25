import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import { Title } from './App.styled';

import ContactList from './ContactList';
import Filter from './Filter';
import CreateContact from './CreateContact';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = index => {
    setContacts([...contacts].filter(contact => contact.id !== index));
  };

  const addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (contacts.find(findContact => findContact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      setContacts([newContact, ...contacts]);
    }
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const normalizeFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(normalizeFilter) ||
      contact.number.includes(normalizeFilter)
  );

  return (
    <Box pr={4} pl={4} color="text" width="400px">
      <Title>Add contact</Title>
      <CreateContact onSubmit={addContact} />

      <Title>Contacts</Title>
      <Filter value={filter} onChangeFilter={changeFilter} />

      {contacts.length > 0 && (
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
        />
      )}

      <GlobalStyle />
    </Box>
  );
};

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};
// export class App extends Component {
//   static propTypes = {
//     contacts: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//       })
//     ),
//     filter: PropTypes.string,
//   };

//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const parsedCcontacts = JSON.parse(localStorage.getItem('contacts'));
//     if (parsedCcontacts) {
//       this.setState({ contacts: parsedCcontacts });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   deleteContact = index => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(cont => cont.id !== index),
//     }));
//   };

//   addContact = (name, number) => {
//     const newContact = {
//       id: nanoid(),
//       name,
//       number,
//     };

//     if (
//       this.state.contacts.find(
//         findContact => findContact.name === newContact.name
//       )
//     ) {
//       alert(`${newContact.name} is already in contacts`);
//     } else {
//       this.setState(prevState => ({
//         contacts: [newContact, ...prevState.contacts],
//       }));
//     }
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   render() {
//     const { contacts, filter } = this.state;

//     const normalizeFilter = filter.toLowerCase();
//     const filteredContacts = contacts.filter(contact => {
//       return (
//         contact.name.toLowerCase().includes(normalizeFilter) ||
//         contact.number.toLowerCase().includes(normalizeFilter)
//       );
//     });
//     return (
//       <Box pr={4} pl={4} color="text" width="400px">
//         <Title>Add contact</Title>
//         <CreateContact onSubmit={this.addContact} />

//         <Title>Contacts</Title>
//         <Filter value={filter} onChangeFilter={this.changeFilter} />
//         <ContactList
//           contacts={filteredContacts}
//           onDeleteContact={this.deleteContact}
//         />

//         <GlobalStyle />
//       </Box>
//     );
//   }
// }
