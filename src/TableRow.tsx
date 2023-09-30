import { useState } from "react";
import DynamicCellTextArea, {
  DEFAULT_TEXT_AREA_HEIGHT,
  TableRowCell,
} from "./DynamicCellTextArea";

type TableRow = {
  id: number;
  cells: TableRowCell[];
};

type TableRowProps = {
  currentRow: TableRow;
};

const TableRow = (props: TableRowProps) => {
  const [textAreaHeight, setTextAreaHeight] = useState<string>(
    DEFAULT_TEXT_AREA_HEIGHT
  );

  return (
    <tr>
      {props.currentRow.cells.map((rowValue) => (
        <DynamicCellTextArea
          key={rowValue.id}
          currentRow={rowValue}
          height={textAreaHeight}
          setHeight={setTextAreaHeight}
        />
      ))}
    </tr>
  );
};

export default TableRow;
