import React, { useEffect, useState } from 'react';
import InputSection from '../../../components/Ui/InputSection';
import SaveButton from '../../../components/Ui/SaveButton';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const palette = [
  { bg: "bg-red-500", text: "text-white" },
  { bg: "bg-green-500", text: "text-white" },
  { bg: "bg-blue-500", text: "text-white" },
  { bg: "bg-yellow-400", text: "text-black" },
  { bg: "bg-indigo-500", text: "text-white" },
  { bg: "bg-purple-500", text: "text-white" },
  { bg: "bg-pink-500", text: "text-white" },
  { bg: "bg-teal-500", text: "text-white" },
  { bg: "bg-orange-500", text: "text-white" },
  { bg: "bg-rose-500", text: "text-white" },
];

const getRandomIndex = () => Math.floor(Math.random() * palette.length);


function General() {
  const user = useSelector((state) => state.auth?.user?.data);
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userId, setUserId] = useState("");
  const [colour, setColour] = useState(palette[0]);

  const firstLetter = user?.fullName?.charAt(0)?.toUpperCase() || "?";

  useEffect(() => {
    if (!user?.fullName) return;
    const key = `avatarColor_${user.fullName}`;

    const stored = localStorage.getItem(key);
    if (stored) {
      setColour(JSON.parse(stored));
    } else {
      const randomColour = palette[getRandomIndex()];
      localStorage.setItem(key, JSON.stringify(randomColour));
      setColour(randomColour);
    }
  }, [user?.fullName]);


  useEffect(() => {
    if (user) {
      setDisplayName(user.fullName || "");
      setUsername(user.username || "");
      setEmail(user.email || "");
      setPhoneNumber(user.phoneNumber || "");
      setUserId(user.id || "");
    }
  }, [user]);

  return (
    <>
      {/* Avatar */}
      <section className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex-1 min-w-[200px]">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Avatar</h2>

          </div>
          <div className={`w-16 h-16 rounded-full flex items-center justify-center ${colour.bg} ${colour.text} font-medium`}>
            {firstLetter}
            {console.log(firstLetter)}


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
            className="flex-1 px-3 py-2 border border-gray-300 rounded-b-md sm:rounded-r-md sm:rounded-bl-none focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">Please use 50 characters or less.</p>
        <SaveButton />
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
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <p className="text-xs text-gray-500 mt-2">This must be your primary email to use it for login.</p>
        <SaveButton />
      </section>

      {/* Phone Number */}
      <section className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Your Phone Number</h2>
        <p className="text-sm text-gray-600 mb-4">Used for security alerts.</p>
        <div className="flex flex-col sm:flex-row">

          <span className="inline-flex items-center px-3 py-2 rounded-t-md sm:rounded-l-md sm:rounded-tr-none border border-b-0 sm:border-r-0 sm:border-b border-gray-300 bg-gray-50 text-gray-500 text-sm">+ 91</span>
          <input
            type="number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter phone number"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-b-md sm:rounded-r-md sm:rounded-bl-none focus:outline-none focus:ring-2 focus:ring-black"
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
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-500 cursor-not-allowed"
            disabled
          />
          <button className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm hover:bg-gray-200 w-full sm:w-auto cursor-pointer" onClick={() => {
            navigator.clipboard.writeText(userId);
            toast.success("User ID copied to clipboard!");
          }}>
            Copy
          </button>
        </div>
      </section>
    </>
  );
}

export default General;
