export function flowView(firstPath: string) {
  console.log(firstPath);
  window.addEventListener("popstate", (e) => {
    console.log(firstPath);
    console.log(e);
  });
}
