
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-lg text-gray-600 mb-8">
              Have questions or suggestions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">hello@blogverse.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-600">San Francisco, CA</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Follow Us</h3>
                <p className="text-gray-600">Find us on social media @blogverse</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
