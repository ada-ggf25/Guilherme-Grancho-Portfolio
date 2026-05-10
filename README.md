# Guilherme Grancho - Personal Web Portfolio

## 🛠️ Tech Stack

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.0.7-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript)
![SCSS](https://img.shields.io/badge/SCSS-1.86.3-CC6699?style=for-the-badge&logo=sass)
![Once UI System](https://img.shields.io/badge/Once%20UI-1.2.4-000000?style=for-the-badge)

</div>

## 📁 Project Structure

```text
Guilherme-Grancho-Portfolio/
├── public/                  # Static assets (avatar, favicons, trademarks)
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── api/             # Auth + OG image routes
│   │   │   ├── authenticate/route.ts   # Password cookie setter
│   │   │   ├── check-auth/route.ts     # Cookie verification
│   │   │   └── og/generate/route.tsx   # Dynamic OG images
│   │   ├── icon.tsx         # App icon
│   │   ├── layout.tsx       # Root layout
│   │   ├── not-found.tsx    # 404
│   │   ├── page.tsx         # Home (single-page experience)
│   │   ├── robots.ts        # robots.txt
│   │   └── sitemap.ts       # sitemap.xml
│   ├── components/          # UI components (navigation, cards, carousel, theming)
│   ├── contexts/            # React contexts
│   ├── resources/           # Content + design system configuration
│   │   ├── content.tsx      # Portfolio data model (edit here)
│   │   ├── once-ui.config.ts# Once UI config, base URL, routes, fonts
│   │   ├── custom.css       # Global overrides
│   │   └── icons.ts         # Icon definitions
│   └── utils/               # Utilities (dates, scrolling)
├── environment.yaml         # Conda environment (optional)
├── next.config.mjs          # Next.js configuration
├── package.json             # Scripts and dependencies
├── tsconfig.json            # TypeScript configuration
└── LICENSE                  # CC BY-NC 4.0
```

## 🚀 Getting Started

### Using Miniconda (recommended)

These steps ensure a reproducible Node runtime via Conda (Node and npm are provided by the Conda environment).

1) Install Miniconda (Linux)
   ```bash
   cd /tmp
   wget -qO miniconda.sh "https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh"
   bash miniconda.sh -u -b -p "$HOME/miniconda3"
   rm -f miniconda.sh
   ```

2) Initialize Conda for zsh and load it in your current shell
   ```bash
   "$HOME/miniconda3/bin/conda" init zsh
   source "$HOME/miniconda3/etc/profile.d/conda.sh"
   conda config --set auto_activate_base false
   ```

3) Create the environment from this repository’s file (uses conda-forge only)
   ```bash
   conda env create -f environment.yaml -y --override-channels \
     || conda env update -n "Guilherme-Grancho-Portfolio" -f environment.yaml --prune -y --override-channels
   ```

4) Activate the environment and install dependencies
   ```bash
   conda activate "Guilherme-Grancho-Portfolio"
   npm install
   ```

5) Start the development server
   ```bash
   npm run dev
   ```
   The portfolio will be available at [http://localhost:3030](http://localhost:3030)

Notes:
- If you encounter Anaconda Terms of Service prompts, either accept them as instructed by Conda or use `--override-channels` to rely on conda-forge only.
- If a new shell does not recognize `conda`, add this to your `~/.zshrc`:
  ```bash
  source "$HOME/miniconda3/etc/profile.d/conda.sh"
  ```

### Prerequisites

- **Node.js** 18 or higher (provided by Conda environment)
- **npm** (provided by Conda environment)
- **Make** (for convenience commands)

### Installation (without Conda)

If you prefer not to use Conda, you can use your system Node.js:

1. **Clone the repository**

   ```bash
   git clone https://github.com/guilhermegrancho/Guilherme-Grancho-Portfolio.git
   cd Guilherme-Grancho-Portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

   The portfolio will be available at [http://localhost:3030](http://localhost:3030)

### Development Options

- **With Turbo** (default, faster): `npm run dev`
- **Without Turbo**: `npm run dev:no-turbo`

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

### Other Commands

```bash
# Run linter
npm run lint

# Export static site
npm run export

# Clean build artifacts (manual)
rm -rf .next out dist build coverage .nyc_output
```

### Using Makefile (optional)

This project includes a `Makefile` with convenient commands that automate the setup and common tasks. You can use these instead of the manual commands above:

**Quick start with Makefile:**

```bash
# 1. Install Miniconda (Linux)
make conda-install

# 2. Initialize Conda for zsh
make conda-init
# Restart your shell or run: source "$HOME/miniconda3/etc/profile.d/conda.sh"

# 3. Create the Conda environment (uses conda-forge only)
make env-create

# 4. Install npm dependencies
make npm-install

# 5. Start the development server
make dev
```

**Available Makefile commands:**

- `make help` - Show all available commands
- `make conda-install` - Install or update Miniconda
- `make conda-init` - Initialize Conda for zsh
- `make conda-accept-tos` - Accept Anaconda ToS (optional, if needed)
- `make env-create` - Create Conda environment from `environment.yaml`
- `make env-update` - Update existing environment
- `make env-remove` - Remove the environment
- `make env-info` - Show Conda info and environments
- `make env-activate` - Print activation command
- `make npm-install` - Install npm dependencies inside Conda env
- `make dev` - Run dev server inside Conda env
- `make dev-outside` - Run dev server using system Node
- `make build` - Build the project
- `make start` - Start production server
- `make lint` - Run linter
- `make clean` - Remove build artifacts
- `make doctor` - Show diagnostics (versions, files, etc.)

## 📄 License

Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0). See `LICENSE`.

## 📞 Contact & Profiles

- Email: [guilhermegranchopro@gmail.com](mailto:guilhermegranchopro@gmail.com)
- LinkedIn: [guilhermegrancho](https://www.linkedin.com/in/guilhermegrancho/)
- GitHub: [ada-ggf25](https://github.com/ada-ggf25)
- Google Scholar: [Guilherme Grancho](https://scholar.google.com/citations?user=lHeQn9gAAAAJ&hl=en&authuser=3)
- YouTube: [GuilhermeGranchoPro](https://www.youtube.com/@GuilhermeGranchoPro)
- Website: [guilherme-grancho-portfolio.vercel.app](https://guilherme-grancho-portfolio.vercel.app/)
