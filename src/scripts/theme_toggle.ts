class ToggleTheme extends HTMLElement {
  constructor() {
    super();

    const button = this.querySelector("button");

    if (button != null) {
      button.addEventListener("click", this.toggleTheme);
    } else {
      console.log(
        "Could not attach onClick eventListener to #colorSchemeToggle button"
      );
    }
  }

  private toggleTheme = () => {
    if (this.getThemeData() === "light") {
      this.setThemeData("dark");
    } else {
      this.setThemeData("light");
    }
  };

  private getThemeData = (): string => {
    const data = document.documentElement.getAttribute("data-theme");

    return data ?? "light";
  };

  private setThemeData = (theme: string) => {
    document.documentElement.setAttribute("data-theme", theme);
  };
}

export default ToggleTheme;
