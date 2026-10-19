import { Link } from "react-router-dom";
import { FiClock, FiUsers, FiAward, FiTarget, FiEye, FiHeart } from "react-icons/fi";

function Home() {
  return (
    <div>
              {/* Optional top accent bar */}
      <section className="bg-blue-800 py-2.5 text-center text-sm text-white">
        Reliable laboratory results with careful sample handling.
        <Link to="/contact" className="ml-2 underline">Contact us</Link>
      </section>

      {/* Hero Section */}
      <section className="py-8 md:py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 md:flex-row">
          <div className="flex-1">
            <h1 className="text-4xl font-bold md:text-5xl">
              Accurate Testing. Trusted Results.
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Professional laboratory services with careful sample handling and clear results you can rely on.
            </p>
            <div className="mt-6 flex gap-3">
              <Link to="/contact" className="rounded bg-primary px-5 py-2 text-white">
                Book a Test
              </Link>
              <Link to="/services" className="rounded border px-5 py-2">
                Our Services
              </Link>
            </div>
          </div>

          <div className="flex-1">
            <img
              src="/src/assets/best.hero.jpg"
              alt="Lab professional"
              className="h-64 w-full rounded-lg object-cover md:h-80"
            />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y bg-slate-50 py-5">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-8 px-4 text-sm text-gray-600 md:justify-between">
          <div className="flex items-center gap-2">
            <FiClock className="text-primary" /> 7+ Years Experience
          </div>
          <div className="flex items-center gap-2">
            <FiUsers className="text-primary" /> Trusted by Patients & Clinics
          </div>
          <div className="flex items-center gap-2">
            <FiAward className="text-primary" /> Quality Laboratory Services
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-6 text-center text-2xl font-semibold">Our Services</h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-lg border bg-stone-50 shadow-sm">
              <img
                src="https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Blood test"
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium">Phlebotomy & Blood Tests</h3>
                <p className="mt-1 text-sm text-gray-600">Safe blood collection and routine tests.</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border bg-stone-50 shadow-sm">
              <img
                src="https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Urine test"
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium">Urinalysis</h3>
                <p className="mt-1 text-sm text-gray-600">Urine tests for infection and health screening.</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border bg-stone-50 shadow-sm">
              <img
                src="https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Stool test"
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium">Stool Analysis</h3>
                <p className="mt-1 text-sm text-gray-600">Tests for parasites and digestive issues.</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border bg-stone-50 shadow-sm">
              <img
                src="https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Culture"
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium">Culture & Sensitivity</h3>
                <p className="mt-1 text-sm text-gray-600">Bacterial culture and antibiotic testing.</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border bg-stone-50 shadow-sm">
              <img
                src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Mycology"
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium">Mycology</h3>
                <p className="mt-1 text-sm text-gray-600">Fungal infection testing and identification.</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border bg-stone-50 shadow-sm">
              <img
                src="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Food handlers"
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium">Food Handlers Tests</h3>
                <p className="mt-1 text-sm text-gray-600">Medical screening for food industry workers.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link to="/services" className="text-primary hover:underline">View all services</Link>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="bg-blue-50 py-10">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
          <div className="rounded bg-white p-5">
            <FiTarget className="mb-2 text-2xl text-primary" />
            <h3 className="font-medium">Our Mission</h3>
            <p className="mt-2 text-sm text-gray-600">To provide accurate and timely laboratory results that help people make better health decisions.</p>
          </div>
          <div className="rounded bg-white p-5">
            <FiEye className="mb-2 text-2xl text-primary" />
            <h3 className="font-medium">Our Vision</h3>
            <p className="mt-2 text-sm text-gray-600">To be a trusted laboratory known for quality and reliable service.</p>
          </div>
          <div className="rounded bg-white p-5">
            <FiHeart className="mb-2 text-2xl text-primary" />
            <h3 className="font-medium">Our Values</h3>
            <p className="mt-2 text-sm text-gray-600">Accuracy, confidentiality, and professionalism in all our work.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 text-center">
        <h2 className="text-2xl font-semibold">Need a laboratory test?</h2>
        <p className="mt-2 text-gray-600">Contact us today to book or ask any questions.</p>
        <Link to="/contact" className="mt-4 inline-block rounded bg-primary px-6 py-2 text-white">
          Contact Us
        </Link>
      </section>
    </div>
  );
}

export default Home;