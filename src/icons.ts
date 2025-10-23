// central icon map so we don't repeat require() all over
export const icons = {
  journal: require('../assets/icons/journal_icon.png'),
  pastEntries: require('../assets/icons/past_entries_icon.png'),
  // add any others you use here
} as const;

export type IconKey = keyof typeof icons;
