import { ContactCard } from "~/components/ContactCard";

const ansatte: ContactCard[] = [
  {
    name: "Valgmenighedspræst: Anders Kingo, dr.theol",
    address: "Ballevej 41, 7182 Bredsen",
    phone: "75881050",
    secondPhone: "51522026",
    email: "anderskingo@gmail.com",
  },

  {
    name: "Organist: Carsten Bo",
    phone: "40181009",
    email: "carstenbo@carstenbo.dk",
  },

  {
    name: "Graver: Henrik Fogh Jensen",
    address: "Nederbyvej 3B, 7182 Bredsten",
    phone: "50430747",
    email: "hen-j@hotmail.com",
  },
];

const Ansatte = () => (
  <div>
    <h3 className="text-green-main mt-4">Ansatte</h3>
    {ansatte.map((contact, index) => (
      <ContactCard key={index} {...contact} />
    ))}
  </div>
);

export default Ansatte;
