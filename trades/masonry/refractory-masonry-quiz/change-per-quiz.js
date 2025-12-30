// refractory-masonry-quiz.js
// Masonry > Refractory Masonry (kilns, furnaces, boilers, firebrick, high-heat systems)

const obj = {
  0: {
    question: "Refractory masonry rewards precision over speed. When accuracy matters more than output, you usually:",
    options: [
      ["Prefer it — I’d rather be exact than fast.", ["RefractoryAligned", "Disciplined"]],
      ["I can do it, but I still want clear progress markers.", ["RefractoryAligned", "Flexible"]],
      ["I get restless when work moves slowly.", ["RefractoryMisaligned", "Flexible"]],
      ["Slow, precise work drains me.", ["RefractoryMisaligned", "Flexible"]]
    ]
  },

  1: {
    question: "Working to tight tolerances (brick fit, joint thickness, expansion gaps) feels:",
    options: [
      ["Normal — details are the job.", ["RefractoryAligned", "Disciplined"]],
      ["Manageable, but mentally tiring over time.", ["RefractoryAligned", "Flexible"]],
      ["Stressful — I struggle to stay consistent.", ["RefractoryMisaligned", "Flexible"]],
      ["Miserable — I hate tight standards.", ["RefractoryMisaligned", "Flexible"]]
    ]
  },

  2: {
    question: "Refractory work often follows strict specs, drawings, and procedures. Your reaction:",
    options: [
      ["Good — clear rules reduce ambiguity.", ["RefractoryAligned", "Disciplined"]],
      ["I can follow specs, but I don’t love constant oversight.", ["RefractoryAligned", "Flexible"]],
      ["I drift from specs if it seems ‘close enough.’", ["RefractoryMisaligned", "Flexible"]],
      ["I hate rigid instructions.", ["RefractoryMisaligned", "Flexible"]]
    ]
  },

  3: {
    question: "Many refractory jobs happen in industrial environments (plants, shutdowns, confined spaces). You:",
    options: [
      ["Handle it — controlled environments don’t bother me.", ["RefractoryAligned", "Disciplined"]],
      ["Can adapt, but it drains me faster than open sites.", ["RefractoryAligned", "Flexible"]],
      ["Get anxious or unfocused in those spaces.", ["RefractoryMisaligned", "Flexible"]],
      ["Avoid industrial or enclosed sites entirely.", ["RefractoryMisaligned", "Flexible"]]
    ]
  },

  4: {
    question: "Specialized materials (firebrick, castables, anchors, insulation) require strict handling. You:",
    options: [
      ["Follow procedures exactly — systems matter.", ["RefractoryAligned", "Disciplined"]],
      ["Can learn it, but constant technical detail wears on me.", ["RefractoryAligned", "Flexible"]],
      ["Get sloppy with unfamiliar materials.", ["RefractoryMisaligned", "Flexible"]],
      ["Prefer standard masonry materials only.", ["RefractoryMisaligned", "Flexible"]]
    ]
  },

  5: {
    question: "Refractory failures can shut down plants or cause massive damage. That responsibility makes you:",
    options: [
      ["More careful — pressure sharpens my focus.", ["RefractoryAligned", "Disciplined"]],
      ["Careful, but the weight of it adds stress.", ["RefractoryAligned", "Flexible"]],
      ["Nervous — high stakes mess with my head.", ["RefractoryMisaligned", "Flexible"]],
      ["Uncomfortable — I don’t want that responsibility.", ["RefractoryMisaligned", "Flexible"]]
    ]
  },

  6: {
    question: "Much of the work is repetitive but exact (courses, joints, anchors, layers). You:",
    options: [
      ["Can repeat precise technique all day without drifting.", ["RefractoryAligned", "Disciplined"]],
      ["Can repeat it, but need breaks or role shifts.", ["RefractoryAligned", "Flexible"]],
      ["Lose consistency with repetition.", ["RefractoryMisaligned", "Flexible"]],
      ["Avoid repetitive precision work.", ["RefractoryMisaligned", "Flexible"]]
    ]
  },

  7: {
    question: "Safety protocols (PPE, lockout/tagout, confined-space rules) are strict. You:",
    options: [
      ["Respect them fully — safety and procedure come first.", ["RefractoryAligned", "Disciplined"]],
      ["Follow them, but get impatient with slowdowns.", ["RefractoryAligned", "Flexible"]],
      ["Cut corners when it feels excessive.", ["RefractoryMisaligned", "Flexible"]],
      ["Hate heavy safety constraints.", ["RefractoryMisaligned", "Flexible"]]
    ]
  },

  8: {
    question: "When supervisors or engineers inspect tiny details, you usually:",
    options: [
      ["Welcome it — correctness matters.", ["RefractoryAligned", "Disciplined"]],
      ["Accept it, but it adds pressure.", ["RefractoryAligned", "Flexible"]],
      ["Get defensive — it feels nitpicky.", ["RefractoryMisaligned", "Flexible"]],
      ["Hate scrutiny at that level.", ["RefractoryMisaligned", "Flexible"]]
    ]
  },

  9: {
    question: "Refractory work often happens during shutdown windows with long, focused shifts. You:",
    options: [
      ["Can lock in for long controlled stretches.", ["RefractoryAligned", "Disciplined"]],
      ["Can do it, but fatigue management is critical.", ["RefractoryAligned", "Flexible"]],
      ["Burn out quickly on long controlled shifts.", ["RefractoryMisaligned", "Flexible"]],
      ["That schedule would wreck me.", ["RefractoryMisaligned", "Flexible"]]
    ]
  },

  10: {
    question: "The finished work is usually hidden inside equipment. That feels:",
    options: [
      ["Fine — performance matters more than visibility.", ["RefractoryAligned", "Disciplined"]],
      ["Okay, but I like some visible payoff.", ["RefractoryAligned", "Flexible"]],
      ["Demotivating — I want my work seen.", ["RefractoryMisaligned", "Flexible"]],
      ["Pointless — I need visual results.", ["RefractoryMisaligned", "Flexible"]]
    ]
  },

  // ---- HUMAN ATTRITION LAYER ----

  11: {
    question: "Refractory crews often work under engineers, inspectors, and strict authority. You:",
    options: [
      ["Operate fine under authority if expectations are clear.", ["RefractoryAligned", "Disciplined"]],
      ["Can do it, but it wears on me over time.", ["RefractoryAligned", "Flexible"]],
      ["Get irritated being corrected frequently.", ["RefractoryMisaligned", "Flexible"]],
      ["Strongly dislike hierarchical oversight.", ["RefractoryMisaligned", "Flexible"]]
    ]
  },

  12: {
    question: "If a job requires redoing work because it’s slightly out of spec, you:",
    options: [
      ["Redo it without argument — specs matter.", ["RefractoryAligned", "Disciplined"]],
      ["Redo it, but frustration builds.", ["RefractoryAligned", "Flexible"]],
      ["Argue unless the issue is obvious.", ["RefractoryMisaligned", "Flexible"]],
      ["Hate rework under inspection.", ["RefractoryMisaligned", "Flexible"]]
    ]
  },

  13: {
    question: "After weeks of high-precision, low-visibility, high-stakes work, you usually:",
    options: [
      ["Stay steady — systems work suits me.", ["RefractoryAligned", "Disciplined"]],
      ["Manage it, but mental fatigue builds.", ["RefractoryAligned", "Flexible"]],
      ["Feel burned out and tense.", ["RefractoryMisaligned", "Flexible"]],
      ["Lose motivation fast.", ["RefractoryMisaligned", "Flexible"]]
    ]
  },

  14: {
    question: "Be honest: does high-precision, spec-driven, industrial masonry actually appeal to you?",
    options: [
      ["Yes — precision and responsibility fit me.", ["RefractoryAligned", "Disciplined"]],
      ["Somewhat — I’m interested but cautious.", ["RefractoryAligned", "Flexible"]],
      ["Not really — I prefer other masonry paths.", ["RefractoryMisaligned", "Flexible"]],
      ["No — this isn’t my environment.", ["RefractoryMisaligned", "Flexible"]]
    ]
  }
};

const tags = {
  RefractoryAligned: 0,
  RefractoryMisaligned: 0,
  Disciplined: 0,
  Flexible: 0
};

function interpretResults() {
  const aligned = tags.RefractoryAligned || 0;
  const misaligned = tags.RefractoryMisaligned || 0;
  const disciplined = tags.Disciplined || 0;
  const flexible = tags.Flexible || 0;

  // Alignment axis (-15 .. +15)
  const fitScore = aligned - misaligned;
  let fitPct = Math.round(((fitScore + 15) / 30) * 100);
  fitPct = Math.max(0, Math.min(100, fitPct));

  // Discipline axis (spec adherence + authority tolerance)
  const disciplineScore = disciplined - flexible;
  let disciplinePct = Math.round(((disciplineScore + 15) / 30) * 100);
  disciplinePct = Math.max(0, Math.min(100, disciplinePct));

  let disciplineLabel;
  if (disciplinePct >= 70)
    disciplineLabel =
      "You can stay disciplined under specs, inspections, authority, and safety protocols without cutting corners.";
  else if (disciplinePct >= 40)
    disciplineLabel =
      "You can handle refractory work, but fatigue, oversight, or rigidity may become friction points.";
  else
    disciplineLabel =
      "Refractory masonry may feel oppressive due to rigid specs, heavy oversight, and sustained precision demands.";

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Refractory Masonry (${fitPct}% alignment)`;
    description = `
You’re showing strong alignment with refractory masonry — tolerance for precision, respect for specs, and comfort with high-stakes, invisible work.<br><br>
<strong>Blunt truth:</strong> this is slow, exact, unforgiving work under authority and inspection. Your answers suggest that structure won’t break you.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(60, 160, 120)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Refractory Masonry (${fitPct}% alignment)`;
    description = `
You have some traits that work here, but rigidity, visibility, or sustained scrutiny may wear on you.<br><br>
<strong>Translation:</strong> refractory may work in limited roles or projects — or you may prefer masonry paths with more flexibility or visible payoff.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Refractory Masonry (${fitPct}% alignment)`;
    description = `
Refractory masonry will likely feel like constant friction: rigid specs, invisible results, heavy safety protocols, and high consequence for small mistakes.<br><br>
<strong>This isn’t a personal knock.</strong> It usually means your strengths fit better in masonry work with different pace, autonomy, or feedback loops.
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
