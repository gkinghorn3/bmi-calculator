export default function Input() {
  return (
    <>
      <div className="flex flex-col w-[50%]">
        <label className="text-bodyClr mb-2">Height</label>
        <div className="relative">
          <input
            type="number"
            className="border border-black/50 rounded-md h-12 w-full"
          />
          <h3 className="absolute top-[50%] right-4 transform translate-y-[-50%] text-mainBlue font-bold text-2xl">cm</h3>
        </div>
      </div>
      <div className="flex flex-col w-[50%]">
        <label>weight</label>
        <input type="number" />
      </div>
    </>
  );
}
