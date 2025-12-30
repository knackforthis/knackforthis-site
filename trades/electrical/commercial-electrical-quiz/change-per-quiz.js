// commercial-electrical-quiz.js

const obj = {
  // PEOPLE & COORDINATION (3)

  0: {
    question: "Commercial electrical work means coordinating with GCs, other trades, and inspectors daily. You:",
    options: [
      ["Handle it well — coordination is part of big projects.", ["CommercialElectricalAligned", "Structured"]],
      ["Can do it, but it drains energy.", ["CommercialElectricalAligned", "Flexible"]],
      ["Feel boxed in by constant dependencies.", ["CommercialElectricalMisaligned", "Flexible"]],
      ["Strongly dislike work that depends on others’ timelines.", ["CommercialElectricalMisaligned", "Flexible"]]
    ]
  },

  1: {
    question: "When supervision or inspection oversight is constant, you:",
    options: [
      ["Prefer it — clarity keeps work clean.", ["CommercialElectricalAligned", "Structured"]],
      ["Can tolerate it, but feel pressure.", ["CommercialElectricalAligned", "Flexible"]],
      ["Get stressed or irritated.", ["CommercialElectricalMisaligned", "Flexible"]],
      ["Avoid work with heavy oversight.", ["CommercialElectricalMisaligned", "Flexible"]]
    ]
  },

  2: {
    question: "Being one specialist on a large crew feels:",
    options: [
      ["Normal — teamwork matters.", ["CommercialElectricalAligned", "Structured"]],
      ["Fine, as long as expectations are clear.", ["CommercialElectricalAligned", "Flexible"]],
      ["Restrictive.", ["CommercialElectricalMisaligned", "Flexible"]],
      ["Frustrating — I want autonomy.", ["CommercialElectricalMisaligned", "Flexible"]]
    ]
  },

  // STRUCTURE, CODE & SPEC (3)

  3: {
    question: "Commercial electrical requires strict adherence to code, prints, and specs. You:",
    options: [
      ["Like building systems exactly as designed.", ["CommercialElectricalAligned", "Structured"]],
      ["Follow them, but like understanding the logic.", ["CommercialElectricalAligned", "Flexible"]],
      ["Get annoyed when rules slow progress.", ["CommercialElectricalMisaligned", "Flexible"]],
      ["Dislike rule-heavy environments.", ["CommercialElectricalMisaligned", "Flexible"]]
    ]
  },

  4: {
    question: "Working from drawings, schedules, and panel schedules feels:",
    options: [
      ["Comfortable — plans reduce mistakes.", ["CommercialElectricalAligned", "Structured"]],
      ["Okay with clarification.", ["CommercialElectricalAligned", "Flexible"]],
      ["Frustrating when reality differs.", ["CommercialElectricalMisaligned", "Flexible"]],
      ["Mentally draining.", ["CommercialElectricalMisaligned", "Flexible"]]
    ]
  },

  5: {
    question: "Labeling, documentation, and verification:",
    options: [
      ["Are non-negotiable.", ["CommercialElectricalAligned", "Structured"]],
      ["Necessary but easy to rush.", ["CommercialElectricalAligned", "Flexible"]],
      ["Feel tedious.", ["CommercialElectricalMisaligned", "Flexible"]],
      ["Are something I dislike doing.", ["CommercialElectricalMisaligned", "Flexible"]]
    ]
  },

  // REPETITION & FATIGUE (3)

  6: {
    question: "Commercial installs often involve repeating the same process for hours or days. You:",
    options: [
      ["Are fine with repetition when systems are clean.", ["CommercialElectricalAligned", "Structured"]],
      ["Need occasional variety.", ["CommercialElectricalAligned", "Flexible"]],
      ["Get bored quickly.", ["CommercialElectricalMisaligned", "Flexible"]],
      ["Avoid repetitive procedural work.", ["CommercialElectricalMisaligned", "Flexible"]]
    ]
  },

  7: {
    question: "Extended focus tasks (conduit runs, terminations, panel work) feel:",
    options: [
      ["Satisfying.", ["CommercialElectricalAligned", "Structured"]],
      ["Okay but mentally tiring.", ["CommercialElectricalAligned", "Flexible"]],
      ["Draining.", ["CommercialElectricalMisaligned", "Flexible"]],
      ["Uncomfortable.", ["CommercialElectricalMisaligned", "Flexible"]]
    ]
  },

  8: {
    question: "When fatigue sets in, your work quality:",
    options: [
      ["Stays consistent.", ["CommercialElectricalAligned", "Structured"]],
      ["Requires conscious effort.", ["CommercialElectricalAligned", "Flexible"]],
      ["Starts slipping.", ["CommercialElectricalMisaligned", "Flexible"]],
      ["Drops fast.", ["CommercialElectricalMisaligned", "Flexible"]]
    ]
  },

  // VISIBILITY & ERROR COST (3)

  9: {
    question: "Electrical mistakes are often invisible until testing or failure. You:",
    options: [
      ["Double-check even when no one’s watching.", ["CommercialElectricalAligned", "Structured"]],
      ["Try to be careful, but rely on testing.", ["CommercialElectricalAligned", "Flexible"]],
      ["Assume it’s fine if it looks right.", ["CommercialElectricalMisaligned", "Flexible"]],
      ["Dislike work where errors hide.", ["CommercialElectricalMisaligned", "Flexible"]]
    ]
  },

  10: {
    question: "Rework due to a missed detail feels:",
    options: [
      ["Preventable with discipline.", ["CommercialElectricalAligned", "Structured"]],
      ["Frustrating but part of the job.", ["CommercialElectricalAligned", "Flexible"]],
      ["Infuriating.", ["CommercialElectricalMisaligned", "Flexible"]],
      ["Demoralizing.", ["CommercialElectricalMisaligned", "Flexible"]]
    ]
  },

  11: {
    question: "Testing and verification at the end of installs:",
    options: [
      ["Are as important as the install.", ["CommercialElectricalAligned", "Structured"]],
      ["Necessary but tedious.", ["CommercialElectricalAligned", "Flexible"]],
      ["Feel like overkill.", ["CommercialElectricalMisaligned", "Flexible"]],
      ["Are something I rush.", ["CommercialElectricalMisaligned", "Flexible"]]
    ]
  },

  // SELF-AWARENESS (3)

  12: {
    question: "Commercial electrical projects often last months. Your reaction:",
    options: [
      ["I like long, structured builds.", ["CommercialElectricalAligned", "Structured"]],
      ["Fine with milestones.", ["CommercialElectricalAligned", "Flexible"]],
      ["Lose motivation.", ["CommercialElectricalMisaligned", "Flexible"]],
      ["Prefer fast turnaround work.", ["CommercialElectricalMisaligned", "Flexible"]]
    ]
  },

  13: {
    question: "Which environment feels most natural?",
    options: [
      ["Large buildings with system-wide scope.", ["CommercialElectricalAligned", "Structured"]],
      ["A mix of structured and varied work.", ["CommercialElectricalAligned", "Flexible"]],
      ["Small jobs with personal scope.", ["CommercialElectricalMisaligned", "Flexible"]],
      ["Anything but large commercial sites.", ["CommercialElectricalMisaligned", "Flexible"]]
    ]
  },

  14: {
    question: "Be honest: how strong is your pull toward commercial electrical specifically?",
    options: [
      ["Strong — I like systems, structure, and precision.", ["CommercialElectricalAligned", "Structured"]],
      ["Moderate — I’m still comparing lanes.", ["CommercialElectricalAligned", "Flexible"]],
      ["Low — I want more autonomy or variety.", ["CommercialElectricalMisaligned", "Flexible"]],
      ["Very low — this isn’t my environment.", ["CommercialElectricalMisaligned", "Flexible"]]
    ]
  }
};

const tags = {
  CommercialElectricalAligned: 0,
  CommercialElectricalMisaligned: 0,
  Structured: 0,
  Flexible: 0
};

function interpretResults() {
  const aligned = tags.CommercialElectricalAligned || 0;
  const misaligned = tags.CommercialElectricalMisaligned || 0;
  const structured = tags.Structured || 0;
  const flexible = tags.Flexible || 0;

  const fitScore = aligned - misaligned; // ~ -15 .. +15
  let fitPct = Math.round(((fitScore + 15) / 30) * 100);
  fitPct = Math.max(0, Math.min(100, fitPct));

  const structureScore = structured - flexible;
  let structurePct = Math.round(((structureScore + 15) / 30) * 100);
  structurePct = Math.max(0, Math.min(100, structurePct));

  let structureLabel;
  if (structurePct >= 70) {
    structureLabel =
      "You’re comfortable in structured systems where discipline, repetition, and verification matter more than improvisation.";
  } else if (structurePct >= 40) {
    structureLabel =
      "You can work in structured environments, but variety and pacing will matter for long-term stamina.";
  } else {
    structureLabel =
      "Highly structured, rule-heavy environments may feel draining rather than stabilizing.";
  }

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Commercial Electrical (${fitPct}% alignment)`;
    description = `
You’re showing strong alignment with commercial electrical — system thinking, repetition tolerance, and discipline when mistakes aren’t immediately visible.<br><br>
<strong>Blunt truth:</strong> commercial electrical rewards people who care about correctness even when the work looks boring and the payoff is delayed. Your answers suggest you can live in that headspace.<br><br>
${structureLabel}
    `.trim();
    color = "rgb(70, 150, 160)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Commercial Electrical (${fitPct}% alignment)`;
    description = `
You have some traits that work in commercial electrical, but friction is likely without the right role or crew.<br><br>
<strong>Translation:</strong> you may like parts of the work, but repetition, long timelines, or invisible error costs could wear you down. Comparing this lane with service, controls, or residential electrical may clarify your fit.<br><br>
${structureLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Commercial Electrical (${fitPct}% alignment)`;
    description = `
Based on your answers, commercial electrical will likely feel like constant friction: repetition, rigid structure, delayed feedback, and heavy verification demands.<br><br>
<strong>This isn’t a flaw.</strong> It usually means your strengths fit better in electrical paths with faster feedback, more autonomy, or direct troubleshooting.
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
