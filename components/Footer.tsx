const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 md:py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 border-b border-white/10 pb-10 mb-10">
          <div>
            <h3 className="font-serif text-lg md:text-xl font-bold mb-4 tracking-tight uppercase">
              ADVOCATE <span className="text-accent">NAME</span>
            </h3>
            <p className="text-white/80 text-xs md:text-sm max-w-md leading-relaxed">
              Factual information provided regarding the legal services of Advocate Name in compliance with the rules of the Bar Council of India.
            </p>
          </div>
          <div className="md:text-right">
            <h4 className="font-serif font-bold mb-4 uppercase text-accent text-xs md:text-base">Contact Details</h4>
            <div className="space-y-1">
              <p className="text-white/80 text-xs md:text-sm">Law Chambers, Address Line 1</p>
              <p className="text-white/80 text-xs md:text-sm">City, State, ZIP</p>
              <p className="text-white/80 text-xs md:text-sm mt-3 pt-3 border-t border-white/5 md:border-0 inline-block md:block w-full">Email: info@advocatename.in</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-[8px] md:text-xs text-white/70 uppercase tracking-[0.2em] md:tracking-widest gap-6 text-center md:text-left">
          <p>© {new Date().getFullYear()} Advocate Name. All rights reserved.</p>
          <p className="font-semibold text-accent/80 leading-relaxed md:leading-normal max-w-xs md:max-w-none">
            DECLARATION: THE INFORMATION PROVIDED IS TRUE AND GENUINE.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
