import { RECAPTCHA_SITE_KEY } from "@/config";

export const handleSubmit = (e: SubmitEvent, route: string) => {
  e.preventDefault();
  grecaptcha.ready(function () {
    grecaptcha
      .execute(RECAPTCHA_SITE_KEY, { action: "submit" })
      .then(async (token) => {
        const response = await fetch("/api/recaptcha", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token,
          }),
        });
        if (response.ok) {
          const form = e.target as HTMLFormElement;
          const data = await response.json();

          if (data.score >= 0.5) {
            const formData = new FormData(form);
            await fetch(route, {
              method: "POST",
              body: formData,
            });
            window.location.href = "/success";
          }
        }
      });
  });
};
