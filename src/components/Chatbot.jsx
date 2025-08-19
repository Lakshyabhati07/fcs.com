import { useState, useRef, useEffect } from "react";
import { XMarkIcon, PaperAirplaneIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";

// Predefined FAQs
const faqs = [
  { keywords: ["services", "offer", "provide", "do"], answer: "We provide services in Food Safety, Quality, Sustainability, Certification, Auditing, and Consulting. We specialize in industries like Food & Feed Safety, Pharma, Packaging, CSR, and more." },
  { keywords: ["name", "owner", "ceo"], answer: "Anjana Singh founded this company in 2021." },
  { keywords: ["contact", "email", "phone", "address"], answer: "You can reach us at fortuneconsultants23@gmail.com or call 9425832323. Our office is in Greater Noida, Uttar Pradesh, India." },
  { keywords: ["about", "company", "fortune consultants", "who are you"], answer: "Fortune Consultants, established in 2021, specializes in Food Safety, Quality, EHS, OHSAS, and Social Standards. We bring 25+ years of industry expertise to deliver sustainable solutions." },
  { keywords: ["mission", "goal", "objective", "motive"], answer: "Our mission is to act as a neutral partner for training, certification, and auditing to deliver compliance, performance, and long-term value for clients." },
  { keywords: ["vision", "future", "aim"], answer: "Our vision is to be a sustainable growth partner in the progressive journey of our esteemed customers." },
  { keywords: ["certification", "iso", "haccp", "usfda", "zed", "brcgs"], answer: "We provide support for HACCP, ISO, USFDA registration, ZED, SEDEX compliance, BRCGS, and other product certifications." },
  { keywords: ["specialization", "industry", "sector"], answer: "We specialize in Food Safety, Pharma, Nutraceutical, Packaging, Sustainability, CSR, and Quality-Environment compliance." },
  { keywords: ["training", "audit", "auditing"], answer: "We offer training sessions, internal audits, hygiene auditing, and risk assessments to ensure compliance and operational excellence." },
  { keywords: ["projects", "completed", "ongoing"], answer: "We have completed projects in fruit pulp processing, mushroom cultivation, juice production, vegetable dehydration, and more." },
  { keywords: ["client", "customers", "testimonials"], answer: "We have served clients across Food, Pharma, and Packaging industries, delivering sustainable and customized solutions." },
  { keywords: ["team", "experts", "experience"], answer: "Our team includes technical, commercial, R&D, legal, and auditing experts with 25+ years of experience in the industry." },
  { keywords: ["cost", "pricing", "fee"], answer: "Our pricing is tailored based on project scope. Contact us at fortuneconsultants23@gmail.com for a detailed quotation." },
  { keywords: ["csr", "sustainability", "green", "eco"], answer: "We provide Sustainability & CSR consulting, energy efficiency solutions, and greenfield project planning." },
  { keywords: ["office", "location", "where"], answer: "Our office is located in Greater Noida, Uttar Pradesh, India." },
  { keywords: ["hi", "hello", "good morning", "evening"], answer: "Hello! How may I help you?" },
  { keywords: ["default", ""], answer: "I’m sorry, I don’t have an answer for that. Could you ask about our services, certifications, or contact details?" },
];

const getBotResponse = (userMessage) => {
  const message = userMessage.toLowerCase();
  let bestMatch = { score: 0, answer: "" };

  faqs.forEach((faq) => {
    let score = 0;
    faq.keywords.forEach((keyword) => {
      if (message.includes(keyword.toLowerCase())) score++;
    });
    if (score > bestMatch.score) bestMatch = { score, answer: faq.answer };
  });

  return bestMatch.score > 0 ? bestMatch.answer : faqs.find(f => f.keywords.includes("default")).answer;
};

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [open, setOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);

    const botResponse = getBotResponse(input);
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
    }, 400);

    setInput("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 bg-orange-700 hover:bg-orange-800 text-white p-3 rounded-full shadow-lg z-50"
        aria-label="Open chatbot"
      >
        <ChatBubbleLeftEllipsisIcon className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div
      role="dialog"
      aria-label="Chatbot window"
      className="fixed bottom-4 right-4 w-[90%] max-w-xs bg-white border shadow-xl rounded-lg flex flex-col z-50"
    >
      {/* Header */}
      <div className="flex justify-between items-center bg-orange-500 text-white px-3 py-2 rounded-t-lg">
        <span className="font-semibold text-sm">Chat with us</span>
        <button onClick={() => setOpen(false)} aria-label="Close chatbot">
          <XMarkIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="h-64 overflow-y-auto space-y-2 text-sm p-3 bg-gray-50">
        {messages.map((msg, i) => (
          <div key={i} className={msg.sender === "user" ? "text-right" : "text-left"}>
            <span
              className={`inline-block px-3 py-1 rounded-lg max-w-[80%] ${
                msg.sender === "user" ? "bg-orange-100" : "bg-white border"
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>

      {/* Input */}
      <div className="flex gap-2 p-3 border-t">
        <input
          type="text"
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          className="flex-1 border rounded px-3 py-1 text-sm focus:outline-none"
          aria-label="Chat input"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded"
          aria-label="Send message"
        >
          <PaperAirplaneIcon className="w-5 h-5 transform rotate-0" />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
