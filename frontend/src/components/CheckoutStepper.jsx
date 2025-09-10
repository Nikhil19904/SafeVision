import { CheckCircle } from "lucide-react";

export default function CheckoutStepper({ currentStep }) {
  const steps = [
    { id: 1, label: "Delivery Address" },
    { id: 2, label: "Payment Method" },
    { id: 3, label: "Review Order" },
    { id: 4, label: "Place Order" },
  ];

  return (
    <div className="flex items-center justify-center mb-6">
      <div className="flex items-center w-full max-w-3xl">
        {steps.map((step, index) => (
          <div key={step.id} className="flex-1 flex items-center">
            {/* Circle */}
            <div className="flex flex-col items-center text-center w-full">
              {currentStep > step.id ? (
                <CheckCircle className="w-6 h-6 text-green-600" />
              ) : (
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold 
                    ${
                      currentStep === step.id
                        ? "bg-yellow-500 text-black"
                        : "bg-gray-300 text-gray-700"
                    }`}
                >
                  {step.id}
                </div>
              )}
              <p
                className={`text-xs mt-1 ${
                  currentStep === step.id ? "font-semibold text-yellow-600" : "text-gray-600"
                }`}
              >
                {step.label}
              </p>
            </div>

            {/* Line */}
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-1 ${
                  currentStep > step.id ? "bg-green-600" : "bg-gray-300"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
