import { LoaderFunction, useLoaderData } from "remix";
import Markdown from "markdown-to-jsx";

import { getSignupPage } from "~/utils/getSignupPage.server";
import { MarkdownOptions } from "~/components/markdown";

export const loader: LoaderFunction = () => getSignupPage();

const BlivMedlem = () => {
  const data = useLoaderData<{ title: string; body: string }>();
  return <Markdown options={MarkdownOptions}>{data.body}</Markdown>;
};

export default BlivMedlem;
