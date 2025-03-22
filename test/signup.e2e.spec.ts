import { test, expect } from "@playwright/test";

test("signup successfully", async ({ page }) => {
  await page.goto("/signup", { waitUntil: "networkidle" });

  await page
    .getByRole("textbox", { name: "Nome do estabelecimento" })
    .fill("Pizza Shop");
  await page.getByRole("textbox", { name: "Seu nome" }).fill("John Doe");
  await page
    .getByRole("textbox", { name: "Seu e-mail" })
    .fill("johndoe@example.com");
  await page
    .getByRole("textbox", { name: "Seu telefone" })
    .fill("(00) 9 8765-4321");

  await page.getByRole("button", { name: "Finalizar cadastro" }).click();

  const toast = page.getByText("Restaurante cadastrado com sucesso");

  await expect(toast).toBeVisible();

  //   await page.waitForTimeout(2000);
});

test("signup with error", async ({ page }) => {
  await page.goto("/signup", { waitUntil: "networkidle" });

  await page
    .getByRole("textbox", { name: "Nome do estabelecimento" })
    .fill("Wrong name");
  await page.getByRole("textbox", { name: "Seu nome" }).fill("John Doe");
  await page
    .getByRole("textbox", { name: "Seu e-mail" })
    .fill("johndoe@example.com");
  await page
    .getByRole("textbox", { name: "Seu telefone" })
    .fill("(00) 9 8765-4321");

  await page.getByRole("button", { name: "Finalizar cadastro" }).click();

  const toast = page.getByText("Erro ao cadastrar restaurante");

  await expect(toast).toBeVisible();
});

test("navigate to login page", async ({ page }) => {
  await page.goto("/signup", { waitUntil: "networkidle" });

  await page.getByRole("link", { name: "Fazer login" }).click();

  expect(page.url()).toContain("signin");
});
