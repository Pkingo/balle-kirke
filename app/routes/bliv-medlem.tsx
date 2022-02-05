import { Link } from "remix";

const BlivMedlem = () => (
  <div>
    <h3>Bliv medlem</h3>
    <h4>Medlemskab</h4>
    <p>
      Ønsker du at blive medlem af Balle Valgmenighed, kan du henvende dig til
      <Link to="/kontakt/ansatte">valgmenighedspræsten</Link>, som så vil
      fremsende en indmeldelsesblanket til dig. Du kan også selv downloade og
      udskrive{" "}
      <Link to="http://www.balle-valgmenighed.dk/wp-content/uploads/2014/04/Medlemsbevis-til-hjemmeside1.pdf">
        indmeldelsesblanketten
      </Link>
      , udfylde den med underskrift og sende den til præsten. Så sørger vi for,
      at alle relevante myndigheder får besked om medlemskabet.
    </p>
    <h4>Hvad koster det?</h4>
    <p>
      I folkekirken betaler du en kirkeskat på mellem 0,8 og 1,3 % af din
      skattepligtige indkomst, afhængig af, hvor du bor. Som medlem af Balle
      Valgmenighed skal du betale 2,0 % af din skattepligtige indkomst.{" "}
      <strong>MEN –</strong>
    </p>
    <p>
      <strong>
        Da Balle Valgmenighed er godkendt som gaveberettiget organisation er det
        muligt at trække hele medlemsbidraget fra på selvangivelsen! På den måde
        er det ikke væsentligt dyrere at være medlem af Balle Valgmenighed end
        at betale kirkeskat til folkekirken.
      </strong>
    </p>
    <p>
      Fradraget vil automatisk blive fortrykt på din selvangivelse. Første gang
      du modtager din forskudsopgørelse efter du har meldt dig ind, bør du
      tjekke, om alle oplysninger er korrekte. Medlemsbidraget beregnes på
      grundlag af den sidst godkendte skattepligtige indkomst. For 2017 beregnes
      medlemsbidraget på grundlag af den skattepligtige indkomst i 2015. Har du
      yderligere spørgsmål til betalingen af medlemsbidraget, kan du kontakte
      vores <Link to="/kontakt/bestyrelse">kasserer</Link>.
    </p>
    <p>
      Balle Valgmenighed opkræver medlemsbidrag to gange årligt, hvor du får
      tilsendt et girokort: Et til betaling i foråret og et til betaling i
      efteråret.
    </p>

    <p>
      Man begynder at betale medlemsbidrag året efter, man er fyldt 20 år. Hvis
      man er på SU, må man nøjes med at betale 2 x 500 kr. om året i
      medlemsbidrag.
    </p>

    <p>
      Ønsker du at få meldt dine børn ind i valgmenigheden i forbindelse med, du
      selv bliver meldt ind, skal der udfyldes separat blanket for børnene, som
      forældrene skal underskrive, hvis børnene er under 18 år.
    </p>

    <h4>Udmeldelse</h4>

    <p>
      Udmeldelse af valgmenigheden sker ved henvendelse til præsten, som så
      sender en udmeldelsesblanket til dig, som du bedes returnere i udfyldt
      stand. Udmeldelse kan ske når som helst på året, men træder først i kraft
      ved det førstkommende årsskifte.
    </p>

    <p>
      Ved udmeldelse af valgmenigheden melder man sig samtidigt ud af
      folkekirken. Ønsker man at blive medlem af folkekirken, skal man rette
      henvendelse til kirkekontoret eller sognepræsten i sit bopælssogn.
    </p>
  </div>
);

export default BlivMedlem;
