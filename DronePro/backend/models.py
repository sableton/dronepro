from pydantic import BaseModel, EmailStr
from typing import List, Optional

class Pilot(BaseModel):
    id: int
    name: str
    email: str
    location: str
    description: str
    services: List[str]
    rating: float = 5.0

class PilotRegistration(BaseModel):
    name: str
    email: EmailStr
    location: str
    description: str
    services: List[str]

class LoginCredentials(BaseModel):
    username: str
    password: str

class LoginResponse(BaseModel):
    success: bool
    message: str
    token: Optional[str] = None
