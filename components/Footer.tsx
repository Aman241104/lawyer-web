import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-24 md:py-32 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 pb-20 border-b border-white/5">
          <div className="lg:col-span-5">
            <Link href="/" className="mb-8 block">
              <Image 
                src="/images/logo-jay-g-patel.png" 
                alt="Jay G Patel" 
                width={150} 
                height={150} 
                className="w-auto h-20 brightness-0 invert"
              />
            </Link>
            <p className="text-white/50 text-sm md:text-base max-w-sm leading-relaxed mb-12 italic font-serif">
              Jay G Patel (Advocate) – Committed to providing expert legal representation and strategic advocacy for meaningful results.
            </p>
            <div className="flex gap-6">
              {["INSTAGRAM", "YOUTUBE", "LINKEDIN"].map((social) => (
                <span key={social} className="text-[10px] font-bold tracking-widest text-accent hover:text-white transition-colors cursor-pointer">
                  {social}
                </span>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-7 grid md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-8">Navigation</h4>
              <ul className="space-y-4">
                {["HOME", "ABOUT US", "SERVICES", "TEAM"].map((link) => (
                  <li key={link}>
                    <Link href={`/#${link.toLowerCase().replace(" ", "-")}`} className="text-xs font-medium text-white/70 hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-8">Practice Areas</h4>
              <ul className="space-y-4">
                {["CRIMINAL LAW", "LAND REVENUE", "FAMILY LAW", "CORPORATE LAW"].map((link) => (
                  <li key={link}>
                    <span className="text-xs font-medium text-white/70 hover:text-white transition-colors cursor-pointer">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-8">Contact</h4>
              <ul className="space-y-6">
                <li>
                  <p className="text-xs font-medium text-white/70 leading-relaxed uppercase tracking-widest">
                    FF – 13, Omkar Lotus, Opp. SMVS Swaminarayan Temple, Chandkheda To Motera Road, Chandkheda, Ahmedabad – 382424
                  </p>
                </li>
                <li>
                  <p className="text-xs font-medium text-white/70">
                    jay1802@gmail.com
                  </p>
                </li>
                <li>
                  <p className="text-xs font-medium text-white/70">
                    +91 99987 14891 / +91 99132 61013
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-widest text-white/30">
            © {new Date().getFullYear()} JAY G PATEL. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[9px] md:text-[10px] font-bold text-accent/60 uppercase tracking-[0.3em] leading-loose italic max-w-xl text-center md:text-right">
            DECLARATION: THE INFORMATION PROVIDED IS IN COMPLIANCE WITH BCI RULES AND IS FOR INFORMATIONAL PURPOSES ONLY.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
