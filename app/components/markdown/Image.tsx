const removePublicPath = (path: string) =>
  "/" + path.split("/").slice(2).join("/");

export const Image = (
  props: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) => (
  <figure className="py-4x">
    <img
      {...props}
      src={removePublicPath(props.src || "")}
      className="border-2 border-green-main mx-auto"
    />
    <figcaption className="italic text-center">{props.title}</figcaption>
  </figure>
);
