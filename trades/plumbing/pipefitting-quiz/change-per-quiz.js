// pipefitting-quiz.js

const obj = {
  // PEOPLE & COORDINATION (3)

  0: {
    question: "Pipefitting work often means coordinating with welders, inspectors, and foremen. You:",
    options: [
      ["Handle it fine — coordination is part of system work.", ["PipefittingAligned", "Disciplined"]],
      ["Can manage it with clear leadership.", ["PipefittingAligned", "Flexible"]],
      ["Get frustrated when others affect my progress.", ["PipefittingMisaligned", "Flexible"]],
      ["Prefer work where I control everything.", ["PipefittingMisaligned", "Flexible"]]
    ]
  },

  1: {
    question: "When an inspector or supervisor questions your layout or measurements, you:",
    options: [
      ["Re-check calmly and adjust if needed.", ["PipefittingAligned", "Disciplined"]],
      ["Explain my reasoning, but feel pressure.", ["PipefittingAligned", "Flexible"]],
      ["Feel defensive or irritated.", ["PipefittingMisaligned", "Flexible"]],
      ["Dislike being scrutinized that closely.", ["PipefittingMisaligned", "Flexible"]]
    ]
  },

  2: {
    question: "Pipefitting errors often affect other trades downstream. Knowing that:",
    options: [
      ["Motivates me to be exact.", ["PipefittingAligned", "Disciplined"]],
      ["Adds pressure, but I can handle it.", ["PipefittingAligned", "Flexible"]],
      ["Makes me anxious and rushed.", ["PipefittingMisaligned", "Flexible"]],
      ["Feels like too much responsibility.", ["PipefittingMisaligned", "Flexible"]]
    ]
  },

  // TIME & PROJECT RHYTHM (2)

  3: {
    question: "Pipefitting projects are usually long, methodical installs with delayed payoff. You:",
    options: [
      ["Prefer steady progress over quick wins.", ["PipefittingAligned", "Disciplined"]],
      ["Can do it with milestones.", ["PipefittingAligned", "Flexible"]],
      ["Lose motivation on long builds.", ["PipefittingMisaligned", "Flexible"]],
      ["Want fast turnaround and visible results.", ["PipefittingMisaligned", "Flexible"]]
    ]
  },

  4: {
    question: "When a job slows down because layout or alignment needs rechecking, you:",
    options: [
      ["Accept it — accuracy saves time later.", ["PipefittingAligned", "Disciplined"]],
      ["Push through, but feel impatience.", ["PipefittingAligned", "Flexible"]],
      ["Rush to keep momentum.", ["PipefittingMisaligned", "Flexible"]],
      ["Get frustrated and disengaged.", ["PipefittingMisaligned", "Flexible"]]
    ]
  },

  // PACE & PRESSURE (2)

  5: {
    question: "Under schedule pressure, what usually gives first?",
    options: [
      ["Speed — accuracy stays first.", ["PipefittingAligned", "Disciplined"]],
      ["Balance — I try to protect both.", ["PipefittingAligned", "Flexible"]],
      ["Accuracy — I start cutting corners.", ["PipefittingMisaligned", "Flexible"]],
      ["My patience — pressure shuts me down.", ["PipefittingMisaligned", "Flexible"]]
    ]
  },

  6: {
    question: "Knowing small alignment errors can cascade later makes you:",
    options: [
      ["Slow down and double-check.", ["PipefittingAligned", "Disciplined"]],
      ["More careful, but mentally taxed.", ["PipefittingAligned", "Flexible"]],
      ["Stressed and rushed.", ["PipefittingMisaligned", "Flexible"]],
      ["Prefer lower-stakes work.", ["PipefittingMisaligned", "Flexible"]]
    ]
  },

  // REPETITION & TOLERANCE (2)

  7: {
    question: "Pipefitting involves repeating precise steps (measure, cut, bevel, fit, check). You:",
    options: [
      ["Are fine with it — repetition keeps systems true.", ["PipefittingAligned", "Disciplined"]],
      ["Can handle it with some variation.", ["PipefittingAligned", "Flexible"]],
      ["Get bored quickly.", ["PipefittingMisaligned", "Flexible"]],
      ["Avoid repetitive precision work.", ["PipefittingMisaligned", "Flexible"]]
    ]
  },

  8: {
    question: "Redoing work because something is slightly out of alignment usually makes you:",
    options: [
      ["Calm — better now than later.", ["PipefittingAligned", "Disciplined"]],
      ["Annoyed but compliant.", ["PipefittingAligned", "Flexible"]],
      ["Frustrated and drained.", ["PipefittingMisaligned", "Flexible"]],
      ["Angry — I hate rework.", ["PipefittingMisaligned", "Flexible"]]
    ]
  },

  // VISIBILITY & ERROR COST (2)

  9: {
    question: "Pipefitting mistakes often aren’t obvious until much later. You:",
    options: [
      ["Build as if everything will be checked later.", ["PipefittingAligned", "Disciplined"]],
      ["Try to be careful, but trust it’ll work.", ["PipefittingAligned", "Flexible"]],
      ["Assume small issues won’t matter.", ["PipefittingMisaligned", "Flexible"]],
      ["Prefer work with immediate feedback.", ["PipefittingMisaligned", "Flexible"]]
    ]
  },

  10: {
    question: "If your layout determines whether a system fits or fails, you feel:",
    options: [
      ["Comfortable owning that responsibility.", ["PipefittingAligned", "Disciplined"]],
      ["Okay with support and checks.", ["PipefittingAligned", "Flexible"]],
      ["Uneasy about the pressure.", ["PipefittingMisaligned", "Flexible"]],
      ["Uninterested in that level of accountability.", ["PipefittingMisaligned", "Flexible"]]
    ]
  },

  // ENVIRONMENT & PHYSICAL DEMAND (2)

  11: {
    question: "Pipefitting often involves heavy materials, rigging, and lifts. You:",
    options: [
      ["Handle it well — it’s part of the trade.", ["PipefittingAligned", "Disciplined"]],
      ["Can manage it with pacing.", ["PipefittingAligned", "Flexible"]],
      ["Get worn down quickly.", ["PipefittingMisaligned", "Flexible"]],
      ["Avoid consistently heavy work.", ["PipefittingMisaligned", "Flexible"]]
    ]
  },

  12: {
    question: "Working in industrial or mechanical spaces feels:",
    options: [
      ["Normal — environment doesn’t bother me.", ["PipefittingAligned", "Disciplined"]],
      ["Manageable with breaks.", ["PipefittingAligned", "Flexible"]],
      ["Draining over time.", ["PipefittingMisaligned", "Flexible"]],
      ["Something I want to avoid.", ["PipefittingMisaligned", "Flexible"]]
    ]
  },

  // SELF-AWARENESS CHECK (3)

  13: {
    question: "Which plumbing/welding lane feels most natural to you?",
    options: [
      ["Large systems with exact layout.", ["PipefittingAligned", "Disciplined"]],
      ["A mix of system installs and other work.", ["PipefittingAligned", "Flexible"]],
      ["Fast service or repair work.", ["PipefittingMisaligned", "Flexible"]],
      ["Anything but long, precise system builds.", ["PipefittingMisaligned", "Flexible"]]
    ]
  },

  14: {
    question: "Be honest: how strong is your pull toward pipefitting specifically?",
    options: [
      ["Strong — precision and systems appeal to me.", ["PipefittingAligned", "Disciplined"]],
      ["Moderate — I’m still comparing lanes.", ["PipefittingAligned", "Flexible"]],
      ["Low — other paths fit me better.", ["PipefittingMisaligned", "Flexible"]],
      ["Very low — this isn’t my environment.", ["PipefittingMisaligned", "Flexible"]]
    ]
  }
};

const tags = {
  PipefittingAligned: 0,
  PipefittingMisaligned: 0,
  Disciplined: 0,
  Flexible: 0
};

function interpretResults() {
  const aligned = tags.PipefittingAligned || 0;
  const misaligned = tags.PipefittingMisaligned || 0;
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
      "You’re built for pipefitting reality: patience for precision, tolerance for repetition, and discipline to slow down and get alignment right the first time.";
  } else if (disciplinePct >= 40) {
    disciplineLabel =
      "You can do pipefitting, but structure, leadership, and pacing will matter a lot.";
  } else {
    disciplineLabel =
      "Pipefitting may feel mentally irritating because it punishes rushing and rewards patience more than speed.";
  }

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Pipefitting (${fitPct}% alignment)`;
    description = `
You’re showing strong alignment with pipefitting — comfort with precision, large systems, and methodical work where small errors have big consequences.<br><br>
<strong>Blunt truth:</strong> pipefitting rewards people who think in systems and slow down under pressure. Speed without accuracy costs more time than it saves.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(60, 160, 120)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Pipefitting (${fitPct}% alignment)`;
    description = `
You’ve got some traits that fit pipefitting, but friction is likely without structure and clear expectations.<br><br>
<strong>Translation:</strong> you may like parts of the work, but dislike repetition, layout pressure, or delayed payoff.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Pipefitting (${fitPct}% alignment)`;
    description = `
Based on your answers, pipefitting will likely feel like constant friction: tight tolerances, repetition, heavy systems, and high error cost.<br><br>
<strong>This isn’t a knock.</strong> It usually means your strengths fit better in faster-paced or more flexible plumbing lanes.
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
