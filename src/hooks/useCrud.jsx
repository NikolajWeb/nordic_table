import serverPath from "../settings.jsx";

const useCrud = () => {
  const { token } = useAuthContext();

  const authHeader = token
    ? { Authorization: `Bearer ${token}` }
    : {};

  const create = async (endpoint, formData) => {
    const response = await fetch(`${serverPath}/${endpoint}`, {
      method: "POST",
      headers: authHeader,
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Kunne ikke oprette");
    }

    return response.json();
  };

  const remove = async (endpoint, id) => {
    const response = await fetch(`${serverPath}/${endpoint}/${id}`, {
      method: "DELETE",
      headers: authHeader,
    });

    if (!response.ok) {
      throw new Error("Kunne ikke slette");
    }

    return true;
  };

  const update = async (endpoint, formData) => {
    const response = await fetch(`${serverPath}/${endpoint}`, {
      method: "PUT",
      headers: authHeader,
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Kunne ikke opdatere");
    }

    return response.json();
  };

  return { create, remove, update };
};

export { useCrud };