
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">BlogVerse</h3>
            <p className="text-gray-600">
              A place where stories come to life and ideas find their voice.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Navigation</h3>
            <div className="space-y-3">
              <Link to="/" className="block text-gray-600 hover:text-purple-600">
                Home
              </Link>
              <Link to="/about" className="block text-gray-600 hover:text-purple-600">
                About Us
              </Link>
              <Link to="/contact" className="block text-gray-600 hover:text-purple-600">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Get in Touch</h3>
            <p className="text-gray-600">
              Email: hello@blogverse.com<br />
              Follow us on social media for updates.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} BlogVerse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
