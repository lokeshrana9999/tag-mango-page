import { useState } from 'react';
import { Header } from './components/Header';
import { SubHeader } from './components/SubHeader';
import { DaySidebar } from './components/DaySidebar';
import { DayTopBar } from './components/DayTopBar';
import { FeedSection } from './components/FeedSection';

export default function App() {
  const [selectedDay, setSelectedDay] = useState(1);

  return (
    <div className="min-h-screen bg-[#f7f6fc] dark:bg-[#000]">
      <Header />
      <SubHeader currentDay={selectedDay} totalDays={9} />
      <DayTopBar
        selectedDay={selectedDay}
        onSelectDay={setSelectedDay}
        totalDays={9}
      />

      <div className="flex relative">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <DaySidebar
            selectedDay={selectedDay}
            onSelectDay={setSelectedDay}
            totalDays={9}
          />
        </div>

        <main className="flex-1 px-4 md:px-6 py-6 max-w-[800px] mx-auto w-full">
          <FeedSection selectedDay={selectedDay} />
        </main>
      </div>
    </div>
  );
}