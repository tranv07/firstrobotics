# FIRST Management Platform

A modern React-based platform for managing any FIRST robotics competitions. This application provides tools to track teams, manage matches, organize schedules, and monitor robot performance across multiple competitions.

This platform was inspired by the FIRST robotics competitions.

## Features

### Team Management
- Create and manage team profiles (name, country, number, mentors)
- Track team registration status
- Monitor team progress and competition participation

### Competition Tracking
- Schedule and manage match formats
- Track standings, scores, and rankings
- Record match results and statistics
- Support for both league and tournament formats

### Score Management
- Real-time score tracking during matches
- Automated score calculation and analysis
- Historical performance data and analytics
- Leaderboard generation

### Resource Organization
- Competition rules and game manuals
- Robot build specifications and documentation
- Programming resources and API documentation
- Historical game archives

### Analytics & Reporting
- Team performance analytics
- Statistics and trends visualization
- Report generation for tournament organizers
- Data export functionality

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **State Management**: Redux Toolkit (RTK Query for server state)
- **Styling**: Bootstrap 5 with react-bootstrap
- **Routing**: React Router
- **Backend**: Node.js with Express and TypeScript
- **Database**: MongoDB, run locally via Docker
- **Validation**: Zod

## Repository Layout

The backend and frontend are separate packages with their own dependencies:

```
firstrobotics/
├── src/              # Express API server (Node + TypeScript)
├── client/           # React frontend (Vite)
├── shared/           # TypeScript types shared by both
└── docker-compose.yml # MongoDB for local development
```

## Competition Rulesets

Competition types are pluggable. Each ruleset defines its own match format, scoring fields, and ranking criteria, and is served to the frontend by the API — so adding a competition type does not require changing the frontend.

## Installation

### Prerequisites
- Node.js 22+ and npm
- Docker Desktop (running)
- Git

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/tranv07/firstrobotics.git
   cd firstrobotics
   ```

2. **Start MongoDB**
   ```bash
   docker compose up -d
   ```
   This starts a MongoDB container listening on port 27017. Its data is kept in a named volume, so it survives restarts.

   To stop it, keeping the data:
   ```bash
   docker compose down
   ```
   To stop it and delete the data:
   ```bash
   docker compose down -v
   ```

3. **Install dependencies**
   ```bash
   npm install
   npm install --prefix client
   ```

4. **Start the development servers**
   ```bash
   npm run dev
   ```
   This runs the API and the frontend together. Use `npm run dev:server` or `npm run dev:client` to run only one of them.

5. **Build for production**
   ```bash
   npm run build
   ```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application. The API runs on [http://localhost:4000](http://localhost:4000).

## Resources

### FIRST Tech Challenge
- [Official FTC Website](https://www.firstinspires.org/robotics/ftc)
- [FIRST Tech Challenge Rules & Manual](https://www.firstinspires.org/sites/default/files/uploadedFiles/FIRST/TechChallenge/FTC-Competition-Game-2024-2025-Season.pdf)
- [FTC Robot Programming Docs](https://ftc-docs.firstinspires.org/)

### FIRST Global
- [FIRST Global Official Website](https://www.firstfounders.org/)
- [FIRST Global Championship Information](https://www.firstglobal.org/)

### Additional Resources
- [FTC Java Documentation](https://ftc-docs.firstinspires.org/en/latest/start/java-api-reference/index.html)
- [FIRST CANOPY Ecosystem](https://www.firstinspires.org/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Authors

- **tranv07** - *Initial work* - [GitHub Profile](https://github.com/tranv07)

---

**Note**: This is an educational project for managing robotics competitions. All trademarks, logos, and brand names belong to FIRST and are used for informational purposes only.
