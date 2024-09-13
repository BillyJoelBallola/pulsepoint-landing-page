type Links = {
  href: string;
  label: string;
};

type FooterLinksProps = {
  title: string;
  links: Links[];
};

function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div className="grid gap-2">
      <h4>{title}</h4>
      <div className="grid gap-1 text-zinc-500 text-sm">
        {links.map((link, idx) => (
          <a href={link.href} key={idx}>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default FooterLinks;
