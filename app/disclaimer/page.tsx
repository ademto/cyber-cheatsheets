export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Disclaimer</h1>
          <p className="text-xl text-gray-600">
            Important information about the use of our cybersecurity resources
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Educational Purpose Only</h2>
            <p className="text-gray-700 mb-4">
              The information provided on Cyber Cheatsheets is for educational and informational purposes 
              only. The tools, techniques, and commands described are intended to help security professionals, 
              penetration testers, and cybersecurity enthusiasts understand and practice ethical hacking 
              methodologies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Legal Compliance</h2>
            <p className="text-gray-700 mb-4">
              Users are responsible for ensuring that their use of any information from this website 
              complies with applicable laws and regulations in their jurisdiction. The authors and 
              contributors of Cyber Cheatsheets are not responsible for any misuse of the information 
              provided.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ethical Use</h2>
            <p className="text-gray-700 mb-4">
              All tools and techniques should only be used on systems and networks that you own, have 
              explicit permission to test, or are part of authorized security assessments. Unauthorized 
              testing of systems you do not own or have permission to test is illegal and unethical.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">No Warranty</h2>
            <p className="text-gray-700 mb-4">
              The information on this website is provided "as is" without any warranties, express or 
              implied. We make no representations about the accuracy, completeness, or reliability of 
              any information, tools, or techniques described.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              In no event shall Cyber Cheatsheets, its contributors, or authors be liable for any direct, 
              indirect, incidental, special, exemplary, or consequential damages arising from the use 
              of information provided on this website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Professional Responsibility</h2>
            <p className="text-gray-700 mb-4">
              Security professionals using these resources should:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Always obtain proper authorization before testing</li>
              <li>Follow responsible disclosure practices</li>
              <li>Respect privacy and confidentiality</li>
              <li>Stay updated on relevant laws and regulations</li>
              <li>Use tools and techniques responsibly</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Updates and Changes</h2>
            <p className="text-gray-700 mb-4">
              This disclaimer may be updated from time to time. Users are encouraged to review this 
              disclaimer regularly to stay informed about the terms of use for our resources.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
            <p className="text-gray-700">
              If you have questions about this disclaimer or concerns about the use of our resources, 
              please contact us through our website or social media channels.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 