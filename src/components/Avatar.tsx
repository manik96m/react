import { getImageUrl } from "../utils";

export default function Avatar({
  person,
  size,
}: {
  person: { name: string; imageId: string };
  size: number;
}) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
