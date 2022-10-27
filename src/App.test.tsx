import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("first image in the page is the logo", async () => {
	// ARRANGE
	await act(() => {
		render(<App />);
	});

	// ACT

	// ASSERT
	expect(screen.getAllByRole("img")[0]).toHaveClass("header__logo");
});

test("first card flips and displays character's name", async () => {
	// ARRANGE
	await act(() => {
		render(<App />);
	});

	// ACT
	const firstCard = document.querySelectorAll(".character-card")[0];
	await userEvent.click(firstCard);

	// ASSERT
	expect(firstCard).toHaveClass("character-card--flipped");
	expect(firstCard).toHaveTextContent("Rick Sanchez");
	expect(screen.getByText("Rick Sanchez")).toBeVisible();
});

test("second card flips and details button points to the correct url", async () => {
	// ARRANGE
	await act(() => {
		render(<App />);
	});

	// ACT
	const secondCard = document.querySelectorAll(".character-card")[1];
	await userEvent.click(secondCard);
	const secondCardDetailsBtn = secondCard.querySelector(
		".character-card__details-btn"
	);

	// ASSERT
	expect(secondCard).toHaveClass("character-card--flipped");
	expect(secondCardDetailsBtn).toBeVisible();
	expect(secondCardDetailsBtn).toHaveAttribute("href", "/characters/2");
});

test("search works", async () => {
	// ARRANGE
	await act(() => {
		render(<App />);
	});

	// ACT
	const searchInput = screen.getByPlaceholderText("Search characters...");
	await userEvent.type(searchInput, "j");
	const firstCardInSearch = document.querySelectorAll(".character-card")[0];

	// ASSERT
	expect(document.querySelectorAll(".character-card").length).toEqual(3);
	expect(firstCardInSearch).toHaveTextContent("Jerry Smith");
});
