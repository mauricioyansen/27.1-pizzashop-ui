import { env } from "@/env";
import { setupWorker } from "msw/browser";
import { signInMock } from "./signin-mock";
import { registerRestaurantMock } from "./register-restaurant-mock";
import { getDayOrdersAmountMock } from "./get-day-orders-amount";
import { getMonthCanceledOrdersAmountMock } from "./get-month-canceled-orders-amount";
import { getMonthRevenueMock } from "./get-month-revenue";
import { getDailyRevenueInPeriodMock } from "./get-daily-revenue-in-period";
import { getPopularProductsMock } from "./get-popular-products-mock";
import { getMonthOrdersAmountMock } from "./get-month-orders-amount";

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock
);

export async function enableMSW() {
  if (env.MODE !== "test") return;

  await worker.start();
}
