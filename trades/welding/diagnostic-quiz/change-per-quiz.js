// welding-diagnostic-quiz.js

const obj = {
  // PEOPLE & ACCOUNTABILITY (3)

  0: {
    question: "Welding often means your work is inspected, questioned, or blamed when something fails. You:",
    options: [
      ["Accept that — accountability is part of the trade.", ["WeldingAligned", "Grit"]],
      ["Can handle it with fair communication.", ["WeldingAligned", "Comfort"]],
      ["Get tense when my work is scrutinized.", ["WeldingMisaligned", "Comfort"]],
      ["Avoid work where mistakes follow you.", ["WeldingMisaligned", "Comfort"]]
    ]
  },

  1: {
    question: "How do you feel about explaining your work to non-welders (supervisors, inspectors, customers)?",
    options: [
      ["I can explain tradeoffs clearly.", ["WeldingAligned", "Grit"]],
      ["I can do it, but I prefer minimal interaction.", ["WeldingAligned", "Comfort"]],
      ["I dislike justifying physical work verbally.", ["WeldingMisaligned", "Comfort"]],
      ["I avoid people-facing responsibility.", ["WeldingMisaligned", "Comfort"]]
    ]
  },

  2: {
    question: "If someone pushes you to rush a weld that affects safety, you usually:",
    options: [
      ["Push back — safety wins.", ["WeldingAligned", "Grit"]],
      ["Try to balance speed and quality.", ["WeldingAligned", "Comfort"]],
      ["Feel pressured and uncomfortable.", ["WeldingMisaligned", "Comfort"]],
      ["Prefer not to be in that position at all.", ["WeldingMisaligned", "Comfort"]]
    ]
  },

  // TIME & SCHEDULING (2)

  3: {
    question: "Welding work often runs longer than planned due to prep, fit-up, or rework. You:",
    options: [
      ["Expect it — real-world conditions change.", ["WeldingAligned", "Grit"]],
      ["Tolerate it with clear limits.", ["WeldingAligned", "Comfort"]],
      ["Get frustrated when timelines slip.", ["WeldingMisaligned", "Comfort"]],
      ["Prefer tightly predictable work only.", ["WeldingMisaligned", "Comfort"]]
    ]
  },

  4: {
    question: "How do you feel about long stretches of focused physical work without quick ‘wins’?",
    options: [
      ["Fine — progress compounds.", ["WeldingAligned", "Grit"]],
      ["I manage it, but need pacing.", ["WeldingAligned", "Comfort"]],
      ["My motivation drops fast.", ["WeldingMisaligned", "Comfort"]],
      ["I need frequent visible progress.", ["WeldingMisaligned", "Comfort"]]
    ]
  },

  // PACE & PRESSURE (2)

  5: {
    question: "When speed conflicts with weld quality, your instinct is to:",
    options: [
      ["Slow down and protect the outcome.", ["WeldingAligned", "Grit"]],
      ["Compromise carefully.", ["WeldingAligned", "Comfort"]],
      ["Lean toward speed.", ["WeldingMisaligned", "Comfort"]],
      ["Hate being forced to choose.", ["WeldingMisaligned", "Comfort"]]
    ]
  },

  6: {
    question: "Knowing a failed weld could cause real damage or injury makes you:",
    options: [
      ["More focused and deliberate.", ["WeldingAligned", "Grit"]],
      ["Careful but tense.", ["WeldingAligned", "Comfort"]],
      ["Anxious and second-guessing.", ["WeldingMisaligned", "Comfort"]],
      ["Prefer lower-stakes work.", ["WeldingMisaligned", "Comfort"]]
    ]
  },

  // REPETITION & PRACTICE (2)

  7: {
    question: "Welding skill comes from repetition (beads, joints, positions). You:",
    options: [
      ["Accept repetition as skill-building.", ["WeldingAligned", "Grit"]],
      ["Can do it with some variety.", ["WeldingAligned", "Comfort"]],
      ["Get bored and sloppy.", ["WeldingMisaligned", "Comfort"]],
      ["Avoid repetitive physical practice.", ["WeldingMisaligned", "Comfort"]]
    ]
  },

  8: {
    question: "Redoing work because it’s ‘not quite right’ usually makes you:",
    options: [
      ["Calm — quality matters.", ["WeldingAligned", "Grit"]],
      ["Annoyed but compliant.", ["WeldingAligned", "Comfort"]],
      ["Frustrated and drained.", ["WeldingMisaligned", "Comfort"]],
      ["Angry — I hate rework.", ["WeldingMisaligned", "Comfort"]]
    ]
  },

  // VISIBILITY & CONSEQUENCE (2)

  9: {
    question: "Welds are often visible and traceable back to you. You:",
    options: [
      ["Like the accountability.", ["WeldingAligned", "Grit"]],
      ["Accept it with some pressure.", ["WeldingAligned", "Comfort"]],
      ["Feel exposed by it.", ["WeldingMisaligned", "Comfort"]],
      ["Avoid work where mistakes stick.", ["WeldingMisaligned", "Comfort"]]
    ]
  },

  10: {
    question: "If a weld looks okay but you doubt penetration or fusion, you usually:",
    options: [
      ["Fix it — confidence matters.", ["WeldingAligned", "Grit"]],
      ["Reinforce it cautiously.", ["WeldingAligned", "Comfort"]],
      ["Leave it if it’ll probably hold.", ["WeldingMisaligned", "Comfort"]],
      ["Move on — I hate second-guessing.", ["WeldingMisaligned", "Comfort"]]
    ]
  },

  // PHYSICAL REALITY (2)

  11: {
    question: "Welding involves heat, PPE, awkward positions, and physical strain. You:",
    options: [
      ["Can handle that — it’s part of a real trade.", ["WeldingAligned", "Grit"]],
      ["Can tolerate it with the right conditions.", ["WeldingAligned", "Comfort"]],
      ["Don’t handle physical strain well.", ["WeldingMisaligned", "Comfort"]],
      ["Avoid physically demanding work.", ["WeldingMisaligned", "Comfort"]]
    ]
  },

  12: {
    question: "Dirty environments, fumes (with ventilation), and noise are common. You:",
    options: [
      ["Accept it as part of shop life.", ["WeldingAligned", "Grit"]],
      ["Prefer cleaner shops but can adapt.", ["WeldingAligned", "Comfort"]],
      ["Find that draining long-term.", ["WeldingMisaligned", "Comfort"]],
      ["That’s a dealbreaker.", ["WeldingMisaligned", "Comfort"]]
    ]
  },

  // SELF-AWARENESS CHECK (3)

  13: {
    question: "Which sounds more satisfying to you?",
    options: [
      ["Building or repairing physical things that must hold.", ["WeldingAligned", "Grit"]],
      ["Either physical or digital work.", ["WeldingAligned", "Comfort"]],
      ["Mostly digital or abstract work.", ["WeldingMisaligned", "Comfort"]],
      ["I don’t enjoy physical build work.", ["WeldingMisaligned", "Comfort"]]
    ]
  },

  14: {
    question: "Be honest: how strong is your pull toward welding as a trade (not just ‘it seems cool’)?",
    options: [
      ["Strong — I can realistically see myself doing this.", ["WeldingAligned", "Grit"]],
      ["Moderate — I need proof it fits me.", ["WeldingAligned", "Comfort"]],
      ["Low — I suspect it’s not for me long-term.", ["WeldingMisaligned", "Comfort"]],
      ["Very low — this isn’t my direction.", ["WeldingMisaligned", "Comfort"]]
    ]
  }
};

const tags = {
  WeldingAligned: 0,
  WeldingMisaligned: 0,
  Grit: 0,
  Comfort: 0
};

function interpretResults() {
  const aligned = tags.WeldingAligned || 0;
  const misaligned = tags.WeldingMisaligned || 0;
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
    gritLabel = "You’re unlikely to be shocked by prep, PPE, repetition, or physical strain.";
  } else if (gritPct >= 40) {
    gritLabel = "You can probably handle welding, but specific environments will matter.";
  } else {
    gritLabel = "The day-to-day reality may feel draining rather than sharpening.";
  }

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Welding (${fitPct}% alignment)`;
    description = `
You show strong alignment with the core realities of welding — hands-on work, repetition, accountability, and physical conditions.<br><br>
<strong>Important:</strong> this doesn’t pick a specialty. It means welding itself probably won’t fight your temperament.<br><br>
${gritLabel}
    `.trim();
    color = "rgb(60, 160, 120)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Welding (${fitPct}% alignment)`;
    description = `
You’re not a clean yes or no. Welding could work, but choosing the right lane will matter more for you than for a natural fit.<br><br>
<strong>Translation:</strong> specialty choice is critical here.<br><br>
${gritLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Welding (${fitPct}% alignment)`;
    description = `
Based on your answers, welding’s core realities may feel like ongoing friction rather than productive challenge.<br><br>
<strong>This isn’t a knock.</strong> It usually means your strengths show up better in cleaner, less physical, or less process-driven work.
    `.trim();
    color = "rgb(170, 80, 80)";
  }

  if (band === "strong") {
    $('.good-fit').show();
    $('.no-fit').hide();
    $('.result-container .good-fit').first().next().text('Next: explore welding specialties that match your tolerance:');
  } else if (band === "middle") {
    $('.good-fit').show();
    $('.no-fit').show();
    $('.result-container .good-fit').first().next().text('If you want clarity, try a welding specialty diagnostic:');
  } else {
    $('.good-fit').hide();
    $('.no-fit').show();
  }

  Object.keys(tags).forEach(k => (tags[k] = 0));

  return { title, description, color };
}
