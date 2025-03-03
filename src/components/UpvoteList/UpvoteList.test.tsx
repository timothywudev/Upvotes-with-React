/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, act } from "@testing-library/react";
import UpvotesList, { useUpvoteStore } from "./UpvoteList";

describe("UpvotesList Button Clicks", () => {
  beforeEach(() => {
    useUpvoteStore.setState({ upvotes: { 0: 3, 1: 2, 2: 5 }, active: -1 });
  });

  // Single test to satisfy instruction 8
  test("Active selection should change to their respective list when the 'Add Upvote' button and when one of the 'Upvote' buttons are clicked", () => {
    render(
      <>
        <UpvotesList list={0} />
        <UpvotesList list={1} />
        <UpvotesList list={2} />
      </>
    );

    const addButton = screen.getAllByRole("button", {
      name: /add upvote/i,
    })[1];
    fireEvent.click(addButton);
    expect(useUpvoteStore.getState().active).toBe(1);

    act(() => {
      useUpvoteStore.setState({ upvotes: { 0: 3, 1: 2, 2: 5 }, active: -1 });
    });

    const upvoteButtons = screen.getAllByRole("button", {
      name: /upvote selection/i,
    });
    const specificUpvoteButton = upvoteButtons[0];
    fireEvent.click(specificUpvoteButton);
    expect(useUpvoteStore.getState().active).not.toBe(-1);
  });
});
