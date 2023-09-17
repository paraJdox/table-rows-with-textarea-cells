import { Dispatch, SetStateAction, useEffect, useRef } from "react";

export type TableRowCell = {
  id: number;
  colId: number; // the column which this cell belongs to
  text: string;
};

type DynamicCellTextAreaProps = {
  currentRow: TableRowCell;
  height: string;
  setHeight: Dispatch<SetStateAction<string>>;
};

const DynamicCellTextArea = (props: DynamicCellTextAreaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current === null) {
      return;
    }

    textareaRef.current.style.minWidth = "100%";
    textareaRef.current.style.minHeight = "100%";
    textareaRef.current.style.height = props.height;

    const mutationObserver = new MutationObserver(() => {
      // set the height here so that child components (on the same row)
      // can have a shared height style (on state)
      props.setHeight(textareaRef.current?.style.height as string);
    });

    mutationObserver.observe(textareaRef.current, {
      attributes: true,
      attributeFilter: ["style"],
    });
  }, [props]);

  return (
    <td className="h-px border border-red-400 overflow">
      <div className="flex w-full h-full">
        <textarea
          ref={textareaRef}
          rows={1}
          className="w-full px-3 py-2 bg-red-500 resize"
        />
      </div>
    </td>
  );
};

export default DynamicCellTextArea;
