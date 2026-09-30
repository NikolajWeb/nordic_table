import { serverPath } from "../settings";

const getData = async (
    path,
    errorText = "Fejl ved hentning"
) => {
    const res = await fetch(`${serverPath}${path}`);

    if (!res.ok) {
        throw new Response(errorText, {
            status: res.status,
        });
    }

    const json = await res.json();
    return json.data;
};

export const backofficeLoader = async () => {
    const [bookings, dishes] = await Promise.all([
        getData("/bookings"),
        getData("/dishes"),
    ]);

    return {
        bookings,
        dishes,
    };
};

export default backofficeLoader;