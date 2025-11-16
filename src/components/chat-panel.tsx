import clsx from "clsx";

interface Message {
  id: string;
  author: string;
  role: "patient" | "doctor" | "nurse" | "support";
  timestamp: string;
  body: string;
  outbound?: boolean;
}

export function ChatPanel({ messages }: { messages: Message[] }) {
  return (
    <div className="glass-panel flex h-[32rem] flex-col bg-white/95">
      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
        <div>
          <p className="text-sm font-semibold text-slate-900">Care Team Conversation</p>
          <p className="text-xs text-slate-500">Coordinated replies from your assigned clinicians</p>
        </div>
        <button
          type="button"
          className="rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-600"
        >
          Start new topic
        </button>
      </div>
      <div className="flex-1 space-y-4 overflow-y-auto px-6 py-4">
        {messages.map((message) => {
          const bubbleClasses = message.outbound
            ? "bg-sky-500 text-white"
            : "bg-slate-100 text-slate-700";
          const metaClasses = message.outbound ? "text-sky-100" : "text-slate-400";
          return (
            <div
              key={message.id}
              className={clsx("flex", message.outbound ? "justify-end" : "justify-start")}
            >
              <div
                className={clsx(
                  "max-w-[70%] rounded-2xl px-4 py-3 text-sm shadow-sm shadow-slate-900/5",
                  bubbleClasses
                )}
              >
                <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-wide">
                  <span className="font-semibold">
                    {message.author}
                    <span className={clsx("ml-2 text-[10px] font-medium", metaClasses)}>
                      {message.role === "patient" ? "Patient" : message.role}
                    </span>
                  </span>
                  <span className={clsx("text-[10px]", metaClasses)}>{message.timestamp}</span>
                </div>
                <p className="mt-2 leading-relaxed">{message.body}</p>
              </div>
            </div>
          );
        })}
      </div>
      <form className="border-t border-slate-200 px-6 py-4">
        <label htmlFor="chat-input" className="sr-only">
          Send a message to the care team
        </label>
        <div className="flex items-center gap-3">
          <textarea
            id="chat-input"
            rows={2}
            className="flex-1 resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-inner focus:border-sky-500 focus:outline-none"
            placeholder="Share an update or ask a question"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-slate-700"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
