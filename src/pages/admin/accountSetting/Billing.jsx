import React, { useState } from 'react';
import { CreditCard, ChevronDown, Search } from 'lucide-react';

export default function Billing() {
  const [invoiceEmail, setInvoiceEmail] = useState('john@doe.com');
  const [companyName, setCompanyName] = useState('HeatBeat51');
  const [country, setCountry] = useState('United States');
  const [billingAddress, setBillingAddress] = useState('');
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isAddressOpen, setIsAddressOpen] = useState(false);

  const countries = [
    'United States',
    'Canada',
    'United Kingdom',
    'Germany',
    'France',
    'Australia',
    'Japan'
  ];

  return (
    <div className=" p-6 bg-gray-50 min-h-screen">
      {/* Payment Method Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Payment Method</h2>
        <p className="text-sm text-gray-600 mb-6">
          Payments for <span className="text-blue-600">domains</span>, <span className="text-blue-600">add-ons</span>, and other <span className="text-blue-600">usage</span> are made using the default card.
        </p>
        
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center mb-4">
          <div className="flex justify-center mb-4">
            <CreditCard className="w-12 h-12 text-gray-400" />
          </div>
          <p className="text-gray-500 text-sm">No payment methods added</p>
        </div>
        
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">At most, three credit cards can be added.</p>
          <button className="px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium hover:bg-gray-800">
            Add Card
          </button>
        </div>
      </div>

      {/* Invoice Email Recipient Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Invoice Email Recipient</h2>
        <p className="text-sm text-gray-600 mb-4">
          By default, all your invoices will be sent to your account's email address. If you want to use a custom email address specifically for receiving invoices, enter it here.
        </p>
        
        <input
          type="email"
          value={invoiceEmail}
          onChange={(e) => setInvoiceEmail(e.target.value)}
          placeholder="john@doe.com"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-2"
        />
        
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">Please use 254 characters at maximum.</p>
          <button className="px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium hover:bg-gray-800">
            Save
          </button>
        </div>
      </div>

      {/* Company Name Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Company Name</h2>
        <p className="text-sm text-gray-600 mb-4">
          By default, your account name is shown on your invoice. If you want to show a custom name instead, please enter it here.
        </p>
        
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="HeatBeat51"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-2"
        />
        
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">Please use 64 characters at maximum.</p>
          <button className="px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium hover:bg-gray-800">
            Save
          </button>
        </div>
      </div>

      {/* Billing Address Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Billing Address</h2>
        
        {/* Country Dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
          <div className="relative">
            <button
              onClick={() => setIsCountryOpen(!isCountryOpen)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex items-center justify-between"
            >
              <span className="text-gray-900">{country}</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
            
            {isCountryOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                {countries.map((countryOption) => (
                  <button
                    key={countryOption}
                    onClick={() => {
                      setCountry(countryOption);
                      setIsCountryOpen(false);
                    }}
                    className="w-full px-3 py-2 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                  >
                    {countryOption}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Billing Address Dropdown */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Billing Address</label>
          <div className="relative">
            <button
              onClick={() => setIsAddressOpen(!isAddressOpen)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex items-center justify-between"
            >
              <div className="flex items-center">
                <Search className="w-4 h-4 text-gray-400 mr-2" />
                <span className="text-gray-500">Find your address...</span>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
            
            {isAddressOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                <div className="p-3">
                  <input
                    type="text"
                    placeholder="Type to search for address..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="max-h-40 overflow-auto">
                  <div className="px-3 py-2 text-gray-500 text-sm">
                    Start typing to find your address
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}