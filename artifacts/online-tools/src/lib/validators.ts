/**
 * Lightweight, dependency-free validators shared across tools that collect
 * contact-style input (email, phone, URL). These are intentionally
 * permissive — the goal is to catch obviously malformed input, not to fully
 * validate against every real-world numbering plan or domain rule.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isValidEmail(value: string): boolean {
  return EMAIL_RE.test(value.trim());
}

const PHONE_RE = /^\+?[\d\s\-().]{6,20}$/;

export function isValidPhone(value: string): boolean {
  const trimmed = value.trim();
  if (!PHONE_RE.test(trimmed)) return false;
  const digitCount = trimmed.replace(/\D/g, '').length;
  return digitCount >= 6 && digitCount <= 15;
}

export function isValidUrl(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;
  const candidate = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    const url = new URL(candidate);
    // Accept any hostname that has at least one dot (covers subdomains like
    // web.whatsapp.com) and no whitespace, or localhost for dev convenience.
    return url.hostname === 'localhost' || /^[^\s.]+(\.[^\s.]+)+$/.test(url.hostname);
  } catch {
    return false;
  }
}
