document.addEventListener("DOMContentLoaded", () => {
  const latestPostsContainer = document.getElementById("latest-posts");

  // Function to dynamically fetch .html files in the repository
  async function fetchHtmlFiles() {
    try {
      const response = await fetch("https://api.github.com/repos/<Kaviparei>/<Tech>/contents/");
      const files = await response.json();

      // Filter for HTML files excluding index.html
      const htmlFiles = files
        .filter(file => file.name.endsWith(".html") && file.name !== "index.html")
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)); // Sort by update date if available

      // Populate the latest posts container
      htmlFiles.forEach(file => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = file.name;
        link.textContent = file.name.replace(".html", "").replace(/-/g, " "); // Format the filename
        listItem.appendChild(link);
        latestPostsContainer.appendChild(listItem);
      });
    } catch (error) {
      console.error("Error fetching HTML files:", error);
    }
  }

  fetchHtmlFiles();
});
