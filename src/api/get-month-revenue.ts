import { api } from "@/lib/axios";

export interface GetMonthRevenueResponse {
  receipt: number;
  diffFromLastMonth: number;
}

export async function getMonthRevenueAmount() {
  const res = await api.get<GetMonthRevenueResponse>(
    "/metrics/month-receipt"
  );

  return res.data;
}
