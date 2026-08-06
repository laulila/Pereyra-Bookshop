const API_KEY = "ac7d6616a994b505acc674434a7fab2e";

export const uploadImage = async (file) => {

  const formData = new FormData();

  formData.append("image", file);

  const response = await fetch(
    `https://api.imgbb.com/1/upload?key=${API_KEY}`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();

  

  if (!data.success) {
    throw new Error("Error al subir la imagen");
  }

  return data.data.url;
};