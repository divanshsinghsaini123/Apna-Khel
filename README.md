
# 🏏 Apna Khel - Cricket Team Registration POC

A React-based application for sports event team registration with Firebase integration and Google Sheets sync.

## 📋 Project Overview

**Apna Khel** is a simple yet effective team registration system designed for cricket tournaments and sports events. The application allows teams to register online while providing administrators with real-time data access through Firebase and automated Google Sheets integration.

## ✨ Features

### 🏠 Home Page
- Hero banner with event information and welcome message
- Footer displaying sponsors and event details
- Clean, modern UI design

### 📅 Live Events Page
- Displays active cricket tournaments and events
- Shows registration deadlines and event details
- "Register" button for easy navigation to registration form

### 📝 Team Registration Page
- **Team Information**: Team name input
- **Captain Details**: Name, mobile number, age
- **Vice-Captain Details**: Name, mobile number, age
- **Team Members**: Multiple dynamic inputs for additional team members
- Form validation and submission handling

### 🔄 Data Flow
1. **React Form** → User submits registration data
2. **Firebase Firestore** → Data stored securely in real-time database
3. **Cloud Function** → Automatically triggers on new registration
4. **Google Sheets** → Data appended to spreadsheet for admin access

## 🛠 Tech Stack

- **Frontend**: React 19.1.1 + Vite
- **Routing**: React Router DOM
- **Database**: Firebase Firestore
- **Automation**: Firebase Cloud Functions
- **Integration**: Google Sheets API
- **Deployment**: Firebase Hosting / Vercel

## 📁 Project Structure

```
apna-khel/
│
├── src/
│   ├── components/
│   │   ├── Navbar.js          # Navigation component
│   │   ├── Footer.js          # Footer with sponsors
│   │   └── EventCard.js       # Event display component
│   │
│   ├── pages/
│   │   ├── Home.js            # Home page with hero banner
│   │   ├── LiveEvents.js      # Events listing page
│   │   └── TeamRegistration.js # Registration form
│   │
│   ├── firebase/
│   │   ├── config.js          # Firebase configuration
│   │   └── functions.js       # Cloud functions
│   │
│   ├── App.js                 # Main app with routing
│   ├── index.js              # App entry point
│   └── styles/
│       └── global.css        # Global styles
│
├── public/
│   └── index.html
│
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Firebase account
- Google Cloud account (for Sheets API)

### Installation

1. **Clone and setup**:
   ```bash
   cd apna-khel
   npm install
   ```

2. **Install additional dependencies**:
   ```bash
   npm install firebase react-router-dom
   ```

3. **Firebase Setup**:
   - Create Firebase project
   - Enable Firestore database
   - Add Firebase config to `src/firebase/config.js`

4. **Run development server**:
   ```bash
   npm run dev
   ```

## 🔧 Configuration

### Firebase Configuration
```javascript
// src/firebase/config.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Your Firebase config
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

### Google Sheets Integration
- Set up Google Cloud Functions
- Configure Google Sheets API
- Deploy cloud function for automatic data sync

## 📊 Data Structure

### Team Registration Data
```javascript
{
  teamName: "String",
  captain: {
    name: "String",
    mobile: "String", 
    age: "Number"
  },
  viceCaptain: {
    name: "String",
    mobile: "String",
    age: "Number"
  },
  members: [
    {
      name: "String",
      mobile: "String",
      age: "Number"
    }
  ],
  registrationDate: "Timestamp",
  eventId: "String"
}
```

## 🎯 User Workflow

1. **Visit Home** → View event information and sponsors
2. **Browse Events** → Check active tournaments and deadlines
3. **Register Team** → Fill out complete team registration form
4. **Submit** → Data saved to Firebase and synced to Google Sheets
5. **Confirmation** → Success message displayed to user

## 🔐 Admin Features

- **Real-time Data**: Access registration data in Firebase console
- **Excel Reports**: Automated Google Sheets with all registrations
- **Event Management**: Add/edit events and registration deadlines

## 🚀 Deployment

### Firebase Hosting
```bash
npm run build
firebase deploy
```

### Vercel
```bash
npm run build
vercel --prod
```

## 📈 Future Enhancements

- [ ] Payment integration for registration fees
- [ ] Email notifications for successful registrations
- [ ] Admin dashboard for event management
- [ ] Mobile-responsive design improvements
- [ ] Team management and roster updates

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ for the cricket community**
