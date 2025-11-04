import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-[#FF5A5F]" aria-hidden />
              <span className="text-lg font-semibold text-gray-900">ZapDM</span>
            </div>
            <p className="mt-3 text-sm text-gray-600 max-w-xs">AI-Powered Instagram DM Automation. Build relationships, boost sales, and save hours every week.</p>
            <div className="mt-4 flex items-center gap-3">
              <a aria-label="Instagram" href="#" className="text-gray-500 hover:text-gray-900"><Instagram className="h-5 w-5" /></a>
              <a aria-label="LinkedIn" href="#" className="text-gray-500 hover:text-gray-900"><Linkedin className="h-5 w-5" /></a>
              <a aria-label="Twitter" href="#" className="text-gray-500 hover:text-gray-900"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Product</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#features" className="hover:text-gray-900">Features</a></li>
              <li><a href="#pricing" className="hover:text-gray-900">Pricing</a></li>
              <li><a href="#use-cases" className="hover:text-gray-900">Use Cases</a></li>
              <li><a href="#how-it-works" className="hover:text-gray-900">How It Works</a></li>
              <li><a href="#faq" className="hover:text-gray-900">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Blog</a></li>
              <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
              <li><a href="#" className="hover:text-gray-900">Roadmap</a></li>
              <li><a href="#" className="hover:text-gray-900">Affiliate Program</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900">Terms & Conditions</a></li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">contact@zapdm.io</p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© 2025 ZapDM. All rights reserved.</p>
          <p className="text-xs text-gray-500">Made with ❤️ for creators, businesses, and coaches.</p>
        </div>
      </div>
    </footer>
  );
}
