import axios from "axios";
import { useGlobalContext } from "../context";

export const customFetch = axios.create({
  baseURL:
    "https://api.unsplash.com/photos?client_id=7KaVWuZ6JEVUjnHfQhkrQjQRuth2P3HEwMdHp9RoHtU&",
});
