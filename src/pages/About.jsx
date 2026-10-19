import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-3xl font-semibold">About Maabara Labs</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          A trusted laboratory focused on accurate testing and clear results.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-center">
          <img
            src="https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=700"
            alt="Laboratory team at work"
            className="h-64 w-full rounded-lg object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold">Who We Are</h2>
            <p className="mt-3 text-muted-foreground">
              Maabara Labs provides reliable diagnostic services to patients, clinics, and organizations. 
              We combine careful sample handling with modern laboratory practices to deliver results you can trust.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="font-semibold">Our Mission</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              To deliver accurate and timely laboratory results that support better health decisions.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Our Approach</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Every sample is handled with strict identification and quality checks from arrival to result.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Our Commitment</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Professionalism, confidentiality, and continuous improvement in all our services.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/contact" className="text-sm font-medium text-primary hover:underline">
            Get in touch with us →
          </Link>
        </div>
      </div>
    </div>
  );
}