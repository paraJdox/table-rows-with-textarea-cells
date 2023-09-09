import { useEffect, useRef } from "react";

type TableRowCell = {
  id: number;
  colId: number; // the column which this cell belongs to
  text: string;
};

type DynamicCellTextAreaProps = {
  currentCell: TableRowCell;
};

const DynamicCellTextArea = (props: DynamicCellTextAreaProps) => {
  console.log(props.currentCell);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const textareaWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textareaWrapperRef.current === null || textareaRef.current === null) {
      return;
    }

    const textareaElementObserver = new ResizeObserver(() => {
      if (textareaRef.current === null || textareaWrapperRef.current === null) {
        return;
      }

      if (
        textareaWrapperRef.current.getBoundingClientRect().width >
        textareaRef.current.getBoundingClientRect().width
      ) {
        textareaRef.current.style.minWidth = "100%";
      }

      if (
        textareaWrapperRef.current.getBoundingClientRect().height >
        textareaRef.current.getBoundingClientRect().height
      ) {
        textareaRef.current.style.minHeight = "100%";
      }
    });

    textareaElementObserver.observe(textareaRef.current);
    textareaElementObserver.observe(textareaWrapperRef.current);
  }, []);

  return (
    <td className="border border-red-400 h-px overflow">
      <div ref={textareaWrapperRef} className="flex w-full h-full">
        <textarea
          ref={textareaRef}
          rows={1}
          className="w-full resize bg-red-500 py-2 px-3"
        />
      </div>
    </td>
  );
};

export default DynamicCellTextArea;
