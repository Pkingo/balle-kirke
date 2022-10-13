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
    <h5 className="text-green-main mt-4">{name}</h5>
    {address ? <p>{address}</p> : null}
    <p>
      Tlf.{" "}
      <a
        className="text-green-main text-bold hover:underline"
        href={`tel:${phone}`}
      >
        {formatPhonenumber(phone)}
      </a>
      {secondPhone ? (
        <>
          {" / "}{" "}
          <a
            className="text-green-main text-bold hover:underline"
            href={`tel:${secondPhone}`}
          >
            {formatPhonenumber(secondPhone)}
          </a>
        </>
      ) : null}
    </p>
    <a
      className="text-green-main text-bold hover:underline"
      href={`mailto:${email}`}
    >
      {email}
    </a>
  </div>
);
