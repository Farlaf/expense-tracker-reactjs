import categories from "./categories";
interface Props {
    title: string;
    onChange: (category: string) => void;
}

const ExpenseFilter = ({ title, onChange }: Props) => {
    return (
        <div className="form-floating mb-3">
            <select
                className="form-select"
                id="floatingSelect"
                aria-label="Choose categories"
                defaultValue=""
                onChange={(e) => onChange(e.target.value)}
            >
                <option value="">{title}</option>
                {categories.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
            <label htmlFor="floatingSelect">Choose categories</label>
        </div>
    );
};

export default ExpenseFilter;
