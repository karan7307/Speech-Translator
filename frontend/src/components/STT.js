import React, { useState } from "react";
import axios from "axios";

const STT = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadAudio = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const res = await axios.post("http://127.0.0.1:8000/stt", formData);
      setText(res.data.text);
    } catch (error) {
      setText("Error: " + error.message);
    }
    setLoading(false);
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="text-4xl">🎤</div>
        <div>
          <h2 className="text-2xl font-bold text-white">Speech to Text</h2>
          <p className="text-sm text-gray-300">Convert voice to text</p>
        </div>
      </div>

      <label className="block group cursor-pointer">
        <div className="border-2 border-dashed border-blue-400/50 group-hover:border-blue-400 rounded-2xl p-8 text-center transition duration-300 bg-blue-500/5 group-hover:bg-blue-500/10">
          <div className="text-5xl mb-3 transform group-hover:scale-110 transition">🎵</div>
          <p className="text-white font-semibold mb-1">Upload Audio</p>
          <p className="text-sm text-gray-400">Click or drag your audio file here</p>
          <input
            type="file"
            accept="audio/*"
            onChange={uploadAudio}
            className="hidden"
          />
        </div>
      </label>

      {loading && (
        <div className="mt-4 flex items-center justify-center">
          <div className="w-6 h-6 border-3 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
          <span className="ml-3 text-gray-300">Processing audio...</span>
        </div>
      )}

      {text && (
        <div className="mt-6 p-4 rounded-xl bg-blue-500/20 border border-blue-400/50">
          <p className="text-blue-300 font-semibold mb-2">✓ Transcribed Text:</p>
          <p className="text-white text-sm leading-relaxed">{text}</p>
        </div>
      )}
    </div>
  );
};

export default STT;
