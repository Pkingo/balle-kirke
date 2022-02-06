import { LoaderFunction, useLoaderData, redirect } from "remix";
import { AboutConstituencyPage } from "~/types/AboutConstituencyPage";
import { getAboutConstituencyPage } from "~/utils/getAboutConstituency.server";
import Markdown from "markdown-to-jsx";
import { MarkdownOptions } from "~/components/markdown";

export const loader: LoaderFunction = async ({ params, request }) => {
  const slug = params.slug;
  if (typeof slug === "undefined") {
    redirect("/om-valgmenigheden");
  } else {
    const page = await getAboutConstituencyPage(slug);
    if (!page) {
      return { status: 404 };
    }
    return page;
  }
};

export default function PostSlug() {
  const { body } = useLoaderData<AboutConstituencyPage>();
  return (
    <div>
      <Markdown options={MarkdownOptions}>{body}</Markdown>
    </div>
  );
}
