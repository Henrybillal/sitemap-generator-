
 Sitemap Generator

![License](https://img.shields.io/badge/license-MIT-blue.svg)  
A simple and efficient tool for generating XML sitemaps to improve website SEO and indexing.

   🚀 Features

- Automatically generates XML sitemaps for websites
- Supports dynamic and static pages
- Customizable URL priority and frequency
- Easy-to-use command-line interface (CLI)
- Supports large websites with pagination

   📦 Installation

```sh
git clone https://github.com/yourusername/sitemap-generator.git
cd sitemap-generator
pip install -r requirements.txt  # If using Python
```

   🛠️ Usage

Run the following command to generate a sitemap:

```sh
python sitemap_generator.py --url https://example.com --output sitemap.xml
```

    Command-line Options

| Option       | Description                                  |
|-------------|----------------------------------------------|
| `--url`     | Website URL to generate a sitemap for       |
| `--output`  | Output file name (default: `sitemap.xml`)   |
| `--depth`   | Crawl depth limit (default: `3`)            |

   📜 Example Output

A generated `sitemap.xml` file:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://example.com/</loc>
        <lastmod>2024-02-16</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
</urlset>
```

   📖 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

   👥 Contributing

1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Commit your changes.
4. Push to your branch and submit a pull request.

## 📩 Contact

For questions or suggestions, open an issue or reach out at henrybillal90@gmail.com
