import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { PurchasableService } from '../../../data/purchasableServices';
import { ProjectDetailsState, CustomerDetailsState, UploadedFileItem } from './types';

interface Step5OrderReviewProps {
  currentService: PurchasableService;
  projectDetails: ProjectDetailsState;
  customerDetails: CustomerDetailsState;
  uploadedFiles: UploadedFileItem[];
  skipFiles: boolean;
}

export function Step5OrderReview({
  currentService,
  projectDetails,
  customerDetails,
  uploadedFiles,
  skipFiles
}: Step5OrderReviewProps) {
  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Order Summary Box */}
      <div className="bg-white border border-stone-200 p-6 space-y-6">
        
        {/* Header info */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#C86635] font-semibold block">
              COMMISSION DOSSIER PREVIEW
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl text-stone-950 font-normal mt-0.5">
              {currentService.name}
            </h3>
            <span className="text-xs text-stone-500 font-mono">
              Category: {currentService.category} · Timeline: {currentService.deliveryTimeline}
            </span>
          </div>

          <div className="sm:text-right">
            <span className="text-[10px] font-mono uppercase tracking-widest text-stone-400 block">
              COMMISSION ESTIMATE
            </span>
            <span className="font-editorial text-2xl font-bold text-stone-950">
              {currentService.pricingLabel}
            </span>
            <span className="text-[11px] font-mono text-stone-500 block">
              {currentService.unitLabel}
            </span>
          </div>
        </div>

        {/* Project Specs Summary */}
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-stone-700 font-bold block">
            Recorded Parameters
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono">
            {projectDetails.plotLength && (
              <div className="bg-stone-50 p-2.5 border border-stone-200/60">
                <span className="text-stone-400 block text-[10px]">PLOT DIMENSIONS</span>
                <span className="text-stone-900 font-medium">
                  {projectDetails.plotLength} {projectDetails.plotWidth ? `× ${projectDetails.plotWidth}` : ''}
                </span>
              </div>
            )}
            {projectDetails.plotOrientation && (
              <div className="bg-stone-50 p-2.5 border border-stone-200/60">
                <span className="text-stone-400 block text-[10px]">ORIENTATION</span>
                <span className="text-stone-900 font-medium">{projectDetails.plotOrientation}</span>
              </div>
            )}
            {projectDetails.floors && (
              <div className="bg-stone-50 p-2.5 border border-stone-200/60">
                <span className="text-stone-400 block text-[10px]">STOREYS</span>
                <span className="text-stone-900 font-medium">{projectDetails.floors}</span>
              </div>
            )}
            {projectDetails.bedrooms && (
              <div className="bg-stone-50 p-2.5 border border-stone-200/60">
                <span className="text-stone-400 block text-[10px]">BEDROOMS</span>
                <span className="text-stone-900 font-medium">{projectDetails.bedrooms}</span>
              </div>
            )}
            {projectDetails.projectType && (
              <div className="bg-stone-50 p-2.5 border border-stone-200/60">
                <span className="text-stone-400 block text-[10px]">PROJECT TYPE</span>
                <span className="text-stone-900 font-medium">{projectDetails.projectType}</span>
              </div>
            )}
            {projectDetails.location && (
              <div className="bg-stone-50 p-2.5 border border-stone-200/60">
                <span className="text-stone-400 block text-[10px]">LOCATION</span>
                <span className="text-stone-900 font-medium">{projectDetails.location}</span>
              </div>
            )}
            {projectDetails.preferredStyle && currentService.formType === 'elevation' && (
              <div className="bg-stone-50 p-2.5 border border-stone-200/60">
                <span className="text-stone-400 block text-[10px]">STYLE</span>
                <span className="text-stone-900 font-medium truncate block">{projectDetails.preferredStyle}</span>
              </div>
            )}
            {projectDetails.buildingType && currentService.formType === 'structural' && (
              <div className="bg-stone-50 p-2.5 border border-stone-200/60">
                <span className="text-stone-400 block text-[10px]">BUILDING TYPE</span>
                <span className="text-stone-900 font-medium truncate block">{projectDetails.buildingType}</span>
              </div>
            )}
          </div>
        </div>

        {/* Client Contact Details */}
        <div className="pt-4 border-t border-stone-100 space-y-2 text-xs font-mono">
          <span className="uppercase tracking-wider text-stone-700 font-bold block">
            Client Coordination Info
          </span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-stone-700">
            <span><strong>Client:</strong> {customerDetails.fullName || 'Private Client'}</span>
            <span><strong>Phone:</strong> {customerDetails.phone || 'To be validated'}</span>
            <span><strong>Email:</strong> {customerDetails.email || 'To be validated'}</span>
            <span><strong>City:</strong> {customerDetails.city}</span>
          </div>
        </div>

        {/* Files Summary */}
        <div className="pt-4 border-t border-stone-100 text-xs font-mono text-stone-600">
          <span>
            <strong>Uploaded Files:</strong>{' '}
            {uploadedFiles.length > 0 
              ? `${uploadedFiles.length} file(s) attached (${uploadedFiles.map(f => f.name).join(', ')})` 
              : (skipFiles ? 'Will send via WhatsApp' : 'None provided')}
          </span>
        </div>

      </div>

      {/* Architectural Assurance */}
      <div className="bg-[#EDE9E0]/80 p-4 border border-stone-300 text-xs text-stone-700 space-y-1 font-mono">
        <div className="flex items-center gap-2 font-bold text-stone-900">
          <ShieldCheck className="w-4 h-4 text-[#C86635]" />
          <span>Statutory Architectural Rigor Guarantee</span>
        </div>
        <p className="leading-relaxed font-sans">
          Design Plus is governed by Council of Architecture (COA CA/2004) regulations and Chartered Structural Engineering codes (IS 456, IS 1893). Your drawings are reviewed by registered professionals, not automated software.
        </p>
      </div>
    </div>
  );
}
