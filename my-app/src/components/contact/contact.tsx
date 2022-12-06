import React, { PropsWithChildren } from "react";
import ContactCard from "../common/contactCard/contactCard";
import "./contact.css"

interface ContactProps {
  img: string;
}
const Contact = ({ img }: PropsWithChildren<ContactProps>) => (
  <div
    className="contact"
    style={{
        backgroundImage: `url(" ${img} ")`,
        backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
      <ContactCard title="Vous souhaitez vendre votre bien ?" />
  </div>
);

export default Contact;