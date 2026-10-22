import { Link } from "react-router-dom";
import phlebotomyImg from "../assets/phlebotomy.jpg";
import urinalysisImg from "../assets/urinalysis.jpg";
import stoolImg from "../assets/stool.smear.jpg";
import cultureImg from "../assets/culture.sensitivity.jpg";
import fungiImg from "../assets/fungi.jpg";
import foodHandlersImg from "../assets/food.handlers.jpg";
import malariaImg from "../assets/malaria.smear.jpg";
import hivImg from "../assets/hiv.jpg";
import { IoArrowForward } from "react-icons/io5";

export default function Services() {
  const services = [
    {
      title: "Phlebotomy & Blood Tests",
      desc: "Professional blood collection and a wide range of routine and specialized blood tests including full blood count, blood sugar, and lipid profiles.",
      img: phlebotomyImg,
      alt: "an image of lab personnel in black scrubs withdrawing blood from a patient's right arm using a syringe"
    },
    {
      title: "Urinalysis",
      desc: "Complete urine analysis for detecting infections, kidney issues, diabetes, and general health screening.",
      img: urinalysisImg,
      alt: " a lab personnel holding a urinalysis strip inside a varcutainer urine tube that has urine sample"
    },
    {
      title: "Stool Analysis",
      desc: "Examination of stool samples for parasites, bacteria, occult blood, and digestive system disorders.",
      img: stoolImg,
      alt: "two hands in blue gloves both holding a wet smear on a glass slide near microscope"
    },
    {
      title: "Culture & Sensitivity",
      desc: "Bacterial culture and antibiotic sensitivity testing to guide effective treatment. Includes use of automated systems.",
      img: cultureImg,
      alt: "two hands on the lab bench each holding a plate containing a red colored agar"
    },
    {
      title: "Mycology",
      desc: "Identification of fungal infections affecting skin, nails, hair, and internal systems.",
      img: fungiImg,
      alt: "an image of a man's back back that have been seriously affected by a white colored fungi"
    },
    {
      title: "Food Handlers Medical Tests",
      desc: "Mandatory health screening required for individuals working in the food industry.",
      img: foodHandlersImg,
      alt: "a lab personnel in white labcoat and blue surgical mask using a needle trying to withdraw a bllod sample from the patients finger"
    },
    {
      title: "Malaria Testing",
      desc: "Rapid and microscopic malaria tests for accurate diagnosis.",
      img: malariaImg,
      alt: "hands in which gloves on the bench table preparing a wet smear of blood on the glass slied for viewing under a microscope"
    },
    {
      title: "HIV & Hepatitis Screening",
      desc: "Confidential testing for HIV, Hepatitis B, and Hepatitis C.",
      img: hivImg,
      alt: "a lab personnel in white labcoat seating along to the bench viewing a smear on the slide under a microscope. On his left is a black laptop on the same bench."
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
    className={`flex flex-col items-center gap-8 md:flex-row ${
      index % 2 === 1 ? "md:flex-row-reverse" : ""
    }`}>
    <div className="w-full md:w-1/2">
  <img
    src={service.img}
    alt={service.alt}
    className="max-h-72 w-full rounded-lg object-contain md:max-h-80" />
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
          to="/contact"className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
            Contact the lab 
            <IoArrowForward className="text-base" />
            </Link>       
             </div>
             </div>
    </div>
  );
}