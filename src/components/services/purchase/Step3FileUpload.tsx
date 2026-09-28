import React from 'react';
import { UploadCloud, FileText, Trash2 } from 'lucide-react';
import { UploadedFileItem } from './types';

interface Step3FileUploadProps {
  uploadedFiles: UploadedFileItem[];
  setUploadedFiles: React.Dispatch<React.SetStateAction<UploadedFileItem[]>>;
  filesNote: string;
  setFilesNote: (val: string) => void;
  skipFiles: boolean;
  setSkipFiles: (val: boolean) => void;
  inputId: string;
}

export function Step3FileUpload({
  uploadedFiles,
  setUploadedFiles,
  filesNote,
  setFilesNote,
  skipFiles,
  setSkipFiles,
  inputId
}: Step3FileUploadProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles: UploadedFileItem[] = [];
      for (let i = 0; i < e.target.files.length; i++) {
        const file = e.target.files[i];
        const sizeMb = (file.size / (1024 * 1024)).toFixed(2);
        newFiles.push({
          name: file.name,
          size: `${sizeMb} MB`,
          type: file.type || 'Document'
        });
      }
      setUploadedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div className="space-y-1">
        <span className="text-xs font-mono uppercase tracking-wider text-stone-600 font-semibold block">
          Plot Registry, Hand Sketches or CAD Drawings (Optional)
        </span>
        <p className="text-xs text-stone-500 font-sans">
          Uploading site plans or photos helps our architects verify exact dimensions. If you don’t have files handy right now, you can skip this step and share them via WhatsApp after order confirmation.
        </p>
      </div>

      {/* Upload Dropzone */}
      <div className="border-2 border-dashed border-stone-300 hover:border-[#C86635] p-8 text-center bg-white transition-colors">
        <input
          type="file"
          id={inputId}
          multiple
          onChange={handleFileChange}
          accept=".jpg,.jpeg,.png,.webp,.pdf,.dwg"
          className="hidden"
        />
        <label 
          htmlFor={inputId}
          className="cursor-pointer flex flex-col items-center justify-center space-y-2"
        >
          <UploadCloud className="w-10 h-10 text-stone-400 hover:text-[#C86635] transition-colors" />
          <span className="text-xs font-mono uppercase tracking-wider text-stone-900 font-bold">
            Click to browse files or drop here
          </span>
          <span className="text-[11px] font-mono text-stone-500">
            Supports PDF, JPG, PNG, WEBP, DWG (Max 25MB per file)
          </span>
        </label>
      </div>

      {/* Uploaded File List */}
      {uploadedFiles.length > 0 && (
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold block">
            Attached Documents ({uploadedFiles.length})
          </span>
          <div className="divide-y divide-stone-200 border border-stone-200 bg-white">
            {uploadedFiles.map((file, idx) => (
              <div key={idx} className="p-3 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 truncate max-w-md">
                  <FileText className="w-4 h-4 text-[#C86635] shrink-0" />
                  <span className="text-stone-900 font-medium truncate">{file.name}</span>
                  <span className="text-stone-400">({file.size})</span>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(idx)}
                  className="text-stone-400 hover:text-red-700 p-1"
                  title="Remove file"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Notes on Drawings */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold mb-1">
          Notes Regarding Files / Drawing References
        </label>
        <input
          type="text"
          placeholder="e.g. Attached registry shows 30x50, but north wall is angled by 2 degrees."
          value={filesNote}
          onChange={(e) => setFilesNote(e.target.value)}
          className="w-full p-2.5 bg-white border border-stone-300 text-sm focus:border-stone-900 focus:outline-hidden"
        />
      </div>

      {/* Skip Checkbox */}
      <div className="pt-2 flex items-center gap-2.5">
        <input
          type="checkbox"
          id={`skip-${inputId}`}
          checked={skipFiles}
          onChange={(e) => setSkipFiles(e.target.checked)}
          className="w-4 h-4 rounded-xs border-stone-300 text-[#C86635] focus:ring-0"
        />
        <label htmlFor={`skip-${inputId}`} className="text-xs text-stone-600 select-none font-sans">
          I will share drawings and plot photos via WhatsApp directly with the architect later.
        </label>
      </div>
    </div>
  );
}
