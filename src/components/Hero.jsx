import React from 'react';
import Spline from '@splinetool/react-spline';
import { ShieldCheck, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-16 sm:py-24">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>Meta (Instagram) Official API Approved</span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Turn Every Comment Into a Customer — Automatically
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-7 text-gray-700 max-w-prose">
              ZapDM DMs your post-commenters in seconds, sparks real conversations, and books you more sales — without you touching your phone.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-md bg-[#FF5A5F] px-5 py-3 text-sm sm:text-base font-semibold text-white shadow-sm hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF5A5F]"
              >
                Get Started Free
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm sm:text-base font-semibold text-gray-900 hover:bg-gray-100"
              >
                <Play className="h-5 w-5" />
                Watch Demo
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative h-[380px] sm:h-[460px] lg:h-[520px] w-full">
            <div className="absolute inset-0 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
              <Spline
                scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute -top-24 right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-[#FF5A5F]/10 blur-3xl" />
    </section>
  );
}
