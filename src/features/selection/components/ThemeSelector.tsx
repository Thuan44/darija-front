import type { Theme } from "@/constants/lexicon.ts";
import { Compass, Home, Utensils, PersonStanding, Dog, type LucideIcon } from "lucide-react";
import "./ThemeSelector.css";

const THEME_ICONS: Record<string, LucideIcon> = {
  home: Home,
  utensils: Utensils,
  compass: Compass,
  person_standing: PersonStanding,
  dog: Dog,
};

type ThemeSelectorProps = {
  theme: Theme;
  onSelect: (theme: Theme) => void;
};

function ThemeSelector({ theme, onSelect }: ThemeSelectorProps) {
  const Icon = THEME_ICONS[theme.icon];

  return (
    <button
      type="button"
      className="theme-selector"
      onClick={() => onSelect(theme)}
    >
      {Icon && (
        <span className="theme-selector__icon">
          <Icon size={22} aria-hidden />
        </span>
      )}
      <span className="theme-selector__label">{theme.label}</span>
    </button>
  );
}

export default ThemeSelector;
