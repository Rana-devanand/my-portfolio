'use client'
import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Phone, Sparkles } from 'lucide-react';

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFocusedField('');
  };

  const handleFocus = (field :string) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField('');
  };

  return (
    <div className="h-auto flex items-center justify-center p-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      

      {/* Main Form Container */}
      <div className="relative w-full max-w-sm">
        {/* Glassmorphism Card */}
        <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 shadow-2xl border border-white/20 relative overflow-hidden transform transition-all duration-700 hover:scale-105 hover:bg-white/15">
          {/* Animated Border Gradient */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] opacity-20 blur-sm animate-pulse"></div>
          
          {/* Header */}
          <div className="relative z-10 text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#0f2027] to-[#2c5364] rounded-full mb-3 shadow-lg transform transition-transform duration-300 hover:rotate-12">
              <Sparkles className="w-6 h-6 text-white animate-pulse" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-1 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-gray-300 text-xs">
              {isLogin ? 'Sign in to your account' : 'Join our amazing community'}
            </p>
          </div>

          {/* Form */}
          <div className="relative z-10 space-y-4">
            {/* Name Field (Signup Only) */}
            {!isLogin && (
              <div className="relative group">
                <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-[#0f2027] to-[#2c5364] opacity-0 blur transition-opacity duration-300 ${focusedField === 'name' ? 'opacity-20' : ''}`}></div>
                <div className="relative">
                  <User className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${focusedField === 'name' ? 'text-purple-300' : 'text-gray-400'}`} />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm text-sm"
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
            )}

            {/* Email Field */}
            <div className="relative group">
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-[#0f2027] to-[#2c5364] opacity-0 blur transition-opacity duration-300 ${focusedField === 'email' ? 'opacity-20' : ''}`}></div>
              <div className="relative">
                <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${focusedField === 'email' ? 'text-purple-300' : 'text-gray-400'}`} />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm text-sm"
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                />
              </div>
            </div>

            {/* Phone Field (Signup Only) */}
            {!isLogin && (
              <div className="relative group">
                <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-[#0f2027] to-[#2c5364] opacity-0 blur transition-opacity duration-300 ${focusedField === 'phone' ? 'opacity-20' : ''}`}></div>
                <div className="relative">
                  <Phone className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${focusedField === 'phone' ? 'text-purple-300' : 'text-gray-400'}`} />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm text-sm"
                    onFocus={() => handleFocus('phone')}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
            )}

            {/* Password Field */}
            <div className="relative group">
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-[#0f2027] to-[#2c5364] opacity-0 blur transition-opacity duration-300 ${focusedField === 'password' ? 'opacity-20' : ''}`}></div>
              <div className="relative">
                <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${focusedField === 'password' ? 'text-purple-300' : 'text-gray-400'}`} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full pl-10 pr-10 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm text-sm"
                  onFocus={() => handleFocus('password')}
                  onBlur={handleBlur}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-300 transition-colors duration-300"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Confirm Password Field (Signup Only) */}
            {!isLogin && (
              <div className="relative group">
                <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-[#0f2027] to-[#2c5364] opacity-0 blur transition-opacity duration-300 ${focusedField === 'confirmPassword' ? 'opacity-20' : ''}`}></div>
                <div className="relative">
                  <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 transition-colors duration-300 ${focusedField === 'confirmPassword' ? 'text-purple-300' : 'text-gray-400'}`} />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="w-full pl-10 pr-10 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm text-sm"
                    onFocus={() => handleFocus('confirmPassword')}
                    onBlur={handleBlur}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-300 transition-colors duration-300"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            )}

            {/* Remember Me / Forgot Password */}
            {isLogin && (
              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center text-gray-300 cursor-pointer group">
                  <input
                    type="checkbox"
                    className="w-3 h-3 text-purple-500 bg-white/10 border-white/20 rounded focus:ring-purple-500 focus:ring-2 transition-all duration-300"
                  />
                  <span className="ml-2 group-hover:text-purple-300 transition-colors duration-300">Remember me</span>
                </label>
                <button
                  type="button"
                  className="text-purple-300 hover:text-purple-200 transition-colors duration-300 hover:underline"
                >
                  Forgot password?
                </button>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="button"
              className="w-full py-3 bg-gradient-to-r from-[#0f2027] to-[#2c5364] hover:from-[#0f2027] hover:[#0f2027] text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg relative overflow-hidden group text-sm"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#0f2027] to-[#2c5364] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 flex items-center justify-center">
                {isLogin ? 'Sign In' : 'Create Account'}
                <Sparkles className="w-4 h-4 ml-2 animate-pulse" />
              </span>
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-transparent text-gray-400">Or continue with</span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center py-2 px-3 bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg transition-all duration-300 transform hover:scale-105 group backdrop-blur-sm"
              >
                <div className="w-4 h-4 bg-red-500 rounded-full mr-2 group-hover:animate-pulse"></div>
                <span className="text-white text-xs">Google</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center py-2 px-3 bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg transition-all duration-300 transform hover:scale-105 group backdrop-blur-sm"
              >
                <div className="w-4 h-4 bg-blue-600 rounded-full mr-2 group-hover:animate-pulse"></div>
                <span className="text-white text-xs">Facebook</span>
              </button>
            </div>
          </div>

          {/* Toggle Mode */}
          <div className="relative z-10 text-center mt-6">
            <p className="text-gray-300 text-xs">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={toggleMode}
                className="ml-2 text-purple-300 hover:text-purple-200 font-semibold transition-colors duration-300 hover:underline"
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>

        {/* Bottom Glow Effect */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-gradient-to-r from-[#0f2027] to-[#2c5364] rounded-full blur-xl opacity-30"></div>
      </div>
    </div>
  );
}