import Available_budget from "./Available_budget";
import Income from "./Income";
import Expense from "./Expense";

export default function Budget() {
  return (
    <div className="mx-auto max-w-sm px-5 py-8 text-center text-white">
      {/* Available_budget */}
      <Available_budget/>
        
      {/* Income */}
      <Income />

      {/* Expense */}
      <Expense />

    </div>
  );
}
