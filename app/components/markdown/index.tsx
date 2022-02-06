import { MarkdownToJSX } from "markdown-to-jsx";
import { Image } from "~/components/markdown/Image";
import { Anchor } from "~/components/markdown/Anchor";
import { Blockquote } from "~/components/markdown/Blockquote";
import { H1, H2, H3, H4, H5, H6 } from "~/components/markdown/Headings";

export const MarkdownOptions: MarkdownToJSX.Options = {
  wrapper: "article",
  overrides: {
    img: { component: Image },
    blockquote: { component: Blockquote },
    a: { component: Anchor },
    h1: { component: H1 },
    h2: { component: H2 },
    h3: { component: H3 },
    h4: { component: H4 },
    h5: { component: H5 },
    h6: { component: H6 },
  },
};
