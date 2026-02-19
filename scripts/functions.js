export function coordinateToMapPosition(coordinate) {
    const rotated = rotateCoordinates([[coordinate[0], coordinate[1]]], -90)[0];
    const mirrored = [rotated[0], -rotated[1]];
    return [
        (mirrored[0] / 2.5) - 109, // y
        (mirrored[1] / 2.5) - 53   // x
    ]
}

export function rotateCoordinates(coords, angleDegrees) {
    const angle = angleDegrees * Math.PI / 180;
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);
    return coords.map(([x, y]) => [
        x * cosA - y * sinA,
        x * sinA + y * cosA
    ]);
}