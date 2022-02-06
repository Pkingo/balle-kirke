import { LoaderFunction, useLoaderData } from "remix";
import { PageHeader } from "~/components/PageHeader";
import { getChurchPaper } from "~/utils/getChurchPapers";

export const loader: LoaderFunction = async () => {
  const papers = await getChurchPaper();
  return papers;
};

type PaperItem = {
  title: string;
  file: string;
};

const PaperItem: React.FC<PaperItem> = ({ file, title }) => (
  <li className="list-disc">
    <a
      href={file}
      className="font-bold text-green-main hover:underline"
      target="_blank"
    >
      {title}
    </a>
  </li>
);

const Kirkeblad = () => {
  const data = useLoaderData<PaperItem[]>();
  return (
    <div>
      <PageHeader>Kirkeblad</PageHeader>
      <p>Her finder du altid sidste nye kirkeblad.</p>
      <ul className="pl-4 mt-2">
        {data.map((item) => (
          <PaperItem key={item.file} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default Kirkeblad;
