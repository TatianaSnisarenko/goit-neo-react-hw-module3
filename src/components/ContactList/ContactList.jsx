import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, deleteContact }) {
  return (
    <ul className={css["contact-list"]}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <Contact
            id={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
          />
        </li>
      ))}
    </ul>
  );
}
