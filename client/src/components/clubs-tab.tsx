import { clubs } from "@/data/game-data";

export default function ClubsTab() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Clubs Information</h2>
        <p className="text-slate-600">All available clubs and their benefits for student development.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clubs.map((club) => (
          <div key={club.name} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center mb-4">
              <div className={`w-10 h-10 bg-${club.color}-100 rounded-lg flex items-center justify-center mr-3`}>
                <i className={`${club.icon} text-${club.color}-600`}></i>
              </div>
              <h3 className="font-semibold text-slate-800">{club.name}</h3>
            </div>
            <p className="text-sm text-slate-600 mb-4">{club.description}</p>
            <div className="space-y-3">
              <div>
                <span className="text-sm font-medium text-slate-700">Requirements:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {club.requirements.map((req) => (
                    <span 
                      key={req}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-sm font-medium text-slate-700">Benefits:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {club.benefits.map((benefit) => (
                    <span 
                      key={benefit}
                      className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
