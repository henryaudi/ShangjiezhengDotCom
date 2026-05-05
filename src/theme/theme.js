/**
 * MUI theme with fluid typography.
 *
 * Font sizes use CSS clamp(min, preferred, max) so they scale smoothly and
 * continuously across the full viewport width — no step-jumps at breakpoints.
 *
 * Scale reference: 375 px (iPhone SE) → 1200 px (desktop)
 * The preferred value is derived from the formula:
 *   preferred = intercept + slope * 100vw
 *   where slope = (maxPx - minPx) / (1200 - 375)
 *         intercept = minPx - slope * 375   (in px, then converted to rem)
 *
 * All rem values assume a 16 px root font size (browser default).
 */

import { createTheme } from '@mui/material/styles';
import { colors } from './colors';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      dark: colors.primaryDark,
    },
  },

  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',

    // ── Display / hero headings ─────────────────────────────────────────────
    // These should stay large even on mobile. Fluid range keeps them from
    // ballooning on wide desktops while preserving impact everywhere else.

    // 48 px → 72 px  (slope ≈ 2.91vw, intercept ≈ 1.91rem)
    h1: { fontSize: 'clamp(3rem, calc(1.91rem + 2.91vw), 4.5rem)' },

    // 36 px → 52 px  (slope ≈ 1.94vw, intercept ≈ 1.52rem)
    h2: { fontSize: 'clamp(2.25rem, calc(1.52rem + 1.94vw), 3.25rem)' },

    // 28 px → 40 px  (slope ≈ 1.45vw, intercept ≈ 1.21rem)
    h3: { fontSize: 'clamp(1.75rem, calc(1.21rem + 1.45vw), 2.5rem)' },

    // "Welcome…" heading — stays noticeably big on all screens
    // 26 px → 36 px  (slope ≈ 1.21vw, intercept ≈ 1.34rem)
    h4: { fontSize: 'clamp(1.625rem, calc(1.34rem + 1.21vw), 2.25rem)' },

    // "Experience / Skills / Projects" section titles
    // 20 px → 26 px  (slope ≈ 0.73vw, intercept ≈ 1.08rem)
    h5: { fontSize: 'clamp(1.25rem, calc(1.08rem + 0.73vw), 1.625rem)' },

    // Sub-headings ("Professional Experience", card labels)
    // 16 px → 20 px  (slope ≈ 0.48vw, intercept ≈ 0.82rem)
    h6: { fontSize: 'clamp(1rem, calc(0.82rem + 0.48vw), 1.25rem)' },

    // ── Body & UI text ──────────────────────────────────────────────────────
    // Modest range — body copy doesn't need dramatic size shifts.

    // 15 px → 17 px  (slope ≈ 0.24vw, intercept ≈ 0.85rem)
    subtitle1: { fontSize: 'clamp(0.9375rem, calc(0.85rem + 0.24vw), 1.0625rem)' },

    // 13 px → 15 px  (slope ≈ 0.24vw, intercept ≈ 0.72rem)
    subtitle2: { fontSize: 'clamp(0.8125rem, calc(0.72rem + 0.24vw), 0.9375rem)' },

    // 15 px → 16 px
    body1: { fontSize: 'clamp(0.9375rem, calc(0.9rem + 0.12vw), 1rem)' },

    // 13 px → 15 px
    body2: { fontSize: 'clamp(0.8125rem, calc(0.72rem + 0.24vw), 0.9375rem)' },

    // 11 px → 13 px
    caption: { fontSize: 'clamp(0.6875rem, calc(0.60rem + 0.24vw), 0.8125rem)' },

    // 12 px → 14 px
    button: {
      fontSize: 'clamp(0.75rem, calc(0.66rem + 0.24vw), 0.875rem)',
      textTransform: 'none',
    },

    overline: { fontSize: 'clamp(0.625rem, calc(0.56rem + 0.24vw), 0.75rem)' },
  },
});

export default theme;
