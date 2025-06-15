import { useState } from "react";
import ComboFinder from "@/components/combo-finder";
import FestivalsTab from "@/components/festivals-tab";
import CareersTab from "@/components/careers-tab";
import TeachersTab from "@/components/teachers-tab";
import ClassesTab from "@/components/classes-tab";
import StudentsTab from "@/components/students-tab";
import ClubsTab from "@/components/clubs-tab";

type TabType = "combo-finder" | "festivals" | "careers" | "teachers" | "classes" | "students" | "clubs";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("combo-finder");
  const [selectedStructures, setSelectedStructures] = useState<string[]>([]);

  const clearAll = () => {
    setSelectedStructures([]);
  };

  const tabs = [
    { id: "combo-finder", label: "Combo Finder", icon: "fas fa-search" },
    { id: "festivals", label: "Festivals", icon: "fas fa-calendar-alt" },
    { id: "careers", label: "Career Paths", icon: "fas fa-briefcase" },
    { id: "teachers", label: "Teachers", icon: "fas fa-chalkboard-teacher" },
    { id: "classes", label: "Special Classes", icon: "fas fa-book" },
    { id: "students", label: "Students", icon: "fas fa-users" },
    { id: "clubs", label: "Clubs", icon: "fas fa-star" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <i className="fas fa-graduation-cap text-white text-sm"></i>
              </div>
              <h1 className="text-xl font-bold text-slate-800">Pocket Academy 3</h1>
              <span className="text-sm text-slate-500 hidden sm:block">Complete Game Guide</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-slate-600">{selectedStructures.length} selected</span>
              <button 
                onClick={clearAll}
                className="text-blue-500 hover:text-blue-600 text-sm font-medium"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-slate-500 hover:text-slate-700"
                }`}
              >
                <i className={`${tab.icon} mr-2`}></i>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "combo-finder" && (
          <ComboFinder 
            selectedStructures={selectedStructures}
            onStructureToggle={(structure) => {
              setSelectedStructures(prev => 
                prev.includes(structure)
                  ? prev.filter(s => s !== structure)
                  : [...prev, structure]
              );
            }}
          />
        )}
        {activeTab === "festivals" && <FestivalsTab />}
        {activeTab === "careers" && <CareersTab />}
        {activeTab === "teachers" && <TeachersTab />}
        {activeTab === "classes" && <ClassesTab />}
        {activeTab === "students" && <StudentsTab />}
        {activeTab === "clubs" && <ClubsTab />}
      </main>
    </div>
  );
}
