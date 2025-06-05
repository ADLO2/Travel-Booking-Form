# Project Summary
The Travel Coach Booking project is a web-based application that simplifies the booking process for travel coaches. Users can input personal information, select locations through an integrated Google Maps interface, choose travel dates, and view various coach options. The application focuses on enhancing user experience during travel planning with a modern, intuitive interface, leveraging React, JavaScript, and Tailwind CSS for responsive design.

# Project Module Description
- **Personal Information**: Collects user details including name, phone, and an optional address.
- **Location & Date Picker**: A unified component for selecting pickup/drop-off locations and travel dates, utilizing Google Maps for location selection and visualization.
- **Coach Selection**: Displays available coaches (4, 7, and 16 seats) based on user input, along with pricing details.
- **Booking Summary**: Summarizes the booking for user confirmation, featuring a notification for successful booking.

# Directory Tree
```
react_template/
├── README.md               # Project documentation
├── eslint.config.js        # ESLint configuration file
├── index.html              # Main HTML file for the application
├── package.json            # Project dependencies and scripts
├── postcss.config.js       # PostCSS configuration file
├── public/
│   └── data/
│       └── example.json    # Example data (currently unused)
├── src/
│   ├── App.jsx             # Main application component
│   ├── components/         # Contains all React components
│   │   ├── BookingSummary.jsx  # Displays booking summary with notification
│   │   ├── CoachSelection.jsx   # Allows coach selection
│   │   ├── LocationPicker.jsx  # Unified component for location and date selection
│   │   └── PersonalInfo.jsx     # Personal information form
│   ├── data/
│   │   └── mockCoaches.js       # Mock data for coach types
│   ├── index.css            # Global CSS styles
│   └── main.jsx             # Entry point for the React application
├── tailwind.config.js       # Tailwind CSS configuration
└── vite.config.js           # Vite configuration file
```

# File Description Inventory
- **README.md**: Overview of the project and setup instructions.
- **eslint.config.js**: Configuration for ESLint to maintain code quality.
- **index.html**: Main HTML structure for the React application.
- **package.json**: Lists project dependencies and scripts for building and running the app.
- **postcss.config.js**: Configuration for PostCSS processing.
- **mockCoaches.js**: Contains mock data for different coach types including their details.
- **App.jsx**: The main component that manages the flow of the booking process.
- **PersonalInfo.jsx**: Component for collecting user's personal information, now with an optional address field.
- **LocationPicker.jsx**: Updated component for combined location and date selection with improved UI.
- **CoachSelection.jsx**: Component for displaying and selecting available coaches with enhanced visual feedback.
- **BookingSummary.jsx**: Component that shows the booking details for user confirmation, now with a notification for successful booking.
- **index.css**: Styles applied globally across the application.
- **tailwind.config.js**: Configuration file for Tailwind CSS.
- **vite.config.js**: Configuration for the Vite build tool.

# Technology Stack
- **React**: JavaScript library for building user interfaces.
- **JavaScript**: Programming language used for application logic.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vite**: Build tool for faster development and optimized production builds.
- **Google Maps API**: Used for location selection and route visualization.

# Usage
1. Install dependencies:
   ```
   pnpm install
   ```
2. Run the linter to check for issues:
   ```
   pnpm run lint
   ```
3. Start the development server:
   ```
   pnpm run dev
   ```
