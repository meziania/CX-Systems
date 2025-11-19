import { Feature } from "@/types/feature";

const servicesData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm0 36c-8.837 0-16-7.163-16-16S11.163 4 20 4s16 7.163 16 16-7.163 16-16 16z"/>
        <path d="M20 8c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S26.627 8 20 8zm0 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/>
        <circle cx="20" cy="20" r="4"/>
      </svg>
    ),
    title: "CX Consulting",
    paragraph: "Our experts analyze your customer journey and identify optimization opportunities to maximize customer satisfaction and loyalty."
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M35 5H5c-2.757 0-5 2.243-5 5v20c0 2.757 2.243 5 5 5h30c2.757 0 5-2.243 5-5V10c0-2.757-2.243-5-5-5zM5 8h30c1.103 0 2 .897 2 2v3H3v-3c0-1.103.897-2 2-2zm30 24H5c-1.103 0-2-.897-2-2V16h34v14c0 1.103-.897 2-2 2z"/>
        <path d="M8 20h8v4H8zM22 20h10v2H22zM22 24h6v2h-6z"/>
      </svg>
    ),
    title: "Unified Platform",
    paragraph: "Centralize all your customer interactions (email, chat, phone, social media) in a single, intuitive and high-performance interface for simplified and efficient management."
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M20 2L5 8v12c0 10.55 7.3 20.74 17 23 9.7-2.26 17-12.45 17-23V8L20 2zm0 4.32L33 10v10c0 8.11-5.61 16.78-13 19-7.39-2.22-13-10.89-13-19V10l13-3.68z"/>
        <path d="M18 24l-6-6 2.83-2.83L18 18.34l7.17-7.17L28 14l-10 10z"/>
      </svg>
    ),
    title: "Predictive AI",
    paragraph: "Anticipate your customers' needs with our artificial intelligence algorithms that analyze behaviors and predict future actions for a personalized experience."
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm0 36c-8.837 0-16-7.163-16-16S11.163 4 20 4s16 7.163 16 16-7.163 16-16 16z"/>
        <path d="M25 15h-5V10c0-1.104-.896-2-2-2s-2 .896-2 2v5h-5c-1.104 0-2 .896-2 2s.896 2 2 2h5v5c0 1.104.896 2 2 2s2-.896 2-2v-5h5c1.104 0 2-.896 2-2s-.896-2-2-2z"/>
      </svg>
    ),
    title: "Training & Support",
    paragraph: "Benefit from comprehensive support with customized training and 24/7 technical support, ensuring the success of your digital transformation."
  }
];

export default servicesData;