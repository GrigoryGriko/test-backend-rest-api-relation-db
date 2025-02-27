import { initAdminAPI } from "#controllers/Admin";

const bootstrap = async () => {
    await initAdminAPI();
}

bootstrap();