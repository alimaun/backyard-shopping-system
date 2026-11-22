
from fastapi import APIRouter

from app.schemas.shop import Shop
from app.services.shop_service import get_active_shops

router = APIRouter(prefix="/api/shops", tags=["Shops"])


@router.get("", response_model=list[Shop])
def list_shops():
    return get_active_shops()
