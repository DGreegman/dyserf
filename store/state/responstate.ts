import { create } from 'zustand';
import { ResponseModel, Status } from '../../models';

interface ResponseData extends ResponseModel {
  onSuccess: (e: string) => void;
  onError: (e?: string, status?: Status) => void;
  onLoading: (e?: boolean) => void;
  reset: () => void;
}

export const useReponseStore = create<ResponseData>((set) => ({
  onSuccess: (e) => set({ successMessage: e }),
  onError: (e, s) => set({ errorMessage: e, status: s }),
  onLoading: (e) => set({ isLoading: e }),
  reset: () =>
    set({
      successMessage: undefined,
      errorMessage: undefined,
      isLoading: undefined,
      status: undefined,
    }),
}));
