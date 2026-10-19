import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "Phlebotomy & Blood Tests",
      desc: "Professional blood collection and a wide range of routine and specialized blood tests including full blood count, blood sugar, and lipid profiles.",
      img: "https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=700",
    },
    {
      title: "Urinalysis",
      desc: "Complete urine analysis for detecting infections, kidney issues, diabetes, and general health screening.",
      img: "https://images.pexels.com/photos/4226896/pexels-photo-4226896.jpeg?auto=compress&cs=tinysrgb&w=700",
    },
    {
      title: "Stool Analysis",
      desc: "Examination of stool samples for parasites, bacteria, occult blood, and digestive system disorders.",
      img: "https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg?auto=compress&cs=tinysrgb&w=700",
    },
    {
      title: "Culture & Sensitivity",
      desc: "Bacterial culture and antibiotic sensitivity testing to guide effective treatment. Includes use of automated systems.",
      img: "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=700",
    },
    {
      title: "Mycology",
      desc: "Identification of fungal infections affecting skin, nails, hair, and internal systems.",
      img: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=700",
    },
    {
      title: "Food Handlers Medical Tests",
      desc: "Mandatory health screening required for individuals working in the food industry.",
      img: "https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=700",
    },
    {
      title: "Malaria Testing",
      desc: "Rapid and microscopic malaria tests for accurate diagnosis.",
      img: "https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&w=700",
    },
    {
      title: "HIV & Hepatitis Screening",
      desc: "Confidential testing for HIV, Hepatitis B, and Hepatitis C.",
      img: "https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=700",
    },
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-3xl font-semibold">Our Laboratory Services</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Accurate diagnostic testing with careful sample handling and clear results.
        </p>

        <div className="mt-10 space-y-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col items-center gap-6 md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-56 w-full rounded-lg object-cover md:h-64"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-xl font-semibold">{service.title}</h2>
                <p className="mt-2 text-muted-foreground">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Compact CTA */}
        <div className="mt-12 border-t pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Need to book a test or ask a question?
          </p>
          <Link
            to="/contact"
            className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
          >
            Contact the lab →
          </Link>
        </div>
      </div>
    </div>
  );
}