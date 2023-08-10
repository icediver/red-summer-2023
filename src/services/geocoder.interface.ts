export interface IMetaInfo {
	Timestamp: Date;
	NextPageInformation: string;
}

export interface IMatchQuality {
	Street: number[];
	HouseNumber: number;
}

export interface IDisplayPosition {
	Latitude: number;
	Longitude: number;
}

export interface INavigationPosition {
	Latitude: number;
	Longitude: number;
}

export interface ITopLeft {
	Latitude: number;
	Longitude: number;
}

export interface IBottomRight {
	Latitude: number;
	Longitude: number;
}

export interface IMapView {
	TopLeft: ITopLeft;
	BottomRight: IBottomRight;
}

export interface IAdditionalData {
	value: string;
	key: string;
}

export interface IAddress {
	Label: string;
	Country: string;
	State: string;
	County: string;
	City: string;
	District: string;
	Street: string;
	HouseNumber: string;
	PostalCode: string;
	AdditionalData: IAdditionalData[];
}

export interface ILocation {
	LocationId: string;
	LocationType: string;
	DisplayPosition: IDisplayPosition;
	NavigationPosition: INavigationPosition[];
	MapView: IMapView;
	Address: IAddress;
}

export interface IAddressResult {
	Relevance: number;
	Distance: number;
	MatchLevel: string;
	MatchQuality: IMatchQuality;
	MatchType: string;
	Location: ILocation;
}

export interface IView {
	_type: string;
	ViewId: number;
	Result: IAddressResult[];
}

export interface IResponseGeocoder {
	MetaInfo: IMetaInfo;
	View: IView[];
}

export interface ICoordinates {
	lat: number;
	lng: number;
}

export interface ICityWithCoordinates {
	name: string;
	coordinates: ICoordinates | null;
}

export interface IRouteCoordinates {
	departure: ICityWithCoordinates;
	destination: ICityWithCoordinates;
}
