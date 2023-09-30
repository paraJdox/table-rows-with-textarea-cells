import { Dispatch, SetStateAction, useEffect, useRef } from "react";

export const DEFAULT_TEXT_AREA_HEIGHT = "100%";

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
    const mutationObserver = new MutationObserver(() => {
      if (textareaRef.current === null) {
        return;
      }

      const currentTextAreaHeight: number = Number(
        textareaRef.current.style.height.replace(/[^\d.-]/g, "")
      );

      const sharedStateHeight: number = Number(
        props.height.replace(/[^\d.-]/g, "")
      );

      // only set the 'shared height state' when the text area's height (style attribute)
      // is decreasing, because when the text area's height (style attribute) increases
      // all of the textareas will automatically expand anyway
      if (currentTextAreaHeight <= sharedStateHeight) {
        // set the shared height here so that DynamicCellTextArea components (on the same row)
        // can have a shared height style (on state)
        props.setHeight(textareaRef.current?.style.height as string);
      }
    });

    if (textareaRef.current !== null) {
      // to avoid having a small textarea for this component
      if (props.height === DEFAULT_TEXT_AREA_HEIGHT) {
        props.setHeight(
          textareaRef?.current?.getBoundingClientRect().height + "px"
        );
      }

      textareaRef.current.style.height = props.height;

      mutationObserver.observe(textareaRef?.current, {
        attributes: true,
        attributeFilter: ["style"],
      });
    }
  }, [props]);

  /**
   * This will set the initial shared height value for all of the
   * {@link DynamicCellTextArea} components when onMouseUp is executed.
   */
  const initialTextAreaStateValue = () => {
    props.setHeight(textareaRef.current?.style.height as string);
  };

  return (
    <td className="h-px border border-red-400 overflow">
      <div className="flex w-full h-full">
        <textarea
          ref={textareaRef}
          rows={1}
          className="w-full px-3 py-2 bg-red-500 resize min-w-full min-h-full"
          placeholder="NULL"
          onMouseUp={initialTextAreaStateValue}
        />
      </div>
    </td>
  );
};

export default DynamicCellTextArea;
