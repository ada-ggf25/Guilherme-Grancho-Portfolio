SHELL := /bin/bash
.ONESHELL:
.PHONY: help conda-install conda-init conda-accept-tos env-create env-update env-remove env-info env-activate npm-install dev dev-outside build start lint clean doctor

# Configuration
ENV_NAME := Guilherme-Grancho-Portfolio
CONDA_HOME := $(HOME)/miniconda3
CONDA_BIN := $(CONDA_HOME)/bin/conda
ENV_FILE := environment.yaml

help: ## Show available targets
	@awk 'BEGIN {FS\":.*##\"; printf \"Available commands:\\n\"} /^[a-zA-Z0-9_-]+:.*?##/ {printf \"  %-20s %s\\n\", $$1, $$2}' $(MAKEFILE_LIST) | sort

conda-install: ## Install or update Miniconda (to $(CONDA_HOME))
	set -e
	cd /tmp
	wget -qO miniconda.sh "https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh"
	bash miniconda.sh -u -b -p "$(CONDA_HOME)"
	rm -f miniconda.sh
	@echo "Miniconda installed/updated at $(CONDA_HOME)"

conda-init: ## Initialise Conda for zsh and disable auto-activating base
	"$(CONDA_BIN)" init zsh
	@source "$(CONDA_HOME)/etc/profile.d/conda.sh"
	@echo "Conda initialised. Restart your shell if 'conda' is not recognised."

conda-accept-tos: ## Accept Anaconda default channels Terms of Service
	@source "$(CONDA_HOME)/etc/profile.d/conda.sh"
	conda tos accept --override-channels --channel https://repo.anaconda.com/pkgs/main
	conda tos accept --override-channels --channel https://repo.anaconda.com/pkgs/r
	@echo "Accepted Anaconda channels ToS."

env-create: ## Create Conda environment from $(ENV_FILE) (uses conda-forge only)
	@source "$(CONDA_HOME)/etc/profile.d/conda.sh"
	test -f "$(ENV_FILE)" || (echo "Missing $(ENV_FILE)"; exit 1)
	conda env create -n "$(ENV_NAME)" -f "$(ENV_FILE)" -y --override-channels || true
	@echo "Environment '$(ENV_NAME)' created (or already exists)."

env-update: ## Update existing environment from $(ENV_FILE)
	@source "$(CONDA_HOME)/etc/profile.d/conda.sh"
	test -f "$(ENV_FILE)" || (echo "Missing $(ENV_FILE)"; exit 1)
	conda env update -n "$(ENV_NAME)" -f "$(ENV_FILE)" --prune -y --override-channels
	@echo "Environment '$(ENV_NAME)' updated."

env-remove: ## Remove the Conda environment
	@source "$(CONDA_HOME)/etc/profile.d/conda.sh"
	conda env remove -n "$(ENV_NAME)" -y || true
	@echo "Environment '$(ENV_NAME)' removed."

env-info: ## Show Conda info and list environments
	@source "$(CONDA_HOME)/etc/profile.d/conda.sh"
	conda --version
	conda info
	conda env list

env-activate: ## Print command to activate the environment in current shell
	@echo "Run to activate:"
	@echo "  source \"$(CONDA_HOME)/etc/profile.d/conda.sh\" && conda activate \"$(ENV_NAME)\""

npm-install: ## Install npm dependencies inside Conda env
	@source "$(CONDA_HOME)/etc/profile.d/conda.sh"
	conda run -n "$(ENV_NAME)" npm install

dev: ## Run dev server inside Conda env (http://localhost:3030)
	@source "$(CONDA_HOME)/etc/profile.d/conda.sh"
	conda run -n "$(ENV_NAME)" npm run dev

dev-outside: ## Run dev server using system Node (outside Conda)
	npm run dev

build: ## Build the project inside Conda env
	@source "$(CONDA_HOME)/etc/profile.d/conda.sh"
	conda run -n "$(ENV_NAME)" npm run build

start: ## Start production server inside Conda env
	@source "$(CONDA_HOME)/etc/profile.d/conda.sh"
	conda run -n "$(ENV_NAME)" npm start

lint: ## Run linter inside Conda env
	@source "$(CONDA_HOME)/etc/profile.d/conda.sh"
	conda run -n "$(ENV_NAME)" npm run lint

clean: ## Remove build artefacts and caches
	rm -rf .next out dist build coverage .nyc_output
	@echo "Cleaned build artefacts."

doctor: ## Show quick diagnostics (env, versions, essentials)
	@source "$(CONDA_HOME)/etc/profile.d/conda.sh" || true
	echo "Conda env: $$CONDA_DEFAULT_ENV"
	if command -v node >/dev/null 2>&1; then node -v; else echo "node: not found"; fi
	if command -v npm >/dev/null 2>&1; then npm -v; else echo "npm: not found"; fi
	test -f package.json && echo "package.json: present" || echo "package.json: MISSING"
	test -d src && echo "src/: present" || echo "src/: MISSING"
	test -f next.config.mjs && echo "next.config.mjs: present" || echo "next.config.mjs: MISSING"
	test -f tsconfig.json && echo "tsconfig.json: present" || echo "tsconfig.json: MISSING"

