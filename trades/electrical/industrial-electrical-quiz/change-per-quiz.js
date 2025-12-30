// industrial-electrical-quiz.js

const obj = {
  // RESPONSIBILITY, SAFETY, CONSEQUENCE (3)

  0: {
    question: "Industrial electrical work carries real risk — mistakes can damage equipment or seriously hurt people. Your reaction is:",
    options: [
      ["I take that responsibility seriously and stay calm under it.", ["IndustrialElectricalAligned", "Disciplined"]],
      ["I can handle it, but it adds pressure.", ["IndustrialElectricalAligned", "Flexible"]],
      ["That level of consequence makes me anxious.", ["IndustrialElectricalMisaligned", "Flexible"]],
      ["I don’t want work where mistakes can be dangerous.", ["IndustrialElectricalMisaligned", "Flexible"]]
    ]
  },

  1: {
    question: "Strict safety culture (lockout/tagout, verification, PPE, clearances) feels:",
    options: [
      ["Necessary and non-negotiable.", ["IndustrialElectricalAligned", "Disciplined"]],
      ["Important, but sometimes heavy.", ["IndustrialElectricalAligned", "Flexible"]],
      ["Slow and frustrating.", ["IndustrialElectricalMisaligned", "Flexible"]],
      ["Oppressive — I’d fight it.", ["IndustrialElectricalMisaligned", "Flexible"]]
    ]
  },

  2: {
    question: "When safety procedures slow progress, you usually:",
    options: [
      ["Accept it — safety beats speed.", ["IndustrialElectricalAligned", "Disciplined"]],
      ["Follow them, but feel pressure.", ["IndustrialElectricalAligned", "Flexible"]],
      ["Get tempted to rush.", ["IndustrialElectricalMisaligned", "Flexible"]],
      ["Strongly resent the slowdown.", ["IndustrialElectricalMisaligned", "Flexible"]]
    ]
  },

  // TROUBLESHOOTING & SYSTEM THINKING (3)

  3: {
    question: "Industrial electrical often means diagnosing control circuits and complex systems. You:",
    options: [
      ["Enjoy systematic troubleshooting.", ["IndustrialElectricalAligned", "Disciplined"]],
      ["Can do it with structure and time.", ["IndustrialElectricalAligned", "Flexible"]],
      ["Find complex diagnostics draining.", ["IndustrialElectricalMisaligned", "Flexible"]],
      ["Avoid diagnostic-heavy work.", ["IndustrialElectricalMisaligned", "Flexible"]]
    ]
  },

  4: {
    question: "An hour into a fault with no obvious answer, you usually:",
    options: [
      ["Stay methodical — the answer is in the evidence.", ["IndustrialElectricalAligned", "Disciplined"]],
      ["Keep going, but feel pressure building.", ["IndustrialElectricalAligned", "Flexible"]],
      ["Start guessing to move faster.", ["IndustrialElectricalMisaligned", "Flexible"]],
      ["Lose patience and disengage.", ["IndustrialElectricalMisaligned", "Flexible"]]
    ]
  },

  5: {
    question: "Learning about motors, VFDs, sensors, PLC-adjacent systems feels:",
    options: [
      ["Interesting — I like understanding machines.", ["IndustrialElectricalAligned", "Disciplined"]],
      ["Manageable with guidance.", ["IndustrialElectricalAligned", "Flexible"]],
      ["Overwhelming.", ["IndustrialElectricalMisaligned", "Flexible"]],
      ["Not something I want to deal with.", ["IndustrialElectricalMisaligned", "Flexible"]]
    ]
  },

  // PROCEDURE, DOCUMENTATION, VERIFICATION (3)

  6: {
    question: "Documentation (labels, prints, logs, procedures) feels:",
    options: [
      ["Essential — it prevents future failures.", ["IndustrialElectricalAligned", "Disciplined"]],
      ["Necessary but tedious.", ["IndustrialElectricalAligned", "Flexible"]],
      ["Like pointless bureaucracy.", ["IndustrialElectricalMisaligned", "Flexible"]],
      ["Something I strongly dislike.", ["IndustrialElectricalMisaligned", "Flexible"]]
    ]
  },

  7: {
    question: "Methodical testing (meters, isolation, verifying states) feels:",
    options: [
      ["Preferable to guessing.", ["IndustrialElectricalAligned", "Disciplined"]],
      ["Fine, but slow.", ["IndustrialElectricalAligned", "Flexible"]],
      ["Mentally irritating.", ["IndustrialElectricalMisaligned", "Flexible"]],
      ["Something I avoid.", ["IndustrialElectricalMisaligned", "Flexible"]]
    ]
  },

  8: {
    question: "Invisible mistakes (everything looks fine… until it isn’t) make you:",
    options: [
      ["Double-check without resentment.", ["IndustrialElectricalAligned", "Disciplined"]],
      ["Rely heavily on testing.", ["IndustrialElectricalAligned", "Flexible"]],
      ["Uneasy.", ["IndustrialElectricalMisaligned", "Flexible"]],
      ["Strongly uncomfortable.", ["IndustrialElectricalMisaligned", "Flexible"]]
    ]
  },

  // ENVIRONMENT, FATIGUE, PRESSURE (3)

  9: {
    question: "Industrial environments (noise, heat, machinery, hazards) feel:",
    options: [
      ["Manageable — that’s part of the job.", ["IndustrialElectricalAligned", "Disciplined"]],
      ["Tolerable with limits.", ["IndustrialElectricalAligned", "Flexible"]],
      ["Draining day after day.", ["IndustrialElectricalMisaligned", "Flexible"]],
      ["Unacceptable.", ["IndustrialElectricalMisaligned", "Flexible"]]
    ]
  },

  10: {
    question: "When equipment is down and production is losing money, you:",
    options: [
      ["Stay calm and follow procedure.", ["IndustrialElectricalAligned", "Disciplined"]],
      ["Need clear priorities to stay steady.", ["IndustrialElectricalAligned", "Flexible"]],
      ["Start rushing.", ["IndustrialElectricalMisaligned", "Flexible"]],
      ["Hate that pressure.", ["IndustrialElectricalMisaligned", "Flexible"]]
    ]
  },

  11: {
    question: "Shift work, on-call maintenance, or odd hours feel:",
    options: [
      ["Acceptable if the role fits.", ["IndustrialElectricalAligned", "Disciplined"]],
      ["Okay short-term.", ["IndustrialElectricalAligned", "Flexible"]],
      ["Unsustainable.", ["IndustrialElectricalMisaligned", "Flexible"]],
      ["A dealbreaker.", ["IndustrialElectricalMisaligned", "Flexible"]]
    ]
  },

  // SELF-AWARENESS & DIRECTION (3)

  12: {
    question: "Most industrial electrical work is maintenance and reliability, not constant new installs. You:",
    options: [
      ["Like keeping systems running.", ["IndustrialElectricalAligned", "Disciplined"]],
      ["Prefer a mix of maintenance and new work.", ["IndustrialElectricalAligned", "Flexible"]],
      ["Get bored with maintenance.", ["IndustrialElectricalMisaligned", "Flexible"]],
      ["Strongly prefer new installs only.", ["IndustrialElectricalMisaligned", "Flexible"]]
    ]
  },

  13: {
    question: "What would frustrate you most long-term?",
    options: [
      ["People ignoring safety and procedure.", ["IndustrialElectricalAligned", "Disciplined"]],
      ["High pressure and downtime urgency.", ["IndustrialElectricalAligned", "Flexible"]],
      ["Repetition and documentation.", ["IndustrialElectricalMisaligned", "Flexible"]],
      ["Responsibility for hidden failures.", ["IndustrialElectricalMisaligned", "Flexible"]]
    ]
  },

  14: {
    question: "Be honest: should you keep exploring industrial electrical?",
    options: [
      ["Yes — this matches how I think and work.", ["IndustrialElectricalAligned", "Disciplined"]],
      ["Maybe — role and environment matter.", ["IndustrialElectricalAligned", "Flexible"]],
      ["Probably not — something feels off.", ["IndustrialElectricalMisaligned", "Flexible"]],
      ["No — this isn’t my lane.", ["IndustrialElectricalMisaligned", "Flexible"]]
    ]
  }
};

const tags = {
  IndustrialElectricalAligned: 0,
  IndustrialElectricalMisaligned: 0,
  Disciplined: 0,
  Flexible: 0
};

function interpretResults() {
  const aligned = tags.IndustrialElectricalAligned || 0;
  const misaligned = tags.IndustrialElectricalMisaligned || 0;
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
      "You’re built for procedure and pressure: safety routines, documentation, and methodical troubleshooting won’t feel like oppression.";
  } else if (disciplinePct >= 40) {
    disciplineLabel =
      "You can do industrial work, but structure, clear escalation paths, and role fit will matter a lot.";
  } else {
    disciplineLabel =
      "Industrial electrical may feel mentally irritating because it demands strict procedure, slow verification, and calm decision-making under pressure.";
  }

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Industrial Electrical (${fitPct}% alignment)`;
    description = `
You’re showing strong alignment with industrial electrical — safety culture, system diagnostics, and responsibility under real consequences.<br><br>
<strong>Blunt truth:</strong> this lane rewards discipline more than creativity. If you crave improvisation or speed, it will grind you down. Your answers suggest you can live inside the rules.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(80, 150, 170)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Industrial Electrical (${fitPct}% alignment)`;
    description = `
You’ve got some traits that work in industrial electrical, but enough friction points that the wrong role could burn you out.<br><br>
<strong>Translation:</strong> installs, expansion projects, or less intense facilities may suit you better than high-pressure maintenance roles.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Industrial Electrical (${fitPct}% alignment)`;
    description = `
Based on your answers, industrial electrical will likely feel like constant friction: strict safety culture, high-pressure diagnostics, repetition, and heavy procedure.<br><br>
<strong>This isn’t a flaw.</strong> It usually means your strengths fit better in another electrical lane — commercial, residential, low-voltage, or renewables.
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
