import type { Theme } from "@/constants/lexicon.ts";

type ThemeSelectorProps = {
  theme: Theme;
};

function ThemeSelector({ theme }: ThemeSelectorProps) {
  return <button type="button">{theme.label}</button>;
}

export default ThemeSelector;
