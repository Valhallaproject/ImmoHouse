import React, { PropsWithChildren } from "react";
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
  </div>
);

export default Contact;