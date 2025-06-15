import { useMemo } from "react";
import { environmentStructures, facilitiesStructures, specialStructures } from "@/data/structures";
import { comboSpots } from "@/data/combos";

interface ComboFinderProps {
  selectedStructures: string[];
  onStructureToggle: (structure: string) => void;
}

export default function ComboFinder({ selectedStructures, onStructureToggle }: ComboFinderProps) {
  const availableCombos = useMemo(() => {
    return comboSpots.filter(combo =>
      combo.items.every(item => selectedStructures.includes(item))
    );
  }, [selectedStructures]);

  const potentialCombos = useMemo(() => {
    if (selectedStructures.length === 0) return [];
    return comboSpots.filter(combo =>
      combo.items.some(item => selectedStructures.includes(item)) &&
      !combo.items.every(item => selectedStructures.includes(item))
    );
  }, [selectedStructures]);

  const environmentCount = selectedStructures.filter(s => 
    environmentStructures.some(env => env.name === s)
  ).length;

  const facilitiesCount = selectedStructures.filter(s => 
    facilitiesStructures.some(fac => fac.name === s)
  ).length;

  const specialCount = selectedStructures.filter(s => 
    specialStructures.some(spec => spec.name === s)
  ).length;

  const flooringPaths = environmentStructures.filter(s => s.subcategory === "flooring");
  const decorations = environmentStructures.filter(s => s.subcategory === "decorations");
  const sportsExercise = specialStructures.filter(s => s.subcategory === "sports");
  const animalRooms = specialStructures.filter(s => s.subcategory === "animal");
  const cropFields = specialStructures.filter(s => s.subcategory === "crops");

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Structure Selection</h2>
        <p className="text-slate-600">Select structures to discover available combo spots. All 84 structures organized by category.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Environment Category */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
              <i className="fas fa-tree text-green-600"></i>
            </div>
            <h3 className="text-lg font-semibold text-slate-800">🌳 Environment</h3>
            <span className="ml-auto text-sm text-slate-500">{environmentCount}/30</span>
          </div>
          
          {/* Flooring & Paths Subcategory */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-slate-700 mb-3 border-b border-slate-100 pb-2">Flooring & Paths</h4>
            <div className="space-y-2">
              {flooringPaths.map((structure) => (
                <label key={structure.name} className="flex items-center p-2 rounded-lg hover:bg-slate-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedStructures.includes(structure.name)}
                    onChange={() => onStructureToggle(structure.name)}
                    className="text-blue-500 rounded focus:ring-blue-500"
                  />
                  <span className="ml-3 text-sm text-slate-700">{structure.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Decorations Subcategory */}
          <div>
            <h4 className="text-sm font-medium text-slate-700 mb-3 border-b border-slate-100 pb-2">Decorations</h4>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {decorations.map((structure) => (
                <label key={structure.name} className="flex items-center p-2 rounded-lg hover:bg-slate-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedStructures.includes(structure.name)}
                    onChange={() => onStructureToggle(structure.name)}
                    className="text-blue-500 rounded focus:ring-blue-500"
                  />
                  <span className="ml-3 text-sm text-slate-700">{structure.name}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Facilities Category */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
              <i className="fas fa-building text-blue-600"></i>
            </div>
            <h3 className="text-lg font-semibold text-slate-800">🏫 Facilities</h3>
            <span className="ml-auto text-sm text-slate-500">{facilitiesCount}/87</span>
          </div>
          
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {facilitiesStructures.map((structure) => (
              <label key={structure.name} className="flex items-center p-2 rounded-lg hover:bg-slate-50 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedStructures.includes(structure.name)}
                  onChange={() => onStructureToggle(structure.name)}
                  className="text-blue-500 rounded focus:ring-blue-500"
                />
                <span className="ml-3 text-sm text-slate-700">{structure.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Special Category */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
              <i className="fas fa-star text-yellow-600"></i>
            </div>
            <h3 className="text-lg font-semibold text-slate-800">🏅 Special</h3>
            <span className="ml-auto text-sm text-slate-500">{specialCount}/38</span>
          </div>
          
          {/* Sports & Exercise Subcategory */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-slate-700 mb-3 border-b border-slate-100 pb-2">Sports & Exercise</h4>
            <div className="space-y-2">
              {sportsExercise.map((structure) => (
                <label key={structure.name} className="flex items-center p-2 rounded-lg hover:bg-slate-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedStructures.includes(structure.name)}
                    onChange={() => onStructureToggle(structure.name)}
                    className="text-blue-500 rounded focus:ring-blue-500"
                  />
                  <span className="ml-3 text-sm text-slate-700">{structure.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Animal Rooms */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-slate-700 mb-3 border-b border-slate-100 pb-2">Animal Rooms</h4>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {animalRooms.map((structure) => (
                <label key={structure.name} className="flex items-center p-2 rounded-lg hover:bg-slate-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedStructures.includes(structure.name)}
                    onChange={() => onStructureToggle(structure.name)}
                    className="text-blue-500 rounded focus:ring-blue-500"
                  />
                  <span className="ml-3 text-sm text-slate-700">{structure.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Crop Fields */}
          <div>
            <h4 className="text-sm font-medium text-slate-700 mb-3 border-b border-slate-100 pb-2">Crop Fields</h4>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {cropFields.map((structure) => (
                <label key={structure.name} className="flex items-center p-2 rounded-lg hover:bg-slate-50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedStructures.includes(structure.name)}
                    onChange={() => onStructureToggle(structure.name)}
                    className="text-blue-500 rounded focus:ring-blue-500"
                  />
                  <span className="ml-3 text-sm text-slate-700">{structure.name}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Combo Results */}
      <div className="mt-8 space-y-6">
        {/* Available Combos */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-800">✅ Available Combo Spots</h3>
            <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
              {availableCombos.length} ready to build
            </span>
          </div>
          
          <div className="space-y-3">
            {availableCombos.length === 0 ? (
              <div className="bg-slate-50 rounded-lg p-4 text-center text-slate-500">
                {selectedStructures.length === 0 ? 'Select structures to discover available combo spots' : 'No complete combos available - check potential combos below'}
              </div>
            ) : (
              availableCombos.map((combo) => (
                <div key={combo.name} className="flex items-center justify-between p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <div>
                    <h4 className="font-medium text-emerald-900">{combo.name}</h4>
                    <p className="text-sm text-emerald-700">Requires: {combo.items.join(', ')}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2 py-1 rounded">Ready</span>
                    <i className="fas fa-check-circle text-emerald-500"></i>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Potential Combos */}
        {potentialCombos.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-800">🚧 Potential Combo Spots</h3>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {potentialCombos.length} partially complete
              </span>
            </div>
            
            <div className="space-y-3">
              {potentialCombos.map((combo) => {
                const hasItems = combo.items.filter(item => selectedStructures.includes(item));
                const needsItems = combo.items.filter(item => !selectedStructures.includes(item));
                
                return (
                  <div key={combo.name} className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div>
                      <h4 className="font-medium text-blue-900">{combo.name}</h4>
                      <div className="text-sm space-y-1">
                        <p className="text-green-700">✅ Have: {hasItems.join(', ')}</p>
                        <p className="text-red-700">❌ Need: {needsItems.join(', ')}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                        {hasItems.length}/{combo.items.length}
                      </span>
                      <i className="fas fa-hourglass-half text-blue-500"></i>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
