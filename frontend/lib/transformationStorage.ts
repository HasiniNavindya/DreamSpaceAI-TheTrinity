const STYLE_KEY = "dreamspace-selected-style";
const MOODBOARD_KEY = "dreamspace-moodboard-selections";
const ROOM_PREVIEW_KEY = "dreamspace-room-preview";
const RESULT_PREVIEW_KEY = "dreamspace-result-preview";

export function saveSelectedStyle(styleId: string | null) {
  if (typeof window === "undefined") return;
  if (styleId) {
    sessionStorage.setItem(STYLE_KEY, styleId);
  } else {
    sessionStorage.removeItem(STYLE_KEY);
  }
}

export function getSelectedStyle(): string | null {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(STYLE_KEY);
}

export function saveMoodboardSelections(itemIds: string[]) {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(MOODBOARD_KEY, JSON.stringify(itemIds));
}

export function getMoodboardSelections(): string[] {
  if (typeof window === "undefined") return [];
  const raw = sessionStorage.getItem(MOODBOARD_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as string[];
  } catch {
    return [];
  }
}

export function saveTransformationPreviews(roomUrl: string, resultUrl: string) {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(ROOM_PREVIEW_KEY, roomUrl);
  sessionStorage.setItem(RESULT_PREVIEW_KEY, resultUrl);
}

export function getRoomPreview(): string | null {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(ROOM_PREVIEW_KEY);
}

export function getResultPreview(): string | null {
  if (typeof window === "undefined") return null;
  return sessionStorage.getItem(RESULT_PREVIEW_KEY);
}
