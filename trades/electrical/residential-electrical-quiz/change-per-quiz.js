// residential-electrical-quiz.js

const obj = {
  0: {
    question: "Residential electrical work often means finishing a job with a clean, safe, code-correct result — even when conditions are imperfect. You usually:",
    options: [
      ["Like it — I enjoy turning messy situations into clean, working systems.", ["ResidentialElectricalAligned", "Disciplined"]],
      ["I can do it, but I need clear checkpoints to stay motivated.", ["ResidentialElectricalAligned", "Flexible"]],
      ["I get impatient when progress isn’t visible fast.", ["ResidentialElectricalMisaligned", "Flexible"]],
      ["I lose interest if I can’t see quick payoff.", ["ResidentialElectricalMisaligned", "Flexible"]]
    ]
  },

  1: {
    question: "How do you feel about strict safety habits (power off, verify, lockout awareness, double-checking before touching)?",
    options: [
      ["That’s non-negotiable — I want to be safe and consistent.", ["ResidentialElectricalAligned", "Disciplined"]],
      ["I’ll follow safety rules, but it can feel slow sometimes.", ["ResidentialElectricalAligned", "Flexible"]],
      ["I’m tempted to take shortcuts if it seems low-risk.", ["ResidentialElectricalMisaligned", "Flexible"]],
      ["I dislike rigid safety routines and would fight them.", ["ResidentialElectricalMisaligned", "Flexible"]]
    ]
  },

  2: {
    question: "A lot of residential electrical is repetitive but precise (devices, boxes, terminations, labeling, testing). You:",
    options: [
      ["Are fine with it — precision repetition is quality.", ["ResidentialElectricalAligned", "Disciplined"]],
      ["Can do it, but I need variety to stay engaged.", ["ResidentialElectricalAligned", "Flexible"]],
      ["Get drained fast doing repetitive detail work.", ["ResidentialElectricalMisaligned", "Flexible"]],
      ["Avoid repetitive, detail-heavy work.", ["ResidentialElectricalMisaligned", "Flexible"]]
    ]
  },

  3: {
    question: "How do you handle working in homes (occupied spaces, homeowners watching, keeping things clean, explaining what you’re doing)?",
    options: [
      ["Fine — I can stay professional and communicate clearly.", ["ResidentialElectricalAligned", "Disciplined"]],
      ["I can do it, but it’s not my favorite environment.", ["ResidentialElectricalAligned", "Flexible"]],
      ["It stresses me out when people watch or ask questions.", ["ResidentialElectricalMisaligned", "Flexible"]],
      ["I strongly prefer not to work in people’s homes.", ["ResidentialElectricalMisaligned", "Flexible"]]
    ]
  },

  4: {
    question: "Residential jobs often involve crawlspaces, attics, basements, ladders, and awkward access. Your honest reaction:",
    options: [
      ["Not ideal, but I can handle it consistently.", ["ResidentialElectricalAligned", "Disciplined"]],
      ["I can do it sometimes, but I’d want limits.", ["ResidentialElectricalAligned", "Flexible"]],
      ["I hate tight/awkward spaces and avoid them.", ["ResidentialElectricalMisaligned", "Flexible"]],
      ["That’s basically a dealbreaker for me.", ["ResidentialElectricalMisaligned", "Flexible"]]
    ]
  },

  5: {
    question: "A homeowner wants a 'simple' change, but you realize it requires code-aware decisions (box fill, breaker sizing, GFCI/AFCI, grounding). You:",
    options: [
      ["Prefer doing it correctly even if it takes longer to explain.", ["ResidentialElectricalAligned", "Disciplined"]],
      ["Will do it right, but I’d rather not debate it.", ["ResidentialElectricalAligned", "Flexible"]],
      ["Feel annoyed when rules complicate what seems simple.", ["ResidentialElectricalMisaligned", "Flexible"]],
      ["Would rather avoid work that requires code-driven judgment.", ["ResidentialElectricalMisaligned", "Flexible"]]
    ]
  },

  6: {
    question: "You troubleshoot a dead circuit and the cause isn’t obvious. How do you respond?",
    options: [
      ["I like the chase — I’ll test logically until it makes sense.", ["ResidentialElectricalAligned", "Disciplined"]],
      ["I can troubleshoot, but I need a process so I don’t spiral.", ["ResidentialElectricalAligned", "Flexible"]],
      ["I get frustrated quickly when the answer isn’t obvious.", ["ResidentialElectricalMisaligned", "Flexible"]],
      ["I dislike diagnostic work and avoid it.", ["ResidentialElectricalMisaligned", "Flexible"]]
    ]
  },

  7: {
    question: "Residential electrical often means careful finish quality (straight devices, clean plates, neat panel labeling). You:",
    options: [
      ["Care about it — it should look intentional and professional.", ["ResidentialElectricalAligned", "Disciplined"]],
      ["Can do it, but I’m not naturally detail-obsessed.", ["ResidentialElectricalAligned", "Flexible"]],
      ["Think it’s nitpicky if the power works.", ["ResidentialElectricalMisaligned", "Flexible"]],
      ["Don’t want to be judged on visual neatness.", ["ResidentialElectricalMisaligned", "Flexible"]]
    ]
  },

  8: {
    question: "How do you feel about learning and remembering rules (basic code concepts, best practices, why things are done a certain way)?",
    options: [
      ["Fine — I like having a rulebook that keeps things safe.", ["ResidentialElectricalAligned", "Disciplined"]],
      ["I’ll learn enough to do the job, but I don’t love rules.", ["ResidentialElectricalAligned", "Flexible"]],
      ["Rules feel like friction and slow me down.", ["ResidentialElectricalMisaligned", "Flexible"]],
      ["I avoid work where rules and compliance are central.", ["ResidentialElectricalMisaligned", "Flexible"]]
    ]
  },

  9: {
    question: "Residential work can be a mix of planned installs and 'surprise' problems once walls are open. You:",
    options: [
      ["Handle surprises well — I can adapt without panicking.", ["ResidentialElectricalAligned", "Disciplined"]],
      ["Can adapt, but surprises drain me if they stack up.", ["ResidentialElectricalAligned", "Flexible"]],
      ["Get stressed when the plan changes mid-job.", ["ResidentialElectricalMisaligned", "Flexible"]],
      ["Prefer work where surprises are rare.", ["ResidentialElectricalMisaligned", "Flexible"]]
    ]
  },

  10: {
    question: "Which sounds more natural to you?",
    options: [
      ["Homes, remodels, and service calls where you interact with real people.", ["ResidentialElectricalAligned", "Disciplined"]],
      ["Mostly homes, but I want some variety across job types.", ["ResidentialElectricalAligned", "Flexible"]],
      ["Bigger sites where you’re less customer-facing.", ["ResidentialElectricalMisaligned", "Flexible"]],
      ["Anything but residential environments.", ["ResidentialElectricalMisaligned", "Flexible"]]
    ]
  },

  11: {
    question: "Be honest: how strong is your pull toward residential electrical specifically?",
    options: [
      ["Strong — I’m drawn to clean installs, safe systems, and visible results.", ["ResidentialElectricalAligned", "Disciplined"]],
      ["Moderate — I’m curious, but I’m not fully sure yet.", ["ResidentialElectricalAligned", "Flexible"]],
      ["Low — I’m more interested in other electrical lanes.", ["ResidentialElectricalMisaligned", "Flexible"]],
      ["Very low — this probably isn’t my environment.", ["ResidentialElectricalMisaligned", "Flexible"]]
    ]
  },
  12: {
    question: "Residential electrical days often stack: multiple calls, delays, and the pressure to finish cleanly before the next job. You:",
    options: [
      ["Can pace myself and stay methodical.", ["ResidentialElectricalAligned", "Disciplined"]],
      ["Manage it with planning, but feel the pressure.", ["ResidentialElectricalAligned", "Flexible"]],
      ["Start rushing as the day stacks up.", ["ResidentialElectricalMisaligned", "Flexible"]],
      ["Lose consistency when the schedule gets tight.", ["ResidentialElectricalMisaligned", "Flexible"]]
    ]
  },
  13: {
    question: "When you’re tired near the end of the day, which is more true?",
    options: [
      ["I slow down and stick to safety habits.", ["ResidentialElectricalAligned", "Disciplined"]],
      ["I try to stay consistent, but it’s harder.", ["ResidentialElectricalAligned", "Flexible"]],
      ["I’m more likely to take small risks.", ["ResidentialElectricalMisaligned", "Flexible"]],
      ["My consistency drops a lot when I’m fatigued.", ["ResidentialElectricalMisaligned", "Flexible"]]
    ]
  },
  14: {
    question: "If a homeowner points out something minor (plate crooked, label unclear), you:",
    options: [
      ["Fix it without ego — details matter.", ["ResidentialElectricalAligned", "Disciplined"]],
      ["Fix it, but it annoys me internally.", ["ResidentialElectricalAligned", "Flexible"]],
      ["Feel irritated because it works fine.", ["ResidentialElectricalMisaligned", "Flexible"]],
      ["Strongly dislike being corrected on small details.", ["ResidentialElectricalMisaligned", "Flexible"]]
    ]
  }



};

const tags = {
  ResidentialElectricalAligned: 0,
  ResidentialElectricalMisaligned: 0,
  Disciplined: 0,
  Flexible: 0
};

function interpretResults() {
  const aligned = tags.ResidentialElectricalAligned || 0;
  const misaligned = tags.ResidentialElectricalMisaligned || 0;
  const disciplined = tags.Disciplined || 0;
  const flexible = tags.Flexible || 0;

  // Alignment axis (residential electrical fit)
  const fitScore = aligned - misaligned; // ~ -12 .. +12
  let fitPct = Math.round(((fitScore + 12) / 24) * 100);
  fitPct = Math.max(0, Math.min(100, fitPct));

  // Discipline axis (safety + detail consistency)
  const disciplineScore = disciplined - flexible; // ~ -12 .. +12
  let disciplinePct = Math.round(((disciplineScore + 12) / 24) * 100);
  disciplinePct = Math.max(0, Math.min(100, disciplinePct));

  let disciplineLabel;
  if (disciplinePct >= 70) disciplineLabel = "You’re built for safety and finish consistency: you’ll actually follow the routine and keep your work clean under pressure.";
  else if (disciplinePct >= 40) disciplineLabel = "You can do residential electrical, but consistency may depend on structure, checklists, and a workflow you trust.";
  else disciplineLabel = "Residential electrical may feel mentally irritating because it demands steady safety habits and neat detail work even when nobody’s clapping.";

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Residential Electrical (${fitPct}% alignment)`;
    description = `
You’re showing strong alignment with residential electrical — comfort with safety habits, tolerance for repetitive precision, and willingness to work in real homes with real constraints.<br><br>
<strong>Blunt truth:</strong> residential electrical is not just “running wire.” It’s safety, code-driven decisions, and finish quality in awkward spaces — often with someone watching.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(60, 160, 120)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Residential Electrical (${fitPct}% alignment)`;
    description = `
You’ve got some traits that work well in residential electrical, but enough friction points that the day-to-day could feel annoying without the right environment.<br><br>
<strong>Translation:</strong> you might do fine with structured checklists and a clean workflow — or you might prefer a lane with less customer-facing pressure or less finish/detail expectation.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Residential Electrical (${fitPct}% alignment)`;
    description = `
Based on your answers, residential electrical will probably feel like constant friction: strict safety routines, repetitive precision, awkward access, and customer-facing expectations.<br><br>
<strong>This isn’t a personal knock.</strong> It usually means your strengths fit better in a different electrical lane (commercial/industrial/low-voltage) or even a different trade entirely.
    `.trim();
    color = "rgb(170, 80, 80)";
  }

  // Show/hide buttons based on fit (same class names your framework uses)
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

  // Reset
  Object.keys(tags).forEach(k => tags[k] = 0);

  return { title, description, color };
}
