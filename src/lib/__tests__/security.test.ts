
import { describe, it, expect } from 'vitest';
import { 
  escapeHtml, 
  sanitizeInput, 
  isValidEmail, 
  isValidPhoneNumber, 
  isValidName 
} from '../security';

describe('Security utilities', () => {
  describe('escapeHtml', () => {
    it('should escape HTML characters', () => {
      const input = '<script>alert("xss")</script>';
      const expected = '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;';
      expect(escapeHtml(input)).toBe(expected);
    });

    it('should handle empty string', () => {
      expect(escapeHtml('')).toBe('');
    });
  });

  describe('sanitizeInput', () => {
    it('should remove script tags', () => {
      const input = 'Hello <script>alert("xss")</script> World';
      const result = sanitizeInput(input);
      expect(result).toBe('Hello  World');
    });

    it('should remove javascript: protocols', () => {
      const input = 'javascript:alert("xss")';
      const result = sanitizeInput(input);
      expect(result).toBe('alert("xss")');
    });

    it('should handle non-string input', () => {
      expect(sanitizeInput('')).toBe('');
    });
  });

  describe('isValidEmail', () => {
    it('should validate correct emails', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('user.name+tag@domain.co.uk')).toBe(true);
    });

    it('should reject invalid emails', () => {
      expect(isValidEmail('invalid-email')).toBe(false);
      expect(isValidEmail('@domain.com')).toBe(false);
      expect(isValidEmail('test@')).toBe(false);
    });
  });

  describe('isValidPhoneNumber', () => {
    it('should validate French phone numbers', () => {
      expect(isValidPhoneNumber('0123456789')).toBe(true);
      expect(isValidPhoneNumber('+33123456789')).toBe(true);
      expect(isValidPhoneNumber('01 23 45 67 89')).toBe(true);
    });

    it('should reject invalid phone numbers', () => {
      expect(isValidPhoneNumber('123')).toBe(false);
      expect(isValidPhoneNumber('0023456789')).toBe(false);
    });
  });

  describe('isValidName', () => {
    it('should validate correct names', () => {
      expect(isValidName('Jean')).toBe(true);
      expect(isValidName('Marie-Claire')).toBe(true);
      expect(isValidName('François')).toBe(true);
    });

    it('should reject invalid names', () => {
      expect(isValidName('J')).toBe(false);
      expect(isValidName('Jean123')).toBe(false);
      expect(isValidName('')).toBe(false);
    });
  });
});
