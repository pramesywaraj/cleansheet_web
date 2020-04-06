import React from 'react';

import useTabs, { TRANSACTIONTAB } from '../../hooks/useTabs';

import TransactionStyle from './transaction.module.scss';

import TabsContainer from '../../components/Tabs/TabsContainer';

export default function TransactionPage() {
  const [activeTab, onChangeTab] = useTabs(TRANSACTIONTAB.service.code);

  function handleTabChange(key) {
    if (activeTab === key) return;
    onChangeTab(key);
  }

  return (
    <div className={TransactionStyle['transaction-wrapper']}>
      <TabsContainer handleTabChange={handleTabChange} activeTab={activeTab} />
    </div>
  );
}
