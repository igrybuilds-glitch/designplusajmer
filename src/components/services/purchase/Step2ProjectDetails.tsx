import React from 'react';
import { PurchasableService } from '../../../data/purchasableServices';
import { ProjectDetailsState } from './types';

interface Step2ProjectDetailsProps {
  currentService: PurchasableService;
  projectDetails: ProjectDetailsState;
  setProjectDetails: React.Dispatch<React.SetStateAction<ProjectDetailsState>>;
}

export function Step2ProjectDetails({
  currentService,
  projectDetails,
  setProjectDetails
}: Step2ProjectDetailsProps) {
  const updateField = (field: keyof ProjectDetailsState, value: string) => {
    setProjectDetails(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div className="bg-amber-50/70 border border-amber-200 p-4 text-xs text-stone-800 space-y-1">
        <span className="font-semibold text-amber-900 uppercase font-mono block">
          Project Questionnaire · {currentService.name}
        </span>
        <p>
          These dimensions and parameters allow our CAD team and structural engineers to immediately evaluate setback clearances and structural spans.
        </p>
      </div>

      {/* Form 1: 2D Floor Plan / House Design Package */}
      {currentService.formType === 'floor-plan' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
              Plot Length (Depth in ft) *
            </label>
            <input
              type="text"
              placeholder="e.g. 50 ft"
              value={projectDetails.plotLength}
              onChange={(e) => updateField('plotLength', e.target.value)}
              className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
              Plot Width (Frontage in ft) *
            </label>
            <input
              type="text"
              placeholder="e.g. 30 ft"
              value={projectDetails.plotWidth}
              onChange={(e) => updateField('plotWidth', e.target.value)}
              className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
              Plot Cardinal Orientation *
            </label>
            <select
              value={projectDetails.plotOrientation}
              onChange={(e) => updateField('plotOrientation', e.target.value)}
              className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
            >
              <option value="North Facing">North Facing</option>
              <option value="East Facing">East Facing</option>
              <option value="South Facing">South Facing</option>
              <option value="West Facing">West Facing</option>
              <option value="North-East Facing (Ishan)">North-East Facing (Ishan)</option>
              <option value="North-West Facing">North-West Facing</option>
              <option value="South-East Facing (Agni)">South-East Facing</option>
              <option value="South-West Facing (Nairutya)">South-West Facing</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
              Road Side &amp; Access *
            </label>
            <select
              value={projectDetails.roadSide}
              onChange={(e) => updateField('roadSide', e.target.value)}
              className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
            >
              <option value="North Side (Single Road)">North Side (Single Road)</option>
              <option value="South Side (Single Road)">South Side (Single Road)</option>
              <option value="East Side (Single Road)">East Side (Single Road)</option>
              <option value="West Side (Single Road)">West Side (Single Road)</option>
              <option value="Corner Plot (Two Roads)">Corner Plot (Two Roads)</option>
              <option value="Three Roads Open">Three Roads Open</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
              Number of Floors Planned *
            </label>
            <select
              value={projectDetails.floors}
              onChange={(e) => updateField('floors', e.target.value)}
              className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
            >
              <option value="Ground Floor Only (G)">Ground Floor Only (G)</option>
              <option value="Ground + 1 Floor (G+1)">Ground + 1 Floor (G+1)</option>
              <option value="Ground + 2 Floors (G+2)">Ground + 2 Floors (G+2)</option>
              <option value="Ground + 3 Floors (G+3)">Ground + 3 Floors (G+3)</option>
              <option value="Basement + G + 2 Floors">Basement + G + 2 Floors</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
              Bedrooms Required *
            </label>
            <select
              value={projectDetails.bedrooms}
              onChange={(e) => updateField('bedrooms', e.target.value)}
              className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
            >
              <option value="2 BHK">2 BHK</option>
              <option value="3 BHK">3 BHK</option>
              <option value="4 BHK">4 BHK</option>
              <option value="5 BHK">5 BHK</option>
              <option value="6+ BHK (Multi-Unit)">6+ BHK (Multi-Unit / Rental)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
              Bathrooms Required
            </label>
            <input
              type="text"
              placeholder="e.g. 3 Attached + 1 Powder Room"
              value={projectDetails.bathrooms}
              onChange={(e) => updateField('bathrooms', e.target.value)}
              className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
              Parking Requirements
            </label>
            <select
              value={projectDetails.parking}
              onChange={(e) => updateField('parking', e.target.value)}
              className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
            >
              <option value="1 Covered Car + Two-Wheelers">1 Covered Car + Two-Wheelers</option>
              <option value="2 Covered Cars (Stilt/Porch)">2 Covered Cars (Stilt/Porch)</option>
              <option value="3+ Cars Parking">3+ Cars Parking</option>
              <option value="Two-Wheelers Only">Two-Wheelers Only</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
              Special Spatial Requirements (Vastu, Mandir, Office, Lift, Rental)
            </label>
            <textarea
              rows={3}
              placeholder="e.g. Strict Vastu mandir in North-East, open courtyard in center, rental portion with separate external staircase on first floor."
              value={projectDetails.specialRequirements}
              onChange={(e) => updateField('specialRequirements', e.target.value)}
              className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
            />
          </div>
        </div>
      )}

      {/* Form 2: 3D Front Elevation */}
      {currentService.formType === 'elevation' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
              Plot Frontage / Width (ft) *
            </label>
            <input
              type="text"
              placeholder="e.g. 35 ft"
              value={projectDetails.plotWidth}
              onChange={(e) => updateField('plotWidth', e.target.value)}
              className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
              Number of Floors *
            </label>
            <select
              value={projectDetails.floors}
              onChange={(e) => updateField('floors', e.target.value)}
              className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
            >
              <option value="G (Single Storey)">G (Single Storey)</option>
              <option value="G+1 (Double Storey)">G+1 (Double Storey)</option>
              <option value="G+2 (Triple Storey)">G+2 (Triple Storey)</option>
              <option value="G+3 or Commercial Frame">G+3 or Commercial Frame</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
              Preferred Architectural Style
            </label>
            <select
              value={projectDetails.preferredStyle}
              onChange={(e) => updateField('preferredStyle', e.target.value)}
              className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
            >
              <option value="Contemporary Modern (Clean Lines, Glass & Louvers)">Contemporary Modern (Clean Lines, Glass &amp; Louvers)</option>
              <option value="Rajasthani Vernacular (Sandstone Jharokhas & Arches)">Rajasthani Vernacular (Sandstone Jharokhas &amp; Arches)</option>
              <option value="Minimalist Monolith (Raw Concrete, Stone Slabs)">Minimalist Monolith (Raw Concrete, Stone Slabs)</option>
              <option value="Classical Neo-Traditional (Cornices & Moldings)">Classical Neo-Traditional (Cornices &amp; Moldings)</option>
              <option value="Modern Industrial (Exposed Brick & Matte Steel)">Modern Industrial (Exposed Brick &amp; Matte Steel)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
              Material Preferences
            </label>
            <select
              value={projectDetails.materialPreference}
              onChange={(e) => updateField('materialPreference', e.target.value)}
              className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
            >
              <option value="Indigenous Sandstone & Warm Teak Wood">Indigenous Sandstone &amp; Warm Teak Wood</option>
              <option value="Exposed Wirecut Brick & Granite">Exposed Wirecut Brick &amp; Granite</option>
              <option value="Texture Plaster & Dark Metal Louvers">Texture Plaster &amp; Dark Metal Louvers</option>
              <option value="Large-Format Tiles & Tempered Glass">Large-Format Tiles &amp; Tempered Glass</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
              Elevation Specific Notes / Reference Links
            </label>
            <textarea
              rows={3}
              placeholder="e.g. Would like a double-height porch at entrance, concealed air conditioning outdoor units, warm 2700K exterior strip illumination."
              value={projectDetails.specialRequirements}
              onChange={(e) => updateField('specialRequirements', e.target.value)}
              className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
            />
          </div>
        </div>
      )}

      {/* Form 3: Architectural Consultation */}
      {currentService.formType === 'consultation' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
              Project Type *
            </label>
            <select
              value={projectDetails.projectType}
              onChange={(e) => updateField('projectType', e.target.value)}
              className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
            >
              <option value="New Residential Villa">New Residential Villa</option>
              <option value="Home Renovation / Vertical Floor Addition">Home Renovation / Floor Addition</option>
              <option value="Commercial Complex / Retail Showroom">Commercial Complex / Showroom</option>
              <option value="Interior Architecture & Space Planning">Interior Architecture &amp; Space Planning</option>
              <option value="Plot Purchase Advisory">Plot Purchase Advisory</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
              Project Location *
            </label>
            <input
              type="text"
              placeholder="e.g. Civil Lines, Ajmer or Vaishali Nagar, Jaipur"
              value={projectDetails.location}
              onChange={(e) => updateField('location', e.target.value)}
              className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
              Approximate Plot / Built-Up Area
            </label>
            <input
              type="text"
              placeholder="e.g. 250 sq. yards / 2,200 sq. ft."
              value={projectDetails.approxArea}
              onChange={(e) => updateField('approxArea', e.target.value)}
              className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
              Preferred Consultation Mode *
            </label>
            <select
              value={projectDetails.consultationMode}
              onChange={(e) => updateField('consultationMode', e.target.value)}
              className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
            >
              <option value="In-Studio Ajmer (Civil Lines)">In-Studio Ajmer (Civil Lines Studio)</option>
              <option value="Video Call (Google Meet)">Video Call (Google Meet)</option>
              <option value="Phone Call (+91 Telephonic)">Direct Phone Call</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
              Primary Question or Design Dilemma *
            </label>
            <textarea
              rows={3}
              placeholder="Describe what you want to achieve or the primary questions you have regarding your building project."
              value={projectDetails.mainQuestion}
              onChange={(e) => updateField('mainQuestion', e.target.value)}
              className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
            />
          </div>
        </div>
      )}

      {/* Form 4: Structural Drawing Package / Consultation */}
      {currentService.formType === 'structural' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
              Building Typology *
            </label>
            <select
              value={projectDetails.buildingType}
              onChange={(e) => updateField('buildingType', e.target.value)}
              className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
            >
              <option value="Residential Villa (RCC Framed)">Residential Villa (RCC Framed)</option>
              <option value="Multi-Storey Residential (G+3 or higher)">Multi-Storey Residential (G+3 or higher)</option>
              <option value="Commercial Frame / Office Building">Commercial Frame / Office Building</option>
              <option value="Existing House Addition (Adding New Floor)">Existing House Addition (New Floor)</option>
              <option value="Warehouse / Industrial Steel Portal">Warehouse / Industrial Steel Portal</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
              Total Number of Storeys *
            </label>
            <input
              type="text"
              placeholder="e.g. G+2 Floors"
              value={projectDetails.floors}
              onChange={(e) => updateField('floors', e.target.value)}
              className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
              Known Subsurface / Soil Condition
            </label>
            <select
              value={projectDetails.soilCondition}
              onChange={(e) => updateField('soilCondition', e.target.value)}
              className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
            >
              <option value="Hard Metamorphic Rock (Aravalli Schist)">Hard Metamorphic Rock (Aravalli Schist)</option>
              <option value="Compact Murrum / Gravelly Soil">Compact Murrum / Gravelly Soil</option>
              <option value="Sandy Loam (Central Rajasthan)">Sandy Loam (Central Rajasthan)</option>
              <option value="Clayey / Black Cotton Soil (High Swell)">Clayey / Black Cotton Soil (High Swell)</option>
              <option value="Unknown — Needs Soil Audit">Unknown — Needs Soil Audit</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
              Approximate Built-Up Area (sq. ft.)
            </label>
            <input
              type="text"
              placeholder="e.g. 2,800 sq. ft."
              value={projectDetails.approxArea}
              onChange={(e) => updateField('approxArea', e.target.value)}
              className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
              Structural Engineering Notes or Architectural Drawings Status
            </label>
            <textarea
              rows={3}
              placeholder="Do you already have architectural drawings finalized? Any long-span column requirements or cantilever concerns?"
              value={projectDetails.specialRequirements}
              onChange={(e) => updateField('specialRequirements', e.target.value)}
              className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
            />
          </div>
        </div>
      )}

      {/* Form 5: Site Analysis / Planning Review */}
      {currentService.formType === 'site-analysis' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
              Site Address / Colony Name *
            </label>
            <input
              type="text"
              placeholder="e.g. Panchsheel Nagar, Ajmer"
              value={projectDetails.location}
              onChange={(e) => updateField('location', e.target.value)}
              className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
              Plot Dimensions (Length × Width) *
            </label>
            <input
              type="text"
              placeholder="e.g. 60 ft × 40 ft"
              value={projectDetails.plotLength ? `${projectDetails.plotLength} ${projectDetails.plotWidth ? '× ' + projectDetails.plotWidth : ''}` : ''}
              onChange={(e) => updateField('plotLength', e.target.value)}
              className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
              Orientation &amp; Front Road Width
            </label>
            <input
              type="text"
              placeholder="e.g. East Facing, 40 ft sector road"
              value={projectDetails.roadSide}
              onChange={(e) => updateField('roadSide', e.target.value)}
              className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
              Intended Project Typology
            </label>
            <select
              value={projectDetails.projectType}
              onChange={(e) => updateField('projectType', e.target.value)}
              className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
            >
              <option value="Independent Luxury Villa">Independent Luxury Villa</option>
              <option value="Residential G+2 Multi-Family">Residential G+2 Multi-Family</option>
              <option value="Commercial Complex / Showroom">Commercial Complex / Showroom</option>
              <option value="Land Investment Appraisal">Land Investment Appraisal</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
              Specific Review Questions (Setbacks, Vastu, ADA Clearances)
            </label>
            <textarea
              rows={3}
              placeholder="Mention any specific slope concerns, setback questions under Ajmer Development Authority (ADA), or Vastu alignment priorities."
              value={projectDetails.specialRequirements}
              onChange={(e) => updateField('specialRequirements', e.target.value)}
              className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
            />
          </div>
        </div>
      )}

      {/* Form 6: Standard Form for other small services */}
      {currentService.formType === 'standard' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
                Project Location *
              </label>
              <input
                type="text"
                placeholder="e.g. Ajmer, Kishangarh, Pushkar"
                value={projectDetails.location}
                onChange={(e) => updateField('location', e.target.value)}
                className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
                Approximate Built-Up Area (sq. ft.)
              </label>
              <input
                type="text"
                placeholder="e.g. 2,000 sq. ft."
                value={projectDetails.approxArea}
                onChange={(e) => updateField('approxArea', e.target.value)}
                className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
              Project Description &amp; Scope Requirements
            </label>
            <textarea
              rows={4}
              placeholder="Please outline your requirements, timeline, and any existing drawings or specifications you have."
              value={projectDetails.specialRequirements}
              onChange={(e) => updateField('specialRequirements', e.target.value)}
              className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
            />
          </div>
        </div>
      )}
    </div>
  );
}
