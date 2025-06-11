import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Navbar */}
      <nav className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
        <Link href={"/"} className="text-2xl font-bold text-primary">
          <Image
            src="/logo.png"
            alt="Propalai Logo"
            width={150}
            height={50}
            className="h-8"
            priority
          />
        </Link>
        <div className="space-x-4">
          <Link href="#features" className="hover:underline">
            Features
          </Link>
          <Link href="/signup" className="hover:underline">
            Signup
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center px-4 w-full flex justify-between items-center">
        <div className="w-full flex flex-col gap-y-8 justify-start items-start text-start px-10">
          <p className="text-8xl text-white font-bold">
            Revolutionize interactions
          </p>
          <h1 className="text-6xl font-bold animated-gradient-text">
            with Voice AI
          </h1>
          <p className="text-2xl text-gray-300 mb-6">
            Our AI-powered voice agents create human-like, emotionally
            expressive conversations that transform customer interactions across
            your business.
          </p>

          <Link href="/signup">
            <button className="bg-primary text-white px-6 py-3 bg-gradient-to-r from-cyan-400 to bg-green-400 rounded-2xl hover:scale-105 cursor-pointer transition-colors">
              Get Started
            </button>
          </Link>
        </div>
        <video autoPlay loop={true} className=" w-full h-full object-cover">
          <source
            src="https://www.propalai.com/assets/gif.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div
          className="absolute z-30 transition-opacity duration-3000 ease-in-out hidden sm:block animate-float-slow"
          style={{ top: "6rem", right: "2rem", opacity: 1 }}
        >
          <div className="relative p-3 sm:p-4 max-w-[180px] sm:max-w-[280px] bg-white/10 backdrop-blur-md text-white shadow-md rounded-2xl rounded-tr-sm">
            <p className="text-sm sm:text-base">
              Hi, I need to schedule an appointment.
            </p>
          </div>
        </div>
        <div
          className="absolute z-30 transition-opacity duration-3000 ease-in-out hidden sm:block animate-float-medium"
          style={{ top: "70%", right: "23rem", opacity: 1 }}
        >
          <div className="relative p-3 sm:p-4 max-w-[180px] sm:max-w-[280px] bg-gradient-to-r from-cyan-400/70 to-green-400/70 text-white shadow-md rounded-2xl rounded-tl-sm">
            <div className="absolute -left-6 sm:-left-8 -top-3 sm:-top-4">
              <div className="bg-gradient-to-r from-cyan-400 to-green-300 rounded-full p-1 shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-sparkles h-4 w-4 text-decagon-primary"
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                  <path d="M20 3v4"></path>
                  <path d="M22 5h-4"></path>
                  <path d="M4 17v2"></path>
                  <path d="M5 18H3"></path>
                </svg>
              </div>
            </div>
            <p className="text-sm sm:text-base">
              I can help you with that. What day works best for you?
            </p>
          </div>
        </div>
      </section>

      <div className="overflow-hidden bg-gradient-to-r from-cyan-400 to-green-400 py-5">
        <div className="marquee-wrapper">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-x-20 px-4">
              {[
                ["🚀 Ultra-Low Latency", "10x Faster Call Handling"],
                ["🎯 Custom Voice Agents", "Create in Minutes"],
                ["📞 Call Automation", "Inbound & Outbound"],
                ["📊 Real-Time Analytics", "Business Insights"],
                ["🔁 Campaign Automation", "Schedule & Run Seamlessly"],
                ["🧠 Intent Recognition", "Conversational Memory"],
              ].map(([title, desc], index) => (
                <div key={index + i * 100} className="text-white">
                  <div className="flex flex-col items-center">
                    <span className="text-xl font-bold">{title}</span>
                    <span className="text-sm">{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section id="features" className="py-16 text-center">
        <h2 className="text-3xl font-bold text-white">
          Enterprise-ready Voice AI platform
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Our platform helps businesses create custom AI voice agents that
          deliver 10x productivity across all customer interactions.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
          {[
            {
              icon: "🤖",
              title: "Human-like Voice Agents",
              desc: "Create custom AI voice agents with expressive emotions and personalities tailored to your brand in minutes.",
            },
            {
              icon: "📞",
              title: "Automated Call Handling",
              desc: "Simplify both inbound and outbound calls with automated workflows that handle customer interactions 10x faster.",
            },
            {
              icon: "📆",
              title: "Seamless Campaign Management",
              desc: "Auto-schedule and run large-scale outreach campaigns with detailed reporting and follow-up capabilities.",
            },
            {
              icon: "📁",
              title: "Complete Conversation Storage",
              desc: "Access full call logs, audio files and transcript storage for compliance, training and performance analysis.",
            },
            {
              icon: "📊",
              title: "Real-Time Analytics",
              desc: "Gain valuable business insights through advanced call analytics that identify trends and improvement opportunities.",
            },
            {
              icon: "🔒",
              title: "Secure Multi-User Access",
              desc: "Manage multiple users, teams, and departments with customizable roles and permissions for enterprise security.",
            },
            {
              icon: "🚀",
              title: "Ultra-Low Latency",
              desc: "Industry-leading call latency and voice responsiveness for natural, human-like conversations at scale.",
            },
            {
              icon: "🔌",
              title: "Seamless Integrations",
              desc: "Connect with CRMs, ERPs, and business applications you already use for a unified workflow experience.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-100 shadow-sm p-6 text-left hover:shadow-md transition"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-200 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 text-center bg-gray-800">
        <h2 className="text-3xl font-bold text-gray-100">
          Transform business communication
        </h2>
        <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
          From reducing response times to scaling customer interactions, our
          Voice AI agents deliver measurable results across industries.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
          {[
            {
              icon: "🎧",
              title: "24/7 Customer Support",
              desc: "Handle inbound support inquiries around the clock with AI voice agents that can resolve common issues and escalate complex ones.",
            },
            {
              icon: "🛒",
              title: "Intelligent Sales Outreach",
              desc: "Schedule automated outbound calls with conversational memory that remembers context for lead qualification and follow-ups.",
            },
            {
              icon: "📅",
              title: "Seamless Scheduling",
              desc: "Manage calendar scheduling, confirmations, and reminders with AI that handles the back-and-forth naturally.",
            },
            {
              icon: "📄",
              title: "Compliance & Script Adherence",
              desc: "Monitor conversations for regulatory compliance and script adherence automatically, with built-in reporting.",
            },
            {
              icon: "🌐",
              title: "Multilingual Support",
              desc: "Engage customers in their preferred language with effortless multilingual conversation capabilities.",
            },
            {
              icon: "📈",
              title: "Enterprise Scalability",
              desc: "Deploy thousands of concurrent AI voice agents that learn and improve from every conversation.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-100 shadow-sm p-6 text-left hover:shadow-md transition"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-200 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>


      <section className="bg-gray-900 py-16 text-center">
  <h2 className="text-4xl font-bold text-white">Pricing</h2>
  <p className="mt-3 text-gray-300">
    Pay only for what you use — <span className="font-semibold">50¢ per minute</span> of AI voice interaction.
  </p>

  <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
    {[
      {
        name: 'Basic',
        price: '$9',
        period: 'mo',
        features: [
          '20 mins',
          '3 Concurrent Calls',
          'Voice API & Transcriber',
          '1 Assistant',
          'Basic Integrations',
        ],
      },
      {
        name: 'Starter',
        price: '$19',
        period: 'mo',
        features: [
          '50 mins',
          '5 Concurrent Calls',
          'Voice API, LLM, Transcriber',
          'Unlimited Assistants',
          'API & Integrations',
          'Real-Time Booking & Human Transfer',
          'Courses & Community Support',
        ],
      },
      {
        name: 'Pro',
        price: '$39',
        period: 'mo',
        features: [
          '150 mins',
          '10 Concurrent Calls',
          'Custom LLMs & Voice Models',
          'Priority Support',
          'Advanced Analytics',
        ],
      },
    ].map((plan, idx) => (
      <div key={idx} className="bg-gray-800 rounded-2xl shadow-sm border p-6">
        <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
        <div className="mt-2 text-3xl font-bold text-gray-200">
          {plan.price}
          <span className="text-base font-medium text-gray-400">/{plan.period}</span>
        </div>
        <button className="mt-4 w-full bg-emerald-400 text-white font-medium rounded-md py-2 hover:bg-emerald-500 transition">
          Subscribe
        </button>
        <ul className="mt-6 text-left space-y-2 text-sm text-gray-400">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-green-600">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</section>


    <section className="bg-gradient-to-br from-cyan-400 to-emerald-400 text-white py-24 text-center px-4">
  <h2 className="text-4xl sm:text-5xl font-bold mb-6">
    Ready to transform your business communication?
  </h2>
  <p className="text-lg sm:text-xl text-white/90 mb-10">
    Experience how our Voice AI agents can enhance your customer interactions and boost productivity.
  </p>

  <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
    <div className="flex items-center bg-white/20 border border-white/40 rounded-md px-4 py-2 w-full max-w-md">
      <input
        type="email"
        placeholder="Enter your email"
        className="bg-transparent text-white placeholder-white/70 flex-1 outline-none"
      />
      <button className="ml-2 text-white hover:scale-110 transition">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4l16 8-16 8v-6l12-2-12-2V4z" />
        </svg>
      </button>
    </div>

    <button className="bg-white text-emerald-600 px-5 py-2 rounded-md font-medium hover:bg-gray-100 flex items-center gap-2 transition">
      Get a demo
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>

  <p className="mt-4 text-white/70 text-sm">
    No credit card required. Free consultation.
  </p>
</section>




      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t dark:border-gray-700">
        © {new Date().getFullYear()} Propalai. All rights reserved.
      </footer>
    </main>
  );
}
