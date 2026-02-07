# 🌐 Azure Speech Translator

A modern, full-stack application for real-time speech recognition, translation, and synthesis using Azure Cognitive Services.

## ✨ Features

- **🎤 Speech to Text (STT)** - Convert audio files to text using Azure Speech Recognition
- **🌐 Text Translation** - Translate text to multiple languages (Hindi, English, French, Spanish, Japanese)
- **🔊 Text to Speech (TTS)** - Convert text to natural-sounding audio
- **💎 Modern UI** - Glassmorphism design with smooth animations
- **🚀 Real-time Processing** - Fast and responsive API calls
- **📱 Responsive Design** - Works perfectly on desktop and mobile devices

## 🏗️ Project Structure

```
azure-speech-app/
├── backend/
│   ├── main.py              # FastAPI server & endpoints
│   ├── azure_speech.py      # Azure services integration
│   ├── requirements.txt      # Python dependencies
│   └── .env                  # Azure credentials (not in git)
│
├── frontend/
│   ├── src/
│   │   ├── App.js           # Main application component
│   │   ├── index.js         # React entry point
│   │   ├── index.css        # Tailwind CSS setup
│   │   └── components/
│   │       ├── STT.js       # Speech to Text component
│   │       ├── Translate.js # Translation component
│   │       └── TTS.js       # Text to Speech component
│   ├── public/index.html    # HTML template
│   ├── package.json         # Node dependencies
│   ├── tailwind.config.js   # Tailwind configuration
│   └── postcss.config.js    # PostCSS configuration
│
└── README.md
```

## 🛠️ Tech Stack

### Backend
- **Framework**: FastAPI
- **Server**: Uvicorn
- **Azure Services**: 
  - Azure Speech Services
  - Azure Translator
- **Language**: Python 3.10+

### Frontend
- **Framework**: React 18
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Build Tool**: Create React App

## 🚀 Getting Started

### Prerequisites
- Python 3.10+
- Node.js 16+
- npm or yarn
- Azure Cognitive Services account

### Backend Setup

1. **Install dependencies**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

2. **Configure Azure credentials**
   Create a `.env` file in the backend folder:
   ```
   AZURE_SPEECH_KEY=your_speech_key
   AZURE_SPEECH_ENDPOINT=https://your-region.api.cognitive.microsoft.com/
   AZURE_TRANSLATOR_KEY=your_translator_key
   AZURE_TRANSLATOR_ENDPOINT=https://api.cognitive.microsofttranslator.com/
   AZURE_REGION=your_region
   ```

3. **Run the backend server**
   ```bash
   python -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```
   Server runs at: `http://127.0.0.1:8000`

### Frontend Setup

1. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```

2. **Start development server**
   ```bash
   npm start
   ```
   App runs at: `http://localhost:3000`

## 📡 API Endpoints

### Speech to Text
```
POST /stt
Content-Type: multipart/form-data
Body: { file: audio_file }
Response: { text: "recognized text" }
```

### Translation
```
POST /translate
Content-Type: application/json
Body: { text: "text to translate", lang: "target_language_code" }
Response: { output: "translated text" }
```

### Text to Speech
```
POST /tts
Content-Type: application/json
Body: { text: "text to speak" }
Response: audio/wav (binary audio data)
```

### Health Check
```
GET /
Response: { status: "Backend running" }
```

## 🎨 UI Features

- **Glassmorphic Design** - Semi-transparent cards with backdrop blur
- **Animated Backgrounds** - Floating gradient blobs with pulse animations
- **Loading States** - Smooth spinners during processing
- **Language Flags** - Visual indicators for language selection
- **Responsive Grid** - Adapts to different screen sizes
- **Smooth Transitions** - Hover effects and animations

## 🔐 Environment Variables

Create a `.env` file in the `backend/` folder with your Azure credentials:

```env
AZURE_SPEECH_KEY=<your-key>
AZURE_SPEECH_ENDPOINT=<your-endpoint>
AZURE_TRANSLATOR_KEY=<your-key>
AZURE_TRANSLATOR_ENDPOINT=https://api.cognitive.microsofttranslator.com/
AZURE_REGION=<your-region>
```

**⚠️ Never commit the .env file to version control!**

## 📦 Dependencies

### Backend
- fastapi - Modern web framework
- uvicorn - ASGI server
- python-dotenv - Environment variable management
- python-multipart - File upload handling
- requests - HTTP library
- azure-cognitiveservices-speech - Azure Speech SDK

### Frontend
- react - UI library
- axios - HTTP client
- tailwindcss - Utility-first CSS
- postcss - CSS processing
- autoprefixer - CSS vendor prefixes

## 🚀 Deployment

### Backend (Example: Heroku)
```bash
git push heroku main
```

### Frontend (Example: Vercel)
```bash
npm install -g vercel
vercel
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Karan** - [GitHub](https://github.com/karan7307)

## 🙏 Acknowledgments

- Azure Cognitive Services for Speech & Translation APIs
- React and Tailwind CSS communities
- FastAPI documentation and examples

## 📬 Support

For issues and questions, please open an GitHub issue on the [repository](https://github.com/karan7307/Speech-Translator).

---

**Made with ❤️ using Azure, React, and FastAPI**
