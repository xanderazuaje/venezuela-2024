import { RECAPTCHA_SEACRET_KEY } from "@/config";

export const prerender = false;

export async function POST({ request }: { request: Request }) {
  const data = await request.json();

  const recaptchaURL = "https://www.google.com/recaptcha/api/siteverify";
  const requestBody = `secret=${
    RECAPTCHA_SEACRET_KEY
  }&response=${data.token}`;

  const response = await fetch(recaptchaURL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: requestBody,
  });

  const responseData = await response.json();

  return new Response(JSON.stringify(responseData), { status: 200 });
}
