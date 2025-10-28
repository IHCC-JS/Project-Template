export function createButton(text, variant = "primary") {
  const button = document.createElement("button")
  button.textContent = text
  button.className = `btn-${variant}`
  button.addEventListener("click", () => {
    console.log(`${text} clicked`)
  })
  return button
}
