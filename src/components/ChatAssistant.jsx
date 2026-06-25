import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Send, X } from "lucide-react";
import {
  getAutoReply,
  QUICK_PROMPTS,
  WELCOME_MESSAGE,
} from "../utils/chatAssistant";
import "./ChatAssistant.css";

function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const messagesRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, typing, open]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  const pushAssistantReply = (userText) => {
    setTyping(true);

    window.setTimeout(() => {
      const reply = getAutoReply(userText);
      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          sender: "assistant",
          text: reply.text,
          action: reply.action,
          secondaryAction: reply.secondaryAction,
        },
      ]);
      setTyping(false);
    }, 700);
  };

  const handleSend = (text) => {
    const trimmed = text.trim();
    if (!trimmed || typing) return;

    setMessages((prev) => [
      ...prev,
      { id: `user-${Date.now()}`, sender: "user", text: trimmed },
    ]);
    setInput("");
    pushAssistantReply(trimmed);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSend(input);
  };

  return (
    <>
      {!open && (
        <button
          type="button"
          className="chatAssistantToggle"
          onClick={() => setOpen(true)}
          aria-label="Open astrology assistant chat"
        >
          <MessageCircle size={26} />
          <span>Ask MP Shastri</span>
        </button>
      )}

      {open && (
        <section className="chatAssistantPanel" aria-label="Astrology assistant chat">
          <header className="chatAssistantHeader">
            <div>
              <h3>MP Shastri Assistant</h3>
              <p>Instant answers • Book consultations</p>
            </div>
            <button
              type="button"
              className="chatAssistantClose"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </header>

          <div className="chatAssistantMessages" ref={messagesRef}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`chatAssistantBubble chatAssistantBubble--${message.sender}`}
              >
                <p>{message.text}</p>
                {message.action && (
                  <div className="chatAssistantActions">
                    {message.action.external ? (
                      <a
                        href={message.action.href}
                        target="_blank"
                        rel="noreferrer"
                        className="chatAssistantActionBtn"
                      >
                        {message.action.label}
                      </a>
                    ) : (
                      <Link
                        to={message.action.href}
                        className="chatAssistantActionBtn"
                        onClick={() => setOpen(false)}
                      >
                        {message.action.label}
                      </Link>
                    )}
                    {message.secondaryAction && (
                      <Link
                        to={message.secondaryAction.href}
                        className="chatAssistantActionBtn chatAssistantActionBtn--secondary"
                        onClick={() => setOpen(false)}
                      >
                        {message.secondaryAction.label}
                      </Link>
                    )}
                  </div>
                )}
              </div>
            ))}

            {typing && (
              <div className="chatAssistantBubble chatAssistantBubble--assistant chatAssistantTyping">
                <span />
                <span />
                <span />
              </div>
            )}
          </div>

          <div className="chatAssistantQuickPrompts">
            {QUICK_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                type="button"
                className="chatAssistantPrompt"
                onClick={() => handleSend(prompt)}
                disabled={typing}
              >
                {prompt}
              </button>
            ))}
          </div>

          <form className="chatAssistantForm" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about astrology, Vastu, booking..."
              aria-label="Type your question"
              disabled={typing}
            />
            <button type="submit" disabled={typing || !input.trim()} aria-label="Send message">
              <Send size={18} />
            </button>
          </form>
        </section>
      )}
    </>
  );
}

export default ChatAssistant;
