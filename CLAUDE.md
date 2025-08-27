# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `pnpm dev`
- **Build project**: `pnpm build` (runs TypeScript compilation followed by Vite build)
- **Lint code**: `pnpm lint` (uses ESLint)
- **Preview production build**: `pnpm preview`
- **Format code**: Use Biome for formatting (`biome format`)

## Project Architecture

This is a React + TypeScript + Vite project that creates a 3D CAD application using OpenCascade.js for geometric modeling.

### Core Technologies

- **Frontend**: React 19 with TypeScript
- **Build tool**: Vite with custom configuration for WASM support
- **Styling**: TailwindCSS
- **3D Visualization**: Google Model Viewer for displaying GLB files
- **CAD Engine**: OpenCascade.js (JavaScript bindings for OpenCascade)

### Key Architecture Components

1. **WASM Integration**: Uses a custom `light.wasm` file instead of the full OpenCascade WASM bundle for performance
2. **Shape Creation & Boolean Operations**: Core CAD functionality in `src/App.tsx` demonstrates creating primitives (box, sphere) and performing boolean operations (cut)
3. **Visualization Pipeline**: `src/visualise.ts` handles converting OpenCascade shapes to GLB format for web display
4. **OpenCascade Loader**: `src/occt.ts` manages loading the WASM module with proper locateFile configuration

### File Structure

- `src/App.tsx` - Main application component with 3D model creation and display
- `src/occt.ts` - OpenCascade.js loading wrapper
- `src/visualise.ts` - Shape-to-GLB conversion utilities
- `src/main.tsx` - React application entry point
- `public/light.wasm` - Custom OpenCascade WASM binary

### Development Notes

- The project uses Biome for code formatting (tab indentation, double quotes)
- Vite configuration excludes OpenCascade modules from optimization
- Custom WASM file is used instead of the standard OpenCascade bundle
- Model Viewer requires `@ts-ignore` due to web component TypeScript limitations