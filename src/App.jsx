import AboutUS from "./components/AboutUS";
import ContactUS from "./components/ContactUS";
import FooterSection from "./components/FooterSection";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Program from "./components/Program";
import Services from "./components/Services";
import TestMonials from "./components/Testimonials";
import Transformations from "./components/Transformations";


function Section({ id, title }) {
  return (
    <section id={id} className="min-h-[70vh] px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <p className="mt-3 text-gray-700">
          Content for <b>{title}</b> goes here.
        </p>
      </div>
    </section>
  );
}

function App() {

  return (
     <div>
      <NavBar />
      <Hero />
      <AboutUS />
      <Services />
      <Program />
      <Transformations />
      <TestMonials />
      <ContactUS />
      <FooterSection />
    </div>
  )
}

export default App
