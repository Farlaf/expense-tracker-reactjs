interface Props {
    categories: string[];
    onChange: (category: string) => void;
}

const ExpenseFilter = ({ categories, onChange }: Props) => {
    return (
        <div className="form-floating">
            <select
                className="form-select"
                id="floatingSelect"
                aria-label="Choose categories"
                defaultValue=""
                onChange={(e) => onChange(e.target.value)}
            >
                <option value="">All Categories</option>
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
