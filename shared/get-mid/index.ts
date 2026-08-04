/** Нижняя середина диапазона `[left, right]` для бинпоиска; форма `left + (right-left)/2` не переполняется. */
export const getMid = (left: number, right: number) => left + Math.floor((right - left) / 2);
