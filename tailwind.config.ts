import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ink:"#0A0A0A", muted:"rgba(255,255,255,0.70)", gold:"#D4AF37", ember:"#E11D48" },
    boxShadow: { soft:"0 10px 30px rgba(0,0,0,0.35)" },
    backgroundImage: { "hero-glow":"radial-gradient(600px circle at 50% 0%, rgba(212,175,55,0.18), transparent 55%), radial-gradient(700px circle at 15% 20%, rgba(225,29,72,0.10), transparent 55%), radial-gradient(700px circle at 85% 20%, rgba(225,29,72,0.08), transparent 55%)" },
    letterSpacing: { tighter2:"-0.03em" },
  }},
  plugins: [],
} satisfies Config;
