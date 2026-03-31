import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerSections = [
    {
      title: "Frameworks",
      links: [
        { name: "Governed AI Loop", href: "/frameworks#loop" },
        { name: "Debt Quadrant", href: "/frameworks#debt" },
        { name: "Executive Action Framework", href: "/frameworks#executive" },
        { name: "AI Operating System (AIOS)", href: "/frameworks#aios" },
      ],
    },
    {
      title: "Governance",
      links: [
        { name: "Maturity Assessment", href: "/assessment" },
        { name: "The Book", href: "/book" },
        { name: "Consulting", href: "/services" },
        { name: "Workshops", href: "/services#workshops" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Resources", href: "/resources" },
        { name: "Contact", href: "/contact" },
        { name: "LinkedIn", href: "https://linkedin.com/company/aion-governance" }, // Placeholder
      ],
    },
  ];

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6 outline-none">
              <div className="w-8 h-8 bg-brand-accent rounded-sm"></div>
              <span className="text-xl font-bold tracking-tight">AION <span className="font-light">GOVERNANCE</span></span>
            </Link>
            <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
              Enabling enterprise AI scale through rigorous governance models.
              AION provides the frameworks and strategic oversight needed to turn AI from a liability into a sustainable operating model.
            </p>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-5 text-sm uppercase tracking-wider text-gray-400">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-brand-accent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-muted space-y-4 md:space-y-0 uppercase tracking-widest">
          <div>
            © {currentYear} AION Governance. All rights reserved.
          </div>
          <div className="flex space-x-8">
            <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Notice</Link>
            <Link href="/imprint" className="hover:text-white transition-colors">Imprint</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
