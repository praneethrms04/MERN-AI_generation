import React from "react";

const FormField = ({ isSupriseMe }) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor="" className="block text-sm font-medium text-gray-900">
          label name
        </label>
        {isSupriseMe && (
          <button
            type="button"
            className="font-semibold text-xs bg-[#EcECF1] px-2 py-1 rounded-[5px] text-black"
          >
            suprice me
          </button>
        )}
      </div>

      <input
        type="text"
        name="name"
        value="value"
        placeholder="placeholder"
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3"
      />
    </div>
  );
};

export default FormField;
