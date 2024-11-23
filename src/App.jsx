import "modern-normalize/modern-normalize.css";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import defaultContacts from "./data/defaultContacts.json";

const CONTACTS_KEY = "contacts";

const App = () => {
  const [filter, setFilter] = useState("");

  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem(CONTACTS_KEY);
    if (savedContacts) {
      return JSON.parse(savedContacts);
    }
    return defaultContacts;
  });

  const addContact = (name, number) => {
    setContacts((prevContacts) => {
      const contact = {
        id: nanoid(),
        name,
        number,
      };
      return [...prevContacts, contact];
    });
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  useEffect(() => {
    window.localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <SearchBox filter={filter} setFilter={setFilter} />
        <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
      </div>
    </>
  );
};

export default App;
