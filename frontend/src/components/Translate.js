import React, { useState } from "react";
import axios from "axios";

const Translate = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [lang, setLang] = useState("hi");
  const [loading, setLoading] = useState(false);

  const translateText = async () => {
    if (!input) return;

    try {
      setLoading(true);
      const res = await axios.post("http://127.0.0.1:8000/translate", {
        text: input,
        lang: lang,
      });
      setOutput(res.data.output);
    } catch (error) {
      setOutput("Error: " + error.message);
    }
    setLoading(false);
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="text-4xl">🌐</div>
        <div>
          <h2 className="text-2xl font-bold text-white">Translation</h2>
          <p className="text-sm text-gray-300">Translate to any language</p>
        </div>
      </div>

      <textarea
        className="w-full p-4 rounded-xl bg-purple-500/10 border border-purple-400/50 focus:border-purple-400 focus:outline-none text-white placeholder-gray-400 resize-none transition backdrop-blur"
        placeholder="Enter text to translate..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows="4"
      />

      <select
        className="w-full mt-4 p-3 rounded-xl bg-purple-500/10 border border-purple-400/50 focus:border-purple-400 focus:outline-none text-white focus:outline-none transition backdrop-blur"
        value={lang}
        onChange={(e) => setLang(e.target.value)}
      >
        <option value="hi">🇮🇳 Hindi</option>
        <option value="en">🇺🇸 English</option>
        <option value="fr">🇫🇷 French</option>
        <option value="es">🇪🇸 Spanish</option>
        <option value="ja">🇯🇵 Japanese</option>
      </select>

      <button
        onClick={translateText}
        disabled={loading || !input}
        className="w-full mt-5 py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold rounded-xl transition duration-300 transform hover:scale-105 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Translating...
          </>
        ) : (
          <>✨ Translate</>
        )}
      </button>

      {output && (
        <div className="mt-6 p-5 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/50">
          <p className="text-purple-300 font-semibold mb-3">✓ Translation:</p>
          <p className="text-white text-sm leading-relaxed">{output}</p>
        </div>
      )}
    </div>
  );
};

export default Translate;
