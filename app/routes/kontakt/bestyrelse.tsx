import { ContactCard } from "~/components/ContactCard";

const bestyrelsen: ContactCard[] = [
  {
    name: "Else Sandahl Pedersen, formand",
    address: "Sejershaven 14, 7321 Gadbjerg",
    phone: "75881024",
    secondPhone: "61547124",
    email: "else.sandahl.pedersen@gmail.com",
  },
  {
    name: "Kirstine Christensen, næstformand",
    address: "Nederbyvej 7, 7182 Bredsten",
    phone: "75881120",
    email: "Nederbyvej7@gmail.com",
  },

  {
    name: "Niels Anton Palmelund Poulsen, kasserer",
    address: "Runddelen 18, 6040 Egtved",
    phone: "81113238",
    email: "Nielspalmelund@gmail.com",
  },

  {
    name: "Kirsten Svane, sekretær.",
    address: "Stordalsvej 19, 7182 Bredsten",
    phone: "27$577474",
    email: "Kirsten.svane.ksj@gmail.com",
  },

  {
    name: "Astrid Bj. Christensen",
    address: "Mølletoften 5C, 7182 Bredsten",
    phone: "75881313",
    secondPhone: "29179313",
    email: "abjc@privat.dk",
  },

  {
    name: "Hanne Flarup Christensen",
    address: "Engen 11, 7182 Bredsten",
    phone: "40723801",
    email: "flarup.hanne@gmail.com",
  },

  {
    name: "Anne Kirstine Vestergaard Iversen",
    address: "Lildfrostvej 3, 7182 Bredsten",
    phone: "26135352",
    email: "aiv@bil.dk",
  },
];

const Bestyrelse = () => (
  <div>
    <h3>Bestyrelse</h3>
    <h4>Bestyrelsen for Balle Valgmenighed</h4>

    {bestyrelsen.map((contact, index) => (
      <ContactCard key={index} {...contact} />
    ))}
  </div>
);

export default Bestyrelse;
