'use client';

import { useMemo, useState } from "react";
import styles from "./WorkflowPlanner.module.css";

type Goal = "portfolio" | "blog" | "store" | "saas";

const goalLabels: Record<Goal, string> = {
  portfolio: "Portfolio",
  blog: "Blog or Content Hub",
  store: "Online Store",
  saas: "SaaS / Web App"
};

const techStacks: Record<Goal, string[]> = {
  portfolio: ["Next.js + Static Export", "Tailwind CSS", "Vercel Hosting"],
  blog: [
    "Next.js App Router",
    "MDX Content",
    "Supabase Auth & Database",
    "Vercel Cron for rebuilds"
  ],
  store: [
    "Next.js + Server Actions",
    "Stripe Payments",
    "Supabase for inventory",
    "Vercel Edge Functions"
  ],
  saas: [
    "Next.js App Router",
    "Supabase Postgres + Auth",
    "Prisma or Drizzle ORM",
    "Vercel Background Functions"
  ]
};

const timeline: Record<
  Goal,
  { label: string; description: string; time: string }[]
> = {
  portfolio: [
    {
      label: "Design Inspiration",
      description: "Collect references and define visual style in Figma or Penpot.",
      time: "1 hour"
    },
    {
      label: "Content Prep",
      description: "Write hero text, about section, projects, and contact details.",
      time: "2 hours"
    },
    {
      label: "Build & Iterate",
      description: "Implement responsive layout, run Lighthouse checks, iterate.",
      time: "3 hours"
    },
    {
      label: "Deploy",
      description: "Push to GitHub, connect to Vercel, configure custom domain.",
      time: "30 min"
    }
  ],
  blog: [
    {
      label: "Information Architecture",
      description:
        "Define categories, tags, and navigation for content discovery.",
      time: "3 hours"
    },
    {
      label: "Editor Workflow",
      description:
        "Set up MDX content folder, include frontmatter schema validation.",
      time: "2 hours"
    },
    {
      label: "Feature Build",
      description:
        "Implement search, RSS, and share cards; set up caching strategy.",
      time: "4 hours"
    },
    {
      label: "Deployment & Automation",
      description:
        "Configure Supabase for metadata, set Vercel cron for rebuilds.",
      time: "1 hour"
    }
  ],
  store: [
    {
      label: "Product Catalog",
      description: "Model inventory, variants, and pricing tiers in Supabase.",
      time: "4 hours"
    },
    {
      label: "Checkout Flow",
      description: "Integrate Stripe, webhook handlers, success and failure pages.",
      time: "5 hours"
    },
    {
      label: "CMS & Operations",
      description: "Build admin dashboards, stock alerts, and order management.",
      time: "4 hours"
    },
    {
      label: "Security & Launch",
      description: "Verify payment security, set up monitoring, deploy to production.",
      time: "2 hours"
    }
  ],
  saas: [
    {
      label: "Problem Discovery",
      description: "Interview early adopters, map user journey, define MVP scope.",
      time: "1 day"
    },
    {
      label: "Architecture",
      description:
        "Design data models, choose auth strategy, plan background jobs.",
      time: "1 day"
    },
    {
      label: "MVP Build",
      description:
        "Implement core flows, integrate billing, set up observability.",
      time: "1-2 weeks"
    },
    {
      label: "Go-live",
      description: "Run load tests, rehearse incident response, launch publicly.",
      time: "2 days"
    }
  ]
};

export function WorkflowPlanner() {
  const [goal, setGoal] = useState<Goal>("portfolio");

  const recommendations = useMemo(() => {
    return techStacks[goal];
  }, [goal]);

  const steps = timeline[goal];

  return (
    <section className={styles.container} aria-labelledby="planner-heading">
      <header className={styles.header}>
        <h2 id="planner-heading">Project Planner</h2>
        <p>
          Select your website goal and instantly get a tailored roadmap, tech
          stack, and estimated build timeline.
        </p>
      </header>
      <div className={styles.controls}>
        <span className={styles.label}>Website Goal</span>
        <div className={styles.choices}>
          {(Object.keys(goalLabels) as Goal[]).map((key) => (
            <button
              key={key}
              type="button"
              className={`${styles.choice} ${
                goal === key ? styles.choiceActive : ""
              }`}
              onClick={() => setGoal(key)}
            >
              {goalLabels[key]}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.panelGrid}>
        <div className={styles.panel}>
          <h3>Recommended Stack</h3>
          <ul className={styles.list}>
            {recommendations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.panel}>
          <h3>Timeline Snapshot</h3>
          <ol className={styles.timeline}>
            {steps.map((step) => (
              <li key={step.label}>
                <span className={styles.timelineHeading}>{step.label}</span>
                <p>{step.description}</p>
                <span className={styles.timelineMeta}>{step.time}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
