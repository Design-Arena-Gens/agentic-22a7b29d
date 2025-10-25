import styles from "./page.module.css";
import { WorkflowPlanner } from "../components/WorkflowPlanner";

const quickStart = [
  {
    title: "Vision & Strategy",
    description:
      "Define target audience, core message, must-have features, and success metrics. Create a north star statement to anchor every design and build decision."
  },
  {
    title: "Design Foundations",
    description:
      "Sketch the information architecture, pick a visual theme, and assemble brand assets like typography, color, and component references."
  },
  {
    title: "Tech Setup",
    description:
      "Initialize a Next.js app, connect Supabase for data/auth needs, configure linting, testing, and CI before writing production code."
  },
  {
    title: "Iterative Build",
    description:
      "Ship in vertical slices: layout, content, interactions, accessibility, SEO. Review each slice with stakeholders and refine continuously."
  }
];

const launchChecklist = [
  {
    title: "Quality & Accessibility",
    description:
      "Run end-to-end tests, Lighthouse audits, and keyboard-only navigation passes. Verify color contrast and add semantic metadata."
  },
  {
    title: "Performance Budget",
    description:
      "Set Core Web Vitals guardrails, trim payloads via dynamic import and image optimization, and configure caching headers."
  },
  {
    title: "Operational Readiness",
    description:
      "Configure observability with Vercel Analytics, uptime alerts, and Supabase logs. Document incident playbooks and rollback strategies."
  },
  {
    title: "Marketing Launch",
    description:
      "Prepare announcement copy, schedule social posts, warm up email sequences, and set up analytics goals to track conversion."
  }
];

export default function Page() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.badge}>
          Step-by-step guide • वेबसाइट बनाने का तरीका
        </span>
        <h1 className={styles.heroTitle}>
          Website banane ka <span>complete tarika</span> – strategy se launch
          tak.
        </h1>
        <p className={styles.heroSubtitle}>
          Idea se production tak har stage ko master karein. Design planning,
          tech stack selection, content workflow, SEO, aur Vercel par blazing
          fast deployment ke liye ek polished playbook.
        </p>
        <div className={styles.ctaRow}>
          <a className={styles.ctaPrimary} href="#foundation">
            Start Build Checklist
          </a>
          <a className={styles.ctaSecondary} href="#launch">
            Launch Readiness Guide
          </a>
        </div>
      </section>

      <section id="foundation" className={styles.sectionCard}>
        <header>
          <h2>Foundational Roadmap</h2>
          <p>
            Smart website builds begin with clarity. In chaar pillars par focus
            karke aap design drift, scope creep, aur rework ko dramatically
            reduce kar sakte hain.
          </p>
        </header>
        <div className={styles.grid}>
          {quickStart.map((item) => (
            <article key={item.title} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <WorkflowPlanner />

      <section className={styles.sectionCard}>
        <header>
          <h2>Execution Playbook</h2>
          <p>
            Agile delivery cycles website banane ke liye best hoti hain. Har
            sprint mein ek complete user journey ship karein aur feedback loop
            tight rakhein.
          </p>
        </header>
        <div className={styles.timelineGrid}>
          <div>
            <h3>Weekly Sprint Pattern</h3>
            <p className={styles.sectionNote}>
              Monday discovery, mid-week build, Thursday testing, Friday
              release. Har iteration mein measurable outcome ensure karein.
            </p>
          </div>
          <div>
            <h3>Tools Stack</h3>
            <ul className={styles.list}>
              <li>Linear ya Jira for sprint planning</li>
              <li>Figma for responsive design handoff</li>
              <li>GitHub Actions CI with Playwright tests</li>
              <li>Supabase Studio for data modeling</li>
              <li>Vercel Preview Deployments for stakeholder review</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="launch" className={styles.sectionCard}>
        <header>
          <h2>Launch Checklist</h2>
          <p>
            Production release se pehle har critical angle cover karein. Ye
            checklist ensure karti hai ki aapka website polished, secure, aur
            measurable hai.
          </p>
        </header>
        <ul className={styles.list}>
          {launchChecklist.map((item) => (
            <li key={item.title} className={styles.checkItem}>
              <span className={styles.checkIcon}>✓</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
