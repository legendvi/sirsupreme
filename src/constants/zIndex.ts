// constants/zIndex.ts

export const zIndex = {
  // Base levels
  base: 0,

  // Navigation & Header elements
  headerLogo: 20,
  headerNav: 15,
  mobileNavOverlay: 10,
  mobileNavContent: 11,
  menuTrigger: 20,

  // Modal & Overlay elements
  modal: 30,
  modalOverlay: 25,

  // Dropdown & Popup elements
  dropdown: 40,
  tooltip: 45,

  // Top level elements
  toast: 50,
  loader: 60,

  // Maximum level (reserved for critical UI)
  max: 9999,
} as const;

// Type for zIndex
export type ZIndexType = typeof zIndex;
