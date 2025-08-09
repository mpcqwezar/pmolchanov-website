# Variables
DIST_DIR := dist
NODE_MODULES := node_modules
ifeq ($(OS),Windows_NT)
    CLEAN_CMD := if exist "$(NODE_MODULES)" rmdir /s /q "$(NODE_MODULES)" & if exist "$(DIST_DIR)" rmdir /s /q "$(DIST_DIR)" & if exist "package-lock.json" del /f "package-lock.json"
else
    CLEAN_CMD := rm -rf $(NODE_MODULES) $(DIST_DIR) package-lock.json
endif
# All-in-one command for full setup and run
all: clean setup run

# Setup project
setup: clean install build

# Install dependencies
install:
	npm install
# Start development server
run:
	npm run dev

# Build for production
build:
	npm run build
	@echo "Checking dist directory contents:"
	@ls -R dist/assets || dir /s /b dist\assets


# Deploy to GitHub Pages
deploy: build
	npm run deploy

# Clean build artifacts and node_modules
clean:
	$(CLEAN_CMD)

# Preview production build
preview: build
	npm run preview

# Default target
.DEFAULT_GOAL := all

.PHONY: all setup install run build deploy clean preview