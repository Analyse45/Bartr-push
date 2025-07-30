import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Eye } from "lucide-react";

export default function PushConfirmation() {
  useEffect(() => {
    // Auto redirect after 5 seconds
    const timer = setTimeout(() => {
      window.location.href = '/home';
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-8">
      {/* Success Animation */}
      <div className="text-center mb-8">
        <div className="relative">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto animate-pulse">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          
          {/* Ripple effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 border-4 border-green-200 rounded-full animate-ping"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border-2 border-green-100 rounded-full animate-ping animation-delay-300"></div>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          🎉 Post Pushed Successfully!
        </h1>
        <p className="text-lg text-gray-600 mb-2">
          Your post has been pushed to
        </p>
        <p className="text-3xl font-bold text-primary mb-4">
          50+ users nearby!
        </p>
      </div>

      {/* Stats */}
      <div className="w-full max-w-md mb-8">
        <div className="bg-gray-50 rounded-2xl p-6">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="flex items-center justify-center mb-2">
                <Users className="w-5 h-5 text-gray-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">53</p>
              <p className="text-sm text-gray-600">Users Reached</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Eye className="w-5 h-5 text-gray-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">2.1 km</p>
              <p className="text-sm text-gray-600">Push Radius</p>
            </div>
          </div>
        </div>
      </div>

      {/* What's Next */}
      <div className="w-full max-w-md mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
          What happens next?
        </h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs font-bold">1</span>
            </div>
            <p className="text-sm text-gray-600">
              Nearby users will see your post in their feed
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs font-bold">2</span>
            </div>
            <p className="text-sm text-gray-600">
              Interested users will respond to your request
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs font-bold">3</span>
            </div>
            <p className="text-sm text-gray-600">
              You'll get notifications for all responses
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full max-w-md space-y-3">
        <Link to="/notifications">
          <Button className="w-full h-14 text-lg font-semibold rounded-2xl bg-primary hover:bg-primary/90">
            View Responses
          </Button>
        </Link>
        <Link to="/home">
          <Button 
            variant="outline" 
            className="w-full h-14 text-lg font-semibold rounded-2xl border-gray-200 hover:bg-gray-50"
          >
            Back to Feed
          </Button>
        </Link>
      </div>

      {/* Auto redirect notice */}
      <p className="text-center text-sm text-gray-500 mt-6">
        Redirecting to home in 5 seconds...
      </p>
    </div>
  );
}
