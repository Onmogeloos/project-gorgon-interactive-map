import fs from "fs";
import {coordinateToMapPosition} from "./functions.js";

const data = fs.readFileSync("scripts/serbule.csv", "utf-8");
const lines = data.split("\n");

let objects = [];
for (const line of lines) {
        const [name, type, _, x, y, z] = line.split(",").map((s) => s.trim().replaceAll('"', ""));
        if (!name || !type || !x || !z || !parseFloat(x) || !parseFloat(z)) continue;
        objects.push({
                name,
                type,
                position: [coordinateToMapPosition([
                        parseFloat(x)
                        // /2.7
                        ,
                        parseFloat(z)
                        // /2.9
                ])]
        });
}

function createCodeObject(obj) {
        return `{ name: "${obj.name}", type: MarkerType.Enemy, position: [[${obj.position[0][0]}, ${obj.position[0][1]}]] },`
}

const code = objects.map(createCodeObject).join("\n")

fs.writeFileSync("scripts/objects.json", code);