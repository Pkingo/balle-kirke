export const Image: React.FC<{ title: string }> = (props) => (
  <figure className="py-4">
    <img {...props} className="mx-auto border-2 border-green-main" />
    <figcaption className="italic text-center">{props.title}</figcaption>
  </figure>
);
