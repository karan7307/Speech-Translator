import React, { useState } from "react";
import axios from "axios";

const TTS = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const speak = async () => {
    if (!text) return;

    try {
      setLoading(true);
      const res = await axios.post(
        "http://127.0.0.1:8000/tts",
        { text: text },
        { responseType: "blob" }
      );

      const url = URL.createObjectURL(res.data);
      new Audio(url).play();
    } catch (error) {
      alert("Error: " + error.message);
    }
    setLoading(false);
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="text-4xl">🔊</div>
        <div>
          <h2 className="text-2xl font-bold text-white">Text to Speech</h2>
          <p className="text-sm text-gray-300">Hear your text out loud</p>
        </div>
      </div>

      <textarea
        className="w-full p-4 rounded-xl bg-green-500/10 border border-green-400/50 focus:border-green-400 focus:outline-none text-white placeholder-gray-400 resize-none transition backdrop-blur"
        placeholder="Enter text to speak..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="4"
      />

      <button
        onClick={speak}
        disabled={loading || !text}
        className="w-full mt-5 py-3 px-6 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold rounded-xl transition duration-300 transform hover:scale-105 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Speaking...
          </>
        ) : (
          <>🎵 Speak</>
        )}
      </button>

      <p className="text-center text-xs text-gray-400 mt-4">
        Audio will play automatically when ready
      </p>
    </div>
  );
};

export default TTS;
