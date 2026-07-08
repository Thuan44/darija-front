import type { Theme } from "@/constants/lexicon.ts";

type ThemeSelectorProps = {
  theme: Theme;
  onSelect: (theme: Theme) => void 
};

function ThemeSelector({ theme, onSelect }: ThemeSelectorProps) {
  return (
    <button type="button" onClick={() => onSelect(theme)}>
      {theme.label}
    </button>
  );
}

export default ThemeSelector;
