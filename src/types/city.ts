export type Point = {
    latitude: number;
    longitude: number;
}

export type City = {
    name: string;
    point: Point;
    zoom: number;
}
