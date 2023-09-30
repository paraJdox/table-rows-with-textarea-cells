import TableRow from "./TableRow";

// const table = {
//   id: 1,
//   cols: [
//     { id: 1, text: "header1" },
//     { id: 2, text: "header2" },
//     { id: 3, text: "header3" },
//   ],
//   rows: [
//     {
//       id: 1,
//       cells: [
//         { id: 1, colId: 1, text: "row val 1" },
//         { id: 2, colId: 2, text: "row val 2" },
//         { id: 3, colId: 3, text: "row val 3" },
//       ],
//     },
//     {
//       id: 2,
//       cells: [
//         { id: 4, colId: 1, text: "row val 1" },
//         { id: 5, colId: 2, text: "row val 2" },
//         { id: 6, colId: 3, text: "row val 3" },
//       ],
//     },
//   ],
// };

const table = {
  id: 1,
  cols: [
    { id: 1, text: "header1" },
    { id: 2, text: "header2" },
    { id: 3, text: "header3" },
    { id: 4, text: "header4" },
    { id: 5, text: "header5" },
    { id: 6, text: "header6" },
    { id: 7, text: "header7" },
  ],
  rows: [
    {
      id: 1,
      cells: [
        { id: 1, colId: 1, text: "row val 1" },
        { id: 2, colId: 2, text: "row val 2" },
        { id: 3, colId: 3, text: "row val 3" },
        { id: 4, colId: 4, text: "row val 4" },
        { id: 5, colId: 5, text: "row val 5" },
        { id: 6, colId: 6, text: "row val 6" },
        { id: 7, colId: 7, text: "row val 7" },
      ],
    },
    {
      id: 2,
      cells: [
        { id: 1, colId: 1, text: "row val 1" },
        { id: 2, colId: 2, text: "row val 2" },
        { id: 3, colId: 3, text: "row val 3" },
        { id: 4, colId: 4, text: "row val 4" },
        { id: 5, colId: 5, text: "row val 5" },
        { id: 6, colId: 6, text: "row val 6" },
        { id: 7, colId: 7, text: "row val 7" },
      ],
    },
  ],
};

function App() {
  return (
    <div className="grid h-screen place-items-center">
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
            <TableRow key={row.id} currentRow={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
