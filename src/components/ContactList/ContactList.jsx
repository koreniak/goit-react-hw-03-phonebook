import PropTypes from 'prop-types';
import { ContList, ContItem, DeleteButton } from "./ContactList.styled";

const ContactList = ({ options, onDeleteContact }) => {
  return <ContList>{options.map(({ id, name, number }) =>
          <ContItem key={id}>
            <p>{name}: {number}</p>
            <DeleteButton onClick={() => onDeleteContact(id)}>Delete</DeleteButton>
          </ContItem>)}
        </ContList>
};

ContactList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })),
  onDeleteContact: PropTypes.func.isRequired
};

export default ContactList;