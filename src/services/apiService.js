import axios from "axios";
import CONFIG from "../config/config";

// Function to convert Markdown to HTML
const convertMarkdown = async (markdown) => {
  try {
    const response = await axios.post(`${CONFIG.API_BASE_URL}/convert`, { markdown });
    return response.data.html;
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to convert Markdown");
  }
};

export default { convertMarkdown };
