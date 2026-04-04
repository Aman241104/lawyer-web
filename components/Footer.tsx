const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 border-b border-white/10 pb-8 mb-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4 tracking-tight uppercase">
              ADVOCATE <span className="text-accent">NAME</span>
            </h3>
            <p className="text-white/60 text-sm max-w-md leading-relaxed">
              Factual information provided in compliance with the rules of the Bar Council of India.
            </p>
          </div>
          <div className="md:text-right">
            <h4 className="font-serif font-bold mb-4 uppercase text-accent">Contact Details</h4>
            <p className="text-white/60 text-sm">Law Chambers, Address Line 1</p>
            <p className="text-white/60 text-sm">City, State, ZIP</p>
            <p className="text-white/60 text-sm mt-2">Email: info@advocatename.in</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/40 uppercase tracking-widest gap-4">
          <p>© {new Date().getFullYear()} Advocate Name. All rights reserved.</p>
          <p className="text-center md:text-right font-semibold text-accent/80">
            DECLARATION: THE INFORMATION PROVIDED IS TRUE AND GENUINE.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
