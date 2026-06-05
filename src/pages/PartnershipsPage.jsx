import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { viewportOnce } from '../utils/motion';

const ease = [0.22, 1, 0.36, 1];
const DOT_BG = { backgroundImage: 'radial-gradient(circle, rgba(15,23,42,0.08) 1px, transparent 1px)', backgroundSize: '24px 24px' };

// --- Brand Logo Components (Rendered via clean SVGs to match original brand logos) ---

function AWSLogo() {
  return (
    <svg viewBox="0 0 100 45" className="h-10 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 12.8h3.3v13.6c0 2.2 1.4 3.3 3.5 3.3s3.5-1.1 3.5-3.3V12.8H26v13.8c0 4-2.6 6-6.5 6s-6.5-2-6.5-6V12.8zm17.6 19.8c-2.3 0-4.2-.9-4.8-2.6h3c.4.8 1.1 1.2 2 1.2 1 0 1.6-.4 1.6-1.1v-.2c-.5-.6-1.5-1-2.9-1.3-2.6-.6-4.5-1.5-4.5-3.8 0-2.3 2-3.7 4.5-3.7 2.1 0 3.7.8 4.3 2.3h-2.9c-.3-.7-.9-1-1.6-1-.9 0-1.4.3-1.4.9 0 .6.7.9 2 1.2 2.6.5 4.5 1.5 4.5 3.7 0 2.7-2.1 3.9-4.8 3.9zm13-8.8V12.8h3v20H43v-2.3c-.6 1.8-2 2.7-4.2 2.7-3.7 0-6.1-2.7-6.1-6.7s2.4-6.7 6.1-6.7c2.2 0 3.6.9 4.2 2.8V23.8zm-3.6 6.8c2 0 3.2-1.3 3.2-3.8s-1.2-3.8-3.2-3.8-3.2 1.3-3.2 3.8 1.2 3.8 3.2 3.8z" fill="#232F3E"/>
      <path d="M11 36.5c16.5 6 36.5 6.5 52 1.5.8-.3 1.4.5.8 1-3.2 2.7-9.5 5.5-17.5 6.5-10.5 1.2-22.5.2-34.5-5.5-.6-.3-.3-1.1.4-1.1l.8-.4z" fill="#FF9900"/>
      <path d="M8 35.8c-.8.5-.7 1.3.1 1.7l3 1.5c.8.4 1.4 0 1.1-.9l-1.3-3.2c-.3-.8-1.2-1-1.6-.3l-1.3 1.2z" fill="#FF9900"/>
    </svg>
  );
}

function GoogleCloudLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 24 24" className="h-8 w-8" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="#1A73E8" opacity="0.1"/>
        <path d="M12.002 2l8.225 4.75v9.5l-8.225 4.75-8.225-4.75v-9.5L12.002 2z" fill="#4285F4"/>
        <path d="M12.002 2L3.777 6.75v9.5l8.225 4.75V2z" fill="#34A853"/>
        <path d="M12.002 2v9.5l8.225 4.75V6.75L12.002 2z" fill="#EA4335"/>
        <path d="M12.002 11.5l-8.225 4.75 8.225 4.75v-9.5z" fill="#FBBC05"/>
      </svg>
      <span className="font-display text-lg font-bold text-slate-800 tracking-tight">Google Cloud</span>
    </div>
  );
}

function MicrosoftLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 23 23" className="h-7 w-7" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="10.5" height="10.5" fill="#F25022"/>
        <rect x="12.5" y="0" width="10.5" height="10.5" fill="#7FBA00"/>
        <rect x="0" y="12.5" width="10.5" height="10.5" fill="#00A4EF"/>
        <rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#FFB900"/>
      </svg>
      <div className="text-left">
        <div className="font-display text-xs font-black text-slate-900 tracking-wide leading-none">Microsoft</div>
        <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-normal">Solutions Partner</div>
      </div>
    </div>
  );
}

function RedHatLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 3C8.82 3 3 8.82 3 16s5.82 13 13 13 13-5.82 13-13S23.18 3 16 3zm0 2.2c5.96 0 10.8 4.84 10.8 10.8S21.96 26.8 16 26.8 5.2 21.96 5.2 16 10.04 5.2 16 5.2z" fill="#CC0000" opacity="0.1"/>
        <path d="M26.2 15.6c-.6-1.5-2.2-2.5-4.2-2.7h-.3c-1 0-1.8.4-2.2 1.1-.3-.6-.9-.9-1.6-.9h-.3c-.9 0-1.7.5-2.1 1.3-.4-.5-1.1-.8-1.8-.8h-1.5c-.8 0-1.4.6-1.4 1.4v4c0 .8.6 1.4 1.4 1.4h1.1v-2h2.2v2h1.1v-2.7c0-.9.7-1.6 1.6-1.6.9 0 1.6.7 1.6 1.6v2.7h1.1v-2.7c0-.9.7-1.6 1.6-1.6.9 0 1.6.7 1.6 1.6v2.7H25V17c-.1-.7-.4-1.2-.8-1.4zm-14.8 2.6h-1.1V16h1.1v2.2z" fill="#CC0000"/>
        <path d="M16 1C7.7 1 1 7.7 1 16s6.7 15 15 15 15-6.7 15-15S24.3 1 16 1zm0 3c6.6 0 12 5.4 12 12s-5.4 12-12 12S4 22.6 4 16 9.4 4 16 4z" fill="#000000" opacity="0.05"/>
        <path d="M27.5 19c-1.8-3.4-6.4-5.3-11.8-5.3-4.2 0-7.8 1.1-9.5 2.8.8-.9 2.5-1.8 5.5-1.8 4.8 0 9.8 1.9 11.2 4.9.4.9.4 1.8.1 2.6 1.8-1 3.5-2 4.5-3.2z" fill="#CC0000"/>
      </svg>
      <span className="font-display text-base font-extrabold text-slate-900 tracking-tighter">Red Hat</span>
    </div>
  );
}

function SnowflakeLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 24 24" className="h-7 w-7 text-sky-400" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2c-.3 0-.5.2-.5.5v3.1l-1.8-1c-.2-.1-.5-.1-.7.1s-.1.5.1.7l1.8 1-2.4 1.4-1.4-2.4c-.1-.2-.4-.3-.6-.2s-.3.4-.2.6l1.4 2.4-2.2 1.3H2.5c-.3 0-.5.2-.5.5s.2.5.5.5h3.1l-1.8 1c-.2.1-.3.4-.2.6.1.2.3.3.5.3.1 0 .2 0 .2-.1l1.8-1-2.4 1.4-1.4-2.4c-.1-.2-.4-.3-.6-.2s-.3.4-.2.6l1.4 2.4-2.2 1.3H2.5c-.3 0-.5.2-.5.5s.2.5.5.5h3.1l1.8 1c.1.1.2.1.3.1.2 0 .4-.1.5-.3.1-.2.1-.5-.1-.7l-1.8-1 2.4-1.4 1.4 2.4c.1.2.3.3.5.3.1 0 .2 0 .2-.1.2-.1.3-.4.2-.6l-1.4-2.4 2.2-1.3h3.1c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H8.9l1.8-1c.2-.1.3-.4.2-.6-.1-.2-.3-.3-.5-.3-.1 0-.2 0-.2.1L8.4 9.1l2.4-1.4 1.4 2.4c.1.2.4.3.6.2s.3-.4.2-.6L11.6 7.3l2.2-1.3h3.1c.3 0 .5-.2.5-.5s-.2-.5-.5-.5h-3.1l-1.8-1c-.2-.1-.5-.1-.7.1s-.1.5.1.7l1.8 1-2.4 1.4-1.4-2.4c-.1-.2-.4-.3-.6-.2s-.3.4-.2.6l1.4 2.4-2.2 1.3h3.1c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H15.1l1.8-1c.2-.1.3-.4.2-.6-.1-.2-.3-.3-.5-.3z" />
      </svg>
      <span className="font-display text-base font-extrabold text-[#29B6F6] tracking-wide">snowflake</span>
    </div>
  );
}

function ServiceNowLogo() {
  return (
    <div className="flex items-center gap-1">
      <svg viewBox="0 0 100 24" className="h-6 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-1.8 9.5l2.4-2.4 1.1 1.1-3.5 3.5L5.7 11.2l1.1-1.1 1.4 1.4z" fill="#81B924"/>
        <text x="22" y="17" fill="#0F172A" fontFamily="sans-serif" fontWeight="900" fontSize="16px" letterSpacing="-0.02em">servicenow.</text>
      </svg>
    </div>
  );
}

function SalesforceLogo() {
  return (
    <svg viewBox="0 0 100 68" className="h-10 w-auto" fill="#00A1E0" xmlns="http://www.w3.org/2000/svg">
      <path d="M68.5 28.5c-.2 0-.4 0-.6.1-1.5-6.5-7.3-11.4-14.2-11.4-5.3 0-9.9 2.9-12.4 7.2-2.1-1.7-4.8-2.7-7.8-2.7-6.2 0-11.3 4.6-12.3 10.7-3.9 1.1-6.7 4.7-6.7 8.9 0 5.2 4.3 9.5 9.5 9.5h44.5c5.2 0 9.5-4.3 9.5-9.5.1-5.1-4.1-9.3-9.5-9.3z" />
      <text x="50%" y="46" fill="#FFFFFF" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize="9px" letterSpacing="0.05em">salesforce</text>
    </svg>
  );
}

function AdobeLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 100 100" className="h-7 w-7" xmlns="http://www.w3.org/2000/svg">
        <path d="M60.6 15h34.3v70H60.6z" fill="#FF0000"/>
        <path d="M5.1 15h34.3v70H5.1z" fill="#FF0000"/>
        <path d="M50 36.9L73.1 85H58.4l-8.4-18.7H36.9L50 36.9z" fill="#FF0000"/>
      </svg>
      <span className="font-display text-base font-extrabold text-[#FF0000] tracking-tighter">Adobe</span>
    </div>
  );
}

function CiscoLogo() {
  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 50 20" className="h-6 w-auto text-sky-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="10" width="2" height="6" rx="1" />
        <rect x="7" y="6" width="2" height="10" rx="1" />
        <rect x="12" y="10" width="2" height="6" rx="1" />
        <rect x="17" y="2" width="2" height="14" rx="1" />
        <rect x="22" y="6" width="2" height="10" rx="1" />
        <rect x="27" y="2" width="2" height="14" rx="1" />
        <rect x="32" y="10" width="2" height="6" rx="1" />
        <rect x="37" y="6" width="2" height="10" rx="1" />
        <rect x="42" y="10" width="2" height="6" rx="1" />
      </svg>
      <span className="font-display text-xs font-black text-slate-800 tracking-widest leading-none mt-1">CISCO</span>
    </div>
  );
}

function DatabricksLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <svg viewBox="0 0 100 100" className="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 3L15 23l35 20 35-20L50 3z" fill="#FF3621"/>
        <path d="M15 43v24l35 20V63L15 43z" fill="#FF3621" opacity="0.8"/>
        <path d="M85 43v24L50 87V63l35-20z" fill="#FF3621" opacity="0.6"/>
      </svg>
      <span className="font-display text-base font-extrabold text-slate-900 tracking-tight">databricks</span>
    </div>
  );
}

function EsriLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <svg viewBox="0 0 100 100" className="h-6 w-6 text-emerald-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="6" />
        <path d="M50 10a40 40 0 0 1 34.6 20h-13c-2.3-4-6.3-6.7-11-7.5l-5.6 12-7-15A40 40 0 0 1 50 10zm-30 40a30 30 0 1 1 60 0 30 30 0 0 1-60 0z" />
      </svg>
      <div className="text-left">
        <span className="font-display text-base font-black text-slate-900 tracking-tighter">esri</span>
        <div className="text-[7px] font-bold text-amber-500 uppercase tracking-widest leading-none">Partner Network</div>
      </div>
    </div>
  );
}

function FigmaLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 50 75" className="h-7 w-auto" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 75C19.4 75 25 69.4 25 62.5V50H12.5C5.6 50 0 55.6 0 62.5C0 69.4 5.6 75 12.5 75Z" fill="#0ACF83"/>
        <path d="M0 37.5C0 30.6 5.6 25 12.5 25H25V50H12.5C5.6 50 0 44.4 0 37.5Z" fill="#A259FF"/>
        <path d="M0 12.5C0 5.6 5.6 0 12.5 0H25V25H12.5C5.6 25 0 19.4 0 12.5Z" fill="#F24E1E"/>
        <path d="M25 0H37.5C44.4 0 50 5.6 50 12.5C50 19.4 44.4 25 37.5 25H25V0Z" fill="#FF7262"/>
        <path d="M50 37.5C50 44.4 44.4 50 37.5 50C30.6 50 25 44.4 25 37.5C25 30.6 30.6 25 37.5 25C44.4 25 50 30.6 50 37.5Z" fill="#1ABC9C"/>
      </svg>
      <span className="font-display text-lg font-black text-slate-900 tracking-tight">Figma</span>
    </div>
  );
}

function HashiCorpLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-slate-800" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.8 4.2h-3v3h3v-3zM8.2 4.2h-3v3h3v-3zM13.5 9.5h-3v5h3v-5zM18.8 14.8h-3v5h3v-5zM8.2 14.8h-3v5h3v-5z" />
      </svg>
      <span className="font-display text-base font-extrabold text-slate-900 tracking-tighter">HashiCorp</span>
    </div>
  );
}

function OracleLogo() {
  return (
    <div className="flex items-center gap-2">
      <span className="font-serif text-lg font-extrabold text-[#F80000] tracking-wider uppercase">oracle</span>
      <div className="h-5 w-[1px] bg-slate-300" />
      <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Partner</span>
    </div>
  );
}

function SailPointLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 100 100" className="h-6 w-6 text-blue-900" fill="none" stroke="currentColor" strokeWidth="10" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" />
        <circle cx="50" cy="50" r="15" fill="currentColor" />
        <line x1="50" y1="10" x2="50" y2="90" />
        <line x1="10" y1="50" x2="90" y2="50" />
      </svg>
      <span className="font-display text-base font-black text-blue-950 tracking-tighter">SailPoint</span>
    </div>
  );
}

function SigmaLogo() {
  return (
    <div className="flex items-center gap-1">
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-slate-900" fill="none" stroke="currentColor" strokeWidth="2.5" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4h16L12 12l8 8H4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-display text-base font-black text-slate-900 tracking-tight">sigma</span>
    </div>
  );
}

function SitecoreLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 100 100" className="h-6 w-6 text-red-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" />
        <path d="M50 10A40 40 0 0 1 90 50h-20A20 20 0 0 0 50 30V10z" />
        <path d="M50 70A20 20 0 0 0 30 50H10a40 40 0 0 1 40 40V70z" />
      </svg>
      <span className="font-display text-base font-black text-slate-900 tracking-wide">SITECORE</span>
    </div>
  );
}

// --- Icons for Depth & Breadth Section ---

function FullStackIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <path d="M6 8h12" />
      <path d="M8 12h8" />
    </svg>
  );
}

function TalentIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export default function PartnershipsPage() {
  const bigThinkers = [
    { component: AWSLogo, key: 'aws' },
    { component: GoogleCloudLogo, key: 'gcp' },
    { component: MicrosoftLogo, key: 'microsoft' },
    { component: RedHatLogo, key: 'redhat' },
    { component: SnowflakeLogo, key: 'snowflake' },
    { component: ServiceNowLogo, key: 'servicenow' },
    { component: SalesforceLogo, key: 'salesforce' },
  ];

  const distinctiveInnovators = [
    { component: AdobeLogo, key: 'adobe' },
    { component: CiscoLogo, key: 'cisco' },
    { component: DatabricksLogo, key: 'databricks' },
    { component: EsriLogo, key: 'esri' },
    { component: FigmaLogo, key: 'figma' },
    { component: HashiCorpLogo, key: 'hashicorp' },
    { component: OracleLogo, key: 'oracle' },
    { component: SailPointLogo, key: 'sailpoint' },
    { component: SigmaLogo, key: 'sigma' },
    { component: SitecoreLogo, key: 'sitecore' },
  ];

  const depthBreadth = [
    {
      icon: FullStackIcon,
      title: 'Full-stack capabilities',
      desc: 'Rapid scalability across a wide range of technologies and services',
      href: '/technology-services',
    },
    {
      icon: TalentIcon,
      title: 'Largest talent network in the world',
      desc: 'Unparalleled access to the best talent; part of the largest talent management firm in the world',
      href: '/talent-solutions',
    },
    {
      icon: GlobeIcon,
      title: 'Global geographic footprint',
      desc: 'Outcomes delivered on complex, distributed projects for customers across the globe',
      href: '/contact',
    },
  ];

  const thinkingForward = [
    {
      tag: 'Success Story',
      title: 'Amazon Q Business for Sales Enablement in Banking',
      desc: 'A leading commercial bank partnered with TEKsystems Global Services to implement Amazon Q Business, delivering fast, AI-powered answers for sales teams while maintaining compliance and security.',
      bgGradient: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
      accentColor: '#3B82F6',
      iconText: '🏦',
    },
    {
      tag: 'Article',
      title: 'Best Practices for Implementing Hybrid Agents',
      desc: 'Follow these tips to make the most of your hybrid conversational agent implementation.',
      bgGradient: 'linear-gradient(135deg, #0D9488 0%, #115E59 100%)',
      accentColor: '#14B8A6',
      iconText: '🔒',
    },
    {
      tag: 'Success Story',
      title: 'Creating a Unified, Improved User Experience',
      desc: 'An energy company wanted to streamline internal and external experiences with business automation and digital workplace solutions.',
      bgGradient: 'linear-gradient(135deg, #B45309 0%, #78350F 100%)',
      accentColor: '#F59E0B',
      iconText: '⚡',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden pt-24" style={{ backgroundColor: '#0B1120' }}>
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div aria-hidden className="pointer-events-none absolute top-0 right-0 w-[600px] h-[500px] rounded-full blur-[120px]" style={{ background: 'rgba(37,99,235,0.08)' }} />
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[350px] rounded-full blur-[100px]" style={{ background: 'rgba(99,102,241,0.05)' }} />

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12 py-20">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] mb-6"
              style={{ border: '1px solid rgba(47,128,237,0.3)', background: 'rgba(47,128,237,0.1)', color: '#2F80ED' }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current" />Our Ecosystem
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-white"
            >
              Technology Partnerships
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.25 }}
              className="mt-6 text-lg sm:text-xl leading-relaxed text-slate-300 font-medium"
            >
              Transformational technologies demand equally transformative technology partnerships. Full-stack capabilities coupled with depth and diversity of experience in leading platforms that help organizations grow, innovate and thrive.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.35 }}
              className="mt-4 text-base leading-relaxed text-slate-400"
            >
              With a progressive yet pragmatic approach, we work hand-in-hand with you to fully leverage these platforms to optimize productivity, adoption, business results. Our partner-based solutions successfully steward clients through digital disruption and into the future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.45 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#integrations"
                className="inline-flex items-center justify-center font-bold px-7 py-3 rounded-full transition-all duration-300"
                style={{ background: '#2F80ED', color: '#ffffff', textDecoration: 'none', fontSize: '15px', boxShadow: '0 8px 32px rgba(47,128,237,0.3)' }}
              >
                Meet Our Partners
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center font-bold px-7 py-3 rounded-full transition-all duration-300"
                style={{ border: '1.5px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.85)', background: 'transparent', textDecoration: 'none', fontSize: '15px' }}
              >
                Start a Project
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS SECTION (BIG THINKERS & DISTINCTIVE INNOVATORS) ── */}
      <section id="integrations" className="py-24 bg-white" style={DOT_BG}>
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          {/* Big Thinkers */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, ease }}
              className="max-w-3xl mb-12"
            >
              <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider block mb-2">Best-in-Class Integrations</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Big Thinkers</h2>
              <p className="text-base sm:text-lg leading-relaxed text-slate-500">
                We’re better, together. The world’s leading technology brands work with us because of our scale, speed and quality—building upon their foundation to foster and share ideas that help our clients grow.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {bigThinkers.map((brand, i) => (
                <motion.div
                  key={brand.key}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.5, ease, delay: i * 0.05 }}
                  whileHover={{ y: -4, boxShadow: '0 12px 28px rgba(0,0,0,0.06)' }}
                  className="bg-white rounded-2xl border border-slate-100 flex items-center justify-center p-6 min-h-[96px] transition-all duration-300 shadow-sm"
                >
                  <brand.component />
                </motion.div>
              ))}
            </div>
          </div>

          <hr className="border-slate-100 mb-20" />

          {/* Distinctive Innovators */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, ease }}
              className="max-w-3xl mb-12"
            >
              <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider block mb-2">Targeted Solutions</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Distinctive innovators</h2>
              <p className="text-base sm:text-lg leading-relaxed text-slate-500">
                Strategic opportunities often require targeted solutions. Embedded in the technology landscape for over 35 years, we continually study the market for strategic technology partnerships to ensure our clients have access to the most innovative platforms and big-thinking companies.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {distinctiveInnovators.map((brand, i) => (
                <motion.div
                  key={brand.key}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.5, ease, delay: i * 0.04 }}
                  whileHover={{ y: -4, boxShadow: '0 12px 28px rgba(0,0,0,0.06)' }}
                  className="bg-white rounded-2xl border border-slate-100 flex items-center justify-center p-6 min-h-[90px] transition-all duration-300 shadow-sm"
                >
                  <brand.component />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DEPTH AND BREADTH SECTION ── */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              We Offer Depth and Breadth
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {depthBreadth.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.7, ease, delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
              >
                <div>
                  <div className="h-16 w-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500 mb-6">
                    <item.icon />
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                </div>
                <Link
                  to={item.href}
                  className="text-sm font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5 text-decoration-none group"
                >
                  Read more
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THINKING FORWARD (SUCCESS STORIES / ARTICLES) ── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease }}
            className="max-w-3xl mb-16"
          >
            <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider block mb-2">Insights & Case Studies</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">Thinking Forward</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {thinkingForward.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.75, ease, delay: i * 0.12 }}
                className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[380px]"
                style={{ background: card.bgGradient }}
              >
                {/* Background grid lines for styling */}
                <div aria-hidden className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                
                {/* Floating graphic overlay representing the described image context */}
                <div aria-hidden className="absolute right-4 top-4 h-24 w-24 rounded-full opacity-10 flex items-center justify-center text-7xl select-none">
                  {card.iconText}
                </div>

                <div className="p-8 relative z-10">
                  <span
                    className="inline-block rounded-full px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider mb-6 text-white"
                    style={{ background: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(4px)' }}
                  >
                    {card.tag}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 leading-snug group-hover:text-sky-200 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed font-medium">
                    {card.desc}
                  </p>
                </div>

                <div className="p-8 pt-0 relative z-10">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 font-bold text-sm tracking-wider uppercase text-white group"
                    style={{ textDecoration: 'none' }}
                  >
                    <span className="relative pb-0.5">
                      Read
                      <span className="absolute bottom-0 left-0 w-full h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" style={{ background: card.accentColor }} />
                    </span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR TECHNOLOGY PARTNERSHIPS CTA ── */}
      <section className="relative py-20 sm:py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E5DB8 50%, #2F80ED 100%)' }}>
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 w-[360px] h-[360px] rounded-full blur-[90px]" style={{ background: 'radial-gradient(circle, rgba(30,93,184,0.2) 0%, transparent 70%)' }} />
        <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full blur-[80px]" style={{ background: 'radial-gradient(circle, rgba(47,128,237,0.25) 0%, transparent 70%)' }} />

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.75, ease }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
              Ready to Accelerate Your Platform Transformation?
            </h2>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-8 opacity-90">
              Leverage our deep experience and direct certifications across the industry's leading cloud, data, and identity ecosystems to drive real outcomes.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-104 shadow-lg"
              style={{ background: '#ffffff', color: '#0F172A', textDecoration: 'none', fontSize: '15px' }}
            >
              Start a Conversation with Our Team
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
