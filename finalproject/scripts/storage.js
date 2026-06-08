// storage.js

const STORAGE_KEY = "viewPreference";

/**
 * Save user's preferred view
 * @param {string} preference
 */
export function savePreference(preference) {
    localStorage.setItem(STORAGE_KEY, preference);
}

/**
 * Get saved preference
 * @returns {string}
 */
export function getPreference() {
    return localStorage.getItem(STORAGE_KEY) || "grid";
}

/**
 * Remove saved preference
 */
export function clearPreference() {
    localStorage.removeItem(STORAGE_KEY);
}