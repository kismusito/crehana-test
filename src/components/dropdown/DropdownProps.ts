export type DropdownOption = {
  label: string;
  value: string;
};

export interface DropdownProps extends React.HTMLProps<HTMLSelectElement> {
  label: string;
  options: DropdownOption[];
}
