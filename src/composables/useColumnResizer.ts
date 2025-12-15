import { ref, type Ref } from "vue";

export type Column = {
  id: string;
  widthPx: number;
};

export type RowState = {
  columns: Column[]; // length >= 1
  gaps: number[]; // gaps.length === columns.length - 1, each gap in px
};

type ResizeSession = {
  pointerStartX: number;
  initialCols: Column[];
  initialGaps: number[];
  resizerIndex: number;
  containerWidth: number;
};

export function useColumnResize(
  row: Ref<RowState>,
  options?: { minColumnWidth?: number; maxGap?: number }
) {
  const minColumnWidth = options?.minColumnWidth ?? 40; // configurable
  const maxGap = options?.maxGap ?? 100;

  const session = ref<ResizeSession | null>(null);

  function startResize(
    e: PointerEvent,
    resizerIndex: number,
    containerWidth: number
  ) {
    (e.target as Element).setPointerCapture?.((e as PointerEvent).pointerId);
    session.value = {
      pointerStartX: e.clientX,
      initialCols: row.value.columns.map((c) => ({ ...c })),
      initialGaps: [...row.value.gaps],
      resizerIndex,
      containerWidth,
    };
  }

  function endResize() {
    if (!session.value) return;
    // release pointer capture if needed
    session.value = null;
  }

  function onPointerMove(event: PointerEvent) {
    if (!session.value) return;
    const dx = event.clientX - session.value.pointerStartX;

    const idx = session.value.resizerIndex;

    // 1) compute gap clamped change for the dragged gap
    const initialGap = session.value.initialGaps[idx] ?? 0;
    const desiredGap = clamp(initialGap + dx, 0, maxGap);
    const gapDelta = desiredGap - initialGap;

    // 2) remaining dx after gap change applies to columns
    const remainingDx = dx - gapDelta;

    // 3) compute columns totals
    const initialCols = session.value.initialCols;
    const initialColsTotal = initialCols.reduce((s, c) => s + c.widthPx, 0);

    // 4) the desired new total for columns:
    let newColsTotal = initialColsTotal + remainingDx;

    // 5) min total columns width (to enforce minColumnWidth)
    const minTotal = initialCols.reduce(
      (s) => s + Math.max(minColumnWidth, 0),
      0
    );

    // clamp newColsTotal so that columns don't go below min widths
    if (newColsTotal < minTotal) {
      newColsTotal = minTotal;
    }

    // 6) scale factor to apply proportionally
    const scaleFactor = newColsTotal / initialColsTotal;

    // 7) build new columns but enforce min width per column
    const newColumns = initialCols.map((c) => {
      const w = Math.max(minColumnWidth, Math.round(c.widthPx * scaleFactor));
      return { ...c, widthPx: w };
    });

    // 8) if rounding / min constraints cause mismatch in total, adjust last column
    const adjustedTotal = newColumns.reduce((s, c) => s + c.widthPx, 0);
    const diff = Math.round(newColsTotal - adjustedTotal);
    if (diff !== 0) {
      // apply residual diff to the last column (safest)
    //   const lastIdx = newColumns.length - 1;

    //   newColumns[lastIdx].widthPx = newColumns?.[lastIdx] && Math.max(
    //     minColumnWidth,
    //     newColumns[lastIdx].widthPx + diff
    //   );
    }

    // 9) write back to reactive row (atomic update)
    row.value.columns = newColumns;
    row.value.gaps = [...session.value.initialGaps];
    row.value.gaps[idx] = Math.round(desiredGap);
  }

  return {
    startResize,
    onPointerMove,
    endResize,
    minColumnWidth,
    maxGap,
  };
}

function clamp(v: number, a: number, b: number) {
  return Math.min(Math.max(v, a), b);
}
