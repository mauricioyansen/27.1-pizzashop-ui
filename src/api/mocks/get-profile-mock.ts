import { http, HttpResponse } from "msw";
import { GetProfileResponse } from "../get-profile";

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  "/me",
  () => {
    return HttpResponse.json({
      id: "custom-user-id",
      name: "John Doe",
      email: "johndoe@mail.com",
      phone: "(00) 9 8765-4321",
      role: "manager",
      createdAt: new Date(),
      updatedAt: null,
    });
  }
);
