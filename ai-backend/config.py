import os
from typing import Annotated, Optional

from pydantic_settings import BaseSettings, SettingsConfigDict


class BaseConfig(BaseSettings):
    ENV_STATE: Optional[str] = None
    model_config = SettingsConfigDict(
        # use os.path & __file__ to grab absolute path
        env_file=os.path.join(os.path.dirname(__file__), ".env"),
        extra="ignore",
    )


class GlobalConfig(BaseConfig):
    OPENAI_API_KEY: Optional[str] = None


class DevConfig(GlobalConfig):
    model_config = SettingsConfigDict(env_prefix="DEV_")


class ProdConfig(GlobalConfig):
    model_config = SettingsConfigDict(env_prefix="PROD_")


class TestConfig(GlobalConfig):
    model_config = SettingsConfigDict(env_prefix="TEST_")


# LRU-style decorator cache
def config_cache(func):
    cache = {}

    def inner(arg: str):
        if arg in cache.keys():
            return cache[arg]
        result = func(arg)
        cache[arg] = result
        return result

    return inner


@config_cache
def get_config(env_state: str):
    if env_state is None:
        raise ValueError("ENV_STATE is not in .env file")
    env_configs = {"dev": DevConfig, "prod": ProdConfig, "test": TestConfig}
    if env_state not in env_configs:
        raise ValueError(
            f'Invalid ENV_STATE: {env_state}. Must be "dev", "prod" or "test"'
        )
    return env_configs[env_state]()


config: Annotated[GlobalConfig, "imported .env vars"] = get_config(
    BaseConfig().ENV_STATE
)
