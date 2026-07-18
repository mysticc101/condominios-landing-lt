import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "Altum", short_name: "Altum", description: "Residencias privadas en San Isidro, Lima.", start_url: "/", display: "standalone", background_color: "#ebe8df", theme_color: "#11110f", icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }] };
}
