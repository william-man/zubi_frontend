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