import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Mail } from "lucide-react";

export default function Login() {
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [errors, setErrors] = useState<{phone?: string, otp?: string}>({});

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
  };

  const handlePhoneSubmit = () => {
    if (!validatePhone(phoneNumber)) {
      setErrors({ phone: 'Please enter a valid 10-digit mobile number' });
      return;
    }
    setErrors({});
    setStep('otp');
  };

  const handleOtpSubmit = () => {
    if (otp.length !== 6) {
      setErrors({ otp: 'Please enter a valid 6-digit OTP' });
      return;
    }
    setErrors({});
    // Navigate to home feed
    window.location.href = '/home';
  };

  return (
    <div className="min-h-screen bg-white flex flex-col px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <Link to="/" className="p-2">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </Link>
        <h1 className="text-xl font-semibold text-gray-900">
          {step === 'phone' ? 'Welcome Back' : 'Verify OTP'}
        </h1>
        <div className="w-10" />
      </div>

      {/* Logo */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 mx-auto">
          <svg 
            className="w-8 h-8 text-white" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        <p className="text-gray-600">
          {step === 'phone' 
            ? 'Enter your mobile number to continue'
            : `We've sent a 6-digit code to +91 ${phoneNumber}`
          }
        </p>
      </div>

      {/* Form Content */}
      <div className="flex-1">
        {step === 'phone' ? (
          <div className="space-y-6">
            {/* Phone Input */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Mobile Number
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="pl-12 h-14 rounded-2xl border-gray-200 text-lg"
                  maxLength={10}
                />
              </div>
              {errors.phone && (
                <p className="text-sm text-primary font-medium">{errors.phone}</p>
              )}
            </div>

            {/* Continue Button */}
            <Button 
              onClick={handlePhoneSubmit}
              className="w-full h-14 text-lg font-semibold rounded-2xl bg-primary hover:bg-primary/90"
              disabled={phoneNumber.length !== 10}
            >
              Send OTP
            </Button>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 border-t border-gray-200"></div>
              <span className="px-4 text-sm text-gray-500">OR</span>
              <div className="flex-1 border-t border-gray-200"></div>
            </div>

            {/* Google Login */}
            <Button 
              variant="outline"
              className="w-full h-14 rounded-2xl border-gray-200 hover:bg-gray-50"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-gray-700 font-medium">Continue with Google</span>
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* OTP Input */}
            <div className="space-y-2">
              <Label htmlFor="otp" className="text-sm font-medium text-gray-700">
                Enter OTP
              </Label>
              <Input
                id="otp"
                type="text"
                placeholder="Enter 6-digit code"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="h-14 rounded-2xl border-gray-200 text-lg text-center tracking-widest"
                maxLength={6}
              />
              {errors.otp && (
                <p className="text-sm text-primary font-medium">{errors.otp}</p>
              )}
            </div>

            {/* Verify Button */}
            <Button 
              onClick={handleOtpSubmit}
              className="w-full h-14 text-lg font-semibold rounded-2xl bg-primary hover:bg-primary/90"
              disabled={otp.length !== 6}
            >
              Verify & Continue
            </Button>

            {/* Resend OTP */}
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">Didn't receive the code?</p>
              <Button 
                variant="ghost" 
                className="text-primary font-medium"
                onClick={() => setStep('phone')}
              >
                Resend OTP
              </Button>
            </div>
          </div>
        )}

        {/* Skip Option */}
        <div className="mt-8 text-center">
          <Link to="/home">
            <Button variant="ghost" className="text-gray-500">
              Skip for now
            </Button>
          </Link>
        </div>
      </div>

      {/* Terms */}
      <div className="text-center text-xs text-gray-500 mt-4">
        By continuing, you agree to our{' '}
        <span className="text-primary">Terms of Service</span> and{' '}
        <span className="text-primary">Privacy Policy</span>
      </div>
    </div>
  );
}
