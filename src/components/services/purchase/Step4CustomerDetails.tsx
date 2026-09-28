import React from 'react';
import { CustomerDetailsState } from './types';

interface Step4CustomerDetailsProps {
  customerDetails: CustomerDetailsState;
  setCustomerDetails: React.Dispatch<React.SetStateAction<CustomerDetailsState>>;
}

export function Step4CustomerDetails({
  customerDetails,
  setCustomerDetails
}: Step4CustomerDetailsProps) {
  const updateField = (field: keyof CustomerDetailsState, value: string) => {
    setCustomerDetails(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div className="space-y-1">
        <span className="text-xs font-mono uppercase tracking-wider text-stone-600 font-semibold block">
          Client Identification &amp; Contact Coordination
        </span>
        <p className="text-xs text-stone-500 font-sans">
          Your details will be used by Er. Sudhir Soni and Ar. Vipul Verma for architectural communication and drawing dispatch.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
            Full Legal Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Ramesh Chandra Sharma"
            value={customerDetails.fullName}
            onChange={(e) => updateField('fullName', e.target.value)}
            className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
            Phone / WhatsApp Number *
          </label>
          <input
            type="tel"
            required
            placeholder="+91 98XXX XXXXX"
            value={customerDetails.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
            Email Address *
          </label>
          <input
            type="email"
            required
            placeholder="name@domain.com"
            value={customerDetails.email}
            onChange={(e) => updateField('email', e.target.value)}
            className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
            Project City / District *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Ajmer / Jaipur / Kishangarh"
            value={customerDetails.city}
            onChange={(e) => updateField('city', e.target.value)}
            className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
          />
        </div>

        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
            Preferred Mode of Consultation
          </label>
          <select
            value={customerDetails.preferredContactMethod}
            onChange={(e) => updateField('preferredContactMethod', e.target.value)}
            className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
          >
            <option value="WhatsApp">WhatsApp Message &amp; PDF Share</option>
            <option value="Phone Call">Direct Phone Call</option>
            <option value="Email">Formal Email Communication</option>
            <option value="In-Studio">Visit Studio at Civil Lines, Ajmer</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
            Site Location Address (Plot / Colony / Landmark)
          </label>
          <input
            type="text"
            placeholder="e.g. Plot 42, A-Block, Panchsheel Nagar, Ajmer (Near Regional College)"
            value={customerDetails.projectAddress}
            onChange={(e) => updateField('projectAddress', e.target.value)}
            className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
          />
        </div>
      </div>
    </div>
  );
}
