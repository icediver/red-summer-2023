import { IOption, IShipmentData } from "@/data/cities";

export function getArivalDate(data: IShipmentData[]) {
    const dates = data.map(el => el["Arrival date"].split(',')[0])
    return [...new Set(dates)]
}

export function getSelectOptions(data: string[]): IOption[] {
    return data.map(el => ({
        value: el, label: el
    }))
}

export function sortShipmentData(data: IShipmentData[], sortBy: IOption) {
    return data.sort((a, b) => a[sortBy.value] - b[sortBy.value])
}
