import Image from "next/image";

export default function Home() {
  const features = [
    {
      title: "Expert Mentorship",
      description: "Get guidance from industry leaders and successful entrepreneurs"
    },
    {
      title: "Network Access",
      description: "Connect with investors, partners, and fellow founders"
    },
    {
      title: "Resources & Tools",
      description: "Access cutting-edge tools and resources to scale your startup"
    },
    {
      title: "Investment Ready",
      description: "Prepare your startup for successful fundraising rounds"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">W1 Startup Accelerator</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Accelerate Your Startup Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our accelerator program and transform your startup into a successful business
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">About Us</h3>
              <p className="text-sm text-gray-600">
                W1 Startup Accelerator helps early-stage startups grow and succeed through mentorship, resources, and connections.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Apply Now</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Program Details</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600">Email: contact@w1accelerator.com</li>
                <li className="text-sm text-gray-600">Phone: (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              © {new Date().getFullYear()} W1 Startup Accelerator. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
