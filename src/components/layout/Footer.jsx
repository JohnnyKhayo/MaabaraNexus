import React from "react";

function Footer() {
  return (
    <footer className="mt-auto border-t bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} SampleNexus. All rights reserved.</p>
        <div className="flex gap-4">
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </div>
    </footer>
  );
}
export default Footer