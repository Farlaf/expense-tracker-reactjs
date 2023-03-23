import { FieldValues, useForm } from "react-hook-form";

interface Props {
    categories: string[];
    addExpense: () => void;
}

type FormValues = {
    description: string;
    amount: number;
    category: string;
};

const ExpenseForm = ({ categories, addExpense }: Props) => {
    const { register, handleSubmit } = useForm<FormValues>();

    return (
        <form onSubmit={handleSubmit(addExpense)}>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">
                    Description
                </label>
                <input
                    {...register("description")}
                    type="text"
                    className="form-control"
                    id="description"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="amount" className="form-label">
                    Amount
                </label>
                <input
                    {...register("amount")}
                    type="number"
                    className="form-control"
                    id="amount"
                />
            </div>

            <div className="mb-3">
                <label htmlFor="category" className="form-label">
                    Category
                </label>
                <select
                    {...register("category")}
                    className="form-select"
                    id="category"
                >
                    {categories.map((item) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>

            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
};

export default ExpenseForm;
