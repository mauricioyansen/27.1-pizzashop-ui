import { test, expect } from "@playwright/test";

test("list orders successfully", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await expect(
    page.getByRole("cell", { name: "Customer 1", exact: true })
  ).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "Customer 10", exact: true })
  ).toBeVisible();

  //   await page.waitForTimeout(1000);
});

test("paginate orders successfully", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "Próxima página" }).click();

  await expect(
    page.getByRole("cell", { name: "Customer 11", exact: true })
  ).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "Customer 20", exact: true })
  ).toBeVisible();

  await page.getByRole("button", { name: "Última página" }).click();

  await expect(
    page.getByRole("cell", { name: "Customer 51", exact: true })
  ).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "Customer 60", exact: true })
  ).toBeVisible();

  await page.getByRole("button", { name: "Página anterior" }).click();

  await expect(
    page.getByRole("cell", { name: "Customer 41", exact: true })
  ).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "Customer 50", exact: true })
  ).toBeVisible();

  await page.getByRole("button", { name: "Primeira página" }).click();

  await expect(
    page.getByRole("cell", { name: "Customer 1", exact: true })
  ).toBeVisible();
  await expect(
    page.getByRole("cell", { name: "Customer 10", exact: true })
  ).toBeVisible();

  //   await page.waitForTimeout(1000);
});

test("filter by order id successfully", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await page.getByRole("textbox", { name: "ID do cliente" }).fill("order-11");

  await page.getByRole("button", { name: "Filtrar resultados" }).click();

  await expect(page.getByRole("cell", { name: "order-11" })).toBeVisible();
});

test("filter by customer name successfully", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await page
    .getByRole("textbox", { name: "Nome do cliente" })
    .fill("Customer 11");

  await page.getByRole("button", { name: "Filtrar resultados" }).click();

  await expect(page.getByRole("cell", { name: "Customer 11" })).toBeVisible();
});

test("filter by status successfully", async ({ page }) => {
  await page.goto("/orders", { waitUntil: "networkidle" });

  await page.getByRole("combobox").click();

  await page.getByLabel("Pendente").getByText("Pendente").click();

  await page.getByRole("button", { name: "Filtrar resultados" }).click();

  await expect(page.getByRole("cell", { name: "Pendente" })).toHaveCount(10);
});
