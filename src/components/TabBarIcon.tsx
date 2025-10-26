import React from 'react';
import { Image, ImageStyle, StyleProp } from 'react-native';

const journal = require('../../assets/icons/journal_icon.png');
const past = require('../../assets/icons/past_entries_icon.png');

export function tabIconFor(routeName: string) {
  const n = (routeName || '').toLowerCase();
  if (n.includes('journal')) return journal;
  if (n.includes('past') || n.includes('entries') || n.includes('history')) return past;
  // default fallback (pick one to at least show something)
  return journal;
}

export default function TabBarIcon({
  routeName,
  focused,
  color,
  size,
  style,
}: {
  routeName: string;
  focused?: boolean;
  color?: string;
  size?: number;
  style?: StyleProp<ImageStyle>;
}) {
  const src = tabIconFor(routeName);
  return (
    <Image
      source={src}
      resizeMode="contain"
      style={[
        { width: size ?? 22, height: size ?? 22, tintColor: color },
        style,
      ]}
    />
  );
}

