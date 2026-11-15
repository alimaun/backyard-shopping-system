
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.shops import router as shops_router

app = FastAPI(
    title="Backyard Shopping System API",
    description="API for the Backyard Shopping System",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(shops_router)


@app.get("/")
def home():
    return {
        "message": "Backyard Shopping System API is running"
    }


@app.get("/health")
def health():
    return {"status": "healthy"}
