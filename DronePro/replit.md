# DroneMarket - Marketplace per Piloti di Droni

## Overview

DroneMarket is a web marketplace that connects clients with professional drone pilots. The application uses a modern web stack with React for the frontend and FastAPI for the backend. It provides functionality for pilot registration, service listing, and client-pilot matching through a clean, responsive interface.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern client-server architecture with clear separation of concerns:

### Frontend Architecture
- **Framework**: React 18 with Vite for fast development and building
- **Styling**: Tailwind CSS with custom design system using primary and secondary color palettes
- **Routing**: React Router for client-side navigation
- **HTTP Client**: Axios for API communication with proxy configuration

### Backend Architecture
- **Framework**: FastAPI (Python) for high-performance API development
- **Server**: Uvicorn ASGI server for production deployment
- **Data Validation**: Pydantic models for request/response validation
- **CORS**: Configured for cross-origin requests

## Key Components

### Frontend Components
- **Homepage**: Landing page with service presentation and call-to-action
- **Pilot Listing**: Browse professional pilots with their services and ratings
- **Pilot Registration**: Form-based registration system for new pilots
- **Authentication**: Mock login system for demonstration purposes
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Backend Components
- **API Routes**: RESTful endpoints for pilots, registration, and authentication
- **Data Models**: Pydantic models for type safety and validation
- **Mock Database**: In-memory storage for development and demonstration
- **CORS Middleware**: Enables frontend-backend communication

### Data Models
- **Pilot**: Core model with profile information, services, and ratings
- **PilotRegistration**: Registration form data structure
- **LoginCredentials**: Authentication data model
- **LoginResponse**: Authentication response structure

## Data Flow

1. **Client Request**: Frontend makes HTTP requests through Axios
2. **Proxy Layer**: Vite development server proxies `/api` requests to FastAPI backend
3. **API Processing**: FastAPI handles requests, validates data with Pydantic
4. **Data Storage**: Currently uses in-memory mock data for pilots and services
5. **Response**: JSON responses sent back to frontend for UI updates

## External Dependencies

### Frontend Dependencies
- React 18 and React DOM for UI framework
- React Router DOM for navigation
- Axios for HTTP requests
- Tailwind CSS for styling
- Vite for build tooling
- PostCSS and Autoprefixer for CSS processing

### Backend Dependencies
- FastAPI for web framework
- Uvicorn for ASGI server
- Pydantic for data validation
- CORS middleware for cross-origin support

## Deployment Strategy

### Development Environment
- Frontend: Vite dev server on port 5000 with hot reload
- Backend: FastAPI with Uvicorn on port 8000
- Proxy: Vite proxy configuration routes `/api` requests to backend

### Production Considerations
- Environment-based port configuration using PORT environment variable
- CORS configuration needs to be restricted to specific domains
- Static file serving for frontend build
- Database integration needed to replace mock data storage

### Current Limitations
- Mock data storage (in-memory)
- Basic authentication system
- CORS allows all origins (development only)
- No persistent data storage
- No real email validation or notifications

The architecture is designed to be scalable with clear separation between frontend and backend, making it easy to add features like real database integration, advanced authentication, payment processing, and notification systems.