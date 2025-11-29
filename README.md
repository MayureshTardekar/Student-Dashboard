# Lab 8: Student Performance Monitoring Dashboard

A React-based student performance monitoring dashboard with data visualization and dynamic student management.

## Features

### Dashboard Components
- **KPI Cards**: Average Attendance, Average Marks, Pass/Fail Ratio
- **Charts**: 
  - Bar Chart (Subject-wise Performance)
  - Pie Chart (Pass/Fail Distribution)
  - Line Chart (Monthly Performance Trend)
- **Students Table**: Complete student details with status highlighting
- **Sidebar**: Collapsible navigation menu
- **Navbar**: Search functionality

### Dynamic Features
- Add new students
- Edit student information
- Delete students
- Auto-grade calculation
- Data persistence with localStorage

## Technology Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Recharts

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Application runs on: **http://localhost:8080**

## Project Structure

```
src/
├── components/
│   ├── dashboard/    # KPI cards, charts, table
│   └── layout/       # Sidebar, navbar
├── contexts/         # Global state management
├── data/            # Student data & types
├── lib/             # Utility functions
└── pages/           # Main dashboard page
```

## Usage

1. **View Dashboard**: See all KPIs, charts, and student data
2. **Add Student**: Click the blue + button (bottom-right)
3. **Edit Student**: Click pencil icon in table row
4. **Delete Student**: Click trash icon in table row
5. **Collapse Sidebar**: Click arrow button on sidebar

## Student Data

Default includes 8 students with varying performance levels. All data is stored in browser localStorage and persists across sessions.

## Assignment Requirements Met

✅ Dashboard with KPI summary cards  
✅ Three types of charts (Bar, Pie, Line)  
✅ Students table with pass/fail highlighting  
✅ Sidebar navigation  
✅ Top navbar with search  
✅ React functional components  
✅ Props and component architecture  
✅ Tailwind CSS styling  
✅ Chart library (Recharts)  
✅ Dynamic data management

