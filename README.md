# Guilherme Grancho - Personal Web Portfolio

## 🛠️ Tech Stack

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.3.1-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript)
![SCSS](https://img.shields.io/badge/SCSS-1.86.3-CC6699?style=for-the-badge&logo=sass)
![Once UI System](https://img.shields.io/badge/Once%20UI-1.2.4-000000?style=for-the-badge)

</div>

## 📁 Project Structure

```text
Guilherme-Grancho-Portfolio/
├── public/
│   ├── images/              # Static images including avatar
│   └── trademarks/          # Brand assets
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── about/          # About page
│   │   ├── api/            # API routes
│   │   ├── gui/            # GUI components
│   │   ├── resume/         # Resume page
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Homepage
│   ├── components/         # Reusable UI components
│   ├── contexts/           # React contexts
│   ├── resources/          # Configuration and content
│   │   ├── content.js      # Portfolio content
│   │   ├── custom.css      # Custom styles
│   │   └── once-ui.config.js  # Design system config
│   └── utils/              # Utility functions
├── package.json
├── tsconfig.json
└── next.config.mjs
```

## 🚀 Getting Started

### Using Miniconda (recommended)

These steps ensure a reproducible Node runtime via Conda (Node and npm are provided by the Conda environment).

1) Install Miniconda (Linux)
   ```bash
   # Non-interactive install to ~/miniconda3 (safe to re-run)
   cd /tmp
   wget -qO miniconda.sh "https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh"
   bash miniconda.sh -u -b -p "$HOME/miniconda3"
   rm -f miniconda.sh
   ```

2) Initialise Conda for zsh and load it in your current shell
   ```bash
   "$HOME/miniconda3/bin/conda" init zsh
   source "$HOME/miniconda3/etc/profile.d/conda.sh"
   conda config --set auto_activate_base false
   ```

3) Create the environment from this repository’s file
   ```bash
   # Uses conda-forge and installs Node.js + npm
   conda env create -f environment.yaml -y --override-channels
   # If the environment already exists, update it instead:
   # conda env update -n "Guilherme-Grancho-Portfolio" -f environment.yaml --prune -y --override-channels
   ```

4) Activate the environment
   ```bash
   conda activate "Guilherme-Grancho-Portfolio"
   ```

5) Verify runtime versions
   ```bash
   node -v   # Expected: v20.x
   npm -v    # Expected: 10.x
   ```

6) Install project dependencies
   ```bash
   npm install
   ```

7) Start the development server
   ```bash
   npm run dev
   ```
   The portfolio will be available at [http://localhost:3030](http://localhost:3030)

Notes:
- If you encounter Anaconda Terms of Service prompts, either accept them as instructed by Conda or use `--override-channels` to rely on conda-forge only.
- If a new shell does not recognise `conda`, add this line to your `~/.zshrc`:
  ```bash
  source "$HOME/miniconda3/etc/profile.d/conda.sh"
  ```

### Prerequisites

- **Node.js** 18 or higher
- **npm** or **yarn** package manager

### Installation

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

### Environment variables

1) Copy the example environment file and update values:
   ```bash
   cp .env.example .env
   # Update .env with your secrets and configuration
   ```
2) Never commit real secrets. `.env` is ignored by Git. Update `.env.example` when adding new keys so others know which variables are required.

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
```

## 📄 License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)** License. See the [LICENSE](LICENSE) file for details.

## 📞 Contact & Profiles

- **Email**: [guilhermegranchopro@gmail.com](mailto:guilhermegranchopro@gmail.com)
- **LinkedIn**: [guilhermegrancho](https://www.linkedin.com/in/guilhermegrancho/)
- **GitHub**: [ada-ggf25](https://github.com/ada-ggf25)
- **Google Scholar**: [Guilherme Grancho](https://scholar.google.com/citations?user=lHeQn9gAAAAJ&hl=en&authuser=3)
- **Website**: [guilhermegrancho.com](https://guilhermegrancho.com)
