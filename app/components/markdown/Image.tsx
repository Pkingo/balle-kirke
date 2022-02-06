const removePublicPath = (path: string) =>
  "/" + path.split("/").slice(2).join("/");

export const Image = (
  props: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) => (
  <figure className="py-4">
    <img
      {...props}
      src={removePublicPath(props.src || "")}
      className="mx-auto border-2 border-green-main"
    />
    <figcaption className="italic text-center">{props.title}</figcaption>
  </figure>
);
