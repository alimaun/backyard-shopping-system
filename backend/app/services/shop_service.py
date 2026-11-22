
from app.schemas.shop import Shop


DEMO_SHOPS = [
    Shop(
        id=1,
        name="Demo Boutique Downtown",
        description="Sample fashion boutique.",
        category="Fashion",
        address="Downtown, St. John's, NL, Canada",
        latitude=47.5615,
        longitude=-52.7126,
        is_active=True,
    ),
    Shop(
        id=2,
        name="Demo Shop West",
        description="Sample local shop.",
        category="General",
        address="West End, St. John's, NL, Canada",
        latitude=47.5588,
        longitude=-52.7350,
        is_active=True,
    ),
    Shop(
        id=3,
        name="Demo Shop East",
        description="Sample local shop.",
        category="Food",
        address="East End, St. John's, NL, Canada",
        latitude=47.5740,
        longitude=-52.6900,
        is_active=True,
    ),
]


def get_active_shops() -> list[Shop]:
    return [shop for shop in DEMO_SHOPS if shop.is_active]
