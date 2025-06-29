export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Cyber Cheatsheets</h1>
          <p className="text-xl text-gray-600">
            Your comprehensive resource for cybersecurity tools and commands
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              Cyber Cheatsheets is dedicated to providing security professionals, penetration testers, 
              and cybersecurity enthusiasts with a comprehensive, well-organized collection of tools, 
              commands, and techniques used in ethical hacking and security assessments.
            </p>
            <p className="text-gray-700">
              Our goal is to streamline the workflow of security practitioners by offering quick 
              access to essential commands and tool configurations, organized by penetration testing 
              phases and security domains.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Comprehensive Tool Coverage</h3>
                <p className="text-gray-700">
                  From reconnaissance and enumeration to exploitation and post-exploitation, 
                  we cover all phases of penetration testing with detailed command references.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Organized by Categories</h3>
                <p className="text-gray-700">
                  Tools are carefully categorized by their primary use case, making it easy 
                  to find the right tool for any security assessment scenario.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Regular Updates</h3>
                <p className="text-gray-700">
                  Our cheatsheets are regularly updated to include the latest tools, 
                  techniques, and best practices in the cybersecurity field.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Community Driven</h3>
                <p className="text-gray-700">
                  We welcome contributions from the security community to help improve 
                  and expand our collection of resources.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Categories Covered</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Essential Tools</h4>
                <p className="text-sm text-gray-600">Core utilities used across all security activities</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Reconnaissance</h4>
                <p className="text-sm text-gray-600">Information gathering and discovery tools</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Enumeration</h4>
                <p className="text-sm text-gray-600">Service and system enumeration tools</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Exploitation</h4>
                <p className="text-sm text-gray-600">Attack and exploitation frameworks</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Web Application Security</h4>
                <p className="text-sm text-gray-600">Web app testing and security tools</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Network Security</h4>
                <p className="text-sm text-gray-600">Network analysis and security tools</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get Involved</h2>
            <p className="text-gray-700 mb-4">
              We believe in the power of community collaboration. Whether you're a seasoned 
              security professional or just starting your cybersecurity journey, there are 
              many ways to contribute:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Submit new tools and commands</li>
              <li>Improve existing cheatsheets</li>
              <li>Report bugs or suggest improvements</li>
              <li>Share your knowledge and expertise</li>
              <li>Help maintain and organize content</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
} 