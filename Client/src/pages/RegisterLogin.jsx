import React, { useState, useEffect } from "react";
import { X, User } from "lucide-react";

const RegisterLogin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  useEffect(() => {
    let countdown;
    if (isOtpSent && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsResendDisabled(false);
      setOtp("");
    }
    return () => clearInterval(countdown);
  }, [isOtpSent, timer]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setPhoneNumber("");
    setOtp("");
    setIsOtpSent(false);
    setError("");
    setTimer(30);
    setIsResendDisabled(true);
  };

  const isPhoneValid = /^\d{10}$/.test(phoneNumber.trim());

  const sendOtp = async () => {
    let formattedPhone = phoneNumber.trim();
    if (!formattedPhone.startsWith("+91")) {
      formattedPhone = `+91${formattedPhone}`;
    }

    if (!/^\+91\d{10}$/.test(formattedPhone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber: formattedPhone }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to send OTP");

      setIsOtpSent(true);
      setError("");
      setTimer(30);
      setIsResendDisabled(true);
    } catch (error) {
      console.error("❌ Error sending OTP:", error);
      setError(error.message || "Failed to send OTP. Please try again.");
    }
  };

  const verifyOtp = async () => {
    if (!otp || otp.length !== 6) {
      setError("Enter a valid 6-digit OTP");
      return;
    }
    try {
      const response = await fetch("http://localhost:4000/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp, phoneNumber }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "OTP verification failed");
      }

      if (data.message === "OTP verified successfully.") {
        alert("Login successful!");
        setIsLoggedIn(true);
        closeModal();
      } else {
        setError("Invalid OTP. Please try again.");
      }
    } catch (err) {
      console.error("❌ Error verifying OTP:", err);
      setError(err.message || "Error verifying OTP. Please try again.");
    }
  };

  return (
    <div className="font-sans">
      <button onClick={openModal} className="text-gray-800 hover:text-pink-500 transition duration-200 cursor-pointer">
        <User size={25} />
      </button>

      {isOpen && (
        <div className="fixed inset-0  bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-2xl flex shadow-lg relative">
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-black">
              <X size={24} />
            </button>

            {/* Left Illustration */}
            <div className="w-1/2 bg-gray-100 flex items-center justify-center p-6 hidden md:flex">
              <div className="text-center">
                <div className="text-6xl">
                    <img src="https://stimg.cardekho.com/pwa/img/my-account/pic/login-banner-new.svg" alt="" />
                </div>
                <p className="mt-4 text-lg font-medium text-gray-600">Stay updated, track your orders & more!</p>
              </div>
            </div>

            {/* Right Form */}
            <div className="w-full md:w-1/2 p-8 mt-20">
              <h2 className="text-2xl font-semibold mb-2">Login or Register</h2>
              <p className="text-sm text-gray-500 mb-4">for Better Experience, Order tracking & Regular updates</p>

              {!isOtpSent ? (
                <>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Mobile Number</label>
                  <div className={`border rounded-md flex items-center overflow-hidden ${!isPhoneValid && phoneNumber ? "border-red-500" : "border-gray-300"}`}>
                    <span className="px-3 text-gray-700 text-sm bg-gray-100">+91</span>
                    <input
                      type="tel"
                      className="flex-1 p-3 focus:outline-none"
                      placeholder="Enter mobile number"
                      value={phoneNumber}
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                        setError("");
                      }}
                    />
                  </div>
                  {!isPhoneValid && phoneNumber && (
                    <p className="text-red-500 text-xs mt-1">Please enter valid mobile number</p>
                  )}

                  <button
                    onClick={sendOtp}
                    disabled={!isPhoneValid}
                    className={`w-full mt-4 py-3 rounded-md text-white font-medium ${
                      isPhoneValid
                        ? "bg-gray-800 hover:bg-black"
                        : "bg-gray-300 cursor-not-allowed"
                    }`}
                  >
                    Send OTP
                  </button>

                  <p className="text-xs text-gray-500 mt-4">
                    By proceeding, I confirm that I have received, read, and agree to:{" "}
                    <a href="#" className="text-blue-600 underline">Privacy Policy</a>,{" "}
                    <a href="#" className="text-blue-600 underline">Terms & Conditions</a>, and more.
                  </p>
                </>
              ) : (
                <>
                  <h3 className="text-lg font-medium mb-2">Enter OTP</h3>
                  <input
                    type="text"
                    maxLength="6"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="6-digit OTP"
                    className="w-full border border-gray-300 p-3 rounded-md mb-2"
                  />
                  <p className="text-sm text-gray-600 mb-2">OTP expires in: {timer}s</p>
                  {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

                  <button
                    onClick={verifyOtp}
                    className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-black"
                  >
                    Verify OTP
                  </button>

                  <button
                    onClick={sendOtp}
                    disabled={isResendDisabled}
                    className={`w-full mt-2 py-3 rounded-md text-white font-medium ${
                      isResendDisabled
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-gray-800 hover:bg-black"
                    }`}
                  >
                    Resend OTP
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterLogin;
