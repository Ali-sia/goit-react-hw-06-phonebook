import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';

import PropTypes from 'prop-types';

import Contact from '../Contact/index';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const normalizeFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(normalizeFilter) ||
      contact.number.includes(normalizeFilter)
  );

  return (
    <ul>
      {filteredContacts.map(contact => {
        return <Contact key={contact.contactId} contact={contact} />;
      })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
