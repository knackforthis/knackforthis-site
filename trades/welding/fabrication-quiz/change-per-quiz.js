// fabrication-quiz.js

const obj = {
  // PEOPLE & INTERACTION (3)

  0: {
    question: "Fabrication often means your work is checked by supervisors, inspectors, or installers who expect parts to fit exactly. You:",
    options: [
      ["Accept that — dimensional accountability is part of the job.", ["FabricationAligned", "Disciplined"]],
      ["Can handle it with clear expectations.", ["FabricationAligned", "Flexible"]],
      ["Get tense when others scrutinize measurements.", ["FabricationMisaligned", "Flexible"]],
      ["Avoid environments where precision is constantly checked.", ["FabricationMisaligned", "Flexible"]]
    ]
  },

  1: {
    question: "How do you feel about building to drawings created by someone else (engineer, designer, shop lead)?",
    options: [
      ["Fine — my job is to execute accurately.", ["FabricationAligned", "Disciplined"]],
      ["I can do it, but I like some input.", ["FabricationAligned", "Flexible"]],
      ["I dislike being constrained by someone else’s plan.", ["FabricationMisaligned", "Flexible"]],
      ["I want full freedom in how things are built.", ["FabricationMisaligned", "Flexible"]]
    ]
  },

  2: {
    question: "If an installer or client complains that a part doesn’t fit, you usually:",
    options: [
      ["Check measurements and correct the issue.", ["FabricationAligned", "Disciplined"]],
      ["Troubleshoot calmly but feel pressure.", ["FabricationAligned", "Flexible"]],
      ["Get defensive when fit is questioned.", ["FabricationMisaligned", "Flexible"]],
      ["Strongly dislike being blamed for fit issues.", ["FabricationMisaligned", "Flexible"]]
    ]
  },

  // TIME & SCHEDULING (2)

  3: {
    question: "Fabrication jobs often take longer than expected due to fit-up, sequencing, or tolerance stacking. You:",
    options: [
      ["Expect it — accuracy takes time.", ["FabricationAligned", "Disciplined"]],
      ["Tolerate it with clear deadlines.", ["FabricationAligned", "Flexible"]],
      ["Get frustrated when timelines slip.", ["FabricationMisaligned", "Flexible"]],
      ["Prefer work with predictable timing.", ["FabricationMisaligned", "Flexible"]]
    ]
  },

  4: {
    question: "How do you handle long stretches of careful work before anything looks ‘finished’?",
    options: [
      ["Fine — progress doesn’t need to be flashy.", ["FabricationAligned", "Disciplined"]],
      ["I manage it with pacing.", ["FabricationAligned", "Flexible"]],
      ["My motivation drops.", ["FabricationMisaligned", "Flexible"]],
      ["I need frequent visible wins.", ["FabricationMisaligned", "Flexible"]]
    ]
  },

  // PACE & PRESSURE (2)

  5: {
    question: "When speed conflicts with accuracy, your instinct is to:",
    options: [
      ["Slow down and protect dimensions.", ["FabricationAligned", "Disciplined"]],
      ["Balance speed and precision carefully.", ["FabricationAligned", "Flexible"]],
      ["Lean toward speed.", ["FabricationMisaligned", "Flexible"]],
      ["Hate being forced to choose.", ["FabricationMisaligned", "Flexible"]]
    ]
  },

  6: {
    question: "Knowing a small measurement error can ruin an entire assembly makes you:",
    options: [
      ["More careful and methodical.", ["FabricationAligned", "Disciplined"]],
      ["Focused but tense.", ["FabricationAligned", "Flexible"]],
      ["Anxious and second-guessing.", ["FabricationMisaligned", "Flexible"]],
      ["Prefer lower-stakes work.", ["FabricationMisaligned", "Flexible"]]
    ]
  },

  // REPETITION & PROCESS (2)

  7: {
    question: "Fabrication involves repeatable steps (measure, cut, fit, tack, weld, check). You:",
    options: [
      ["Like repeatable workflow.", ["FabricationAligned", "Disciplined"]],
      ["Can do it with some variety.", ["FabricationAligned", "Flexible"]],
      ["Get bored quickly.", ["FabricationMisaligned", "Flexible"]],
      ["Avoid process-heavy work.", ["FabricationMisaligned", "Flexible"]]
    ]
  },

  8: {
    question: "Redoing work because something is slightly out of tolerance usually makes you:",
    options: [
      ["Calm — specs matter.", ["FabricationAligned", "Disciplined"]],
      ["Annoyed but compliant.", ["FabricationAligned", "Flexible"]],
      ["Frustrated and drained.", ["FabricationMisaligned", "Flexible"]],
      ["Angry — I hate rework.", ["FabricationMisaligned", "Flexible"]]
    ]
  },

  // VISIBILITY & SCRUTINY (2)

  9: {
    question: "Fabricated parts are often measured, test-fit, and judged objectively. You:",
    options: [
      ["Prefer clear pass/fail standards.", ["FabricationAligned", "Disciplined"]],
      ["Accept it, but it adds pressure.", ["FabricationAligned", "Flexible"]],
      ["Feel exposed by constant checking.", ["FabricationMisaligned", "Flexible"]],
      ["Avoid work where mistakes are obvious.", ["FabricationMisaligned", "Flexible"]]
    ]
  },

  10: {
    question: "If a weld looks good but throws the part out of square, you usually:",
    options: [
      ["Redo it — function and fit come first.", ["FabricationAligned", "Disciplined"]],
      ["Adjust and verify again.", ["FabricationAligned", "Flexible"]],
      ["Leave it if it’s close enough.", ["FabricationMisaligned", "Flexible"]],
      ["Move on — cosmetic fixes annoy me.", ["FabricationMisaligned", "Flexible"]]
    ]
  },

  // TRADE-SPECIFIC PAIN POINTS (3)

  11: {
    question: "How do you feel about fit-up work (jigs, clamps, fixtures, controlling distortion)?",
    options: [
      ["That’s where quality starts.", ["FabricationAligned", "Disciplined"]],
      ["I can do it, but it’s frustrating sometimes.", ["FabricationAligned", "Flexible"]],
      ["I’d rather just weld.", ["FabricationMisaligned", "Flexible"]],
      ["Setup work feels like wasted time.", ["FabricationMisaligned", "Flexible"]]
    ]
  },

  12: {
    question: "Troubleshooting misfit parts (warped material, tolerance stack, bad cuts) usually:",
    options: [
      ["Feels like a solvable puzzle.", ["FabricationAligned", "Disciplined"]],
      ["Is manageable with effort.", ["FabricationAligned", "Flexible"]],
      ["Annoys me quickly.", ["FabricationMisaligned", "Flexible"]],
      ["Makes me want to avoid the job.", ["FabricationMisaligned", "Flexible"]]
    ]
  },

  13: {
    question: "Which environment feels more natural to you?",
    options: [
      ["Shop work with steady, repeatable builds.", ["FabricationAligned", "Disciplined"]],
      ["Mostly shop work with some field installs.", ["FabricationAligned", "Flexible"]],
      ["Field work with less measurement pressure.", ["FabricationMisaligned", "Flexible"]],
      ["Anything but process-heavy shop work.", ["FabricationMisaligned", "Flexible"]]
    ]
  },

  // SELF-AWARENESS CHECK (1)

  14: {
    question: "Be honest: how strong is your pull toward fabrication welding specifically?",
    options: [
      ["Strong — I like making parts that have to fit exactly.", ["FabricationAligned", "Disciplined"]],
      ["Moderate — I’m interested but cautious.", ["FabricationAligned", "Flexible"]],
      ["Low — other welding lanes appeal more.", ["FabricationMisaligned", "Flexible"]],
      ["Very low — this environment isn’t for me.", ["FabricationMisaligned", "Flexible"]]
    ]
  }
};

const tags = {
  FabricationAligned: 0,
  FabricationMisaligned: 0,
  Disciplined: 0,
  Flexible: 0
};

function interpretResults() {
  const aligned = tags.FabricationAligned || 0;
  const misaligned = tags.FabricationMisaligned || 0;
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
    disciplineLabel = "You’re built for planning, fit-up discipline, and repeatable execution without needing chaos to stay engaged.";
  } else if (disciplinePct >= 40) {
    disciplineLabel = "You can do fabrication work, but structure and pacing will matter.";
  } else {
    disciplineLabel = "Process-heavy, tolerance-driven work may grind you down over time.";
  }

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Fabrication Welding (${fitPct}% alignment)`;
    description = `
You show strong alignment with fabrication welding — comfort with drawings, measurement discipline, fit-up work, and accountability for dimensional accuracy.<br><br>
<strong>Blunt truth:</strong> fabrication is a lot of invisible effort before the weld even happens. Your answers suggest you won’t resent that.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(60, 160, 120)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Fabrication Welding (${fitPct}% alignment)`;
    description = `
You have some traits that fit fabrication, but friction is likely without the right shop or systems.<br><br>
<strong>Translation:</strong> good drawings, solid jigs, and clear checkpoints will matter a lot for you.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Fabrication Welding (${fitPct}% alignment)`;
    description = `
Based on your answers, fabrication may feel frustrating: constant measuring, setup work, re-checking, and rework when tolerances don’t line up.<br><br>
<strong>This isn’t a knock.</strong> It usually means your strengths fit better in faster, field-driven, or less dimension-critical welding lanes.
    `.trim();
    color = "rgb(170, 80, 80)";
  }

  if (band === "strong") {
    $('.good-fit').show();
    $('.no-fit').hide();
  } else if (band === "middle") {
    $('.good-fit').show();
    $('.no-fit').show();
  } else {
    $('.good-fit').hide();
    $('.no-fit').show();
  }

  Object.keys(tags).forEach(k => (tags[k] = 0));

  return { title, description, color };
}
