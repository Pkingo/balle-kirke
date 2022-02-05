import { Link } from "remix";

const Kontakt = () => (
  <div>
    <h3>Kontakt</h3>
    <h4>Balle Valgmenighed</h4>
    <p>
      Ballevej 41
      <br />
      7182 Bredsten
    </p>

    <p>
      Her findes kontaktoplysninger for{" "}
      <Link to="/kontakt/ansatte">ansatte</Link> og{" "}
      <Link to="/kontakt/bestyrelse">bestyrelse</Link>.
    </p>
  </div>
);

export default Kontakt;
