# ═══════════════════════════════════════════════════
# Dockerfile — Fluent Design Hugo Site
# Usage: docker compose up
# Access: http://localhost:1313
# ═══════════════════════════════════════════════════

FROM hugomods/hugo:0.124.1

# Set working directory inside container
WORKDIR /src

# Copy all project files
COPY . .

# Expose Hugo dev server port
EXPOSE 1313

# Start Hugo dev server with live reload, bound to all interfaces
CMD ["hugo", "server", "--bind", "0.0.0.0", "--port", "1313", "--disableFastRender", "--buildDrafts"]
