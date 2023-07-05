import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react'
import styles from './SelectFilters.module.scss'

import Select, { ControlProps, components, GroupBase, OptionsOrGroups, OnChangeValue } from 'react-select'
import clsx from 'clsx'
import { Options } from 'sass';
import { IOption } from '@/data/cities';




interface ISelectFilters {
    options: IOption[]
    title: string
    variant?: 'first' | 'second'
    instanceId: string
    // setValue: Dispatch<SetStateAction<string>>
    handleChange: (event: OnChangeValue<IOption, boolean>) => void
}

const SelectFilters: FC<ISelectFilters> = ({ options, title, variant = 'first', instanceId, handleChange }) => {
    const bg = variant === 'first' ? '!bg-main-bg' : '!bg-white'
    return <div className={styles.select}>
        <Select options={options}
            // components={{ Control({ title: title }) }}

            onChange={handleChange}
            components={{
                Control: ({ children, ...rest }) => (
                    <components.Control {...rest}>
                        <span className='pl-1'>{title}</span>
                        {children}
                    </components.Control>
                )
            }}
            instanceId={instanceId}
            classNames={{
                control: ({ isFocused, menuIsOpen }) =>
                    clsx(bg, '!text-black-inactive',
                        isFocused
                            ? '!shadow-none !border !border-solid !border-black-inactive !rounded-md'
                            : '!border !border-transparent ',
                        menuIsOpen && '!rounded-b-none'
                    ),
                input: () => '!cursor-pointer',
                indicatorsContainer: () => 'cursor-pointer !p-0 !text-black-inactive',
                indicatorSeparator: () => 'hidden',
                valueContainer: () => '!px-0 text-center',
                menu: () =>
                    '!m-0  !rounded-t-none border border-t-0 border-solid border-black-inactive',
                menuList: () => 'cursor-pointer !p-0',
                option: ({ isFocused, isSelected, isDisabled }) =>
                    clsx(
                        isFocused && '!bg-main-bg !text-black',
                        isSelected && !isFocused && '!bg-white !text-black'
                        // isSelected && isFocused && '!bg-secondary !text-white'
                    )
            }}
        /></div>
}

export default SelectFilters
