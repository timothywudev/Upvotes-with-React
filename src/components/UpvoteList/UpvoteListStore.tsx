import React from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * Zustand store for state and persisting data.
 */
type UpvoteStore = {
  upvotes: Record<string, number>;
  active: number;
  addUpvote: (id: number) => void;
  setActive: (id: number) => void;
};

export const useUpvoteStore = create<UpvoteStore>()(
  persist(
    (set) => ({
      upvotes: {},
      active: -1,

      addUpvote: (id: number) => {
        set((state) => ({
          upvotes: {
            ...state.upvotes,
            [id]: (state.upvotes[id] || 0) + 1,
          },
        }));
      },
      setActive: (id: number) => {
        set(() => ({
          active: id,
        }));
      },
    }),
    {
      name: "upvote-storage",
      partialize: (state) => ({ upvotes: state.upvotes }),
    }
  )
);

export default useUpvoteStore;
