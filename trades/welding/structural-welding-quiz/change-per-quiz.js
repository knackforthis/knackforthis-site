// structural-welding-quiz.js

const obj = {
  // PEOPLE & ACCOUNTABILITY (3)

  0: {
    question: "Structural welding often means inspectors, foremen, and engineers have final authority over your work. You:",
    options: [
      ["Accept it — accountability comes with the territory.", ["StructuralAligned", "Grit"]],
      ["Can handle it with professional communication.", ["StructuralAligned", "Comfort"]],
      ["Get tense when others scrutinize my welds.", ["StructuralMisaligned", "Comfort"]],
      ["Avoid work where authority overrides autonomy.", ["StructuralMisaligned", "Comfort"]]
    ]
  },

  1: {
    question: "If a structural weld fails inspection and must be repaired, you usually:",
    options: [
      ["Fix it properly and move on.", ["StructuralAligned", "Grit"]],
      ["Redo it, but it hits morale.", ["StructuralAligned", "Comfort"]],
      ["Feel frustrated and defensive.", ["StructuralMisaligned", "Comfort"]],
      ["Strongly dislike environments with frequent rework.", ["StructuralMisaligned", "Comfort"]]
    ]
  },

  2: {
    question: "Structural welding is rarely solo — fitters, riggers, crane operators, and crews are involved. You:",
    options: [
      ["Like coordinating with a crew.", ["StructuralAligned", "Grit"]],
      ["Work fine with others but prefer clear roles.", ["StructuralAligned", "Comfort"]],
      ["Prefer minimal coordination.", ["StructuralMisaligned", "Comfort"]],
      ["Dislike crew dynamics and jobsite complexity.", ["StructuralMisaligned", "Comfort"]]
    ]
  },

  // TIME & SCHEDULING (2)

  3: {
    question: "Structural jobs often run longer than planned due to access, weather, sequencing, or inspections. You:",
    options: [
      ["Expect it — real sites aren’t clean labs.", ["StructuralAligned", "Grit"]],
      ["Tolerate it with pacing.", ["StructuralAligned", "Comfort"]],
      ["Get frustrated when timelines slip.", ["StructuralMisaligned", "Comfort"]],
      ["Prefer predictable, indoor schedules.", ["StructuralMisaligned", "Comfort"]]
    ]
  },

  4: {
    question: "How do you handle long workdays where progress is slow but standards stay high?",
    options: [
      ["Fine — consistency matters more than speed.", ["StructuralAligned", "Grit"]],
      ["I manage it with breaks.", ["StructuralAligned", "Comfort"]],
      ["My motivation drops.", ["StructuralMisaligned", "Comfort"]],
      ["I need faster visible progress.", ["StructuralMisaligned", "Comfort"]]
    ]
  },

  // PACE & PRESSURE (2)

  5: {
    question: "When schedule pressure increases, what happens to your work?",
    options: [
      ["Quality stays first.", ["StructuralAligned", "Grit"]],
      ["I balance speed carefully.", ["StructuralAligned", "Comfort"]],
      ["I start rushing.", ["StructuralMisaligned", "Comfort"]],
      ["Pressure makes me disengage.", ["StructuralMisaligned", "Comfort"]]
    ]
  },

  6: {
    question: "Knowing a bad structural weld could cause collapse or injury makes you:",
    options: [
      ["More focused and disciplined.", ["StructuralAligned", "Grit"]],
      ["Careful but tense.", ["StructuralAligned", "Comfort"]],
      ["Anxious and second-guessing.", ["StructuralMisaligned", "Comfort"]],
      ["Prefer lower-stakes work.", ["StructuralMisaligned", "Comfort"]]
    ]
  },

  // REPETITION & DISCIPLINE (2)

  7: {
    question: "Structural welding requires repeating sound technique across many joints and positions. You:",
    options: [
      ["Accept repetition as reliability.", ["StructuralAligned", "Grit"]],
      ["Can repeat with some variety.", ["StructuralAligned", "Comfort"]],
      ["Get bored and sloppy.", ["StructuralMisaligned", "Comfort"]],
      ["Avoid repetitive physical practice.", ["StructuralMisaligned", "Comfort"]]
    ]
  },

  8: {
    question: "Redoing work because it doesn’t meet spec usually makes you:",
    options: [
      ["Calm — spec matters.", ["StructuralAligned", "Grit"]],
      ["Annoyed but compliant.", ["StructuralAligned", "Comfort"]],
      ["Frustrated and drained.", ["StructuralMisaligned", "Comfort"]],
      ["Angry — I hate rework.", ["StructuralMisaligned", "Comfort"]]
    ]
  },

  // VISIBILITY & INSPECTION (2)

  9: {
    question: "Structural welds are visible, inspected, and traceable. You:",
    options: [
      ["Like clear accountability.", ["StructuralAligned", "Grit"]],
      ["Accept it with pressure.", ["StructuralAligned", "Comfort"]],
      ["Feel exposed by it.", ["StructuralMisaligned", "Comfort"]],
      ["Avoid work where mistakes follow you.", ["StructuralMisaligned", "Comfort"]]
    ]
  },

  10: {
    question: "If a weld looks fine but doesn’t meet size or profile requirements, you:",
    options: [
      ["Redo it — spec is spec.", ["StructuralAligned", "Grit"]],
      ["Repair cautiously.", ["StructuralAligned", "Comfort"]],
      ["Leave it if it’ll probably pass.", ["StructuralMisaligned", "Comfort"]],
      ["Move on — rework kills momentum.", ["StructuralMisaligned", "Comfort"]]
    ]
  },

  // PHYSICAL & ENVIRONMENTAL REALITY (2)

  11: {
    question: "Structural welding often involves heights, lifts, scaffolds, and awkward access. You:",
    options: [
      ["Can work safely up there.", ["StructuralAligned", "Grit"]],
      ["Manage it with mental effort.", ["StructuralAligned", "Comfort"]],
      ["Prefer to avoid heights.", ["StructuralMisaligned", "Comfort"]],
      ["No — heights are not for me.", ["StructuralMisaligned", "Comfort"]]
    ]
  },

  12: {
    question: "Heat, PPE, wind, noise, and outdoor conditions are common. You:",
    options: [
      ["Accept it as part of the trade.", ["StructuralAligned", "Grit"]],
      ["Can tolerate it with limits.", ["StructuralAligned", "Comfort"]],
      ["Find it draining long-term.", ["StructuralMisaligned", "Comfort"]],
      ["Avoid harsh environments.", ["StructuralMisaligned", "Comfort"]]
    ]
  },

  // SELF-AWARENESS CHECK (3)

  13: {
    question: "Which sounds more natural to you?",
    options: [
      ["Critical structural work that must hold.", ["StructuralAligned", "Grit"]],
      ["Steady trade work with known demand.", ["StructuralAligned", "Comfort"]],
      ["General welding with less consequence.", ["StructuralMisaligned", "Comfort"]],
      ["Anything but high-stakes construction.", ["StructuralMisaligned", "Comfort"]]
    ]
  },

  14: {
    question: "Be honest: how strong is your pull toward structural welding specifically?",
    options: [
      ["Strong — responsibility motivates me.", ["StructuralAligned", "Grit"]],
      ["Moderate — I respect it but have doubts.", ["StructuralAligned", "Comfort"]],
      ["Low — other welding lanes appeal more.", ["StructuralMisaligned", "Comfort"]],
      ["Very low — this isn’t my environment.", ["StructuralMisaligned", "Comfort"]]
    ]
  }
};

const tags = {
  StructuralAligned: 0,
  StructuralMisaligned: 0,
  Grit: 0,
  Comfort: 0
};

function interpretResults() {
  const aligned = tags.StructuralAligned || 0;
  const misaligned = tags.StructuralMisaligned || 0;
  const grit = tags.Grit || 0;
  const comfort = tags.Comfort || 0;

  const fitScore = aligned - misaligned; // ~ -15 .. +15
  let fitPct = Math.round(((fitScore + 15) / 30) * 100);
  fitPct = Math.max(0, Math.min(100, fitPct));

  const gritScore = grit - comfort;
  let gritPct = Math.round(((gritScore + 15) / 30) * 100);
  gritPct = Math.max(0, Math.min(100, gritPct));

  let gritLabel;
  if (gritPct >= 70) {
    gritLabel = "You’re unlikely to be shocked by physical strain, inspection pressure, or jobsite friction.";
  } else if (gritPct >= 40) {
    gritLabel = "You can probably handle the work, but conditions and crew culture will matter.";
  } else {
    gritLabel = "The day-to-day pressure and physical demands may grind you down over time.";
  }

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Structural Welding (${fitPct}% alignment)`;
    description = `
You show strong alignment with structural welding — comfort with accountability, harsh conditions, crew coordination, and high-consequence work.<br><br>
<strong>Blunt truth:</strong> structural welding is not forgiving. Standards are real, conditions are rough, and mistakes don’t stay hidden. Your answers suggest you can live with that weight.<br><br>
${gritLabel}
    `.trim();
    color = "rgb(60, 160, 120)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Structural Welding (${fitPct}% alignment)`;
    description = `
You have some traits that fit structural welding, but friction is likely without the right environment and crew.<br><br>
<strong>Translation:</strong> job selection and culture will matter more for you than raw skill.<br><br>
${gritLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Structural Welding (${fitPct}% alignment)`;
    description = `
Based on your answers, structural welding will likely feel heavy: physical strain, inspection pressure, crew coordination, and visible consequences.<br><br>
<strong>This isn’t a knock.</strong> It usually means your strengths align better with lower-stakes or more controlled welding lanes.
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
