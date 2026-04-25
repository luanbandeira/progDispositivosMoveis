import { Platform } from 'react-native';

const tintColorLight = '#3b82f6';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#111827',
    background: '#fff',
    tint: tintColorLight,
    icon: '#6b7280',
    card: '#f9fafb',
    subtext: '#6b7280',
    inputBorder: '#d1d5db',
    divider: '#e5e7eb',
  },
  dark: {
    text: '#f9fafb',
    background: '#111827',
    tint: tintColorDark,
    icon: '#9ca3af',
    card: '#1f2937',
    subtext: '#9ca3af',
    inputBorder: '#4b5563',
    divider: '#374151',
  },
};

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
