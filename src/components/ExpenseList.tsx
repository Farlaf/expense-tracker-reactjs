interface Expense {
    description: string;
    amount: number;
    category: string;
    show: boolean;
}

interface Props {
    items: Expense[];
    onDelete: (description: string) => void;
}

const ExpenseList = ({ items, onDelete }: Props) => {
    if (items.length === 0) return null;

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Category</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(
                        (item) =>
                            item.show && (
                                <tr key={item.description}>
                                    <th scope="row">{item.description}</th>
                                    <td>${item.amount}.00</td>
                                    <td>{item.category}</td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-outline-danger"
                                            onClick={() =>
                                                onDelete(item.description)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                    )}

                    <tr>
                        <th scope="row">Total</th>
                        <td colSpan={3}>
                            $
                            {items
                                .reduce(
                                    (summ, item) =>
                                        item.show ? summ + item.amount : summ,
                                    0
                                )
                                .toFixed(2)}
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default ExpenseList;
