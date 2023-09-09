import DynamicCellTextArea, { TableRowCell } from "./DynamicCellTextArea";

type TableRow = {
  id: number;
  cells: TableRowCell[];
};

type TableRowProps = {
  currentRow: TableRow;
};

const TableRow = (props: TableRowProps) => {
  return (
    <tr>
      {props.currentRow.cells.map((rowValue) => (
        <DynamicCellTextArea key={rowValue.id} />
      ))}
    </tr>
  );
};

export default TableRow;
