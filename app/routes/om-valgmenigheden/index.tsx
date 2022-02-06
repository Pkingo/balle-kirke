import { Link, LoaderFunction, useLoaderData } from "remix";
import { AboutConstituencyPage } from "~/types/AboutConstituencyPage";
import { getAboutConstituencyPages } from "~/utils/getAboutConstituency.server";

type ListItem = Omit<AboutConstituencyPage, "body">;

export const loader: LoaderFunction = async () => {
  const pages = await getAboutConstituencyPages();
  return pages.map(({ body, ...rest }) => rest);
};

const ListItem: React.FC<{ to: string }> = ({ children, to }) => (
  <li className="list-disc">
    <Link className="font-bold text-green-main hover:underline" to={to}>
      {children}
    </Link>
  </li>
);

const OmValgmenigheden = () => {
  const pages = useLoaderData<ListItem[]>();
  return (
    <div>
      <h3 className="text-green-main">Om valgmenigheden</h3>
      <ul className="pl-4 mt-2">
        {pages.map((page) => (
          <ListItem to={page.slug}>{page.title}</ListItem>
        ))}
      </ul>
    </div>
  );
};

export default OmValgmenigheden;
