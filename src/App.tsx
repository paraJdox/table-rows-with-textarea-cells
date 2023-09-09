import DynamicCellTextArea from "./DynamicCellTextArea";

const table = {
  id: 1,
  cols: [
    { id: 1, text: "header1" },
    { id: 2, text: "header2" },
    { id: 3, text: "header3" },
  ],
  rows: [
    {
      id: 1,
      values: [
        { id: 1, text: "row val 1", colId: 1 },
        { id: 2, text: "row val 2", colId: 2 },
        { id: 3, text: "row val 3", colId: 3 },
      ],
    },
    {
      id: 2,
      values: [
        { id: 4, text: "row val 1", colId: 1 },
        { id: 5, text: "row val 2", colId: 2 },
        { id: 6, text: "row val 3", colId: 3 },
      ],
    },
  ],
};

function App() {
  return (
    <div className="h-screen place-items-center grid">
      <table>
        <thead>
          <tr>
            {table.cols.map((col) => (
              <td key={col.id} className="p-3 border border-red-400">
                {col.text}
              </td>
            ))}
          </tr>
        </thead>

        <tbody>
          {table.rows.map((row) => (
            <tr key={row.id}>
              {row.values.map((rowValue) => (
                <DynamicCellTextArea key={rowValue.id} currentCell={rowValue} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
