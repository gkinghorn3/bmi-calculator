export default function UnitSelect({setSelectedOption, selectedUnits}) {
  return (
    <div id="unit-select" className="flex">
      <div className="w-[50%] flex justify-start gap-4">
        <input
          name="unit-select"
          id="metric"
          type="radio"
          className="w-10"
          checked={selectedUnits === 'metric'}
          onChange={() => setSelectedOption("metric")}
        />
        <label htmlFor="metric" className="text-gunmental font-bold">
          Metric
        </label>
      </div>
      <div className="w-[50%] flex justify-start gap-4">
        <input
          name="unit-select"
          id="imperial"
          type="radio"
          className="w-10"
          checked={selectedUnits === 'imperial'}
          onChange={() => setSelectedOption("imperial")}
        />
        <label htmlFor="imperial" className="text-gunmental font-bold">
          Imperial
        </label>
      </div>
    </div>
  );
}
