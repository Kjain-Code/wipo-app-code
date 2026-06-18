export function MaintenancePage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-red-900 p-4">
      <div className="max-w-md w-full text-center">
        {/* Warning Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-red-400 blur-xl opacity-50 animate-pulse"></div>
            <div className="relative bg-red-500 rounded-full p-6 text-white">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4v2m0 4v2M7 9h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V11a2 2 0 012-2zm0 0V7a2 2 0 012-2h6a2 2 0 012 2v2"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Main Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-red-600 dark:text-red-400 mb-4">
          ⚠️ WIPOGROUP IS A SCAM
        </h1>

        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8 mb-6 border-2 border-red-300 dark:border-red-700">
          <p className="text-gray-700 dark:text-gray-300 text-lg font-semibold mb-4">
            This website will be restored once payment is received.
          </p>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            If you have any concerns or inquiries, please contact us:
          </p>

          {/* Contact Number */}
          <div className="bg-red-50 dark:bg-red-950 rounded-lg p-4 border border-red-200 dark:border-red-800">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
              Contact Number:
            </p>
            <a
              href="tel:7007387337"
              className="text-2xl font-bold text-red-600 dark:text-red-400 hover:underline transition-all"
            >
              +91 7007387337
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-gray-600 dark:text-gray-500 italic mt-8">
          Website Status: Suspended pending payment
        </p>
      </div>
    </div>
  );
}
