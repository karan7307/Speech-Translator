from fastapi import FastAPI, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
import io
from azure_speech import speech_to_text, text_to_speech, translate_text

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/stt")
async def stt(file: UploadFile):
    audio = await file.read()
    output = speech_to_text(audio)
    return {"text": output}

@app.post("/translate")
async def translation_api(data: dict):
    text = data["text"]
    lang = data["lang"]
    translated = translate_text(text, lang)
    return {"output": translated}

@app.post("/tts")
async def tts(data: dict):
    text = data["text"]
    audio = text_to_speech(text)
    return StreamingResponse(io.BytesIO(audio), media_type="audio/wav")
@app.get("/")
def home():
    return {"status": "Backend running"}
