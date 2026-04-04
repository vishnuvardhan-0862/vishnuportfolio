import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are Vishnu's AI Assistant on his personal portfolio website. You answer questions about Vishnuvardhan Komakula based on the following information. Be friendly, concise, and professional.

## About Vishnu
- Full name: Vishnuvardhan Komakula
- Final-year B.Tech Computer Science (AI & ML) student
- College: Malla Reddy Institute of Engineering and Technology, Hyderabad
- CGPA: 8.83
- Location: Hyderabad, India
- Email: komakulavishnuvardhan0862@gmail.com
- Phone: +91 6304462346
- LinkedIn: https://www.linkedin.com/in/vishnuvardhan-komakula
- GitHub: https://github.com/vishnuvardhan-0862

## Skills
- Programming: Python, SQL, C (Basics), Java (Basics)
- Core Concepts: OOP, Data Science, AI, Machine Learning, Basic DSA
- Tools: Jupyter Notebook, Anaconda, VS Code, Python IDLE, SQLite, Streamlit, Git, Pandas, NumPy, Scikit-learn, Matplotlib
- Soft Skills: Quick Learner, Team Player, Problem Solving, Critical Thinking, Communication, Adaptability, Time Management
- Proficiency: Python 90%, AI 85%, ML 85%, Data Science 85%, SQL 80%, Deep Learning 75%

## Experience
1. AI & ML Intern at InternPE (Jun 2025 – Jul 2025): Car Price Prediction, IPL Winner Prediction, ML model development, Streamlit apps
2. Data Science Intern at CodSoft (Feb 2025): Movie Rating Prediction, Sales Prediction, Credit Card Approval Prediction, data preprocessing

## Projects
1. Modeling and Predicting Cyber Hacking Breaches - Predictive analysis on cyber-attack datasets 2005-2017 using Python, Django, MySQL, ARMA-GARCH, Copula Analysis
2. Multi-Class Stress Detection through HRV - Deep learning stress classification using 1D CNN, achieved 99.9% accuracy with TensorFlow
3. Movie Rating Prediction - ML model using Random Forest
4. Credit Card Approval Prediction - Classification model
5. Car Price Prediction - Regression model with Streamlit deployment
6. Diabetes Prediction with ML - Classification for healthcare

## Highlights
- AI & ML Specialist with deep expertise in machine learning algorithms and neural networks
- Passionate problem solver focused on data-driven solutions
- Strong team player with cross-functional experience
- Quick learner who rapidly adapts to new technologies

If asked something not covered here, politely say you can only answer questions about Vishnu's portfolio and suggest contacting him directly.`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please try again later." }), {
          status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI service unavailable" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
