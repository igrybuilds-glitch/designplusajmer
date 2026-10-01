/**
 * Indian mobile number helpers.
 * Validation is a simple 10-digit check — NO OTP, NO verification hassle.
 * Accepts inputs like "98290 12345", "+91-9829012345", "09829012345".
 */

/** Strip everything except digits; drop leading +91 / 91 / 0 country/trunk prefixes. */
export function normalizeIndianMobile(raw: string): string {
  const digits = (raw || '').replace(/\D/g, '');
  if (digits.length === 12 && digits.startsWith('91')) return digits.slice(2);
  if (digits.length === 11 && digits.startsWith('0')) return digits.slice(1);
  return digits;
}

/** True for a valid 10-digit Indian mobile number (starts 6-9). */
export function isValidIndianMobile(raw: string): boolean {
  return /^[6-9]\d{9}$/.test(normalizeIndianMobile(raw));
}

export const PHONE_ERROR_MESSAGE =
  'Please enter a valid 10-digit mobile number (e.g. 98290 12345).';
