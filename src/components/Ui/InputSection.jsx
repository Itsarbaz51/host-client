import React from 'react'
import SaveButton from './SaveButton';

function InputSection({ title, description, value, onChange, placeholder }) {
    return (
        <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">{title}</h2>
            <p className="text-sm text-gray-600 mb-4">{description}</p>
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <SaveButton />
        </section>
    );
}

export default InputSection

