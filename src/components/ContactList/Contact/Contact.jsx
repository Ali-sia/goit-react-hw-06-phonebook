// import PropTypes from 'prop-types';

import { StyledButton } from '../../App.styled';
import { ContactItem } from './Contact.styled';

const Contact = ({ contact, onDeleteContact }) => {
  const { id, name, number } = contact;
  return (
    <ContactItem>
      <p>
        {name}, {number}
      </p>
      <StyledButton type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </StyledButton>
    </ContactItem>
  );
};

export default Contact;

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };
