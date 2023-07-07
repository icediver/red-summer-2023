import { IOption, IShipmentData } from "@/data/cities";

export function getArivalDate(data: IShipmentData[]) {
    const dates = data.map(el => el["Arrival date"].split(',')[0])
    return [...new Set(dates)]
}

export function getSortKeys(data: IShipmentData[]) {
    if (!data.length) return []
    return Object.keys(data[0])
}

export function getSelectOptions(data: string[]): IOption[] {
    return data.map(el => ({
        value: el, label: el
    }))
}

export function sortShipmentData(data: IShipmentData[], sortBy: IOption) {
    if (!sortBy) {
        return data
    }
    if (!data) return []
    return data.sort((a, b) => a[sortBy.value as keyof IShipmentData].localeCompare(b[sortBy.value as keyof IShipmentData]))
}

export function sortArrival(data: IShipmentData[]) {
    let newData: IShipmentData[] = [...data]


    function sortData(this: any, sortBy: IOption) {
        if (!sortBy) newData = [...data]
        else newData = [...newData.sort((a, b) => a[sortBy.value as keyof IShipmentData].localeCompare(b[sortBy.value as keyof IShipmentData]))]
        return this
    }
    function refresh(this: any) {
        newData = [...data]
        return this
    }
    function print(this: any) {
        console.log(newData)
        return this
    }

    return { sortData, refresh, newData, print }
}
