// commercial-plumbing-quiz.js

const obj = {
  // PEOPLE & COORDINATION (3)

  0: {
    question: "Commercial plumbing usually means working under a GC, inspectors, and site rules. You:",
    options: [
      ["Accept it — hierarchy and coordination are part of big jobs.", ["CommercialAligned", "Disciplined"]],
      ["Can handle it with clear communication.", ["CommercialAligned", "Flexible"]],
      ["Get irritated when others control pace and access.", ["CommercialMisaligned", "Flexible"]],
      ["Avoid environments with layered authority.", ["CommercialMisaligned", "Flexible"]]
    ]
  },

  1: {
    question: "If another trade delays your work (framing, electrical, HVAC), you usually:",
    options: [
      ["Adjust sequencing and keep moving.", ["CommercialAligned", "Disciplined"]],
      ["Wait it out, but it drains me.", ["CommercialAligned", "Flexible"]],
      ["Get frustrated and lose momentum.", ["CommercialMisaligned", "Flexible"]],
      ["Hate depending on other trades.", ["CommercialMisaligned", "Flexible"]]
    ]
  },

  2: {
    question: "Commercial plumbing is less customer-facing and more team-facing. You:",
    options: [
      ["Prefer dealing with crews over homeowners.", ["CommercialAligned", "Disciplined"]],
      ["Either is fine.", ["CommercialAligned", "Flexible"]],
      ["Prefer one-on-one service work.", ["CommercialMisaligned", "Flexible"]],
      ["Dislike both customers and crews.", ["CommercialMisaligned", "Flexible"]]
    ]
  },

  // TIME & TIMELINES (2)

  3: {
    question: "Commercial projects often stretch for months. You:",
    options: [
      ["Like long builds with steady progress.", ["CommercialAligned", "Disciplined"]],
      ["Can tolerate it with milestones.", ["CommercialAligned", "Flexible"]],
      ["Lose interest on long timelines.", ["CommercialMisaligned", "Flexible"]],
      ["Need fast turnaround work.", ["CommercialMisaligned", "Flexible"]]
    ]
  },

  4: {
    question: "How do you handle days where progress is slow due to inspections or scheduling?",
    options: [
      ["Fine — part of the process.", ["CommercialAligned", "Disciplined"]],
      ["I manage it, but it tests patience.", ["CommercialAligned", "Flexible"]],
      ["It frustrates me.", ["CommercialMisaligned", "Flexible"]],
      ["I hate days that feel unproductive.", ["CommercialMisaligned", "Flexible"]]
    ]
  },

  // PACE & PRESSURE (2)

  5: {
    question: "When schedule pressure increases, your instinct is to:",
    options: [
      ["Protect quality and code compliance.", ["CommercialAligned", "Disciplined"]],
      ["Balance speed carefully.", ["CommercialAligned", "Flexible"]],
      ["Rush installs.", ["CommercialMisaligned", "Flexible"]],
      ["Disengage when pressure rises.", ["CommercialMisaligned", "Flexible"]]
    ]
  },

  6: {
    question: "Knowing mistakes can fail inspection and cause rework makes you:",
    options: [
      ["More methodical.", ["CommercialAligned", "Disciplined"]],
      ["Careful but tense.", ["CommercialAligned", "Flexible"]],
      ["Anxious and second-guessing.", ["CommercialMisaligned", "Flexible"]],
      ["Prefer lower-stakes work.", ["CommercialMisaligned", "Flexible"]]
    ]
  },

  // REPETITION & PROCESS (2)

  7: {
    question: "Commercial installs often repeat the same tasks (hangers, long runs, fixtures). You:",
    options: [
      ["Handle repetition well.", ["CommercialAligned", "Disciplined"]],
      ["Can do it with some variety.", ["CommercialAligned", "Flexible"]],
      ["Get bored quickly.", ["CommercialMisaligned", "Flexible"]],
      ["Avoid repetitive install work.", ["CommercialMisaligned", "Flexible"]]
    ]
  },

  8: {
    question: "Redoing work because it doesn’t meet code or spec usually makes you:",
    options: [
      ["Calm — compliance matters.", ["CommercialAligned", "Disciplined"]],
      ["Annoyed but compliant.", ["CommercialAligned", "Flexible"]],
      ["Frustrated and drained.", ["CommercialMisaligned", "Flexible"]],
      ["Angry — I hate rework.", ["CommercialMisaligned", "Flexible"]]
    ]
  },

  // VISIBILITY & INSPECTION (2)

  9: {
    question: "Commercial plumbing involves inspections, testing, and documentation. You:",
    options: [
      ["Prefer clear pass/fail standards.", ["CommercialAligned", "Disciplined"]],
      ["Accept it with pressure.", ["CommercialAligned", "Flexible"]],
      ["Feel stressed by inspections.", ["CommercialMisaligned", "Flexible"]],
      ["Avoid inspection-heavy environments.", ["CommercialMisaligned", "Flexible"]]
    ]
  },

  10: {
    question: "Punch lists and closeout work feel like:",
    options: [
      ["A necessary part of finishing professionally.", ["CommercialAligned", "Disciplined"]],
      ["Annoying but required.", ["CommercialAligned", "Flexible"]],
      ["A motivation killer.", ["CommercialMisaligned", "Flexible"]],
      ["Something I strongly dislike.", ["CommercialMisaligned", "Flexible"]]
    ]
  },

  // PHYSICAL & ENVIRONMENTAL REALITY (2)

  11: {
    question: "Working overhead, on ladders/lifts, or in mechanical rooms is:",
    options: [
      ["Manageable — part of the job.", ["CommercialAligned", "Disciplined"]],
      ["Tolerable with pacing.", ["CommercialAligned", "Flexible"]],
      ["Physically irritating long-term.", ["CommercialMisaligned", "Flexible"]],
      ["Something I avoid.", ["CommercialMisaligned", "Flexible"]]
    ]
  },

  12: {
    question: "Noise, dust, site rules, and PPE are daily realities. You:",
    options: [
      ["Accept them.", ["CommercialAligned", "Disciplined"]],
      ["Tolerate them.", ["CommercialAligned", "Flexible"]],
      ["Find them draining.", ["CommercialMisaligned", "Flexible"]],
      ["Prefer cleaner environments.", ["CommercialMisaligned", "Flexible"]]
    ]
  },

  // SELF-AWARENESS CHECK (3)

  13: {
    question: "Which plumbing lane feels most natural to you?",
    options: [
      ["Commercial installs on large projects.", ["CommercialAligned", "Disciplined"]],
      ["A mix of commercial install and service.", ["CommercialAligned", "Flexible"]],
      ["Mostly residential/service work.", ["CommercialMisaligned", "Flexible"]],
      ["Anything but long jobsite projects.", ["CommercialMisaligned", "Flexible"]]
    ]
  },

  14: {
    question: "Be honest: how strong is your pull toward commercial plumbing specifically?",
    options: [
      ["Strong — I like structured, code-driven work.", ["CommercialAligned", "Disciplined"]],
      ["Moderate — I’m weighing it against other lanes.", ["CommercialAligned", "Flexible"]],
      ["Low — other plumbing paths appeal more.", ["CommercialMisaligned", "Flexible"]],
      ["Very low — this isn’t my environment.", ["CommercialMisaligned", "Flexible"]]
    ]
  }
};

const tags = {
  CommercialAligned: 0,
  CommercialMisaligned: 0,
  Disciplined: 0,
  Flexible: 0
};

function interpretResults() {
  const aligned = tags.CommercialAligned || 0;
  const misaligned = tags.CommercialMisaligned || 0;
  const disciplined = tags.Disciplined || 0;
  const flexible = tags.Flexible || 0;

  const fitScore = aligned - misaligned; // ~ -15 .. +15
  let fitPct = Math.round(((fitScore + 15) / 30) * 100);
  fitPct = Math.max(0, Math.min(100, fitPct));

  const disciplineScore = disciplined - flexible;
  let disciplinePct = Math.round(((disciplineScore + 15) / 30) * 100);
  disciplinePct = Math.max(0, Math.min(100, disciplinePct));

  let disciplineLabel;
  if (disciplinePct >= 70) {
    disciplineLabel =
      "You’re built for commercial plumbing’s reality: coordination, code compliance, inspections, and long follow-through.";
  } else if (disciplinePct >= 40) {
    disciplineLabel =
      "You can do commercial plumbing, but sequencing, leadership, and pacing will matter a lot.";
  } else {
    disciplineLabel =
      "Slow timelines, coordination, and inspection-driven work may grind you down over time.";
  }

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Commercial Plumbing (${fitPct}% alignment)`;
    description = `
You show strong alignment with commercial plumbing — comfort with structured installs, code-driven work, inspections, and jobsite coordination.<br><br>
<strong>Blunt truth:</strong> commercial plumbing rewards patience and execution, not hero fixes. Your answers suggest you can live with that rhythm.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(60, 160, 120)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Commercial Plumbing (${fitPct}% alignment)`;
    description = `
You have some traits that fit commercial plumbing, but friction is likely without the right project type and crew.<br><br>
<strong>Translation:</strong> you may like the systems, but dislike the pace, coordination, or paperwork.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Commercial Plumbing (${fitPct}% alignment)`;
    description = `
Based on your answers, commercial plumbing will likely feel frustrating: long timelines, coordination drag, inspections, and repetitive installs.<br><br>
<strong>This isn’t a knock.</strong> It usually means your strengths align better with faster, more independent plumbing lanes.
    `.trim();
    color = "rgb(170, 80, 80)";
  }

  if (band === "strong") {
    $(".good-fit").show();
    $(".no-fit").hide();
  } else if (band === "middle") {
    $(".good-fit").show();
    $(".no-fit").show();
  } else {
    $(".good-fit").hide();
    $(".no-fit").show();
  }

  Object.keys(tags).forEach(k => (tags[k] = 0));

  return { title, description, color };
}
