import { useSearchParams, Link } from "react-router-dom";
import { StarIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";

const ThankYou = () => {
  const [searchParams] = useSearchParams();
  const plan = searchParams.get("plan") || "silver";
  const isGold = plan === "gold";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      <div className="text-center max-w-md w-full">
        {/* Badge */}
        <div className="mb-6 flex justify-center">
          <div
            className={`w-28 h-28 rounded-full flex items-center justify-center shadow-lg ${
              isGold
                ? "bg-gradient-to-br from-yellow-400 to-amber-500"
                : "bg-gradient-to-br from-gray-400 to-gray-600"
            }`}
          >
            <StarIcon className="h-14 w-14 text-white" />
          </div>
        </div>

        {/* Check icon */}
        <div className="flex justify-center mb-4">
          <CheckBadgeIcon className="h-12 w-12 text-green-500" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Thank You!</h1>
        <p className="text-lg text-gray-600 mb-4">
          Your payment was successful.
        </p>

        {/* Plan badge */}
        <span
          className={`inline-block px-6 py-2 rounded-full text-white font-semibold text-lg mb-6 ${
            isGold
              ? "bg-gradient-to-r from-yellow-500 to-amber-500"
              : "bg-gradient-to-r from-gray-500 to-gray-700"
          }`}
        >
          {isGold ? "🥇 Gold" : "🥈 Silver"} Member
        </span>

        <p className="text-gray-500 mb-8">
          You are now a {isGold ? "Gold" : "Silver"} premium member. Enjoy all
          the exclusive features!
        </p>

        <Link
          to="/feed"
          className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-200 shadow-lg"
        >
          Go to Feed
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
