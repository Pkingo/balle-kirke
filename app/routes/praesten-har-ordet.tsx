import { LoaderFunction, useLoaderData } from "remix";
import Markdown from "markdown-to-jsx";
import { MarkdownOptions } from "~/components/markdown";
import { getPriestBlogs } from "~/utils/getPriestBlogs.server";
import { PageHeader } from "~/components/PageHeader";

export const loader: LoaderFunction = () => getPriestBlogs();

const PræstenHarOrdet = () => {
  const data = useLoaderData<{ title: string; body: string; slug: string }[]>();
  return (
    <div>
      <PageHeader>Præsten har ordet</PageHeader>
      {data.map(({ body, slug }) => (
        <Markdown key={slug} options={MarkdownOptions}>
          {body}
        </Markdown>
      ))}
    </div>
  );
};

export default PræstenHarOrdet;
