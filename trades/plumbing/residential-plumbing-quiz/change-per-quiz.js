// residential-plumbing-quiz.js

const obj = {
  // PEOPLE & INTERACTION (3)

  0: {
    question: "Residential plumbing means working inside people’s homes while they watch, worry, and ask questions. You:",
    options: [
      ["Can stay calm, focused, and communicative.", ["ResidentialAligned", "Disciplined"]],
      ["Can handle it, but it takes mental energy.", ["ResidentialAligned", "Flexible"]],
      ["Get flustered or rushed by homeowners.", ["ResidentialMisaligned", "Flexible"]],
      ["Strongly dislike customer-facing work.", ["ResidentialMisaligned", "Flexible"]]
    ]
  },

  1: {
    question: "When a homeowner is stressed and wants it done immediately, your instinct is:",
    options: [
      ["Slow down and keep the process clean.", ["ResidentialAligned", "Disciplined"]],
      ["Balance speed with correctness.", ["ResidentialAligned", "Flexible"]],
      ["Rush and hope it holds.", ["ResidentialMisaligned", "Flexible"]],
      ["Feel irritated or shut down.", ["ResidentialMisaligned", "Flexible"]]
    ]
  },

  2: {
    question: "Explaining what went wrong and what you fixed feels:",
    options: [
      ["Normal — communication is part of the job.", ["ResidentialAligned", "Disciplined"]],
      ["Okay, but not my favorite part.", ["ResidentialAligned", "Flexible"]],
      ["Draining and awkward.", ["ResidentialMisaligned", "Flexible"]],
      ["Something I actively avoid.", ["ResidentialMisaligned", "Flexible"]]
    ]
  },

  // TIME & WORK RHYTHM (2)

  3: {
    question: "Residential plumbing often means multiple short jobs per day instead of one long project. You:",
    options: [
      ["Like the variety and momentum.", ["ResidentialAligned", "Disciplined"]],
      ["Can handle it with structure.", ["ResidentialAligned", "Flexible"]],
      ["Feel scattered jumping between jobs.", ["ResidentialMisaligned", "Flexible"]],
      ["Prefer one large project at a time.", ["ResidentialMisaligned", "Flexible"]]
    ]
  },

  4: {
    question: "When a small mistake early could turn into a callback later, you:",
    options: [
      ["Slow down and verify everything.", ["ResidentialAligned", "Disciplined"]],
      ["Double-check the important parts.", ["ResidentialAligned", "Flexible"]],
      ["Assume it’ll probably be fine.", ["ResidentialMisaligned", "Flexible"]],
      ["Hate that kind of lingering risk.", ["ResidentialMisaligned", "Flexible"]]
    ]
  },

  // PACE & PRESSURE (2)

  5: {
    question: "Under time pressure, what usually holds up best?",
    options: [
      ["My process — I stay methodical.", ["ResidentialAligned", "Disciplined"]],
      ["Most of my process, with some shortcuts.", ["ResidentialAligned", "Flexible"]],
      ["Speed — details slip.", ["ResidentialMisaligned", "Flexible"]],
      ["Nothing — pressure wrecks my focus.", ["ResidentialMisaligned", "Flexible"]]
    ]
  },

  6: {
    question: "Knowing callbacks come out of your time and reputation makes you:",
    options: [
      ["Careful and thorough.", ["ResidentialAligned", "Disciplined"]],
      ["Mostly careful, but mentally taxed.", ["ResidentialAligned", "Flexible"]],
      ["Anxious and rushed.", ["ResidentialMisaligned", "Flexible"]],
      ["Prefer work without that risk.", ["ResidentialMisaligned", "Flexible"]]
    ]
  },

  // REPETITION & TOLERANCE (2)

  7: {
    question: "Residential work repeats similar fixes (leaks, clogs, valves, fixtures) with small variations. You:",
    options: [
      ["Are fine with it — pattern recognition helps.", ["ResidentialAligned", "Disciplined"]],
      ["Can do it, but want some variety.", ["ResidentialAligned", "Flexible"]],
      ["Get bored quickly.", ["ResidentialMisaligned", "Flexible"]],
      ["Avoid repetitive service work.", ["ResidentialMisaligned", "Flexible"]]
    ]
  },

  8: {
    question: "Cleanup, testing, and finishing after the repair usually feels:",
    options: [
      ["Like part of the job, not optional.", ["ResidentialAligned", "Disciplined"]],
      ["Necessary, but easy to rush.", ["ResidentialAligned", "Flexible"]],
      ["Annoying once the fix works.", ["ResidentialMisaligned", "Flexible"]],
      ["Something I hate doing.", ["ResidentialMisaligned", "Flexible"]]
    ]
  },

  // VISIBILITY & ERROR COST (2)

  9: {
    question: "Residential mistakes are immediately visible to the homeowner. You:",
    options: [
      ["Work as if everything will be noticed.", ["ResidentialAligned", "Disciplined"]],
      ["Try to be careful, but accept risk.", ["ResidentialAligned", "Flexible"]],
      ["Hope issues won’t be seen.", ["ResidentialMisaligned", "Flexible"]],
      ["Dislike that level of visibility.", ["ResidentialMisaligned", "Flexible"]]
    ]
  },

  10: {
    question: "If a homeowner questions your work or decision, you:",
    options: [
      ["Explain calmly and stand by correct choices.", ["ResidentialAligned", "Disciplined"]],
      ["Explain, but feel pressure.", ["ResidentialAligned", "Flexible"]],
      ["Feel defensive or rushed.", ["ResidentialMisaligned", "Flexible"]],
      ["Hate being questioned.", ["ResidentialMisaligned", "Flexible"]]
    ]
  },

  // ENVIRONMENT & PHYSICAL REALITY (2)

  11: {
    question: "Working in tight, awkward residential spaces feels:",
    options: [
      ["Normal — it’s part of the trade.", ["ResidentialAligned", "Disciplined"]],
      ["Manageable with breaks.", ["ResidentialAligned", "Flexible"]],
      ["Mentally draining.", ["ResidentialMisaligned", "Flexible"]],
      ["Something I want to avoid.", ["ResidentialMisaligned", "Flexible"]]
    ]
  },

  12: {
    question: "Water, grime, and occasional gross surprises:",
    options: [
      ["Don’t bother me much.", ["ResidentialAligned", "Disciplined"]],
      ["Are tolerable with gear.", ["ResidentialAligned", "Flexible"]],
      ["Wear me down quickly.", ["ResidentialMisaligned", "Flexible"]],
      ["Are a dealbreaker.", ["ResidentialMisaligned", "Flexible"]]
    ]
  },

  // SELF-AWARENESS CHECK (3)

  13: {
    question: "Which plumbing lane feels most natural to you?",
    options: [
      ["Service & repair inside homes.", ["ResidentialAligned", "Disciplined"]],
      ["A mix of residential and other work.", ["ResidentialAligned", "Flexible"]],
      ["Large systems or non-customer work.", ["ResidentialMisaligned", "Flexible"]],
      ["Anything but home service.", ["ResidentialMisaligned", "Flexible"]]
    ]
  },

  14: {
    question: "Be honest: how strong is your pull toward residential plumbing specifically?",
    options: [
      ["Strong — I like troubleshooting and hands-on fixes.", ["ResidentialAligned", "Disciplined"]],
      ["Moderate — I’m still comparing lanes.", ["ResidentialAligned", "Flexible"]],
      ["Low — other plumbing paths fit me better.", ["ResidentialMisaligned", "Flexible"]],
      ["Very low — this isn’t my environment.", ["ResidentialMisaligned", "Flexible"]]
    ]
  }
};

const tags = {
  ResidentialAligned: 0,
  ResidentialMisaligned: 0,
  Disciplined: 0,
  Flexible: 0
};

function interpretResults() {
  const aligned = tags.ResidentialAligned || 0;
  const misaligned = tags.ResidentialMisaligned || 0;
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
      "You’re built for residential reality: steady under pressure, disciplined about cleanup and testing, and consistent even when people are watching.";
  } else if (disciplinePct >= 40) {
    disciplineLabel =
      "You can do residential plumbing, but structure and habits will matter — checklists, pacing, and resisting the urge to rush.";
  } else {
    disciplineLabel =
      "Residential plumbing may feel mentally irritating because it punishes rushing and exposes mistakes immediately.";
  }

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Residential Plumbing (${fitPct}% alignment)`;
    description = `
You’re showing strong alignment with residential plumbing — comfort with customer-facing pressure, troubleshooting, and finishing work clean inside someone’s home.<br><br>
<strong>Blunt truth:</strong> residential plumbing isn’t just technical — it’s emotional labor under time pressure. The pipes are solvable; the people and pace are the real test. Your answers suggest you can handle both.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(60, 160, 120)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Residential Plumbing (${fitPct}% alignment)`;
    description = `
You’ve got some traits that fit residential plumbing, but friction is likely without structure and boundaries.<br><br>
<strong>Translation:</strong> you may enjoy planned residential work but feel drained by constant service calls, mess, and customer pressure.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Residential Plumbing (${fitPct}% alignment)`;
    description = `
Based on your answers, residential plumbing will likely feel like constant friction: customer pressure, visible mistakes, messy environments, and repeated callbacks.<br><br>
<strong>This isn’t a knock.</strong> It usually means your strengths fit better in commercial, pipefitting, drain/sewer, or less customer-facing lanes.
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
