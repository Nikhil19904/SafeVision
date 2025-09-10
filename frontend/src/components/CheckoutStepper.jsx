export default function CheckoutStepper({ currentStep }) {
  const steps = [
    "Address",
    "Payment",
    "Subscription",
    "Review",
    "Success",
  ];

  return (
    <div className="w-full max-w-3xl mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = currentStep === stepNumber;
          const isCompleted = currentStep > stepNumber;

          return (
            <div
              key={index}
              className="flex-1 flex flex-col items-center text-center relative"
            >
              {/* Step Circle */}
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full border-2 font-semibold
                  ${
                    isCompleted
                      ? "bg-green-500 border-green-500 text-white"
                      : isActive
                      ? "bg-yellow-500 border-yellow-500 text-black"
                      : "bg-gray-200 border-gray-300 text-gray-600"
                  }`}
              >
                {isCompleted ? "✓" : stepNumber}
              </div>

              {/* Step Label */}
              <span
                className={`mt-2 text-sm font-medium ${
                  isActive ? "text-yellow-600" : "text-gray-600"
                }`}
              >
                {step}
              </span>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div
                  className={`absolute top-5 left-[55%] w-full h-[2px] 
                  ${
                    isCompleted
                      ? "bg-green-500"
                      : "bg-gray-300"
                  }`}
                ></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
