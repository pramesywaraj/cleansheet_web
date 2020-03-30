import { useState } from 'react';
import { useStore } from '';

export default function useAuthData() {
  const { state } = useStore();
}
