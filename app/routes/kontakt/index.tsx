import { Link } from "remix";

const Kontakt = () => (
  <div>
    <h3 className="text-green-main mt-4">Kontakt</h3>
    <h4 className="text-green-main mt-4">Balle Valgmenighed</h4>
    <p>
      Ballevej 41
      <br />
      7182 Bredsten
    </p>

    <p>
      Her findes kontaktoplysninger for{" "}
      <Link
        className="text-green-main text-bold hover:underline"
        to="/kontakt/ansatte"
      >
        ansatte
      </Link>{" "}
      og{" "}
      <Link
        className="text-green-main text-bold hover:underline"
        to="/kontakt/bestyrelse"
      >
        bestyrelse
      </Link>
      .
    </p>
  </div>
);

export default Kontakt;
