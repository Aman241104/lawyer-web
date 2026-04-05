import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 md:py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 border-b border-white/10 pb-10 mb-10">
          <div>
            <h3 className="font-serif text-lg md:text-xl font-bold mb-4 tracking-tight uppercase">
              ADVOCATE <span className="text-accent">JAY G PATEL</span>
            </h3>
            <p className="text-white/80 text-xs md:text-sm max-w-md leading-relaxed">
              Factual information provided regarding the legal services of Jay G Patel in compliance with the rules of the Bar Council of India.
            </p>
          </div>
          <div className="md:text-right">
            <h4 className="font-serif font-bold mb-4 uppercase text-accent text-xs md:text-base">Contact Details</h4>
            <div className="space-y-1">
              <p className="text-white/80 text-xs md:text-sm">FF-13, Omkar Lotus, Chandkheda</p>
              <p className="text-white/80 text-xs md:text-sm">Ahmedabad, Gujarat 382424</p>
              <p className="text-white/80 text-xs md:text-sm mt-3 pt-3 border-t border-white/5 md:border-0 inline-block md:block w-full">Email: jay1802@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-[8px] md:text-xs text-white/70 uppercase tracking-[0.2em] md:tracking-widest gap-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <p>© {new Date().getFullYear()} Jay G Patel. All rights reserved.</p>
            <div className="flex gap-6 justify-center">
              <Link href="/terms" className="hover:text-accent transition-colors">Terms & Conditions</Link>
              <Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link>
            </div>
          </div>
          <p className="font-semibold text-accent/80 leading-relaxed md:leading-normal max-w-xs md:max-w-none">
            DECLARATION: THE INFORMATION PROVIDED IS TRUE AND GENUINE.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
