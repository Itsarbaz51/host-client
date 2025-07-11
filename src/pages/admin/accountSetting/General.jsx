import React, { useState } from 'react';
import InputSection from '../../../components/Ui/InputSection';
import SaveButton from '../../../components/Ui/SaveButton';
import { Check } from 'lucide-react';

function General() {
  const [displayName, setDisplayName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('claude@anthropic.com');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userId] = useState('claude.legault.17294781');
  const [teamName, setTeamName] = useState('');

  return (
    <>
      {/* Avatar */}
      <section className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex-1 min-w-[200px]">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Avatar</h2>
            <p className="text-sm text-gray-600 mb-1">Click on your picture to upload a custom one.</p>
            <p className="text-sm text-gray-500">For best AI appearance, strongly recommended.</p>
          </div>
          <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden shrink-0">
            <img src="/api/placeholder/64/64" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Display Name */}
      <InputSection
        title="Display Name"
        description="Please enter your full name, or a display name you are comfortable with."
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        placeholder="Please enter 50 characters or less."
      />

      {/* Username */}
      <section className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Username</h2>
        <p className="text-sm text-gray-600 mb-4">This is your URL namespace within Blend.</p>
        <div className="flex flex-col sm:flex-row">
          <span className="inline-flex items-center px-3 py-2 rounded-t-md sm:rounded-l-md sm:rounded-tr-none border border-b-0 sm:border-r-0 sm:border-b border-gray-300 bg-gray-50 text-gray-500 text-sm">
            @username
          </span>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-b-md sm:rounded-r-md sm:rounded-bl-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">Please use 50 characters or less.</p>
        <SaveButton />
      </section>

      {/* Default Team */}
      <section className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Default Team</h2>
        <p className="text-sm text-gray-600 mb-4">This team will be used by default unless you specify otherwise.</p>
        <div className="flex items-center mb-4">
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-2">
            <Check className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm text-gray-700">@claude.legault@anthropic.com</span>
        </div>
        <div className="flex flex-col sm:flex-row w-full gap-2">
          <input
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            placeholder="Learn more about Default Team →"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 bg-gray-900 text-white rounded-md text-sm hover:bg-gray-800 w-full sm:w-auto">
            Search
          </button>
        </div>
      </section>

      {/* Email */}
      <section className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Email</h2>
        <p className="text-sm text-gray-600 mb-4">Used for account notifications and login.</p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-sm text-blue-600 font-medium">Verified</span>
          <span className="text-sm text-gray-500">Primary</span>
        </div>
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">+ Add Another</button>
        <p className="text-xs text-gray-500 mt-2">This must be your primary email to use it for login.</p>
      </section>

      {/* Phone Number */}
      <section className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Your Phone Number</h2>
        <p className="text-sm text-gray-600 mb-4">Used for security alerts.</p>
        <div className="flex flex-col sm:flex-row gap-2">
          <select className="px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto">
            <option>🇺🇸 +1</option>
          </select>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter phone number"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">A valid number will be verified.</p>
        <SaveButton />
      </section>

      {/* User ID */}
      <section className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">User ID</h2>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={userId}
            readOnly
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500"
          />
          <button className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm hover:bg-gray-200 w-full sm:w-auto">
            Copy
          </button>
        </div>
      </section>
    </>
  );
}

export default General;
