export default function BookingConfirmationPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-indigo-600">Booking Confirmed 🎉</h2>
        <p className="mt-2 text-gray-600">Your booking has been successfully placed.</p>
        <p className="mt-1 text-sm text-gray-500">You will receive a confirmation email shortly.</p>
      </div>
    </div>
  );
}
