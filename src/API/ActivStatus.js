import { create } from 'zustand'

export const useStatus = create((set) => ({
    navigatoring: false,
    setNavigating: (lot) => {
        set({ navigatoring: lot })
    },
    inputAcktiv: false,
    setInputAcktiv: (lot) => {
        set({ inputAcktiv: lot })
    }

}))