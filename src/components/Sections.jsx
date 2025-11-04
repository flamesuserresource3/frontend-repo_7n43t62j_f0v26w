import React from 'react';
import { Rocket, Bot, Shield, Clock, ShoppingBag, Users, Video, CheckCircle } from 'lucide-react';

function SectionTitle({ eyebrow, title, subtitle, id }) {
  return (
    <div id={id} className="text-center max-w-3xl mx-auto">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-widest text-[#FF5A5F]">{eyebrow}</p>
      )}
      <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">{title}</h2>
      {subtitle && <p className="mt-3 text-gray-600">{subtitle}</p>}
    </div>
  );
}

export default function Sections() {
  return (
    <>
      {/* How It Works */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            id="how-it-works"
            eyebrow="How it works"
            title="Three simple steps to automate your Instagram DMs"
            subtitle="Securely connect, configure your rules, and watch ZapDM handle conversations 24/7."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Rocket className="h-6 w-6 text-[#FF5A5F]" />,
                title: 'Connect Your Instagram',
                desc: 'Securely link your Instagram account with just a few clicks.',
              },
              {
                icon: <Bot className="h-6 w-6 text-[#FF5A5F]" />,
                title: 'Configure Your Rules',
                desc: 'Customize automation rules: responses, filters, engagement preferences.',
              },
              {
                icon: <Clock className="h-6 w-6 text-[#FF5A5F]" />,
                title: 'Watch It Work',
                desc: 'AI handles your DMs in real time. Monitor performance and results.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#FF5A5F]/10">
                  {card.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-2 text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Why choose ZapDM"
            title="Built for creators, marketers, and businesses"
            subtitle="AI-powered, compliant, and conversion-focused."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Clock className="h-6 w-6 text-[#FF5A5F]" />,
                title: 'Save Hours Daily',
                desc: 'Automate DM responses and focus on creating content that matters.',
              },
              {
                icon: <Bot className="h-6 w-6 text-[#FF5A5F]" />,
                title: 'AI-Powered Responses',
                desc: 'Understands context, keeps your brand voice, and personalizes replies.',
              },
              {
                icon: <Shield className="h-6 w-6 text-[#FF5A5F]" />,
                title: '100% Instagram Compliant',
                desc: 'Aligned with Instagram guidelines to keep your account safe.',
              },
              {
                icon: <Rocket className="h-6 w-6 text-[#FF5A5F]" />,
                title: 'Automate Sales 24/7',
                desc: 'Instant replies, continuous lead capture, and non-stop sales.',
              },
            ].map((f) => (
              <div key={f.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#FF5A5F]/10">{f.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-2 text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Use cases"
            title="Designed for the way you grow"
            subtitle="From e‑commerce to creators to coaches, ZapDM meets you where you are."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <ShoppingBag className="h-6 w-6 text-[#FF5A5F]" />,
                title: 'E‑commerce Stores',
                desc: 'Engage commenters on product posts and turn interest into sales.',
              },
              {
                icon: <Users className="h-6 w-6 text-[#FF5A5F]" />,
                title: 'Coaches & Consultants',
                desc: 'Convert engagement into bookings, newsletters, and consults.',
              },
              {
                icon: <Video className="h-6 w-6 text-[#FF5A5F]" />,
                title: 'Content Creators',
                desc: 'Build relationships and monetize by turning comments into DMs.',
              },
            ].map((uc) => (
              <div key={uc.title} className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#FF5A5F]/10">{uc.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{uc.title}</h3>
                <p className="mt-2 text-gray-600">{uc.desc}</p>
                <div className="mt-4 inline-flex items-center text-[#FF5A5F] font-medium">
                  Learn more
                  <span className="ml-1 transition-transform group-hover:translate-x-0.5">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Pricing"
            title="Simple, transparent plans"
            subtitle="7‑day free trial on all plans. Cancel anytime. Save 20% with yearly."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-4 sm:grid-cols-2">
            {[
              { name: 'Free', price: '$0', features: ['Try-before-buy', '50 Auto DMs / mo', '1 Automation', 'Basic Analytics'] },
              { name: 'Bolt', price: '$19', features: ['1,000 Auto DMs / mo', '3 Automations', 'ZapAI Conversations', '1 IG Account'] },
              { name: 'Lightning', price: '$49', features: ['5,000 Auto DMs / mo', '10 Automations', 'Advanced Analytics', '2 IG Accounts'] },
              { name: 'Thunder', price: '$99', features: ['20,000 Auto DMs / mo', 'Unlimited Automations', 'Priority Support', '5 IG Accounts'] },
            ].map((p, idx) => (
              <div key={p.name} className={`relative rounded-2xl border ${idx===2 ? 'border-[#FF5A5F] ring-1 ring-[#FF5A5F]/20' : 'border-gray-200'} bg-white p-6 shadow-sm`}>
                {idx===2 && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#FF5A5F] px-3 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-gray-900">{p.price}</span>
                  <span className="text-sm text-gray-500">/mo</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-emerald-600" /> {f}
                    </li>
                  ))}
                </ul>
                <a href="#cta" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800">
                  Choose {p.name}
                </a>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center text-sm text-gray-600">Need more? <a href="#contact" className="text-[#FF5A5F] font-medium">Enterprise “Zeus” Plan</a></div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="FAQ"
            title="Answers to common questions"
          />
          <div className="mt-10 divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
            {[
              {
                q: 'What is ZapDM?',
                a: 'ZapDM is an AI-powered Instagram DM automation platform that engages your commenters and DMs to turn conversations into customers.'
              },
              {
                q: 'How does it work?',
                a: 'Connect your Instagram, set your automation rules, and ZapDM uses AI to respond to comments and DMs in real time, following your brand voice.'
              },
              {
                q: 'Is it safe and compliant?',
                a: 'Yes. ZapDM is built on the official Instagram APIs and adheres to platform guidelines to keep your account safe.'
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Absolutely. All plans include a 7-day free trial and you can cancel anytime from your dashboard.'
              },
            ].map((item, idx) => (
              <details key={item.q} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between text-left">
                  <span className="text-base sm:text-lg font-semibold text-gray-900">{item.q}</span>
                  <span className="ml-4 text-[#FF5A5F]">{/* icon via CSS */}+{/* toggled by <details> */}</span>
                </summary>
                <p className="mt-3 text-gray-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-16 sm:py-24 bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Never Miss Another Lead in Your DMs Again!</h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">Turns every comment and DM into a real conversation that builds followers, boosts sales, and saves you hours every single week.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#" className="inline-flex items-center justify-center rounded-md bg-[#FF5A5F] px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-sm hover:opacity-95">Start Free Today</a>
            <a href="#pricing" className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm sm:text-base font-semibold text-gray-900 hover:bg-gray-100">See Pricing</a>
          </div>
        </div>
      </section>
    </>
  );
}
