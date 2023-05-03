import { create } from 'zustand'



export const useStore = create((set: any) => ({
    authData: localStorage.getItem('authData') ? JSON.parse(localStorage.getItem('authData') as any) : null,
    setAuthData: (newAuthData: any) => set((state: any) => ({authData: newAuthData})),

}))