import { CheckIcon, StarIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import BASE_URL from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Premium = () => {
  const navigate = useNavigate();

  const handleBuyClick = async (type) => {
    const order = await axios.post(
      `${BASE_URL}/payment/create-order`,
      {
        membershipType: type,
      },
      {
        withCredentials: true,
      },
    );

    // It should open the razorpay checkout

    const { amount, keyId, notes, orderId, currency } = order.data;

    const options = {
      key: keyId,
      amount: amount, 
      currency: currency,
      name: "DevTinder",
      description: "Premium Membership",
      order_id: orderId,
      prefill: {
        name: notes.firstName + " " + notes.lastName,
        email: notes.email,
        contact: 9999999999,
      },
      theme: {
        color: "#3399cc",
      },
      handler: () => {
        navigate("/thank-you?plan=" + type);
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Choose Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 ml-3">
              Premium Plan
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock exclusive features and find your perfect match faster with
            our premium membership plans
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Silver Plan */}
          <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-gray-600 to-gray-700 text-white px-4 py-1 rounded-tr-2xl rounded-bl-lg text-sm font-semibold">
              POPULAR
            </div>

            <div className="p-8 lg:p-10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Silver Plan
                  </h2>
                  <p className="text-gray-600">Perfect for getting started</p>
                </div>
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-3 rounded-xl">
                  <StarIcon className="h-8 w-8 text-gray-600" />
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-gray-900">₹399</span>
                  <span className="text-xl text-gray-600 ml-2">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">100 likes per day</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">100 matches per day</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">100 messages per day</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Blue tick verification</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">3 month membership</span>
                </li>
              </ul>

              <button
                className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
                onClick={() => handleBuyClick("silver")}
              >
                Choose Silver Plan
              </button>
            </div>
          </div>

          {/* Gold Plan */}
          <div className="relative bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-yellow-200">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-4 py-1 rounded-tr-2xl rounded-bl-lg text-sm font-semibold">
              BEST VALUE
            </div>

            <div className="p-8 lg:p-10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Gold Plan
                  </h2>
                  <p className="text-gray-600">Ultimate dating experience</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-400 to-amber-400 p-3 rounded-xl">
                  <StarIcon className="h-8 w-8 text-white" />
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-gray-900">₹999</span>
                  <span className="text-xl text-gray-600 ml-2">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Unlimited likes</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Unlimited matches</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Unlimited messages</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    Priority profile visibility
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Advanced search filters</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">1 year membership</span>
                </li>
              </ul>

              <button
                className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
                onClick={() => handleBuyClick("gold")}
              >
                Choose Gold Plan
              </button>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16">
          <p className="text-gray-600">
            Both plans include premium support and can be cancelled anytime
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Secure payment powered by Razorpay
          </p>
        </div>
      </div>
    </div>
  );
};

export default Premium;
