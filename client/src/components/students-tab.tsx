import { studentTypes } from "@/data/game-data";

export default function StudentsTab() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Students Reference</h2>
        <p className="text-slate-600">Student types, personality traits, and development guidelines.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Student Types</h3>
          <div className="space-y-4">
            {studentTypes.map((type) => (
              <div key={type.name} className="border border-slate-200 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <div className={`w-8 h-8 bg-${type.color}-100 rounded-lg flex items-center justify-center mr-3`}>
                    <i className={`${type.icon} text-${type.color}-600`}></i>
                  </div>
                  <h4 className="font-medium text-slate-800">{type.name}</h4>
                </div>
                <p className="text-sm text-slate-600 mb-3">{type.description}</p>
                <div className="flex flex-wrap gap-2">
                  {type.traits.map((trait, index) => (
                    <span 
                      key={trait}
                      className={`bg-${index === 0 ? type.color : type.color === 'blue' ? 'green' : 'blue'}-100 text-${index === 0 ? type.color : type.color === 'blue' ? 'green' : 'blue'}-800 text-xs px-2 py-1 rounded`}
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Development Guidelines</h3>
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 mb-2">Academic Development</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Focus on core subjects: Math, Science, English</li>
                <li>• Encourage library usage and study habits</li>
                <li>• Provide advanced courses for gifted students</li>
                <li>• Regular assessments and feedback</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-medium text-red-900 mb-2">Athletic Development</h4>
              <ul className="text-sm text-red-800 space-y-1">
                <li>• Regular physical education classes</li>
                <li>• Sports club participation</li>
                <li>• Proper nutrition and rest</li>
                <li>• Competition opportunities</li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-medium text-purple-900 mb-2">Creative Development</h4>
              <ul className="text-sm text-purple-800 space-y-1">
                <li>• Art and music classes</li>
                <li>• Creative project assignments</li>
                <li>• Art supply access</li>
                <li>• Showcase opportunities</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-medium text-green-900 mb-2">Social Development</h4>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Group activities and teamwork</li>
                <li>• Leadership roles in clubs</li>
                <li>• Community service projects</li>
                <li>• Presentation skills training</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
