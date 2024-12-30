import { useEffect } from "react";
import { Theme } from "@/store/theme/types";

export const useThemeEffect = (theme: Theme) => {
  useEffect(() => {
    // システムテーマの場合、メディアクエリを監視
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e: MediaQueryListEvent) => {
        document.documentElement.classList.toggle("dark", e.matches);
      };

      document.documentElement.classList.toggle("dark", mediaQuery.matches);
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    // ライト/ダークモードの場合
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
};
