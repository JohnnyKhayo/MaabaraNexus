import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-auto border-t bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="font-semibold text-primary">MaabaraNexus</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Reliable laboratory services with accurate results.
            </p>
            <p className="mt-3 text-sm font-medium">Open 24/7</p>
          </div>

          <div>
            <h4 className="text-sm font-medium">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/services" className="hover:text-primary">Services</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium">Contact</h4>

            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:info@maabaranexus.com" className="hover:text-primary">
                  info@maabaralabs.com
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/254700000000" target="_blank" rel="noreferrer"
                  className="hover:text-primary">
                  WhatsApp
                </a>
              </li>
              <li>Opposite Sunshine Schools, Nairobi</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium">Staff</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/login" className="hover:text-primary">Staff Login</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} MaabaraLabs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}