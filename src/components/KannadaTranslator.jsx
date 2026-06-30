import { useEffect } from "react";
import "./KannadaTranslator.css";

export default function KannadaTranslator() {
  useEffect(() => {
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
  }, []);

  return (
    <div className="kannadaTranslator">
      <p className="kannadaTranslatorTitle">English / ಕನ್ನಡ Translator</p>
      <p className="kannadaTranslatorHint">
        Select <strong>ಕನ್ನಡ</strong> to read this page in Kannada. Select <strong>English</strong> to switch back.
      </p>
      <div id="google_translate_element" className="kannadaTranslatorWidget" />
    </div>
  );
}
