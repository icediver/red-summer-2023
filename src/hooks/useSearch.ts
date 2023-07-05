import { useQuery } from "@tanstack/react-query"
import { ChangeEvent, useEffect, useMemo, useState } from "react"
import { useDebounce } from "./useDebounce"
import { TrackingService } from "@/services/tracking.service"
import { OnChangeValue } from "react-select"
import { IOption } from "@/data/cities"

export const useSearch = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [city, setCity] = useState('')
    const [department, setDepartment] = useState('')
    const searchParam = useMemo(() => ({
        searchTerm, city, department

    }), [searchTerm, city, department])

    const debouncedSearch = useDebounce(searchParam, 500)


    const { isSuccess, data } = useQuery(['search tracking', debouncedSearch],
        () => TrackingService.getAll(debouncedSearch))

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    const handleChangeCity = (newValue: OnChangeValue<IOption, boolean>) => {
        setCity((newValue as IOption).value)
    }

    const handleChangeDepartment = (newValue: OnChangeValue<IOption, boolean>) => {
        setDepartment((newValue as IOption).value)
    }

    return { isSuccess, handleSearch, handleChangeCity, handleChangeDepartment, data, searchTerm }
}
