import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

//Test Suite(Suite means ham multiple test cases ek sath de sakte hain)
describe("Hero Component", () => {
    test("renders hero image", () => {
        render(<Hero />);
        const heroImage = screen.getByAltText("Hero img");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src', 'media/images/homeHero.png');
    });

    test("renders signup button", () => {
        render(<Hero />);
        const signupButton = screen.getByRole('button', {name:'Sign up for free'});
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn-primary");
    });
});