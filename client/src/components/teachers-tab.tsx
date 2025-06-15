import { teachers } from "@/data/game-data";

export default function TeachersTab() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Teachers Database</h2>
        <p className="text-slate-600">Complete roster of teachers and their specializations.</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="text-left py-3 px-6 text-sm font-medium text-slate-700">Name</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-slate-700">Subject</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-slate-700">Stat Total</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-slate-700">Unlock Condition</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-slate-700">Salary</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {teachers.map((teacher) => (
                <tr key={teacher.name} className="hover:bg-slate-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 bg-${teacher.color}-100 rounded-full flex items-center justify-center mr-3`}>
                        <span className={`text-${teacher.color}-600 text-sm font-medium`}>{teacher.initials}</span>
                      </div>
                      <span className="text-sm font-medium text-slate-800">{teacher.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-slate-600">{teacher.subject}</td>
                  <td className="py-4 px-6">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                      {teacher.level}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-slate-600">{teacher.specialty}</td>
                  <td className="py-4 px-6 text-sm text-slate-600">{teacher.salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
