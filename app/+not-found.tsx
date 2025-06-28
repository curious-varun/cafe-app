// app/404.tsx or app/_not-found.tsx
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter, Stack } from 'expo-router';

export default function NotFoundScreen() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace('/');
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
    </>
  );
}
