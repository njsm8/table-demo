# Kickstarter Project Stats

A React application that displays Kickstarter project statistics with pagination, dark mode, and skeleton loading for improved user experience.

## Features

✅ **Pagination**: Navigate through data using Prev/Next buttons and jump to specific pages.
✅ **Dark Mode Toggle**: Seamless transition between light and dark themes.
✅ **Skeleton Loading**: Enhances user experience while data is being fetched.
✅ **Keyboard Shortcuts**: Use Left/Right arrow keys for easy navigation.
✅ **Styled UI**: Modern and responsive design.

## Installation & Setup

### 1. Clone the Repository
```sh
git clone https://github.com/your-username/kickstarter-stats.git
cd kickstarter-stats
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Start the Development Server
```sh
npm start
```

The app should now be running on `http://localhost:3000/`.

## Project Structure
```
📂 table-demo
├── 📄 src
├ |─- 📄 components
│   ├── 📄 Table.tsx        # Table component
│   ├── 📄 useData.ts      # Data fetching hook
│   ├── 📄 Table.css       # Stylesheet
│ ├── 📄 App.tsx          # Main App component
├── 📄 package.json        # Dependencies & scripts
└── 📄 README.md           # Documentation
```

## Usage
- **Navigate Pages**: Use the Prev/Next buttons or enter a page number to jump directly.
- **Enable Dark Mode**: Click the toggle button in the top-right corner.
- **Keyboard Navigation**: Use **← Left Arrow** for previous page and **→ Right Arrow** for next page.

## Technologies Used
- **React** - Component-based UI framework
- **CSS** - Custom styling with dark mode support
- **Hooks** - useState, useEffect for state management

## Contributing
Feel free to fork this repository and contribute! Pull requests are welcome.

## License
This project is open-source and available under the **MIT License**.

