// service-and-repair-quiz.js

const obj = {
  // PEOPLE & INTERACTION (3)

  0: {
    question: "Service & repair means dealing with customers while diagnosing problems in real time. You:",
    options: [
      ["Can stay calm, focused, and professional.", ["ServiceRepairAligned", "Disciplined"]],
      ["Can handle it, but it drains energy.", ["ServiceRepairAligned", "Flexible"]],
      ["Feel rushed or flustered by customers watching.", ["ServiceRepairMisaligned", "Flexible"]],
      ["Strongly dislike customer-facing work.", ["ServiceRepairMisaligned", "Flexible"]]
    ]
  },

  1: {
    question: "A customer questions your diagnosis or price. Your instinct is:",
    options: [
      ["Explain clearly and stand by sound reasoning.", ["ServiceRepairAligned", "Disciplined"]],
      ["Explain, but feel pressure.", ["ServiceRepairAligned", "Flexible"]],
      ["Second-guess yourself.", ["ServiceRepairMisaligned", "Flexible"]],
      ["Get irritated or shut down.", ["ServiceRepairMisaligned", "Flexible"]]
    ]
  },

  2: {
    question: "Explaining risks, trade-offs, and “this might fail later” feels:",
    options: [
      ["Normal — honesty is part of the job.", ["ServiceRepairAligned", "Disciplined"]],
      ["Necessary but uncomfortable.", ["ServiceRepairAligned", "Flexible"]],
      ["Stressful and draining.", ["ServiceRepairMisaligned", "Flexible"]],
      ["Something I avoid.", ["ServiceRepairMisaligned", "Flexible"]]
    ]
  },

  // TIME & DECISION PRESSURE (2)

  3: {
    question: "Service work requires making many small decisions quickly. You:",
    options: [
      ["Handle it well — decision-making energizes me.", ["ServiceRepairAligned", "Disciplined"]],
      ["Can do it, but mental fatigue builds.", ["ServiceRepairAligned", "Flexible"]],
      ["Get overwhelmed by constant decisions.", ["ServiceRepairMisaligned", "Flexible"]],
      ["Prefer work with fewer judgment calls.", ["ServiceRepairMisaligned", "Flexible"]]
    ]
  },

  4: {
    question: "When time pressure conflicts with doing it perfectly, you:",
    options: [
      ["Slow down and protect quality.", ["ServiceRepairAligned", "Disciplined"]],
      ["Balance speed and correctness.", ["ServiceRepairAligned", "Flexible"]],
      ["Lean toward speed.", ["ServiceRepairMisaligned", "Flexible"]],
      ["Feel stressed and lose focus.", ["ServiceRepairMisaligned", "Flexible"]]
    ]
  },

  // UNCERTAINTY & DIAGNOSIS (3)

  5: {
    question: "You arrive and the problem description is vague or wrong. Your reaction is:",
    options: [
      ["Great — I like turning chaos into clarity.", ["ServiceRepairAligned", "Disciplined"]],
      ["I can handle it if I test methodically.", ["ServiceRepairAligned", "Flexible"]],
      ["It irritates me.", ["ServiceRepairMisaligned", "Flexible"]],
      ["I want clear scope before I start.", ["ServiceRepairMisaligned", "Flexible"]]
    ]
  },

  6: {
    question: "An hour into a tough diagnostic, you usually:",
    options: [
      ["Stay systematic and patient.", ["ServiceRepairAligned", "Disciplined"]],
      ["Push through, but feel pressure.", ["ServiceRepairAligned", "Flexible"]],
      ["Start guessing.", ["ServiceRepairMisaligned", "Flexible"]],
      ["Lose motivation.", ["ServiceRepairMisaligned", "Flexible"]]
    ]
  },

  7: {
    question: "Working without perfect information feels:",
    options: [
      ["Normal — that’s service work.", ["ServiceRepairAligned", "Disciplined"]],
      ["Manageable with checklists.", ["ServiceRepairAligned", "Flexible"]],
      ["Stressful.", ["ServiceRepairMisaligned", "Flexible"]],
      ["Unacceptable.", ["ServiceRepairMisaligned", "Flexible"]]
    ]
  },

  // INTERRUPTION & FLOW (2)

  8: {
    question: "Frequent interruptions (calls, parts runs, added tasks) usually:",
    options: [
      ["Don’t throw me off much.", ["ServiceRepairAligned", "Disciplined"]],
      ["Require systems to manage.", ["ServiceRepairAligned", "Flexible"]],
      ["Cause missed steps.", ["ServiceRepairMisaligned", "Flexible"]],
      ["Ruin my workflow.", ["ServiceRepairMisaligned", "Flexible"]]
    ]
  },

  9: {
    question: "Switching between multiple small jobs in a day feels:",
    options: [
      ["Satisfying — I like closing loops.", ["ServiceRepairAligned", "Disciplined"]],
      ["Okay with structure.", ["ServiceRepairAligned", "Flexible"]],
      ["Scattered.", ["ServiceRepairMisaligned", "Flexible"]],
      ["Exhausting.", ["ServiceRepairMisaligned", "Flexible"]]
    ]
  },

  // ERROR COST & FOLLOW-THROUGH (3)

  10: {
    question: "Service work punishes shortcuts with callbacks. You:",
    options: [
      ["Test, verify, and document.", ["ServiceRepairAligned", "Disciplined"]],
      ["Try to, but feel tempted to rush.", ["ServiceRepairAligned", "Flexible"]],
      ["Assume it’s fine if it works now.", ["ServiceRepairMisaligned", "Flexible"]],
      ["Hate work with that risk.", ["ServiceRepairMisaligned", "Flexible"]]
    ]
  },

  11: {
    question: "When you don’t have the exact part on hand, you:",
    options: [
      ["Plan the safest next step.", ["ServiceRepairAligned", "Disciplined"]],
      ["Adapt with some frustration.", ["ServiceRepairAligned", "Flexible"]],
      ["Get irritated.", ["ServiceRepairMisaligned", "Flexible"]],
      ["Dislike that uncertainty.", ["ServiceRepairMisaligned", "Flexible"]]
    ]
  },

  12: {
    question: "Cleanup, testing, and explaining the fix at the end:",
    options: [
      ["Are non-negotiable.", ["ServiceRepairAligned", "Disciplined"]],
      ["Necessary but easy to rush.", ["ServiceRepairAligned", "Flexible"]],
      ["Annoying once the fix works.", ["ServiceRepairMisaligned", "Flexible"]],
      ["Something I hate doing.", ["ServiceRepairMisaligned", "Flexible"]]
    ]
  },

  // SELF-AWARENESS (2)

  13: {
    question: "Which work rhythm feels most natural?",
    options: [
      ["Reactive calls, diagnostics, repairs.", ["ServiceRepairAligned", "Disciplined"]],
      ["A mix of service and planned work.", ["ServiceRepairAligned", "Flexible"]],
      ["Mostly installs with clear scope.", ["ServiceRepairMisaligned", "Flexible"]],
      ["Anything but reactive work.", ["ServiceRepairMisaligned", "Flexible"]]
    ]
  },

  14: {
    question: "Be honest: how strong is your pull toward service & repair specifically?",
    options: [
      ["Strong — I like diagnosing and fixing under pressure.", ["ServiceRepairAligned", "Disciplined"]],
      ["Moderate — I’m still comparing lanes.", ["ServiceRepairAligned", "Flexible"]],
      ["Low — I prefer predictable installs.", ["ServiceRepairMisaligned", "Flexible"]],
      ["Very low — this isn’t my environment.", ["ServiceRepairMisaligned", "Flexible"]]
    ]
  }
};

const tags = {
  ServiceRepairAligned: 0,
  ServiceRepairMisaligned: 0,
  Disciplined: 0,
  Flexible: 0
};

function interpretResults() {
  const aligned = tags.ServiceRepairAligned || 0;
  const misaligned = tags.ServiceRepairMisaligned || 0;
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
      "You’re built for service reality: calm diagnostics, disciplined verification, and follow-through even when the day is chaotic.";
  } else if (disciplinePct >= 40) {
    disciplineLabel =
      "You can do service & repair, but structure matters — checklists, pacing, and boundaries keep pressure from turning into shortcuts.";
  } else {
    disciplineLabel =
      "Service & repair may feel mentally irritating because it punishes rushing and demands constant decision-making under uncertainty.";
  }

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Service & Repair (${fitPct}% alignment)`;
    description = `
You’re showing strong alignment with service & repair — comfort with uncertainty, tolerance for interruptions, and the ability to diagnose and deliver clean fixes under pressure.<br><br>
<strong>Blunt truth:</strong> service work is decision-making disguised as plumbing. The people who last here don’t just “know how” — they know when to slow down while everyone wants speed. Your answers suggest you can do that.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(60, 160, 120)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Service & Repair (${fitPct}% alignment)`;
    description = `
You’ve got some traits that work in service & repair, but friction is likely without strong habits and boundaries.<br><br>
<strong>Translation:</strong> you may enjoy fixing things, but constant uncertainty, customer interaction, and decision fatigue could wear you down. Comparing this lane with residential replacement, commercial installs, or pipefitting may clarify your fit.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Service & Repair (${fitPct}% alignment)`;
    description = `
Based on your answers, service & repair will likely feel like constant friction: vague problems, interruptions, customer pressure, parts uncertainty, and the discipline required to verify everything.<br><br>
<strong>This isn’t a knock.</strong> It usually means your strengths fit better in lanes with clearer scope and more predictable workflows.
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
