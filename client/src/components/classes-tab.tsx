import { specialClasses } from "@/data/game-data";

export default function ClassesTab() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Special Classes</h2>
        <p className="text-slate-600">Advanced courses and specialized programs available to students.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specialClasses.map((classItem) => (
          <div key={classItem.name} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center mb-4">
              <div className={`w-10 h-10 bg-${classItem.color}-100 rounded-lg flex items-center justify-center mr-3`}>
                <i className={`${classItem.icon} text-${classItem.color}-600`}></i>
              </div>
              <h3 className="font-semibold text-slate-800">{classItem.name}</h3>
            </div>
            <p className="text-sm text-slate-600 mb-4">{classItem.description}</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Duration:</span>
                <span className="text-slate-700">{classItem.duration}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Prerequisites:</span>
                <span className="text-slate-700">{classItem.prerequisites}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Stat Boost:</span>
                <span className="text-green-600 font-medium">{classItem.statBoost}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
