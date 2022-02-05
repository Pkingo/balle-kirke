import { RemixLinkProps } from "@remix-run/react/components";
import { Link } from "remix";

const StyledLink: React.FC<RemixLinkProps> = (props) => (
  <Link className="hover:underline text-green-main font-bold" {...props} />
);

export const Header = () => (
  <header>
    <ul className="flex gap-3 justify-end px-8 py-3">
      <StyledLink to="/">Forside</StyledLink>
      <StyledLink to="/gudstjeneste">Gudstjeneste</StyledLink>
      <StyledLink to="/kalender">Kalender</StyledLink>
      <StyledLink to="/om-valgmenigheden">Om valgmenigheden</StyledLink>
      <StyledLink to="/alterbilledet">Alterbilledet</StyledLink>
      <StyledLink to="/praesten-har-ordet">Præsten har ordet</StyledLink>
      <StyledLink to="/kirkelige-handlinger">Kirkelige handlinger</StyledLink>
      <StyledLink to="/kirkeblad">Kirkeblad</StyledLink>
      <StyledLink to="/bliv-medlem">Bliv medlem</StyledLink>
      <StyledLink to="/kontakt">Kontakt</StyledLink>
    </ul>
  </header>
);
