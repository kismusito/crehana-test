import {  DropdownProps } from "../dropdown/DropdownProps"

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
    filters?: DropdownProps[]
}