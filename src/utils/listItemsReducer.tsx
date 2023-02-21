import type { LabelledValue } from "../types";

const listItemsReducer = <T extends object>(items: T[], labelKey: keyof T, valueKey: keyof T) => {
  return items.map((item) => {
    const label = item[labelKey];
    const value = item[valueKey];
    return { label, value } as LabelledValue<typeof value>;
  });
};

export default listItemsReducer;
