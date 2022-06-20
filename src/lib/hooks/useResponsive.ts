// @mui
import { Breakpoint, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// ----------------------------------------------------------------------

export default function useResponsive(
  query: string,
  key: Breakpoint,
  start: number | Breakpoint = 'lg',
  end: number | Breakpoint = 'xl'
) {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(key));

  const mediaDown = useMediaQuery(theme.breakpoints.down(key));

  const mediaOnly = useMediaQuery(theme.breakpoints.only(key));
  const mediaBetween = useMediaQuery(theme.breakpoints.between(start, end));

  if (query === "up") {
    return mediaUp;
  }

  if (query === "down") {
    return mediaDown;
  }

  if (start && end) {
    if (query === "between") {
      return mediaBetween;
    }
  }

  if (query === "only") {
    return mediaOnly;
  }
  return null;
}
