import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function StripeCheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Changed from handleFormSubmit to a standard function
  const handlePaymentSubmit = async () => {
    if (!stripe || !elements) return;
    setLoading(true);
    setMessage("");

    const cardElement = elements.getElement(CardElement);

    try {
      const { error } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (error) {
        const errorMessage =
          error.message || "Payment failed. Please try again.";
        setMessage(errorMessage);
        toast.error(errorMessage);
      } else {
        toast.success("Payment successful! Your order is being confirmed.");
        navigate("/order-confirmation", { replace: true });
      }
    } catch (err) {
      const errorMessage =
        err?.message || "Something went wrong. Please try again.";
      setMessage(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Payment Details
      </h3>
      {/* CHANGED FROM <form> TO <div> */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Credit or Debit Card
          </label>
          <div
            className={`p-3 bg-gray-50 border rounded-lg transition-all duration-200 ${
              isFocused
                ? "border-indigo-500 ring-2 ring-indigo-100 bg-white"
                : "border-gray-200"
            }`}
          >
            <CardElement
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#1f2937",
                    fontFamily: "ui-sans-serif, system-ui, sans-serif",
                    "::placeholder": { color: "#9ca3af" },
                  },
                  invalid: {
                    color: "#ef4444",
                  },
                },
              }}
            />
          </div>
        </div>

        {/* CHANGED type="submit" TO type="button" AND ADDED onClick */}
        <button
          type="button"
          onClick={handlePaymentSubmit}
          disabled={!stripe || loading}
          className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-sm transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Processing...
            </>
          ) : (
            "Pay Now"
          )}
        </button>

        {message && (
          <div className="p-3 bg-red-50 border border-red-100 rounded-lg text-sm text-red-600 flex items-center gap-2">
            <svg
              className="h-5 w-5 shrink-0 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            <span>{message}</span>
          </div>
        )}
      </div>{" "}
      {/* CHANGED FROM </form> TO </div> */}
    </div>
  );
}
