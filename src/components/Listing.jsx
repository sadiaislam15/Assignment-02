import Income_list from "./Income_list";
import Expense_list from "./Expense_list";

export default function Listing() {
    return (
        <div class="mx-auto my-8 grid max-w-4xl grid-cols-1 gap-8 px-5 text-sm md:grid-cols-2">

        {/*  Income_list*/}
        < Income_list/>
         
        {/* Expense_list */}
        <Expense_list/>
    </div>
    );
}