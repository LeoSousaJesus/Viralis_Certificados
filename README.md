# Viralis Certificações

Viralis Certificações is a platform dedicated to evaluating, auditing, and certifying public management excellence. It provides a private institutional certification for good practices in Municipalities and City Councils across Brazil, focusing on transparency, efficiency, and governance.


## 🚀 Purpose

The main goal of this project is to elevate the standard of quality and transparency in public management through:
- Strategic consultancy and process auditing.
- A rigorous evaluation protocol based on real data and performance indicators.
- Issuing secure and audit-able certificates.
- Providing a public verification system for citizens and institutions.

## ✨ Key Features

- **Institutional Certification:** Assessment and recognition of good public management practices.
- **Authenticity Verification:** A dedicated module for verifying the validity of issued certificates using unique hash codes.
- **Methodology & Protocol:** A structured approach to analysis, including data collection, cross-validation, and performance indicators.
- **Public Registry:** A secure database ensuring the traceability and transparency of certifications.
- **Detailed Reports:** Comprehensive diagnostics with actionable insights for management improvement.

## 🛠️ Technologies Used

This project is built with a modern frontend stack:

- **Core:** [React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:**
  - [Tailwind CSS](https://tailwindcss.com/) (v4)
  - [Emotion](https://emotion.sh/)
  - [Radix UI](https://www.radix-ui.com/) primitives for accessible components
- **Routing:** [React Router](https://reactrouter.com/)
- **Icons:** Material Symbols & Lucide React
- **Typography:** Public Sans (Google Fonts)
- **Other Libraries:**
  - `react-hook-form`: Form management
  - `recharts`: Data visualization
  - `framer-motion` / `motion`: Animations
  - `date-fns`: Date manipulation
  - `sonner`: Toast notifications

## 📂 Project Structure

```
src/
├── app/
│   ├── components/  # Reusable UI components
│   └── pages/       # Application routes/views
│       ├── Home.tsx          # Landing page
│       ├── Certification.tsx # Certification details
│       ├── Methodology.tsx   # Explanation of the evaluation protocol
│       ├── Authenticity.tsx  # Information on certificate security
│       └── Verify.tsx        # Tool to verify certificate codes
├── styles/          # Global styles
└── main.tsx         # Entry point
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd viralis-certificacoes
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Development Server

To start the development server with hot reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Building for Production

To build the project for production:

```bash
npm run build
```

This will generate the optimized files in the `dist` directory.

## 📄 License

This project is proprietary software of Viralis Certificações.
