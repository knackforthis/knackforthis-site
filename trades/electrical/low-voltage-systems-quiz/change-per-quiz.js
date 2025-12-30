// low-voltage-systems-quiz.js

const obj = {
  // DETAIL, NEATNESS, INVISIBLE QUALITY (3)

  0: {
    question: "Low-voltage work is detail-heavy and system-oriented (data, security, AV, access control). You usually:",
    options: [
      ["Like clean systems where organization and labeling matter.", ["LowVoltageAligned", "Disciplined"]],
      ["Can do it, but I need variety.", ["LowVoltageAligned", "Flexible"]],
      ["Get impatient when work is slow and detail-focused.", ["LowVoltageMisaligned", "Flexible"]],
      ["Lose interest fast if the work feels picky.", ["LowVoltageMisaligned", "Flexible"]]
    ]
  },

  1: {
    question: "Cable management (routing, bundling, labeling) feels:",
    options: [
      ["Satisfying — clean work shows competence.", ["LowVoltageAligned", "Disciplined"]],
      ["Necessary but tedious.", ["LowVoltageAligned", "Flexible"]],
      ["Something I rush.", ["LowVoltageMisaligned", "Flexible"]],
      ["Something I strongly dislike.", ["LowVoltageMisaligned", "Flexible"]]
    ]
  },

  2: {
    question: "How do you feel about work where mistakes are mostly invisible until later?",
    options: [
      ["That’s why I double-check.", ["LowVoltageAligned", "Disciplined"]],
      ["I rely on testing and standards.", ["LowVoltageAligned", "Flexible"]],
      ["It makes me uneasy.", ["LowVoltageMisaligned", "Flexible"]],
      ["I don’t like that kind of risk.", ["LowVoltageMisaligned", "Flexible"]]
    ]
  },

  // TROUBLESHOOTING & SYSTEM THINKING (3)

  3: {
    question: "When a system doesn’t work, fixing it often means signal tracing and configuration checks. You:",
    options: [
      ["Enjoy methodical troubleshooting.", ["LowVoltageAligned", "Disciplined"]],
      ["Can do it with a clear process.", ["LowVoltageAligned", "Flexible"]],
      ["Get frustrated when answers aren’t obvious.", ["LowVoltageMisaligned", "Flexible"]],
      ["Avoid troubleshooting-heavy work.", ["LowVoltageMisaligned", "Flexible"]]
    ]
  },

  4: {
    question: "Learning tech basics (networks, devices, controllers, configuration) feels:",
    options: [
      ["Interesting — systems make sense to me.", ["LowVoltageAligned", "Disciplined"]],
      ["Manageable with guidance.", ["LowVoltageAligned", "Flexible"]],
      ["Mentally tiring.", ["LowVoltageMisaligned", "Flexible"]],
      ["Not something I want to do.", ["LowVoltageMisaligned", "Flexible"]]
    ]
  },

  5: {
    question: "An hour into a troubleshooting issue with no clear answer, you:",
    options: [
      ["Stay systematic.", ["LowVoltageAligned", "Disciplined"]],
      ["Keep going, but feel pressure.", ["LowVoltageAligned", "Flexible"]],
      ["Start guessing.", ["LowVoltageMisaligned", "Flexible"]],
      ["Lose patience fast.", ["LowVoltageMisaligned", "Flexible"]]
    ]
  },

  // DOCUMENTATION, STANDARDS, FINISHING (3)

  6: {
    question: "Documentation (port maps, labels, as-builts) feels:",
    options: [
      ["Essential for future clarity.", ["LowVoltageAligned", "Disciplined"]],
      ["Necessary but dull.", ["LowVoltageAligned", "Flexible"]],
      ["Like bureaucracy.", ["LowVoltageMisaligned", "Flexible"]],
      ["Something I strongly dislike.", ["LowVoltageMisaligned", "Flexible"]]
    ]
  },

  7: {
    question: "Testing, labeling, and verifying everything before leaving a job feels:",
    options: [
      ["Non-negotiable.", ["LowVoltageAligned", "Disciplined"]],
      ["Important but slow.", ["LowVoltageAligned", "Flexible"]],
      ["Annoying.", ["LowVoltageMisaligned", "Flexible"]],
      ["Something I want to avoid.", ["LowVoltageMisaligned", "Flexible"]]
    ]
  },

  8: {
    question: "How do you feel about being judged on neatness and finish?",
    options: [
      ["Fine — that’s part of professionalism.", ["LowVoltageAligned", "Disciplined"]],
      ["Okay, but it adds pressure.", ["LowVoltageAligned", "Flexible"]],
      ["It stresses me out.", ["LowVoltageMisaligned", "Flexible"]],
      ["I don’t want that scrutiny.", ["LowVoltageMisaligned", "Flexible"]]
    ]
  },

  // REPETITION, PACE, FATIGUE (3)

  9: {
    question: "Repetitive installs across many rooms (cameras, drops, devices) feel:",
    options: [
      ["Fine — consistency matters.", ["LowVoltageAligned", "Disciplined"]],
      ["Okay with breaks.", ["LowVoltageAligned", "Flexible"]],
      ["Draining.", ["LowVoltageMisaligned", "Flexible"]],
      ["Unbearable.", ["LowVoltageMisaligned", "Flexible"]]
    ]
  },

  10: {
    question: "Low-voltage is usually slower-paced but mentally precise. You:",
    options: [
      ["Prefer that balance.", ["LowVoltageAligned", "Disciplined"]],
      ["Can tolerate it.", ["LowVoltageAligned", "Flexible"]],
      ["Prefer faster, physical work.", ["LowVoltageMisaligned", "Flexible"]],
      ["Strongly dislike slow, precise work.", ["LowVoltageMisaligned", "Flexible"]]
    ]
  },

  11: {
    question: "After a long day of careful, tidy work, you feel:",
    options: [
      ["Satisfied.", ["LowVoltageAligned", "Disciplined"]],
      ["Neutral.", ["LowVoltageAligned", "Flexible"]],
      ["Mentally drained.", ["LowVoltageMisaligned", "Flexible"]],
      ["Irritated.", ["LowVoltageMisaligned", "Flexible"]]
    ]
  },

  // SELF-AWARENESS & DIRECTION (3)

  12: {
    question: "What would frustrate you most long-term?",
    options: [
      ["Sloppy installs and undocumented work.", ["LowVoltageAligned", "Disciplined"]],
      ["Too much repetition.", ["LowVoltageAligned", "Flexible"]],
      ["Detail and paperwork.", ["LowVoltageMisaligned", "Flexible"]],
      ["Tech-heavy troubleshooting.", ["LowVoltageMisaligned", "Flexible"]]
    ]
  },

  13: {
    question: "Which role sounds more natural?",
    options: [
      ["Systems installer/troubleshooter.", ["LowVoltageAligned", "Disciplined"]],
      ["Hybrid electrical + low-voltage.", ["LowVoltageAligned", "Flexible"]],
      ["Traditional electrical only.", ["LowVoltageMisaligned", "Flexible"]],
      ["Anything but system integration.", ["LowVoltageMisaligned", "Flexible"]]
    ]
  },

  14: {
    question: "Be honest: should you keep exploring low-voltage systems?",
    options: [
      ["Yes — this fits how I work.", ["LowVoltageAligned", "Disciplined"]],
      ["Maybe — role matters.", ["LowVoltageAligned", "Flexible"]],
      ["Probably not.", ["LowVoltageMisaligned", "Flexible"]],
      ["No — this isn’t my lane.", ["LowVoltageMisaligned", "Flexible"]]
    ]
  }
};

const tags = {
  LowVoltageAligned: 0,
  LowVoltageMisaligned: 0,
  Disciplined: 0,
  Flexible: 0
};

function interpretResults() {
  const aligned = tags.LowVoltageAligned || 0;
  const misaligned = tags.LowVoltageMisaligned || 0;
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
      "You’re built for detail discipline: tidy installs, documentation, and patient troubleshooting won’t feel like punishment.";
  } else if (disciplinePct >= 40) {
    disciplineLabel =
      "You can do low-voltage work, but role fit and structure will matter a lot.";
  } else {
    disciplineLabel =
      "Low-voltage systems may feel mentally irritating because they demand precision, documentation, and patience without much physical release.";
  }

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Low-Voltage Systems (${fitPct}% alignment)`;
    description = `
You’re showing strong alignment with low-voltage systems — clean installs, logical troubleshooting, and detail-driven work.<br><br>
<strong>Blunt truth:</strong> low-voltage rewards people who care about things most people never notice — until they’re wrong. Your answers suggest that won’t drive you crazy.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(80, 150, 170)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Low-Voltage Systems (${fitPct}% alignment)`;
    description = `
You have some traits that work in low-voltage, but enough friction points that the wrong role could wear you down.<br><br>
<strong>Translation:</strong> hybrid roles or install-heavy positions may suit you better than pure systems troubleshooting.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Low-Voltage Systems (${fitPct}% alignment)`;
    description = `
Based on your answers, low-voltage work will likely feel like constant friction: tidy detail, documentation, repetition, and mentally precise troubleshooting.<br><br>
<strong>This isn’t a flaw.</strong> It usually means you’ll feel better in a more physical, faster-paced, or less documentation-heavy lane.
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

  Object.keys(tags).forEach(k => tags[k] = 0);

  return { title, description, color };
}
