"use strict";
const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());
const copyButton = document.querySelector("#copy-email");
const copyStatus = document.querySelector("#copy-status");
copyButton?.addEventListener("click", async () => {
  try {
    if (!navigator.clipboard) throw new Error("Clipboard unavailable");
    await navigator.clipboard.writeText("leehari007@gmail.com");
    copyStatus.textContent = "Email address copied.";
    copyButton.textContent = "Copied";
    window.setTimeout(() => { copyButton.textContent = "Copy"; }, 2500);
  } catch {
    copyStatus.textContent = "Please select and copy the email address above.";
  }
});
