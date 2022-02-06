import { LoaderFunction, useLoaderData } from "remix";
import Markdown from "markdown-to-jsx";

import { getAlterPage } from "~/utils/getAlterPage.server";
import { MarkdownOptions } from "~/components/markdown";

export const loader: LoaderFunction = () => getAlterPage();

const AlterBilledet = () => {
  const data = useLoaderData<{ body: string }>();
  return <Markdown options={MarkdownOptions}>{data.body}</Markdown>;
};

export default AlterBilledet;
