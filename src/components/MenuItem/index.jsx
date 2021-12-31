import { LinkArea, LinkIcon } from "./styled";

function MenuItem({ icon, link }) {
  return (
    <LinkArea href={link}>
      <LinkIcon src={icon} />
    </LinkArea>
  );
}

export default MenuItem;
