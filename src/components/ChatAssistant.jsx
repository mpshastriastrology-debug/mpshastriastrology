import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Send, X } from "lucide-react";
import {
  getAutoReply,
  QUICK_PROMPTS,
  WELCOME_MESSAGE,
} from "../utils/chatAssistant";

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

  const actionClass =
    "inline-flex items-center justify-center rounded-full bg-ink px-3 py-2 text-xs font-semibold text-white no-underline";
  const secondaryActionClass =
    "inline-flex items-center justify-center rounded-full border border-ink/15 bg-transparent px-3 py-2 text-xs font-semibold text-ink no-underline";

  return (
    <>
      {!open && (
        <button
          type="button"
          className="fixed bottom-6 left-6 z-[1200] flex cursor-pointer items-center gap-2.5 rounded-full border-0 bg-gradient-to-br from-gold to-gold-dark px-[18px] py-3.5 font-body text-sm font-semibold text-white shadow-[0_12px_30px_rgba(212,175,55,0.35)] transition hover:-translate-y-0.5 md:px-3.5 md:py-3.5"
          onClick={() => setOpen(true)}
          aria-label="Open astrology assistant chat"
        >
          <MessageCircle size={26} />
          <span className="hidden sm:inline">Ask MP Shastri</span>
        </button>
      )}

      {open && (
        <section
          className="fixed bottom-4 left-4 z-[1200] flex h-[min(620px,calc(100vh-48px))] w-[min(380px,calc(100vw-32px))] flex-col overflow-hidden rounded-[22px] border border-gold/20 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.18)] md:h-[calc(100vh-32px)] md:w-[calc(100vw-32px)]"
          aria-label="Astrology assistant chat"
        >
          <header className="flex items-center justify-between gap-3 bg-gradient-to-br from-ink to-[#2a2418] px-[18px] py-4 text-white">
            <div>
              <h3 className="font-display text-2xl font-semibold">MP Shastri Assistant</h3>
              <p className="mt-1 font-body text-xs text-white/75">Instant answers • Book consultations</p>
            </div>
            <button
              type="button"
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-0 bg-white/10 text-white"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </header>

          <div ref={messagesRef} className="flex flex-1 flex-col gap-3 overflow-y-auto bg-cream p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[88%] whitespace-pre-line rounded-2xl px-3.5 py-3 font-body text-sm leading-relaxed ${
                  message.sender === "user"
                    ? "self-end rounded-br-md bg-gold text-white"
                    : "self-start rounded-bl-md border border-gold/15 bg-white text-[#333]"
                }`}
              >
                <p className="m-0">{message.text}</p>
                {message.action && (
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {message.action.external ? (
                      <a
                        href={message.action.href}
                        target="_blank"
                        rel="noreferrer"
                        className={actionClass}
                      >
                        {message.action.label}
                      </a>
                    ) : (
                      <Link to={message.action.href} className={actionClass} onClick={() => setOpen(false)}>
                        {message.action.label}
                      </Link>
                    )}
                    {message.secondaryAction &&
                      (message.secondaryAction.external ? (
                        <a
                          href={message.secondaryAction.href}
                          target="_blank"
                          rel="noreferrer"
                          className={secondaryActionClass}
                        >
                          {message.secondaryAction.label}
                        </a>
                      ) : (
                        <Link
                          to={message.secondaryAction.href}
                          className={secondaryActionClass}
                          onClick={() => setOpen(false)}
                        >
                          {message.secondaryAction.label}
                        </Link>
                      ))}
                  </div>
                )}
              </div>
            ))}

            {typing && (
              <div className="chat-typing flex min-h-[42px] max-w-[88%] items-center gap-1.5 self-start rounded-2xl rounded-bl-md border border-gold/15 bg-white px-3.5 py-3">
                <span className="h-2 w-2 rounded-full bg-gold" />
                <span className="h-2 w-2 rounded-full bg-gold" />
                <span className="h-2 w-2 rounded-full bg-gold" />
              </div>
            )}
          </div>

          <div className="flex gap-2 overflow-x-auto border-t border-gold/10 bg-white px-3 py-2.5">
            {QUICK_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                type="button"
                className="shrink-0 cursor-pointer rounded-full border border-gold/25 bg-white px-3 py-2 font-body text-xs text-ink hover:bg-gold/10 disabled:cursor-not-allowed disabled:opacity-60"
                onClick={() => handleSend(prompt)}
                disabled={typing}
              >
                {prompt}
              </button>
            ))}
          </div>

          <form className="flex gap-2 border-t border-gold/10 bg-white p-3" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about astrology, Vastu, booking..."
              aria-label="Type your question"
              disabled={typing}
              className="flex-1 rounded-full border border-gold/25 px-3.5 py-3 font-body text-sm outline-none focus:border-gold"
            />
            <button
              type="submit"
              disabled={typing || !input.trim()}
              aria-label="Send message"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-0 bg-gold text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </form>
        </section>
      )}
    </>
  );
}

export default ChatAssistant;
