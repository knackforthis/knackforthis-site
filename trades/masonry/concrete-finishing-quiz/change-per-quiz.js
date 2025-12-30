// concrete-finishing-quiz.js
// Masonry > Concrete Finishing

const obj = {
  0: {
    question: "Concrete finishing is a timing game. When you’re on the clock and the mix is moving, you usually:",
    options: [
      ["Lock in fast and stay clean — pressure makes me sharper.", ["ConcreteAligned", "Disciplined"]],
      ["I can keep up, but I need a clear plan or lead direction.", ["ConcreteAligned", "Flexible"]],
      ["I get flustered when timing matters and start second-guessing.", ["ConcreteMisaligned", "Flexible"]],
      ["I hate rush pressure — it makes me sloppy or irritated.", ["ConcreteMisaligned", "Flexible"]]
    ]
  },

  1: {
    question: "How do you feel about working in messy, harsh conditions (mud, dust, slurry, heat/cold, wind)?",
    options: [
      ["Fine — I can work dirty and still stay focused.", ["ConcreteAligned", "Disciplined"]],
      ["I can do it, but it drains me faster than clean work.", ["ConcreteAligned", "Flexible"]],
      ["I tolerate it short-term, but I lose patience fast.", ["ConcreteMisaligned", "Flexible"]],
      ["Nope — that environment would ruin the work for me.", ["ConcreteMisaligned", "Flexible"]]
    ]
  },

  2: {
    question: "A big part of finishing is flatness and consistency. When something’s slightly off, you tend to:",
    options: [
      ["Fix it immediately — tiny errors become ugly later.", ["ConcreteAligned", "Disciplined"]],
      ["Fix obvious issues, but I won’t chase perfection forever.", ["ConcreteAligned", "Flexible"]],
      ["Assume it’s good enough unless someone calls it out.", ["ConcreteMisaligned", "Flexible"]],
      ["Avoid rework — I hate going back over the same area.", ["ConcreteMisaligned", "Flexible"]]
    ]
  },

  3: {
    question: "Concrete finishing involves repetitive motions (floating, troweling, edging, brooming). You:",
    options: [
      ["Can repeat clean technique for hours without drifting.", ["ConcreteAligned", "Disciplined"]],
      ["Can repeat it, but I need milestones or role switches.", ["ConcreteAligned", "Flexible"]],
      ["Start strong, but repetition makes my quality drop.", ["ConcreteMisaligned", "Flexible"]],
      ["Repetition like that makes me want to quit.", ["ConcreteMisaligned", "Flexible"]]
    ]
  },

  4: {
    question: "When you have to learn a feel-based skill (pressure, angle, timing), your instinct is:",
    options: [
      ["Practice until my hands know it — muscle memory is the point.", ["ConcreteAligned", "Disciplined"]],
      ["I can learn it, but I prefer clear rules and checklists.", ["ConcreteAligned", "Flexible"]],
      ["I get frustrated when it’s not obvious or measurable.", ["ConcreteMisaligned", "Flexible"]],
      ["I don’t like skills that depend on feel — it seems inconsistent.", ["ConcreteMisaligned", "Flexible"]]
    ]
  },

  5: {
    question: "Concrete jobs can mean early starts, long pours, and intense bursts. Your energy pattern is:",
    options: [
      ["I can grind hard when it matters and keep my standards.", ["ConcreteAligned", "Disciplined"]],
      ["I can do it, but pacing and recovery are a big deal.", ["ConcreteAligned", "Flexible"]],
      ["Long, demanding days wreck my focus and mood.", ["ConcreteMisaligned", "Flexible"]],
      ["That schedule and strain is a hard no.", ["ConcreteMisaligned", "Flexible"]]
    ]
  },

  6: {
    question: "How do you handle constant safety discipline around heavy material and tools?",
    options: [
      ["I respect it — safe and consistent is non-negotiable.", ["ConcreteAligned", "Disciplined"]],
      ["I follow it, but I get impatient with slowdowns.", ["ConcreteAligned", "Flexible"]],
      ["I cut corners when the crew is rushing.", ["ConcreteMisaligned", "Flexible"]],
      ["I hate constraints — they kill momentum.", ["ConcreteMisaligned", "Flexible"]]
    ]
  },

  7: {
    question: "Concrete finishing depends on tight crew coordination (placing, screeding, finishing). You:",
    options: [
      ["Communicate clearly and stay in sync.", ["ConcreteAligned", "Disciplined"]],
      ["Work fine with a crew if roles are clear.", ["ConcreteAligned", "Flexible"]],
      ["Crew dynamics stress me out and disrupt my rhythm.", ["ConcreteMisaligned", "Flexible"]],
      ["I’d rather work solo — crews make me scattered.", ["ConcreteMisaligned", "Flexible"]]
    ]
  },

  8: {
    question: "If weather shifts conditions mid-pour (sun, wind, cold), your reaction is:",
    options: [
      ["Adjust technique and timing — that’s the job.", ["ConcreteAligned", "Disciplined"]],
      ["Adapt, but it frustrates me.", ["ConcreteAligned", "Flexible"]],
      ["I struggle when conditions change suddenly.", ["ConcreteMisaligned", "Flexible"]],
      ["I hate unpredictable conditions.", ["ConcreteMisaligned", "Flexible"]]
    ]
  },

  9: {
    question: "Concrete finishing is visible work. When someone critiques your finish, you:",
    options: [
      ["Prefer it — I want it consistent and right.", ["ConcreteAligned", "Disciplined"]],
      ["Take it, but it hits my pride.", ["ConcreteAligned", "Flexible"]],
      ["Get defensive — it feels nitpicky.", ["ConcreteMisaligned", "Flexible"]],
      ["Hate critique and avoid it.", ["ConcreteMisaligned", "Flexible"]]
    ]
  },

  10: {
    question: "A pour can’t always be paused. When something goes wrong mid-job, you:",
    options: [
      ["Stay calm, triage fast, and keep moving.", ["ConcreteAligned", "Disciplined"]],
      ["Recover, but I need clear direction.", ["ConcreteAligned", "Flexible"]],
      ["Spiral when mistakes happen under pressure.", ["ConcreteMisaligned", "Flexible"]],
      ["Shut down when things go sideways fast.", ["ConcreteMisaligned", "Flexible"]]
    ]
  },

  // ---- HUMAN FRICTION / ATTRITION LAYER ----

  11: {
    question: "Foremen may push speed while expecting clean finishes. You:",
    options: [
      ["Balance pace and quality without panicking.", ["ConcreteAligned", "Disciplined"]],
      ["Can manage it, but pressure builds over time.", ["ConcreteAligned", "Flexible"]],
      ["Rush and quality slips.", ["ConcreteMisaligned", "Flexible"]],
      ["Freeze or shut down under conflicting demands.", ["ConcreteMisaligned", "Flexible"]]
    ]
  },

  12: {
    question: "Concrete mistakes are permanent and visible. That reality feels:",
    options: [
      ["Acceptable — accountability sharpens my focus.", ["ConcreteAligned", "Disciplined"]],
      ["Stressful, but manageable.", ["ConcreteAligned", "Flexible"]],
      ["Anxiety-inducing — I hate irreversible errors.", ["ConcreteMisaligned", "Flexible"]],
      ["Unacceptable — I don’t want that pressure.", ["ConcreteMisaligned", "Flexible"]]
    ]
  },

  13: {
    question: "Late in the day, when fatigue sets in but technique still matters, you:",
    options: [
      ["Slow down and protect finish quality.", ["ConcreteAligned", "Disciplined"]],
      ["Push through, but precision drops.", ["ConcreteAligned", "Flexible"]],
      ["Rely on momentum more than checking.", ["ConcreteMisaligned", "Flexible"]],
      ["Feel mentally done before the slab is finished.", ["ConcreteMisaligned", "Flexible"]]
    ]
  },

  14: {
    question: "Be honest: does the idea of timing-sensitive, physical, outdoor finishing work appeal to you?",
    options: [
      ["Yes — pressure, pace, and craft suit me.", ["ConcreteAligned", "Disciplined"]],
      ["Somewhat — I’m interested but cautious.", ["ConcreteAligned", "Flexible"]],
      ["Not really — I prefer more controlled conditions.", ["ConcreteMisaligned", "Flexible"]],
      ["No — this isn’t my environment.", ["ConcreteMisaligned", "Flexible"]]
    ]
  }
};

const tags = {
  ConcreteAligned: 0,
  ConcreteMisaligned: 0,
  Disciplined: 0,
  Flexible: 0
};

function interpretResults() {
  const aligned = tags.ConcreteAligned || 0;
  const misaligned = tags.ConcreteMisaligned || 0;
  const disciplined = tags.Disciplined || 0;
  const flexible = tags.Flexible || 0;

  // Alignment axis (concrete finishing fit)
  const fitScore = aligned - misaligned; // ~ -15 .. +15
  let fitPct = Math.round(((fitScore + 15) / 30) * 100);
  fitPct = Math.max(0, Math.min(100, fitPct));

  // Discipline axis (timing + safety + fatigue control)
  const disciplineScore = disciplined - flexible; // ~ -15 .. +15
  let disciplinePct = Math.round(((disciplineScore + 15) / 30) * 100);
  disciplinePct = Math.max(0, Math.min(100, disciplinePct));

  let disciplineLabel;
  if (disciplinePct >= 70) {
    disciplineLabel =
      "You’re built to stay controlled under pressure — timing awareness, safety discipline, and consistent technique even when conditions are brutal.";
  } else if (disciplinePct >= 40) {
    disciplineLabel =
      "You can handle concrete finishing, but consistency will depend on crew leadership, pacing, and fatigue management.";
  } else {
    disciplineLabel =
      "Concrete finishing may feel exhausting because it demands precision, timing, and safety discipline when you’re tired and conditions are ugly.";
  }

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Concrete Finishing (${fitPct}% alignment)`;
    description = `
You’re showing strong alignment with concrete finishing — timing tolerance, messy-jobsite resilience, and consistency under pressure.<br><br>
<strong>Blunt truth:</strong> this trade punishes hesitation and rewards calm execution. Your answers suggest you can live inside that reality.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(60, 160, 120)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Concrete Finishing (${fitPct}% alignment)`;
    description = `
You have some traits that work here, but friction is likely under the wrong crew, weather, or pacing.<br><br>
<strong>Translation:</strong> the environment may drain you faster than the skill itself.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Concrete Finishing (${fitPct}% alignment)`;
    description = `
Concrete finishing will likely feel like constant friction — timing pressure, harsh conditions, physical strain, and irreversible mistakes.<br><br>
<strong>This isn’t a personal knock.</strong> It usually means your strengths fit better in a masonry or trade lane with clearer checkpoints or controlled environments.
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
