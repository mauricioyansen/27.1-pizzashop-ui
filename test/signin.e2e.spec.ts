import { test, expect } from "@playwright/test";

test("signin successfully", async ({ page }) => {
  await page.goto("/signin", { waitUntil: "networkidle" });

  await page.getByLabel("Seu e-mail").fill("johndoe@example.com");
  await page.getByRole("button", { name: "Acessar painel" }).click();

  const toast = page.getByText(
    "Enviamos um link de autenticação para seu e-mail"
  );

  await expect(toast).toBeVisible();

  // await page.waitForTimeout(2000); for debug, in this case its possible to view the toast after 2s
});

test("signin with wrong credentials", async ({ page }) => {
  await page.goto("/signin", { waitUntil: "networkidle" });

  await page.getByLabel("Seu e-mail").fill("wrong@example.com");
  await page.getByRole("button", { name: "Acessar painel" }).click();

  const toast = page.getByText("Credencias Inválidas");

  await expect(toast).toBeVisible();

  await page.waitForTimeout(2000);
});

test("navigate to new restaurant page", async ({ page }) => {
  await page.goto("/signin", { waitUntil: "networkidle" });

  await page.getByRole("link", { name: "Novo estabelecimento" }).click();

  expect(page.url()).toContain("signup");
});
