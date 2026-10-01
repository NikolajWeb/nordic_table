import { serverPath } from "../settings.jsx";

const useCrud = () => {
    // Hjælpefunktion til at håndtere alle API-svar
    const handleResponse = async (response) => {
        const text = await response.text();

        console.log("HTTP status:", response.status);
        console.log("Backend svar:", text);

        let data = null;

        if (text) {
            try {
                data = JSON.parse(text);
            } catch {
                data = text;
            }
        }

        if (!response.ok) {
            let message = "Der opstod en fejl";

            if (data && typeof data === "object") {
                message =
                    data.message ||
                    data.error ||
                    `HTTP fejl ${response.status}`;
            } else if (typeof data === "string" && data) {
                message = data;
            }

            throw new Error(message);
        }
        return data;
    };

    // CREATE
    const create = async (endpoint, data) => {
        try {
            const isFormData = data instanceof FormData;

            const response = await fetch(
                `${serverPath}/${endpoint}`,
                {
                    method: "POST",
                    headers: isFormData
                        ? {}
                        : {
                            "Content-Type": "application/json",
                        },
                    body: isFormData
                        ? data
                        : JSON.stringify(data),
                }
            );

            return await handleResponse(response);
        } catch (error) {
            console.error("Create error:", error);
            throw error;
        }
    };

    // DELETE
    const remove = async (endpoint, id) => {
        try {
            const response = await fetch(
                `${serverPath}/${endpoint}/${id}`,
                {
                    method: "DELETE",
                }
            );

            return await handleResponse(response);
        } catch (error) {
            console.error("Delete error:", error);
            throw error;
        }
    };

    // UPDATE
    const update = async (endpoint, formData) => {
        try {
            const response = await fetch(
                `${serverPath}/${endpoint}`,
                {
                    method: "PUT",
                    body: formData,
                }
            );

            return await handleResponse(response);
        } catch (error) {
            console.error("Update error:", error);
            throw error;
        }
    };

    return {
        create,
        remove,
        update,

        isLoading: false,
        error: null,
    };
};

export { useCrud };
