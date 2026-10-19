import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
  <footer className="mt-auto border-t bg-stone-100">
    <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          
          <div>
            <h3 className="font-semibold text-primary">MaabaraNexus</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Precision tracking for laboratory samples.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium">Product</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/samples" className="hover:text-primary">Samples</Link></li>
              <li><Link to="/" className="hover:text-primary">Dashboard</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-medium">Support</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><span className="hover:text-primary">Help</span></li>
              <li><span className="hover:text-primary">Contact</span></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-medium">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><span>Privacy</span></li>
              <li><span>Terms</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} MaabaraNexus. All rights reserved.
        </div>
      </div>

    </footer>
    </>
  );
}

export default Footer