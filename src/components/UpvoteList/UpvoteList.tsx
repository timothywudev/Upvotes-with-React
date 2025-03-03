import React from "react";
import Upvote from "../Upvote/Upvote";
import { useUpvoteStore } from "./UpvoteListStore";

/**
 * Outputs a list of Upvote components, with an 'Add Upvote' button that increments the number of Upvotes in the list.
 * @param list - The list ID to be displayed.
 */
export default function UpvotesList({ list }: Readonly<{ list: number }>) {
  const { addUpvote, setActive, upvotes, active } = useUpvoteStore();

  return (
    <div id={`upvotes-${list}`} className={`flex mb-5 gap-5 justify-center `}>
      <div className="border-1 border-[#dee2e6] p-5 rounded-md">
        <div className="grid grid-cols-2 gap-5 xs:grid-cols-3 sm:grid-cols-5 md:grid-cols-6">
          {upvotes[list] > 0 ? (
            Array.from({ length: upvotes[list] }, (_, i) => (
              <Upvote
                key={i}
                handler={() => setActive(list)}
                active={active === list}
              />
            ))
          ) : (
            <div className="w-16 h-16" />
          )}
        </div>
      </div>
      <div className="pt-5 border-t-1 border-transparent">
        <button
          aria-label="add upvote"
          className="flex justify-center items-center w-16 h-16 rounded-md cursor-pointer bg-[#F4F6F8]"
          onClick={() => {
            setActive(list);
            addUpvote(list);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 -960 960 960"
          >
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
