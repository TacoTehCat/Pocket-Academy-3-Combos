import { festivals } from "@/data/game-data";

export default function FestivalsTab() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Festivals & Events</h2>
        <p className="text-slate-600">Complete guide to all festivals and special events in Pocket Academy 3.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {festivals.map((festival) => (
          <div key={festival.name} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center mb-4">
              <div className={`w-10 h-10 bg-${festival.color}-100 rounded-lg flex items-center justify-center mr-3`}>
                <i className={`${festival.icon} text-${festival.color}-600`}></i>
              </div>
              <h3 className="font-semibold text-slate-800">{festival.name}</h3>
            </div>
            <p className="text-sm text-slate-600 mb-3">{festival.description}</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Frequency:</span>
                <span className="text-slate-700">{festival.frequency}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Duration:</span>
                <span className="text-slate-700">{festival.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
