// app/blog/page.tsx
export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600">
            Latest insights, tutorials, and updates from the cybersecurity community
          </p>
        </div>

        <div className="space-y-8">
          {/* Coming Soon Message */}
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-gray-600 mb-4">
              We&apos;re working on bringing you valuable content about cybersecurity tools, 
              techniques, and best practices.
            </p>
            <p className="text-gray-600">
              Stay tuned for tutorials, tool reviews, and security insights!
            </p>
          </div>

          {/* Placeholder for future blog posts */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="text-sm text-gray-500 mb-2">Coming Soon</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Getting Started with Nmap
              </h3>
              <p className="text-gray-600 mb-4">
                A comprehensive guide to network discovery and security auditing with Nmap.
              </p>
              <div className="text-sm text-gray-500">5 min read</div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="text-sm text-gray-500 mb-2">Coming Soon</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Web Application Security Testing
              </h3>
              <p className="text-gray-600 mb-4">
                Essential tools and techniques for testing web application security.
              </p>
              <div className="text-sm text-gray-500">8 min read</div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="text-sm text-gray-500 mb-2">Coming Soon</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Password Cracking Fundamentals
              </h3>
              <p className="text-gray-600 mb-4">
                Understanding password security and recovery techniques.
              </p>
              <div className="text-sm text-gray-500">6 min read</div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="text-sm text-gray-500 mb-2">Coming Soon</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Social Engineering Tools
              </h3>
              <p className="text-gray-600 mb-4">
                Exploring the tools and techniques used in social engineering assessments.
              </p>
              <div className="text-sm text-gray-500">7 min read</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
