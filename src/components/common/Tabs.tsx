import { FC, useState } from 'react';

interface TabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Tabs: FC<TabsProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex space-x-2 border-b">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 focus:outline-none ${
            activeTab === tab 
              ? 'border-b-2 border-blue-500 font-medium' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

// Parent component that uses Tabs
const TabContainer: FC = () => {
  const [activeTab, setActiveTab] = useState('Tab 1');
  const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];

  return (
    <div className="p-4">
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      
      {/* Add content for each tab */}
      <div className="mt-4">
        {activeTab === 'Tab 1' && <div>Content for Tab 1</div>}
        {activeTab === 'Tab 2' && <div>Content for Tab 2</div>}
        {activeTab === 'Tab 3' && <div>Content for Tab 3</div>}
      </div>
    </div>
  );
};

export default TabContainer;
