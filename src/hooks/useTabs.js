import { useState, useRef } from 'react';

export default function useTabs(initialState) {
  const [tabState, setTab] = useState(initialState);
  const selectedTab = useRef(initialState.find(item => item.isActive === true));

  return [tabState];
}
