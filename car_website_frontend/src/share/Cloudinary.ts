import axios from "axios";

export const ImageHosting = async (image:string) => {
    const formData = new FormData();
    formData.append("file", image); 
    formData.append("upload_preset", "Clooud_Gen");

    try {
        const response = await axios.post(`https://api.cloudinary.com/v1_1/dztxlecbe/image/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
        console.error("Image upload error:", error.response ? error.response.data : error.message);
        throw error; 
    }
};