window.addEventListener("DOMContentLoaded", () => {
  const replacteText = (selector, text) => {
    const element = document.getElementById(selector);

    if (element) {
      element.innerText = text;
    };
  };

  for (const type of ["chrome", "node", "electron"]) {
    replacteText(`${type}-version`, process.versions[type]);
  };
});
