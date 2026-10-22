import { Link } from "react-router-dom";
import aboutImage from "../assets/best.hero.jpg";
import { IoArrowForward } from "react-icons/io5";
import { FiTarget, FiCheckCircle, FiShield } from "react-icons/fi";

export default function About() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-10 md:py-14">
        <h1 className="text-3xl font-semibold md:text-4xl">About Maabara Labs</h1>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">
          A trusted laboratory focused on accurate testing and clear results.
        </p>

        {/* Image +text (grid layouts*/}
        <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
          <img
            src={aboutImage}
            alt="Laboratory professionals at work"
            className="h-64 w-full rounded-lg object-cover md:h-80"/>
          <div>
            <h2 className="text-xl font-semibold md:text-2xl">Who We Are</h2>
            <p className="mt-3 text-muted-foreground">
              Maabara Labs provides reliable diagnostic services to patients, clinics, and organizations. 
              We combine careful sample handling with modern laboratory practices to deliver results you can trust.
            </p>
          </div>
        </div>

        {/* Mission/ Approach/ Commitment */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="rounded-lg border bg-slate-50 p-5">
            <FiTarget className="mb-3 text-2xl text-primary" />
            <h3 className="font-semibold">Our Mission</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              To deliver accurate and timely laboratory results that support better health decisions.
            </p>
          </div>

          <div className="rounded-lg border bg-slate-50 p-5">
            <FiCheckCircle className="mb-3 text-2xl text-primary" />
            <h3 className="font-semibold">Our Approach</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Every sample is handled with strict identification and quality checks from arrival to result.
            </p>
          </div>

          <div className="rounded-lg border bg-slate-50 p-5">
            <FiShield className="mb-3 text-2xl text-primary" />
            <h3 className="font-semibold">Our Commitment</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Professionalism, confidentiality, and continuous improvement in all our services.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
            Get in touch with us
            <IoArrowForward className="text-base" />
          </Link>
        </div>
      </div>
    </div>
  );
}