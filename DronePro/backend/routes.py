from fastapi import APIRouter, HTTPException
from typing import List
from models import Pilot, PilotRegistration, LoginCredentials, LoginResponse

router = APIRouter()

# Mock data storage
pilots_db = []
next_pilot_id = 1

# Mock data for pilots
MOCK_PILOTS = [
    {
        "id": 1,
        "name": "Marco Rossi",
        "email": "marco.rossi@email.com",
        "location": "Milano e provincia",
        "description": "Pilota esperto con 5 anni di esperienza in servizi commerciali. Specializzato in fotogrammetria e monitoraggio industriale.",
        "services": ["Fotogrammetria", "Monitoraggio Tetti", "Rilievi LIDAR 3D"],
        "rating": 4.8
    },
    {
        "id": 2,
        "name": "Laura Bianchi",
        "email": "laura.bianchi@email.com",
        "location": "Roma e Lazio",
        "description": "Consulente in agricoltura di precisione con certificazioni ENAC. Oltre 200 missioni completate con successo.",
        "services": ["Agricoltura di Precisione", "Monitoraggio Tetti", "Fotogrammetria"],
        "rating": 4.9
    },
    {
        "id": 3,
        "name": "Giuseppe Verde",
        "email": "giuseppe.verde@email.com",
        "location": "Torino e Piemonte",
        "description": "Ingegnere con specializzazione in rilievi topografici e mappatura 3D. Attrezzature professionali di ultima generazione.",
        "services": ["Rilievi LIDAR 3D", "Fotogrammetria", "Monitoraggio Tetti"],
        "rating": 4.7
    },
    {
        "id": 4,
        "name": "Francesca Neri",
        "email": "francesca.neri@email.com",
        "location": "Firenze e Toscana",
        "description": "Fotografa aerea professionale con esperienza in documentazione architettonica e paesaggistica.",
        "services": ["Fotogrammetria", "Monitoraggio Tetti"],
        "rating": 4.6
    },
    {
        "id": 5,
        "name": "Andrea Blu",
        "email": "andrea.blu@email.com",
        "location": "Napoli e Campania",
        "description": "Specialista in ispezioni industriali e monitoraggio infrastrutture. Certificato per voli in aree critiche.",
        "services": ["Monitoraggio Tetti", "Rilievi LIDAR 3D", "Fotogrammetria"],
        "rating": 4.9
    },
    {
        "id": 6,
        "name": "Silvia Gialli",
        "email": "silvia.gialli@email.com",
        "location": "Bologna e Emilia-Romagna",
        "description": "Agronoma con esperienza in monitoraggio colture e ottimizzazione irrigua. Droni equipaggiati con sensori multispettrali.",
        "services": ["Agricoltura di Precisione", "Fotogrammetria"],
        "rating": 4.8
    }
]

# Available services
AVAILABLE_SERVICES = [
    "Monitoraggio Tetti",
    "Fotogrammetria",
    "Agricoltura di Precisione",
    "Rilievi LIDAR 3D",
    "Ispezioni Industriali",
    "Sorveglianza Ambientale"
]

@router.get("/pilots", response_model=List[Pilot])
async def get_pilots():
    """Get all registered pilots"""
    # Return mock data combined with registered pilots
    all_pilots = MOCK_PILOTS.copy()
    all_pilots.extend(pilots_db)
    return all_pilots

@router.post("/register")
async def register_pilot(pilot_data: PilotRegistration):
    """Register a new pilot"""
    global next_pilot_id
    
    # Check if email already exists
    for existing_pilot in pilots_db + MOCK_PILOTS:
        if existing_pilot.get("email") == pilot_data.email:
            raise HTTPException(status_code=400, detail="Email già registrata")
    
    # Create new pilot
    new_pilot = {
        "id": next_pilot_id,
        "name": pilot_data.name,
        "email": pilot_data.email,
        "location": pilot_data.location,
        "description": pilot_data.description,
        "services": pilot_data.services,
        "rating": 5.0  # Default rating for new pilots
    }
    
    pilots_db.append(new_pilot)
    next_pilot_id += 1
    
    return {"success": True, "message": "Pilota registrato con successo", "pilot_id": new_pilot["id"]}

@router.post("/login", response_model=LoginResponse)
async def login(credentials: LoginCredentials):
    """Mock login endpoint - accepts any credentials"""
    # Mock implementation - in production, implement proper authentication
    if credentials.username and credentials.password:
        return LoginResponse(
            success=True, 
            message="Login effettuato con successo",
            token="mock_token_12345"
        )
    else:
        raise HTTPException(status_code=400, detail="Username e password richiesti")

@router.get("/services", response_model=List[str])
async def get_services():
    """Get available services"""
    return AVAILABLE_SERVICES
