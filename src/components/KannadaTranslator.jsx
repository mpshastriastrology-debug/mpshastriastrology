import { useEffect, useState } from "react";
import "./KannadaTranslator.css";

function getActiveLanguage() {
  const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
  if (!match) return "en";
  return decodeURIComponent(match[1]).includes("/kn") ? "kn" : "en";
}

function clearGoogTransCookies() {
  const expires = "expires=Thu, 01 Jan 1970 00:00:00 GMT";
  const host = window.location.hostname;
  document.cookie = `googtrans=;${expires};path=/`;
  if (host !== "localhost") {
    document.cookie = `googtrans=;${expires};path=/;domain=${host}`;
    document.cookie = `googtrans=;${expires};path=/;domain=.${host}`;
  }
}

function setGoogTransLanguage(lang) {
  const host = window.location.hostname;

  if (lang === "en") {
    clearGoogTransCookies();
  } else {
    document.cookie = "googtrans=/en/kn;path=/";
    if (host !== "localhost") {
      document.cookie = `googtrans=/en/kn;path=/;domain=${host}`;
      document.cookie = `googtrans=/en/kn;path=/;domain=.${host}`;
    }
  }

  window.location.reload();
}

function loadGoogleTranslate() {
  if (window.__kannadaTranslatorLoaded) return;

  window.googleTranslateElementInit = () => {
    if (!window.google?.translate?.TranslateElement) return;

    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "en,kn",
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
      },
      "google_translate_element"
    );
    window.__kannadaTranslatorLoaded = true;
  };

  if (document.getElementById("google-translate-script")) {
    window.googleTranslateElementInit?.();
    return;
  }

  const script = document.createElement("script");
  script.id = "google-translate-script";
  script.src =
    "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  script.async = true;
  document.body.appendChild(script);
}

export default function KannadaTranslator({ variant = "default" }) {
  const isHeader = variant === "header";
  const [activeLang, setActiveLang] = useState("en");

  useEffect(() => {
    setActiveLang(getActiveLanguage());
    loadGoogleTranslate();
  }, []);

  const switchLanguage = (lang) => {
    if (lang === activeLang) return;
    setGoogTransLanguage(lang);
  };

  if (isHeader) {
    return (
      <div className="headerLanguage" role="group" aria-label="Page language">
        <button
          type="button"
          className={activeLang === "en" ? "headerLanguageBtn active" : "headerLanguageBtn"}
          onClick={() => switchLanguage("en")}
          aria-pressed={activeLang === "en"}
        >
          EN
        </button>
        <button
          type="button"
          className={activeLang === "kn" ? "headerLanguageBtn active" : "headerLanguageBtn"}
          onClick={() => switchLanguage("kn")}
          aria-pressed={activeLang === "kn"}
        >
          ಕನ್ನಡ
        </button>
        <div id="google_translate_element" className="headerLanguageWidget" aria-hidden="true" />
      </div>
    );
  }

  return (
    <div className="kannadaTranslator">
      <p className="kannadaTranslatorTitle">English / ಕನ್ನಡ Translator</p>
      <p className="kannadaTranslatorHint">
        Select <strong>ಕನ್ನಡ</strong> to read this page in Kannada. Select{" "}
        <strong>English</strong> to switch back.
      </p>
      <div className="kannadaTranslatorWidget">
        <div className="kannadaTranslatorToggle">
          <button
            type="button"
            className={activeLang === "en" ? "kannadaTranslatorBtn active" : "kannadaTranslatorBtn"}
            onClick={() => switchLanguage("en")}
          >
            English
          </button>
          <button
            type="button"
            className={activeLang === "kn" ? "kannadaTranslatorBtn active" : "kannadaTranslatorBtn"}
            onClick={() => switchLanguage("kn")}
          >
            ಕನ್ನಡ
          </button>
        </div>
      </div>
    </div>
  );
}
