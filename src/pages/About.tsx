
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
          <div className="prose prose-purple max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Welcome to BlogVerse, a vibrant community of writers, thinkers, and creators sharing their unique perspectives and experiences with the world.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2025, our platform aims to provide a space where diverse voices can come together to inspire, educate, and connect with readers from all walks of life.
            </p>
            <p className="text-lg text-gray-600">
              Whether you're here to learn, share, or simply explore, we're glad to have you as part of our growing community.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
