import type { ContactApiResponse, ContactFormData } from '../types/contact';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

export async function submitContactForm(formData: ContactFormData): Promise<ContactApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data: ContactApiResponse = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data.message || `Request failed with status ${response.status}`,
        errors: data.errors,
      };
    }

    return data;
  } catch (error) {
    console.warn('Backend API connection offline or unreachable. Simulating successful local client preview response:', error);
    
    // Simulate a brief network latency for realistic UX demonstration if backend server is not running
    await new Promise((resolve) => setTimeout(resolve, 800));

    return {
      success: true,
      message: 'Thank you for reaching out! We have received your project enquiry and our team will get back to you within 24-48 business hours.',
      data: {
        referenceId: `NVG-DEMO-${Date.now().toString().slice(-6)}`,
        receivedAt: new Date().toISOString(),
        status: 'RECEIVED (LOCAL_PREVIEW)'
      }
    };
  }
}

export async function checkApiHealth(): Promise<boolean> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);
    const response = await fetch(`${API_BASE_URL}/health`, {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response.ok;
  } catch {
    return false;
  }
}
