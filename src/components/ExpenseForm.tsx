import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "./categories";

const schema = z.object({
    description: z.string().min(3).max(50),
    amount: z
        .number({ invalid_type_error: "Amount is required" })
        .min(0.01)
        .max(100_000),
    category: z.enum(categories, {
        errorMap: () => ({ message: "Category is required" }),
    }),
});

type ExpenseFormData = z.infer<typeof schema>;
interface Props {
    addExpense: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ addExpense }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ExpenseFormData>({
        resolver: zodResolver(schema),
    });

    return (
        <>
            <h4 className="mb-3 text-primary">New expense:</h4>
            <form
                onSubmit={handleSubmit((data) => {
                    addExpense(data);
                    reset();
                })}
            >
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
                    {errors.description && (
                        <p className="text-danger">
                            {errors.description.message}
                        </p>
                    )}
                </div>

                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">
                        Amount
                    </label>
                    <input
                        {...register("amount", { valueAsNumber: true })}
                        type="number"
                        className="form-control"
                        id="amount"
                    />
                    {errors.amount && (
                        <p className="text-danger">{errors.amount.message}</p>
                    )}
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
                        <option></option>
                        {categories.map((item) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                    {errors.category && (
                        <p className="text-danger">{errors.category.message}</p>
                    )}
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </>
    );
};

export default ExpenseForm;
