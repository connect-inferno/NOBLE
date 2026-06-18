import React from "react";

export const About: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <section className="h-[280px] w-full bg-gradient-to-r from-on-background to-primary-container relative flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="col-span-1 border-r border-white/10 h-full"></div>
            ))}
          </div>
        </div>
        <div className="max-w-container-max mx-auto px-gutter relative z-10 w-full mt-12 text-center md:text-left">
          <h1 className="text-white font-display-lg text-display-lg-mobile md:text-display-lg max-w-2xl leading-tight">
            About Noble Security & Services
          </h1>
          <div className="mt-4 flex items-center justify-center md:justify-start gap-2 text-primary-fixed-dim font-label-md">
            <span>Home</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-white">About Us</span>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-section-padding-lg px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl group-hover:bg-primary/20 transition-all duration-700"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-6 md:p-8 border border-outline-variant/30 flex flex-col items-center">
              <div className="w-full max-w-[320px] relative rounded-xl overflow-hidden aspect-[1080/1744]">
                <img
                  alt="Madhukar Pandurang Narale - Founder & Director"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="/mn.jpeg"
                />
                <div className="absolute bottom-6 right-6 z-20 bg-primary p-4 rounded-xl shadow-lg animate-float">
                  <span
                    className="material-symbols-outlined text-white text-[28px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified_user
                  </span>
                </div>
              </div>
              <div className="mt-6 text-center space-y-1">
                <h4 className="font-headline-md text-[20px] font-bold text-on-surface">
                  Madhukar Pandurang Narale
                </h4>
                <p className="text-primary font-label-md font-bold uppercase tracking-wider">
                  Founder & Director
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-primary font-label-md tracking-widest mb-2 uppercase">
              OUR HERITAGE
            </h2>
            <h3 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6 leading-tight">
              Built on Discipline. <br />
              <span className="text-primary">Driven by Duty.</span>
            </h3>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
              Since our inception in 2015, Noble Security & Services has been committed to providing uncompromising safety solutions across Maharashtra. We bridge the gap between traditional security presence and modern technological surveillance, ensuring that our clients—from residential complexes to large industrial hubs—rest easy.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {[
                { icon: "military_tech", title: "Ex-Military Led", desc: "Discipline-focused operations" },
                { icon: "update", title: "24/7 Response", desc: "Uninterrupted safety dispatch" },
                { icon: "groups", title: "500+ Staff", desc: "Trained security personnel" },
                { icon: "thumb_up", title: "99% Retention", desc: "Client trust & loyalty" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low border border-outline-variant hover:shadow-md transition-all duration-200"
                >
                  <span className="material-symbols-outlined text-primary text-[32px]">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="font-bold text-on-surface">{item.title}</h4>
                    <p className="text-label-sm text-on-surface-variant mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-surface-container py-section-padding-lg">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border-l-8 border-primary relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              <span className="material-symbols-outlined text-primary text-[40px] mb-6">
                rocket_launch
              </span>
              <h3 className="font-headline-lg text-headline-lg mb-4 text-on-surface font-bold">
                Our Mission
              </h3>
              <p className="text-body-lg text-on-surface-variant leading-relaxed">
                To empower businesses and communities through innovative security intelligence and disciplined physical protection, setting a gold standard in the Indian private security sector.
              </p>
            </div>
            {/* Vision Card */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border-l-8 border-tertiary relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-tertiary/5 rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              <span className="material-symbols-outlined text-tertiary text-[40px] mb-6">
                visibility
              </span>
              <h3 className="font-headline-lg text-headline-lg mb-4 text-on-surface font-bold">
                Our Vision
              </h3>
              <p className="text-body-lg text-on-surface-variant leading-relaxed">
                To be the most trusted integrated security partner in the nation, recognized for our commitment to ethical values, technological integration, and unparalleled professional excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-section-padding-lg max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-16">
          <h2 className="text-primary font-label-md tracking-widest mb-4 uppercase">
            OUR FOUNDATION
          </h2>
          <h3 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
            Core Values That Define Us
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: "gavel",
              title: "Integrity",
              desc: "We operate with honesty, transparency, and strong moral principles in every interaction.",
            },
            {
              icon: "stars",
              title: "Excellence",
              desc: "Dedicated to continuous improvement, safety audits, and high standards in delivery.",
            },
            {
              icon: "shield",
              title: "Discipline",
              desc: "Orderliness, compliance, and strict code of conduct derived from our military heritage.",
            },
            {
              icon: "handshake",
              title: "Community",
              desc: "Building and fostering safe, secure, and thriving environments for the society.",
            },
          ].map((val, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-outline-variant hover:border-primary transition-all duration-300 text-center group shadow-sm"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-inner">
                <span className="material-symbols-outlined text-[32px]">{val.icon}</span>
              </div>
              <h4 className="font-headline-md text-headline-md mb-3 text-on-surface font-bold">
                {val.title}
              </h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-on-background py-section-padding-lg text-white">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 text-center md:text-left">
            <div>
              <h2 className="text-primary-fixed-dim font-label-md tracking-widest mb-4 uppercase">
                Leadership
              </h2>
              <h3 className="font-display-lg text-display-lg-mobile md:text-display-lg leading-tight">
                The Minds Behind the Shield
              </h3>
            </div>
            <p className="max-w-md text-secondary-fixed text-body-lg opacity-80 leading-relaxed">
              Our leadership team brings together decades of experience in defence, corporate security, and operational management.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Rajesh Kumar",
                role: "Operations Head",
                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
              },
              {
                name: "Ananya Sharma",
                role: "HR Manager",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
              },
            ].map((leader, idx) => (
              <div key={idx} className="group flex flex-col items-center text-center">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] mb-6 w-full max-w-[300px] shadow-lg mx-auto">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={leader.img}
                    alt={leader.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-on-background via-transparent to-transparent opacity-60"></div>
                </div>
                <h4 className="font-headline-md text-headline-md text-white mb-1 font-bold">
                  {leader.name}
                </h4>
                <p className="text-primary-fixed-dim font-label-md uppercase tracking-wider mb-4">
                  {leader.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Compliance */}
      <section className="py-section-padding-lg bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-primary font-label-md tracking-widest mb-4 uppercase">
              OUR RIGOR
            </h2>
            <h3 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6 leading-tight">
              Training &amp; Compliance Excellence
            </h3>
            <p className="text-on-surface-variant text-body-lg leading-relaxed">
              Every security officer at Noble undergoes a mandatory 15-day residential training program, adhering strictly to PSARA guidelines and international safety standards.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { icon: "fitness_center", label: "Physical Drills" },
              { icon: "fire_truck", label: "Fire Safety & Drills" },
              { icon: "videocam", label: "Surveillance Tech" },
              { icon: "medical_services", label: "First Aid & CPR" },
            ].map((badge, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant flex flex-col items-center text-center hover:bg-primary-container group transition-all duration-300"
              >
                <span className="material-symbols-outlined text-primary text-[40px] mb-4 group-hover:text-white transition-colors duration-300">
                  {badge.icon}
                </span>
                <h4 className="font-bold text-on-surface group-hover:text-white transition-colors duration-300">
                  {badge.label}
                </h4>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-outline-variant">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1 space-y-6">
                <h4 className="font-headline-lg text-headline-lg text-on-surface font-bold leading-tight">
                  Integrated Training Protocol
                </h4>
                <p className="text-on-surface-variant text-body-lg leading-relaxed">
                  Our training module is designed to transform recruits into disciplined security professionals. We cover physical fitness, guard drills, visitor gate protocols, logs, register maintaining, and crisis response.
                </p>
                <p className="text-on-surface-variant text-body-lg leading-relaxed">
                  Compliance is central to our brand. We are fully compliant with PF, ESIC, GST, and all regulatory labor laws, preventing legal risks for our corporate clients.
                </p>
                <ul className="space-y-4">
                  {[
                    "PSARA Licensed Operations (License #27AHTPN)",
                    "ISO 9001:2015 Certified Management Systems",
                    "100% Police Verified & Screened Guards",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-on-surface font-bold">
                      <span className="material-symbols-outlined text-tertiary">check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 w-full relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <img
                  alt="Security Training"
                  className="w-full h-full object-cover"
                  src="/sg2.jpeg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
