import { formatPhonenumber } from "~/utils/formatPhonenumber";

export type ContactCard = {
  name: string;
  address?: string;
  phone: string;
  secondPhone?: string;
  email: string;
};

export const ContactCard = ({
  address,
  email,
  name,
  phone,
  secondPhone,
}: ContactCard) => (
  <div>
    <h5>{name}</h5>
    {address ? <p>{address}</p> : null}
    <p>
      Tlf. <a href={`tel:${phone}`}>{formatPhonenumber(phone)}</a>
      {secondPhone ? (
        <>
          {" / "}{" "}
          <a href={`tel:${secondPhone}`}>{formatPhonenumber(secondPhone)}</a>
        </>
      ) : null}
    </p>
    <a href={`mailto:${email}`}>{email}</a>
  </div>
);
