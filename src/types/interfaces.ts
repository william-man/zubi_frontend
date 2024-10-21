import { ReactNode } from 'react';

export interface Subject {
  id: number;
  name: string;
  description: string;
  [x: string]: ReactNode;
}

// add more shared interfaces here as needed
export interface BaseResponse {
  success: boolean;
  message?: string;
}

export interface SubjectResponse extends BaseResponse {
  data: Subject[];
}

export interface BaseFormProps {
  title: string;
  fields: {
    label: string;
    type: string;
    id: string;
    placeholder: string;
    required?: boolean;
  }[];
  buttonLabel: string;
  onSubmit: (e: React.FormEvent) => void;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  buttonType: string;
  ariaLabel?: string;
}

export interface NavbarLinkProps {
  label: string;
  href: string;
  className?: string;
}