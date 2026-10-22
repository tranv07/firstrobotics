# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- Client dev: `cd client && npm run dev` (Vite, port 5173)
- Server dev: `cd server && npm run dev` (nodemon + tsx)
- Server build: `npm run build` (tsc)

## Architecture
- `client/`: React + TypeScript + Vite frontend
- `server/`: Express + TypeScript + Mongoose + Zod + Swagger (`/api-docs`)
- Layers: routes -> controllers -> models (Mongoose) + schemas (Zod validation)
- Swagger docs generated from JSDoc comments in routes/controllers via `swagger-jsdoc`
