import { careers } from "@/data/game-data";

export default function CareersTab() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Career Paths</h2>
        <p className="text-slate-600">Explore different career options available to students after graduation.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {careers.map((career) => (
          <div key={career.title} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center mb-4">
              <div className={`w-10 h-10 bg-${career.color}-100 rounded-lg flex items-center justify-center mr-3`}>
                <i className={`${career.icon} text-${career.color}-600`}></i>
              </div>
              <h3 className="font-semibold text-slate-800">{career.title}</h3>
            </div>
            <p className="text-sm text-slate-600 mb-4">{career.description}</p>
            <div className="space-y-3">
              <div>
                <span className="text-sm font-medium text-slate-700">Required Stats:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {career.requirements.map((req) => (
                    <span 
                      key={req.stat}
                      className={`bg-${career.color}-100 text-${career.color}-800 text-xs px-2 py-1 rounded`}
                    >
                      {req.stat}: {req.value}+
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-sm font-medium text-slate-700">Salary Range:</span>
                <span className="text-sm text-slate-600 ml-2">{career.salary}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
