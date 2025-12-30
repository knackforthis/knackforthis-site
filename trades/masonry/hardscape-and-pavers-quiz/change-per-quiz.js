// hardscape-and-pavers-quiz.js
// Masonry > Hardscape & Pavers

const obj = {
  0: {
    question: "Hardscape and paver work rewards patience with prep. When a job is ‘slow now so it lasts later,’ you usually:",
    options: [
      ["Agree — I’d rather do prep right than fix failures later.", ["HardscapeAligned", "Disciplined"]],
      ["I can do it, but I need clear checkpoints to stay motivated.", ["HardscapeAligned", "Flexible"]],
      ["I get impatient with prep and want to start laying fast.", ["HardscapeMisaligned", "Flexible"]],
      ["I hate slow prep work — it feels pointless.", ["HardscapeMisaligned", "Flexible"]]
    ]
  },

  1: {
    question: "A lot of the work is repeating patterns (lay → tap/level → cut edges → repeat). You:",
    options: [
      ["Can repeat clean cycles all day without quality drifting.", ["HardscapeAligned", "Disciplined"]],
      ["Can do repetition, but I need variety or milestones.", ["HardscapeAligned", "Flexible"]],
      ["Repetition drains me and my consistency drops.", ["HardscapeMisaligned", "Flexible"]],
      ["Avoid production loops — I get bored fast.", ["HardscapeMisaligned", "Flexible"]]
    ]
  },

  2: {
    question: "Hardscape demands flatness, slope, and alignment (string lines, levels, grade). Your instinct is:",
    options: [
      ["Check constantly — small errors become big failures later.", ["HardscapeAligned", "Disciplined"]],
      ["I’ll check, but I can get sloppy if rushed.", ["HardscapeAligned", "Flexible"]],
      ["I eyeball unless something looks obviously wrong.", ["HardscapeMisaligned", "Flexible"]],
      ["I hate measuring and checking — I just want to place stone.", ["HardscapeMisaligned", "Flexible"]]
    ]
  },

  3: {
    question: "How do you feel about outdoor conditions (heat, cold, mud, dust, sun) for long stretches?",
    options: [
      ["Fine — outdoor grind doesn’t scare me.", ["HardscapeAligned", "Disciplined"]],
      ["I can do it, but weather hits my energy hard.", ["HardscapeAligned", "Flexible"]],
      ["Short bursts are okay, long days drain me fast.", ["HardscapeMisaligned", "Flexible"]],
      ["That environment is a hard no.", ["HardscapeMisaligned", "Flexible"]]
    ]
  },

  4: {
    question: "Cutting and fitting (saw cuts, edge restraints, odd angles, tight joints) feels:",
    options: [
      ["Satisfying — I like making pieces land clean.", ["HardscapeAligned", "Disciplined"]],
      ["Okay, but I don’t want constant micro-fitting.", ["HardscapeAligned", "Flexible"]],
      ["Frustrating when pieces don’t drop in easily.", ["HardscapeMisaligned", "Flexible"]],
      ["I hate fitting and cutting — I want simple placement.", ["HardscapeMisaligned", "Flexible"]]
    ]
  },

  5: {
    question: "When you notice a low or high spot early, you usually:",
    options: [
      ["Pull it and fix it immediately before it compounds.", ["HardscapeAligned", "Disciplined"]],
      ["Fix obvious issues, but small ones tempt me to move on.", ["HardscapeAligned", "Flexible"]],
      ["Hope it won’t matter once everything is locked in.", ["HardscapeMisaligned", "Flexible"]],
      ["Avoid rework — it kills my motivation.", ["HardscapeMisaligned", "Flexible"]]
    ]
  },

  6: {
    question: "Base prep is heavy and monotonous (excavation, gravel, sand, compaction). You:",
    options: [
      ["Can grind it out — durability starts under the surface.", ["HardscapeAligned", "Disciplined"]],
      ["Can do it, but pacing and breaks matter a lot.", ["HardscapeAligned", "Flexible"]],
      ["Start strong, then my mood and quality drop fast.", ["HardscapeMisaligned", "Flexible"]],
      ["That kind of monotony drains me hard.", ["HardscapeMisaligned", "Flexible"]]
    ]
  },

  7: {
    question: "Hardscape relies on strict sequence (base → screed → lay → cut → edge → compact → sand). You:",
    options: [
      ["Follow sequence tightly — skipping steps ruins jobs.", ["HardscapeAligned", "Disciplined"]],
      ["Follow it, but I’m tempted to shortcut when behind.", ["HardscapeAligned", "Flexible"]],
      ["Cut corners when no one’s watching.", ["HardscapeMisaligned", "Flexible"]],
      ["Hate rigid process — I just want to build.", ["HardscapeMisaligned", "Flexible"]]
    ]
  },

  8: {
    question: "Safety and dust/noise controls (saws, PPE, silica, hearing protection) feel like:",
    options: [
      ["Non-negotiable — safety is part of the craft.", ["HardscapeAligned", "Disciplined"]],
      ["I follow it, but slowdowns irritate me.", ["HardscapeAligned", "Flexible"]],
      ["I cut corners if it’s just one quick cut.", ["HardscapeMisaligned", "Flexible"]],
      ["I hate constraints — they kill momentum.", ["HardscapeMisaligned", "Flexible"]]
    ]
  },

  9: {
    question: "When a client or lead cares deeply about pattern alignment and symmetry, you:",
    options: [
      ["Respect it — visuals are part of the job.", ["HardscapeAligned", "Disciplined"]],
      ["Can do it, but picky standards wear on me.", ["HardscapeAligned", "Flexible"]],
      ["Get annoyed — function matters more to me.", ["HardscapeMisaligned", "Flexible"]],
      ["Hate aesthetic standards — they feel oppressive.", ["HardscapeMisaligned", "Flexible"]]
    ]
  },

  10: {
    question: "Hardscape mistakes show later (settling, pooling water, joint failure). That reality makes you:",
    options: [
      ["More careful — I want it solid for years.", ["HardscapeAligned", "Disciplined"]],
      ["Careful, but clock pressure still nags me.", ["HardscapeAligned", "Flexible"]],
      ["Anxious — delayed consequences mess with me.", ["HardscapeMisaligned", "Flexible"]],
      ["Indifferent — I’d rather move fast than obsess.", ["HardscapeMisaligned", "Flexible"]]
    ]
  },

  // ---- HUMAN FRICTION / ATTRITION LAYER ----

  11: {
    question: "Hardscape crews can be blunt and production-focused. You:",
    options: [
      ["Handle it fine — clarity matters more than tone.", ["HardscapeAligned", "Disciplined"]],
      ["Deal with it, but it wears on me.", ["HardscapeAligned", "Flexible"]],
      ["Get irritated by blunt direction.", ["HardscapeMisaligned", "Flexible"]],
      ["Strongly dislike that communication style.", ["HardscapeMisaligned", "Flexible"]]
    ]
  },

  12: {
    question: "Much of the job is invisible when done right (base prep gets buried). That feels:",
    options: [
      ["Fine — I take pride in work that lasts.", ["HardscapeAligned", "Disciplined"]],
      ["Okay, but I like some visible payoff.", ["HardscapeAligned", "Flexible"]],
      ["Demotivating — I want obvious results.", ["HardscapeMisaligned", "Flexible"]],
      ["Pointless — I need visible wins.", ["HardscapeMisaligned", "Flexible"]]
    ]
  },

  13: {
    question: "After weeks of outdoor grind, repetition, and heavy labor, you usually:",
    options: [
      ["Adapt and build endurance.", ["HardscapeAligned", "Disciplined"]],
      ["Manage it, but energy fluctuates.", ["HardscapeAligned", "Flexible"]],
      ["Start burning out mentally.", ["HardscapeMisaligned", "Flexible"]],
      ["Feel done long before projects finish.", ["HardscapeMisaligned", "Flexible"]]
    ]
  },

  14: {
    question: "Be honest: does outdoor, prep-heavy, pattern-driven hardscape work actually appeal to you?",
    options: [
      ["Yes — making durable outdoor builds fits me.", ["HardscapeAligned", "Disciplined"]],
      ["Somewhat — I’m interested but cautious.", ["HardscapeAligned", "Flexible"]],
      ["Not really — I prefer other masonry lanes.", ["HardscapeMisaligned", "Flexible"]],
      ["No — this isn’t my environment.", ["HardscapeMisaligned", "Flexible"]]
    ]
  }
};

const tags = {
  HardscapeAligned: 0,
  HardscapeMisaligned: 0,
  Disciplined: 0,
  Flexible: 0
};

function interpretResults() {
  const aligned = tags.HardscapeAligned || 0;
  const misaligned = tags.HardscapeMisaligned || 0;
  const disciplined = tags.Disciplined || 0;
  const flexible = tags.Flexible || 0;

  // Alignment axis (hardscape fit)
  const fitScore = aligned - misaligned; // ~ -15 .. +15
  let fitPct = Math.round(((fitScore + 15) / 30) * 100);
  fitPct = Math.max(0, Math.min(100, fitPct));

  // Discipline axis (process control + prep tolerance)
  const disciplineScore = disciplined - flexible; // ~ -15 .. +15
  let disciplinePct = Math.round(((disciplineScore + 15) / 30) * 100);
  disciplinePct = Math.max(0, Math.min(100, disciplinePct));

  let disciplineLabel;
  if (disciplinePct >= 70)
    disciplineLabel =
      "You can stay disciplined through prep-heavy, repetitive work and protect quality even when it’s monotonous.";
  else if (disciplinePct >= 40)
    disciplineLabel =
      "You can handle hardscape work, but prep and repetition may become friction points without the right pacing or crew.";
  else
    disciplineLabel =
      "Hardscape may feel draining because it demands disciplined prep, constant checking, and delayed payoff.";

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Hardscape & Pavers (${fitPct}% alignment)`;
    description = `
You’re showing strong alignment with hardscape and pavers — patience with prep, outdoor tolerance, and the ability to repeat clean cycles without drifting.<br><br>
<strong>Blunt truth:</strong> most failures happen below the surface. Your answers suggest you won’t rush past the boring parts that actually matter.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(60, 160, 120)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Hardscape & Pavers (${fitPct}% alignment)`;
    description = `
You have some traits that work here, but prep, repetition, or outdoor grind may wear on you over time.<br><br>
<strong>Translation:</strong> role selection and crew standards will matter more for you than for a natural fit.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Hardscape & Pavers (${fitPct}% alignment)`;
    description = `
Hardscape and pavers will likely feel like constant friction — heavy prep, repetitive cycles, outdoor grind, and delayed consequences.<br><br>
<strong>This isn’t a personal knock.</strong> It usually means your strengths fit better in masonry or trade paths with different rhythms or environments.
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
