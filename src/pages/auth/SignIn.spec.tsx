import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { SignIn } from "./SignIn";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";

describe("Sign In", () => {
  it("should highlight the nav link who is currently active", () => {
    const wrapper = render(<SignIn />, {
      wrapper: ({ children }) => {
        return (
          <MemoryRouter initialEntries={["/signin?email=johndoe@example.com"]}>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </MemoryRouter>
        );
      },
    });

    const emailInput = wrapper.getByLabelText("Seu e-mail") as HTMLInputElement;

    console.log(emailInput.outerHTML);

    expect(emailInput.value).toEqual("johndoe@example.com");
  });
});
