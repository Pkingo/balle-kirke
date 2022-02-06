import { RemixLinkProps } from "@remix-run/react/components";
import { Link } from "remix";
import { useMenuContext } from "~/components/contexts/MenuContext";
import { AboutConstituencyPage } from "~/types/AboutConstituencyPage";

type MenuItem = Omit<AboutConstituencyPage, "body">;

const MenuItem: React.FC<RemixLinkProps> = (props) => (
  <li>
    <Link
      className="hover:underline text-green-main font-bold uppercase"
      {...props}
    />
  </li>
);

const DropdownMenuItem: React.FC<{
  to: string;
  items: MenuItem[];
}> = ({ to, items, children }) => (
  <li className="group relative">
    <Link
      className="hover:underline text-green-main font-bold uppercase"
      to={to}
    >
      {children}
    </Link>
    {items.length ? (
      <div className="group-hover:block dropdown-menu hidden md:absolute h-auto -left-3 shadow-lg">
        <ul className="top-0 max-w-full md:w-max bg-white md:shadow px-2 py-4">
          {items.map((item) => (
            <li key={item.slug}>
              <Link
                className="hover:underline text-green-main font-bold uppercase"
                to={`${to}/${item.slug}`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ) : null}
  </li>
);

export const Header = () => {
  const { about } = useMenuContext();
  return (
    <header>
      <ul className="flex gap-3 justify-end px-8 py-3">
        <MenuItem to="/">Forside</MenuItem>
        <DropdownMenuItem to="/om-valgmenigheden" items={about}>
          Om valgmenigheden
        </DropdownMenuItem>
        <MenuItem to="/alterbilledet">Alterbilledet</MenuItem>
        <MenuItem to="/praesten-har-ordet">Præsten har ordet</MenuItem>
        <MenuItem to="/kirkeblad">Kirkeblad</MenuItem>
        <MenuItem to="/bliv-medlem">Bliv medlem</MenuItem>
        <MenuItem to="/kontakt">Kontakt</MenuItem>
      </ul>
    </header>
  );
};
