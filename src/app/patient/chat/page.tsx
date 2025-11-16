import { ChatPanel } from "@/components/chat-panel";

const messages = [
  {
    id: "m1",
    author: "Alex Rivera",
    role: "patient" as const,
    timestamp: "Today · 09:42",
    body: "Morning fasting glucose was 98 mg/dL. Had mild nausea after breakfast.",
    outbound: true,
  },
  {
    id: "m2",
    author: "Nurse Priya",
    role: "nurse" as const,
    timestamp: "Today · 09:47",
    body: "Thanks for the update! Please log post-meal readings. Any dizziness?",
  },
  {
    id: "m3",
    author: "Alex Rivera",
    role: "patient" as const,
    timestamp: "Today · 09:49",
    body: "No dizziness. Hydration on track. Should I take anti-nausea med?",
    outbound: true,
  },
  {
    id: "m4",
    author: "Dr. Amara Desai",
    role: "doctor" as const,
    timestamp: "Today · 10:05",
    body: "Skip anti-nausea for now. Have a protein snack and retake glucose at noon. Ping if symptoms worsen.",
  },
];

export default function PatientChatPage() {
  return <ChatPanel messages={messages} />;
}
