import React from 'react';

interface ProgressChartProps {
  chaptersCompleted: number;
}

const ProgressChart: React.FC<ProgressChartProps> = ({ chaptersCompleted }) => {
  // Espaço reservado simples para um gráfico de progresso
  // Em um aplicativo real, você pode usar uma biblioteca como Chart.js ou recharts
  const totalChapters = 1189; // Total de capítulos da Bíblia
  const percentComplete = (chaptersCompleted / totalChapters) * 100;

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm text-neutral-600">Progresso Geral da Bíblia</span>
        <span className="text-sm font-medium text-secondary-700">
          {chaptersCompleted} / {totalChapters} capítulos ({percentComplete.toFixed(1)}%)
        </span>
      </div>
      <div className="w-full bg-neutral-200 rounded-full h-4">
        <div
          className="bg-gradient-to-r from-primary-500 to-secondary-500 h-4 rounded-full"
          style={{ width: `${percentComplete}%` }}
        ></div>
      </div>

      <div className="mt-8 grid grid-cols-5 gap-2">
        {['Old Testament', 'Gospels', 'Acts', 'Epistles', 'Revelation'].map((section, index) => (
          <div key={index} className="text-center">
            <div className="w-full bg-neutral-200 rounded-full h-2 mb-1">
              <div
                className={`bg-${['primary', 'secondary', 'accent', 'success', 'warning'][index]}-500 h-2 rounded-full`}
                style={{ width: `${Math.random() * 100}%` }}
              ></div>
            </div>
            <span className="text-xs text-neutral-600">{section}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressChart;