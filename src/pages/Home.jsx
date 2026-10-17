import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-1 md:flex-row">
        <div className="flex-1 space-y-5">
          <h1 className="text-4xl font-bold tracking-tight md:text-4xl">
            Track Every Sample with Precision
          </h1>
          <p className="text-lg text-muted-foreground">
            MaabaraNexus helps lab teams manage samples from arrival to result; clearly and accurately.
          </p>
          <Link
            to="/samples"
            className="inline-block rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground"
          >
            View Samples
          </Link>
        </div>

        <div className="flex-1">
          <img
            src=" src/assets/best.hero.jpg"
            alt="Lab professional handling samples"
              className="h-80 w-full rounded object-cover shadow-sm md:h-80"
          />
        </div>
      </section>

      {/* Features */}
      <section className="border-t bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
          <div>
            <h3 className="font-semibold">End-to-End Tracking</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Follow every sample from the moment it arrives until the result is ready.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Clear Status Updates</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Instantly see whether a sample is received, processing, or completed.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Staff & Admin Roles</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Different access levels so the right people can manage or oversee samples.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}