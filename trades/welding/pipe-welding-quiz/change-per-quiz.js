// pipe-welding-quiz.js

const obj = {
  // PEOPLE & ACCOUNTABILITY (3)

  0: {
    question: "Pipe welding often means inspectors, foremen, or engineers have final say on your work. You:",
    options: [
      ["Accept it — standards are non-negotiable.", ["PipeWeldingAligned", "Disciplined"]],
      ["Can handle it with professional communication.", ["PipeWeldingAligned", "Flexible"]],
      ["Get tense when others judge my welds closely.", ["PipeWeldingMisaligned", "Flexible"]],
      ["Avoid work where authority overrides judgment.", ["PipeWeldingMisaligned", "Flexible"]]
    ]
  },

  1: {
    question: "If an inspector fails your weld and orders a cut-out, you usually:",
    options: [
      ["Fix it properly and move on.", ["PipeWeldingAligned", "Disciplined"]],
      ["Redo it, but it hits morale.", ["PipeWeldingAligned", "Flexible"]],
      ["Feel frustrated and defensive.", ["PipeWeldingMisaligned", "Flexible"]],
      ["Strongly dislike environments with frequent cut-outs.", ["PipeWeldingMisaligned", "Flexible"]]
    ]
  },

  2: {
    question: "How do you feel about being personally associated with weld quality on critical systems?",
    options: [
      ["Comfortable — accountability matters.", ["PipeWeldingAligned", "Disciplined"]],
      ["I accept it, but it adds pressure.", ["PipeWeldingAligned", "Flexible"]],
      ["That level of responsibility stresses me.", ["PipeWeldingMisaligned", "Flexible"]],
      ["I prefer lower-stakes welding.", ["PipeWeldingMisaligned", "Flexible"]]
    ]
  },

  // TIME & SCHEDULING (2)

  3: {
    question: "Pipe jobs often take longer than expected due to prep, fit-up, inspection, or rework. You:",
    options: [
      ["Expect it — quality takes time.", ["PipeWeldingAligned", "Disciplined"]],
      ["Manage it with clear pacing.", ["PipeWeldingAligned", "Flexible"]],
      ["Get frustrated when timelines slip.", ["PipeWeldingMisaligned", "Flexible"]],
      ["Prefer predictable, fast-turn work.", ["PipeWeldingMisaligned", "Flexible"]]
    ]
  },

  4: {
    question: "How do you handle long stretches of slow, controlled welding without fast visual payoff?",
    options: [
      ["Fine — consistency matters more than speed.", ["PipeWeldingAligned", "Disciplined"]],
      ["I manage it with rhythm and breaks.", ["PipeWeldingAligned", "Flexible"]],
      ["My patience drops.", ["PipeWeldingMisaligned", "Flexible"]],
      ["I need faster progress to stay engaged.", ["PipeWeldingMisaligned", "Flexible"]]
    ]
  },

  // PACE & PRESSURE (2)

  5: {
    question: "When speed conflicts with procedure or penetration quality, you:",
    options: [
      ["Slow down and protect the weld.", ["PipeWeldingAligned", "Disciplined"]],
      ["Try to balance speed carefully.", ["PipeWeldingAligned", "Flexible"]],
      ["Lean toward speed.", ["PipeWeldingMisaligned", "Flexible"]],
      ["Hate being forced to choose.", ["PipeWeldingMisaligned", "Flexible"]]
    ]
  },

  6: {
    question: "Knowing a bad pipe weld can cause leaks, shutdowns, or safety incidents makes you:",
    options: [
      ["More focused and disciplined.", ["PipeWeldingAligned", "Disciplined"]],
      ["Careful but tense.", ["PipeWeldingAligned", "Flexible"]],
      ["Anxious and second-guessing.", ["PipeWeldingMisaligned", "Flexible"]],
      ["Prefer lower-consequence work.", ["PipeWeldingMisaligned", "Flexible"]]
    ]
  },

  // REPETITION & PREP DISCIPLINE (2)

  7: {
    question: "Pipe welding punishes sloppy prep (bevels, gap, cleanliness). You usually:",
    options: [
      ["Like prep — it makes the weld easier.", ["PipeWeldingAligned", "Disciplined"]],
      ["Do it with a checklist.", ["PipeWeldingAligned", "Flexible"]],
      ["Rush it and compensate later.", ["PipeWeldingMisaligned", "Flexible"]],
      ["Strongly dislike prep-heavy work.", ["PipeWeldingMisaligned", "Flexible"]]
    ]
  },

  8: {
    question: "Grinding, cleaning, and restarting to keep quality high usually makes you:",
    options: [
      ["Calm — reset beats failure.", ["PipeWeldingAligned", "Disciplined"]],
      ["Annoyed but compliant.", ["PipeWeldingAligned", "Flexible"]],
      ["Frustrated and drained.", ["PipeWeldingMisaligned", "Flexible"]],
      ["Angry — I hate restarting.", ["PipeWeldingMisaligned", "Flexible"]]
    ]
  },

  // VISIBILITY & INSPECTION (2)

  9: {
    question: "Pipe welds are frequently inspected, documented, and traceable. You:",
    options: [
      ["Like clear pass/fail standards.", ["PipeWeldingAligned", "Disciplined"]],
      ["Accept it with pressure.", ["PipeWeldingAligned", "Flexible"]],
      ["Feel exposed by inspection.", ["PipeWeldingMisaligned", "Flexible"]],
      ["Avoid heavy inspection environments.", ["PipeWeldingMisaligned", "Flexible"]]
    ]
  },

  10: {
    question: "If a weld looks okay but doesn’t meet penetration or profile standards, you:",
    options: [
      ["Redo it — spec is spec.", ["PipeWeldingAligned", "Disciplined"]],
      ["Repair cautiously.", ["PipeWeldingAligned", "Flexible"]],
      ["Leave it if it’ll probably pass.", ["PipeWeldingMisaligned", "Flexible"]],
      ["Move on — rework kills momentum.", ["PipeWeldingMisaligned", "Flexible"]]
    ]
  },

  // PHYSICAL & ENVIRONMENTAL REALITY (2)

  11: {
    question: "Pipe welding often means fixed positions (overhead/vertical) with limited comfort. You:",
    options: [
      ["Can work through it.", ["PipeWeldingAligned", "Disciplined"]],
      ["Handle it with conditioning.", ["PipeWeldingAligned", "Flexible"]],
      ["Get irritated fast.", ["PipeWeldingMisaligned", "Flexible"]],
      ["Avoid awkward-position work.", ["PipeWeldingMisaligned", "Flexible"]]
    ]
  },

  12: {
    question: "Confined spaces, industrial environments, and harsh conditions are common. You:",
    options: [
      ["Accept it as part of the trade.", ["PipeWeldingAligned", "Disciplined"]],
      ["Can tolerate it with limits.", ["PipeWeldingAligned", "Flexible"]],
      ["Find it draining long-term.", ["PipeWeldingMisaligned", "Flexible"]],
      ["Avoid that environment entirely.", ["PipeWeldingMisaligned", "Flexible"]]
    ]
  },

  // SELF-AWARENESS CHECK (3)

  13: {
    question: "Which welding lane sounds most natural to you?",
    options: [
      ["Spec-driven, high-standard pipe work.", ["PipeWeldingAligned", "Disciplined"]],
      ["Mostly spec-driven with some variety.", ["PipeWeldingAligned", "Flexible"]],
      ["General welding where speed matters more.", ["PipeWeldingMisaligned", "Flexible"]],
      ["Anything except slow, inspected welding.", ["PipeWeldingMisaligned", "Flexible"]]
    ]
  },

  14: {
    question: "Be honest: how strong is your pull toward pipe welding specifically?",
    options: [
      ["Strong — I want high standards and mastery.", ["PipeWeldingAligned", "Disciplined"]],
      ["Moderate — I’m curious but cautious.", ["PipeWeldingAligned", "Flexible"]],
      ["Low — other welding lanes appeal more.", ["PipeWeldingMisaligned", "Flexible"]],
      ["Very low — this isn’t my environment.", ["PipeWeldingMisaligned", "Flexible"]]
    ]
  }
};

const tags = {
  PipeWeldingAligned: 0,
  PipeWeldingMisaligned: 0,
  Disciplined: 0,
  Flexible: 0
};

function interpretResults() {
  const aligned = tags.PipeWeldingAligned || 0;
  const misaligned = tags.PipeWeldingMisaligned || 0;
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
    disciplineLabel = "You’re built for procedure-driven welding, inspection pressure, and slow control without cutting corners.";
  } else if (disciplinePct >= 40) {
    disciplineLabel = "You can do pipe welding, but structure, pacing, and team support will matter.";
  } else {
    disciplineLabel = "Spec-heavy, inspected welding may grind you down over time.";
  }

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Pipe Welding (${fitPct}% alignment)`;
    description = `
You show strong alignment with pipe welding — tolerance for prep discipline, comfort with inspection, and ability to work slow and controlled under pressure.<br><br>
<strong>Blunt truth:</strong> pipe welding is unforgiving. Prep matters, comfort is optional, and inspection doesn’t care how hard the day was.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(60, 160, 120)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Pipe Welding (${fitPct}% alignment)`;
    description = `
You have some traits that fit pipe welding, but friction is likely without the right environment.<br><br>
<strong>Translation:</strong> strong setup, clear procedures, and stable pacing will matter a lot for you.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Pipe Welding (${fitPct}% alignment)`;
    description = `
Based on your answers, pipe welding will likely feel like constant friction: prep discipline, slow control, awkward positions, and inspection pressure.<br><br>
<strong>This isn’t a knock.</strong> It usually means your strengths align better with faster, less spec-driven welding lanes.
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
