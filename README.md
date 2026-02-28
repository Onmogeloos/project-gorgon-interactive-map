<div align="center">
  <img src="./src/assets/images/logo.png" alt="Project Gorgon Interactive Map Logo" width="200" />
  <h1>Project Gorgon Interactive Map</h1>
</div>

## Context

[pg-map.com](https://pg-map.com/) is a static, backend-less web application that provides interactive maps for the MMORPG **[Project Gorgon](https://store.steampowered.com/app/342940/Project_Gorgon/)**. It features comprehensive layouts of game zones and dungeons, enabling users to explore the game world easily.

Key features include:
- Interactive map areas with links to other maps and relevant wiki pages.
- Clear visual distinctions between above-ground zones and underground dungeons.

## Toolchain

This project leverages a modern web development stack:

- **Framework**: [React 19](https://react.dev/) via [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Mapping**: [Leaflet](https://leafletjs.com/) and [React-Leaflet](https://react-leaflet.js.org/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Styling & UI Components**: [Material UI (MUI v7)](https://mui.com/) and [Styled Components](https://styled-components.com/)
- **Testing**: [Playwright](https://playwright.dev/) for End-to-End (e2e) tests
- **Package Manager**: [Yarn](https://yarnpkg.com/)

## Running Locally

To get the project running on your local machine, follow these steps:

1. **Install dependencies**:
   ```bash
   yarn install
   ```

2. **Start the development server**:
   ```bash
   yarn dev
   ```
   The application will be available at `http://localhost:5173` (or the port specified by Vite).

### Additional Commands

- `yarn build`: Builds the static application for production.
- `yarn preview`: Previews the production build locally.
- `yarn test`: Runs the Playwright UI tests with the Playwright UI.
- `yarn eslint`: Runs the ESLint linter over the codebase.

## Adding New Maps and Markers

### Adding a New Map

1. Add your map image file to `src/assets/areas/`.
2. Create a new directory for your map under `src/data/areas/` (e.g., `src/data/areas/newmap/`).
3. Create a data file for the map, such as `NewMapData.ts`, and define its properties:
   ```typescript
   import { Area, MapData, MarkerType } from "@localtypes/Map";

   const data: MapData = {
       name: "New Map Name",
       slug: "newmap",
       description: "A description of the map.",
       group: Area.NewMapEnum, // Make sure to add this to the Area enum in types
       imageUrl: (await import("@assets/areas/Map_AreaNewMap.png")).default,
       markers: []
   };

   export default data;
   ```
4. Register the new map in `src/data/Mapdata.tsx` by importing the data file and adding it to the `loadMapData` return object.

### Adding a New Marker

To add a new marker (NPC, Boss, Teleport Pad, Resource, etc.) to an existing map:

1. Locate the specific map's data file in `src/data/areas/` (e.g., `src/data/areas/anagoge/AnagogeIslandData.ts`).
2. Add a new object to the `markers` array:
   ```typescript
   {
       name: "NPC Name or Object Name",
       positions: [[y, x]], // The map coordinates for the marker
       type: MarkerType.NPC // Choose the appropriate type from the MarkerType enum
   }
   ```
3. Save the file. The Vite dev server will automatically reload, and the new marker will be visible on the map.