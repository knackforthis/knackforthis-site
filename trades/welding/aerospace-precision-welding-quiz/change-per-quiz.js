// aerospace-precision-welding-quiz.js

const obj = {
  // PEOPLE & INTERACTION (2–3)

  0: {
    question: "In aerospace welding, inspectors, engineers, and QC may question or reject your work without negotiation. You usually:",
    options: [
      ["Accept it — inspection is part of the system, not personal.", ["AeroWeldingAligned", "Disciplined"]],
      ["I can handle it if communication stays professional.", ["AeroWeldingAligned", "Flexible"]],
      ["I get defensive when my work is questioned repeatedly.", ["AeroWeldingMisaligned", "Flexible"]],
      ["I strongly dislike environments where others constantly judge my work.", ["AeroWeldingMisaligned", "Flexible"]]
    ]
  },

  1: {
    question: "How do you feel about working independently most of the day, with interaction mainly around verification and approval?",
    options: [
      ["That suits me — focused solo work with limited chatter.", ["AeroWeldingAligned", "Disciplined"]],
      ["I’m okay with it, but I like occasional collaboration.", ["AeroWeldingAligned", "Flexible"]],
      ["Too isolating — I prefer active teamwork.", ["AeroWeldingMisaligned", "Flexible"]],
      ["I need frequent interaction to stay engaged.", ["AeroWeldingMisaligned", "Flexible"]]
    ]
  },

  // TIME & SCHEDULING (2)

  2: {
    question: "Aerospace schedules often reward slowness over speed, and jobs may take longer than expected. You:",
    options: [
      ["Accept it — time is secondary to correctness.", ["AeroWeldingAligned", "Disciplined"]],
      ["I can adapt, but I get restless with long timelines.", ["AeroWeldingAligned", "Flexible"]],
      ["I get frustrated when progress feels slow.", ["AeroWeldingMisaligned", "Flexible"]],
      ["I prefer fast turnaround work with visible daily output.", ["AeroWeldingMisaligned", "Flexible"]]
    ]
  },

  3: {
    question: "If a job runs long due to inspections, documentation, or rework, your reaction is usually:",
    options: [
      ["That’s expected — quality gates take time.", ["AeroWeldingAligned", "Disciplined"]],
      ["I tolerate it, but it drains me.", ["AeroWeldingAligned", "Flexible"]],
      ["It feels inefficient and irritating.", ["AeroWeldingMisaligned", "Flexible"]],
      ["I strongly resent time lost to process overhead.", ["AeroWeldingMisaligned", "Flexible"]]
    ]
  },

  // PACE & PRESSURE (2)

  4: {
    question: "When pressure comes from precision (not speed), you usually:",
    options: [
      ["Slow down and tighten control.", ["AeroWeldingAligned", "Disciplined"]],
      ["Focus harder but feel the tension.", ["AeroWeldingAligned", "Flexible"]],
      ["Start rushing despite knowing better.", ["AeroWeldingMisaligned", "Flexible"]],
      ["Mentally check out under that kind of pressure.", ["AeroWeldingMisaligned", "Flexible"]]
    ]
  },

  5: {
    question: "How do you handle knowing that a small mistake could ground an aircraft or fail certification?",
    options: [
      ["It sharpens my focus — responsibility matters.", ["AeroWeldingAligned", "Disciplined"]],
      ["I manage it, but it weighs on me.", ["AeroWeldingAligned", "Flexible"]],
      ["That level of consequence makes me anxious.", ["AeroWeldingMisaligned", "Flexible"]],
      ["I avoid work where stakes are that high.", ["AeroWeldingMisaligned", "Flexible"]]
    ]
  },

  // REPETITION & TOLERANCE (2)

  6: {
    question: "Aerospace welding demands repeating the same controlled technique with minimal variation. You:",
    options: [
      ["Find satisfaction in consistent execution.", ["AeroWeldingAligned", "Disciplined"]],
      ["Can handle it with mental discipline.", ["AeroWeldingAligned", "Flexible"]],
      ["Get bored and lose sharpness.", ["AeroWeldingMisaligned", "Flexible"]],
      ["Avoid highly repetitive technical work.", ["AeroWeldingMisaligned", "Flexible"]]
    ]
  },

  7: {
    question: "Redoing work for microscopic flaws usually makes you:",
    options: [
      ["Calm — rework is part of excellence.", ["AeroWeldingAligned", "Disciplined"]],
      ["Annoyed, but compliant.", ["AeroWeldingAligned", "Flexible"]],
      ["Demoralized over time.", ["AeroWeldingMisaligned", "Flexible"]],
      ["Angry or disengaged.", ["AeroWeldingMisaligned", "Flexible"]]
    ]
  },

  // VISIBILITY & SCRUTINY (2)

  8: {
    question: "In aerospace welding, mistakes are visible, documented, and traceable. You:",
    options: [
      ["Prefer that clarity — no ambiguity.", ["AeroWeldingAligned", "Disciplined"]],
      ["Accept it, but it adds stress.", ["AeroWeldingAligned", "Flexible"]],
      ["Feel exposed and tense.", ["AeroWeldingMisaligned", "Flexible"]],
      ["Avoid environments with permanent records of mistakes.", ["AeroWeldingMisaligned", "Flexible"]]
    ]
  },

  9: {
    question: "How do you feel about inspection culture (visual standards, NDT, documentation trails)?",
    options: [
      ["It’s necessary and reassuring.", ["AeroWeldingAligned", "Disciplined"]],
      ["I tolerate it, but it feels heavy.", ["AeroWeldingAligned", "Flexible"]],
      ["It feels nitpicky and draining.", ["AeroWeldingMisaligned", "Flexible"]],
      ["That environment would wear me down fast.", ["AeroWeldingMisaligned", "Flexible"]]
    ]
  },

  // TRADE-SPECIFIC PAIN POINTS (3)

  10: {
    question: "Aerospace welding often involves exotic alloys that punish poor heat control. Your reaction:",
    options: [
      ["Appealing — I like technical mastery.", ["AeroWeldingAligned", "Disciplined"]],
      ["Interesting, but intimidating.", ["AeroWeldingAligned", "Flexible"]],
      ["I prefer forgiving materials.", ["AeroWeldingMisaligned", "Flexible"]],
      ["I avoid materials that leave no margin for error.", ["AeroWeldingMisaligned", "Flexible"]]
    ]
  },

  11: {
    question: "How do you feel about strict procedures (WPS), documentation, and zero improvisation?",
    options: [
      ["Rules make quality repeatable.", ["AeroWeldingAligned", "Disciplined"]],
      ["I’ll follow them, but paperwork drains me.", ["AeroWeldingAligned", "Flexible"]],
      ["I dislike rigid processes.", ["AeroWeldingMisaligned", "Flexible"]],
      ["I need freedom to work my own way.", ["AeroWeldingMisaligned", "Flexible"]]
    ]
  },

  12: {
    question: "Aerospace welding requires ongoing certifications and periodic requalification tests. You:",
    options: [
      ["See it as professional validation.", ["AeroWeldingAligned", "Disciplined"]],
      ["Accept it, but dislike testing pressure.", ["AeroWeldingAligned", "Flexible"]],
      ["Find it exhausting to maintain.", ["AeroWeldingMisaligned", "Flexible"]],
      ["Avoid careers with constant certification hoops.", ["AeroWeldingMisaligned", "Flexible"]]
    ]
  },

  // SELF-AWARENESS CHECK (2)

  13: {
    question: "Be honest: how do you feel about slow, quiet, highly controlled workdays?",
    options: [
      ["They help me do my best work.", ["AeroWeldingAligned", "Disciplined"]],
      ["I can manage them with structure.", ["AeroWeldingAligned", "Flexible"]],
      ["They drain me over time.", ["AeroWeldingMisaligned", "Flexible"]],
      ["I strongly prefer faster, louder environments.", ["AeroWeldingMisaligned", "Flexible"]]
    ]
  },

  14: {
    question: "How strong is your pull toward aerospace precision welding specifically?",
    options: [
      ["Strong — elite standards appeal to me.", ["AeroWeldingAligned", "Disciplined"]],
      ["Moderate — I’m curious but unsure.", ["AeroWeldingAligned", "Flexible"]],
      ["Low — other welding lanes attract me more.", ["AeroWeldingMisaligned", "Flexible"]],
      ["Very low — this environment isn’t for me.", ["AeroWeldingMisaligned", "Flexible"]]
    ]
  }
};

const tags = {
  AeroWeldingAligned: 0,
  AeroWeldingMisaligned: 0,
  Disciplined: 0,
  Flexible: 0
};

function interpretResults() {
  const aligned = tags.AeroWeldingAligned || 0;
  const misaligned = tags.AeroWeldingMisaligned || 0;
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
    disciplineLabel = "You’re wired for slow precision, accountability, and rework without ego.";
  } else if (disciplinePct >= 40) {
    disciplineLabel = "You can handle aerospace demands, but consistency may depend on structure and support.";
  } else {
    disciplineLabel = "Highly controlled, inspection-driven work may grind you down over time.";
  }

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Aerospace Precision Welding (${fitPct}% alignment)`;
    description = `
You show strong alignment with aerospace precision welding: patience for prep, tolerance for scrutiny, and comfort operating under strict procedures.<br><br>
<strong>Blunt truth:</strong> this lane rewards discipline, not adrenaline. It’s slow, exacting, and unforgiving — and your answers suggest that won’t break you.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(60, 160, 120)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Aerospace Precision Welding (${fitPct}% alignment)`;
    description = `
You have some traits that fit aerospace precision welding, but friction is likely without the right environment.<br><br>
<strong>Translation:</strong> with strong structure and mentorship, you might do fine — but other welding lanes may feel more sustainable long-term.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Aerospace Precision Welding (${fitPct}% alignment)`;
    description = `
Based on your answers, aerospace precision welding will likely feel restrictive, stressful, and mentally heavy.<br><br>
<strong>This isn’t a failure.</strong> It usually means your strengths align better with faster-paced, more forgiving welding environments.
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
