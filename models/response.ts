export type ResponseModel = Partial<{
  status: Status;
  successMessage: string;
  errorMessage: string;
  isLoading: boolean;
}>;

export type Status = 'info' | 'warning' | 'success' | 'error' | 'loading';
