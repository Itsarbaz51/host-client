import React from 'react';
import { Eye, Download, Printer } from 'lucide-react';

const Invoices = () => {
    const currentPlan = '1-month per year plan';
    const expirationDate = new Date(new Date().setMonth(new Date().getMonth() + 1));
    const formattedDate = expirationDate.toLocaleDateString();

    const invoices = [
        {
            id: 'INV12345',
            plan: '1-month per year plan',
            duration: '1 month',
            startDate: '2025-05-10',
            endDate: '2025-06-10',
            amount: '$29.99',
        },
        {
            id: 'INV12346',
            plan: '1-month per year plan',
            duration: '1 month',
            startDate: '2025-04-10',
            endDate: '2025-05-10',
            amount: '$29.99',
        },
        {
            id: 'INV12347',
            plan: '1-month per year plan',
            duration: '1 month',
            startDate: '2025-03-10',
            endDate: '2025-04-10',
            amount: '$29.99',
        },
    ];

    const handleDownloadBill = (invoiceId) => {
        alert(`Downloading Bill for Invoice: ${invoiceId}`);
    };

    const handlePrintInvoice = (invoiceId) => {
        alert(`Printing Invoice: ${invoiceId}`);
    };

    const handleViewInvoice = (invoiceId) => {
        alert(`Viewing Invoice: ${invoiceId}`);
    };

    return (
        <div className="p-6 bg-white text-black min-h-screen">
            {/* Plan Section */}
            <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold">Current Plan</h2>
                <p className="text-lg text-gray-800">{currentPlan}</p>
            </div>

            {/* Expiration Notification */}
            <div className="bg-gray-100 border border-gray-300 text-gray-800 p-4 rounded-md mb-6">
                <div className="flex items-center justify-between flex-wrap gap-3">
                    <p className="text-sm">
                        Your current plan will expire on <strong>{formattedDate}</strong>. Renew soon to continue enjoying premium benefits!
                    </p>
                    <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-900 transition">
                        Renew Now
                    </button>
                </div>
            </div>

            {/* Upgrade CTA */}
            <div className="text-center mb-10">
                <p className="text-lg text-gray-700">Want more benefits? Upgrade to a 1-year plan!</p>
                <button className="mt-4 bg-black text-white py-3 px-6 rounded hover:bg-gray-900 transition">
                    Upgrade to 1-Year Plan
                </button>
            </div>

            {/* Invoices Section */}
            <div>
                <h3 className="text-xl font-semibold mb-4">Your Invoices</h3>

                <div className="overflow-x-auto border border-gray-300 rounded">
                    <table className="min-w-full text-sm">
                        <thead className="bg-gray-100 text-gray-700 border-b border-gray-300">
                            <tr>
                                <th className="py-3 px-4 text-left">Invoice ID</th>
                                <th className="py-3 px-4 text-left">Plan</th>
                                <th className="py-3 px-4 text-left">Duration</th>
                                <th className="py-3 px-4 text-left">Start</th>
                                <th className="py-3 px-4 text-left">End</th>
                                <th className="py-3 px-4 text-left">Amount</th>
                                <th className="py-3 px-4 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoices.map((invoice) => (
                                <tr key={invoice.id} className="border-b border-gray-200 hover:bg-gray-50">
                                    <td className="py-2 px-4">{invoice.id}</td>
                                    <td className="py-2 px-4">{invoice.plan}</td>
                                    <td className="py-2 px-4">{invoice.duration}</td>
                                    <td className="py-2 px-4">{invoice.startDate}</td>
                                    <td className="py-2 px-4">{invoice.endDate}</td>
                                    <td className="py-2 px-4">{invoice.amount}</td>
                                    <td className="py-2 px-4 flex items-center space-x-3">
                                        <button
                                            title="View"
                                            onClick={() => handleViewInvoice(invoice.id)}
                                            className="text-black hover:text-gray-800 transition"
                                        >
                                            <Eye size={18} />
                                        </button>
                                        <button
                                            title="Download"
                                            onClick={() => handleDownloadBill(invoice.id)}
                                            className="text-black hover:text-gray-800 transition"
                                        >
                                            <Download size={18} />
                                        </button>
                                        <button
                                            title="Print"
                                            onClick={() => handlePrintInvoice(invoice.id)}
                                            className="text-black hover:text-gray-800 transition"
                                        >
                                            <Printer size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Invoices;
