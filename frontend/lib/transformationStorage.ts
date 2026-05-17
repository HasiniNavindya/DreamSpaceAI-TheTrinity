const STYLE_KEY = "dreamspace-selected-style";
const MOODBOARD_KEY = "dreamspace-moodboard-selections";
const ROOM_PREVIEW_KEY = "dreamspace-room-preview";
const RESULT_PREVIEW_KEY = "dreamspace-result-preview";
const ROOM_TYPE_KEY = "dreamspace-room-type";
const TRANSFORMATION_CONFIG_KEY = "dreamspace-transformation-config";

export type TransformationConfig = {
  roomType: string;
  styleId: string | null;
  moodboardItemIds: string[];
};

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

export function saveRoomPreview(roomUrl: string) {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(ROOM_PREVIEW_KEY, roomUrl);
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

export function clearResultPreview() {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(RESULT_PREVIEW_KEY);
}

export function saveRoomType(roomType: string) {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(ROOM_TYPE_KEY, roomType);
}

export function getRoomType(): string {
  if (typeof window === "undefined") return "Living Room";
  return sessionStorage.getItem(ROOM_TYPE_KEY) ?? "Living Room";
}

/** Snapshot sent to transformation pipeline (AI integration later). */
export function saveTransformationConfig(config: TransformationConfig) {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(TRANSFORMATION_CONFIG_KEY, JSON.stringify(config));
}

export function getTransformationConfig(): TransformationConfig | null {
  if (typeof window === "undefined") return null;
  const raw = sessionStorage.getItem(TRANSFORMATION_CONFIG_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as TransformationConfig;
  } catch {
    return null;
  }
}
