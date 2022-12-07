import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import { getContacts, getFilter } from 'redux/selectors';
import { Item, List, Button } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visiableContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const dispatch = useDispatch();
  return (
    <List>
      {visiableContacts.map(({ name, number, id }) => {
        return (
          <Item key={id}>
            {name}: {number}
            <Button
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};
