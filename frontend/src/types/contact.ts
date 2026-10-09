export interface ContactFormData {
  fullName: string;
  email: string;
  companyName?: string;
  projectType: string;
  estimatedBudget?: string;
  projectDescription: string;
  preferredContactMethod?: string;
  honeypot?: string;
}

export interface ContactApiResponse {
  success: boolean;
  message: string;
  data?: {
    referenceId: string;
    receivedAt: string;
    status: string;
  };
  errors?: Record<string, string>;
  timestamp?: string;
}
