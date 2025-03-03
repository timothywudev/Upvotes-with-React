import React from "react";

/**
 * Outputs a button with an up-arrow icon, that changes style based on the boolean provided by the Upvote List.
 * @param handler - Function that sets the active state of its parent Upvote List. 
 */
export default function Upvote({
  handler,
  active,
}: Readonly<{
  handler: () => void;
  active: boolean;
}>) {
  return (
    <button
      aria-label="upvote selection"
      // Button style changes based on boolean provided by the Upvote List
      className={`flex justify-center items-center w-16 h-16 rounded-md cursor-pointer ${
        active ? "bg-[#E5E8FD]" : "bg-[#F4F6F8]"
      }`}
      // Handler passed through props through the Upvote List
      onClick={handler}
    >
      <svg
        className={active ? "fill-[#253CF2]" : "fill-[#343A40]"}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 -960 960 960"
      >
        <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487z" />
      </svg>
    </button>
  );
}
