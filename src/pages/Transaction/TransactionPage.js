import React from 'react';

import useTabs, { TABTYPE } from '../../hooks/useTabs';

import TransactionStyle from './transaction.module.scss';

import TabsContainer from '../../components/Tabs/TabsContainer';

export default function TransactionPage() {
  const [activeTab, onChangeTab] = useTabs(TABTYPE.sanitation.code);

  return (
    <div className={TransactionStyle['transaction-wrapper']}>
      <TabsContainer handleTabChange={handleTabChange} activeTab={activeTab} />
    </div>
  );
}
