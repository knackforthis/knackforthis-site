// electrical-diagnostic.js

const obj = {
  // PEOPLE, RESPONSIBILITY, PRESSURE (3)

  0: {
    question: "Electrical work carries real safety responsibility — mistakes can injure or kill. Your reaction is:",
    options: [
      ["I take that seriously and I’m comfortable carrying that responsibility.", ["ElectricalAligned", "Grit"]],
      ["I can handle it, but it adds pressure.", ["ElectricalAligned", "Comfort"]],
      ["That level of consequence makes me uneasy.", ["ElectricalMisaligned", "Comfort"]],
      ["I don’t want work where mistakes can be dangerous.", ["ElectricalMisaligned", "Comfort"]]
    ]
  },

  1: {
    question: "When someone else’s safety depends on your work being correct, you:",
    options: [
      ["Slow down and double-check without resentment.", ["ElectricalAligned", "Grit"]],
      ["Try to be careful, but feel time pressure.", ["ElectricalAligned", "Comfort"]],
      ["Get anxious and second-guess yourself.", ["ElectricalMisaligned", "Comfort"]],
      ["Would rather avoid that responsibility entirely.", ["ElectricalMisaligned", "Comfort"]]
    ]
  },

  2: {
    question: "How do you feel about being accountable even when no one sees your mistake immediately?",
    options: [
      ["That’s normal — I care about correctness, not visibility.", ["ElectricalAligned", "Grit"]],
      ["I rely on testing to catch issues.", ["ElectricalAligned", "Comfort"]],
      ["Invisible mistakes make me nervous.", ["ElectricalMisaligned", "Comfort"]],
      ["I dislike work where errors hide.", ["ElectricalMisaligned", "Comfort"]]
    ]
  },

  // TECHNICAL THINKING & LEARNING (3)

  3: {
    question: "Electrical work requires learning systems (circuits, loads, controls) over time. You:",
    options: [
      ["Like learning systems — it keeps work interesting.", ["ElectricalAligned", "Grit"]],
      ["Can learn it with step-by-step guidance.", ["ElectricalAligned", "Comfort"]],
      ["Prefer less technical learning in work.", ["ElectricalMisaligned", "Comfort"]],
      ["Strongly dislike technical systems.", ["ElectricalMisaligned", "Comfort"]]
    ]
  },

  4: {
    question: "When something doesn’t work, troubleshooting means testing and isolating causes. You:",
    options: [
      ["Enjoy proving what’s wrong.", ["ElectricalAligned", "Grit"]],
      ["Can do it, but prefer clear instructions.", ["ElectricalAligned", "Comfort"]],
      ["Get frustrated when answers aren’t obvious.", ["ElectricalMisaligned", "Comfort"]],
      ["Strongly dislike troubleshooting.", ["ElectricalMisaligned", "Comfort"]]
    ]
  },

  5: {
    question: "An hour into diagnosis with no clear answer yet, you usually:",
    options: [
      ["Stay methodical — evidence will lead somewhere.", ["ElectricalAligned", "Grit"]],
      ["Feel pressure but keep going.", ["ElectricalAligned", "Comfort"]],
      ["Start guessing to speed things up.", ["ElectricalMisaligned", "Comfort"]],
      ["Lose patience and disengage.", ["ElectricalMisaligned", "Comfort"]]
    ]
  },

  // REPETITION, DETAIL, FATIGUE (3)

  6: {
    question: "Electrical work involves repetitive precision (stripping, terminating, labeling, routing). You:",
    options: [
      ["Like clean, correct detail work.", ["ElectricalAligned", "Grit"]],
      ["Can do it, but repetition wears me down.", ["ElectricalAligned", "Comfort"]],
      ["Tend to rush details.", ["ElectricalMisaligned", "Comfort"]],
      ["Hate picky detail work.", ["ElectricalMisaligned", "Comfort"]]
    ]
  },

  7: {
    question: "When fatigue sets in, your attention to detail:",
    options: [
      ["Stays consistent.", ["ElectricalAligned", "Grit"]],
      ["Requires conscious effort.", ["ElectricalAligned", "Comfort"]],
      ["Starts slipping.", ["ElectricalMisaligned", "Comfort"]],
      ["Drops quickly.", ["ElectricalMisaligned", "Comfort"]]
    ]
  },

  8: {
    question: "Doing the same careful process over and over feels:",
    options: [
      ["Normal — consistency matters.", ["ElectricalAligned", "Grit"]],
      ["Tolerable with breaks.", ["ElectricalAligned", "Comfort"]],
      ["Mentally draining.", ["ElectricalMisaligned", "Comfort"]],
      ["Unacceptable.", ["ElectricalMisaligned", "Comfort"]]
    ]
  },

  // ENVIRONMENT, CONSTRAINTS, VERIFICATION (3)

  9: {
    question: "Electrical work often happens in tight or awkward spaces (panels, attics, lifts). You:",
    options: [
      ["Can handle it — it’s part of the job.", ["ElectricalAligned", "Grit"]],
      ["Can tolerate it sometimes.", ["ElectricalAligned", "Comfort"]],
      ["Find it stressful.", ["ElectricalMisaligned", "Comfort"]],
      ["Avoid those conditions.", ["ElectricalMisaligned", "Comfort"]]
    ]
  },

  10: {
    question: "Verification steps (testing, lockout, double-checking) feel:",
    options: [
      ["Essential — I prefer certainty.", ["ElectricalAligned", "Grit"]],
      ["Necessary but slow.", ["ElectricalAligned", "Comfort"]],
      ["Annoying.", ["ElectricalMisaligned", "Comfort"]],
      ["Something I dislike doing.", ["ElectricalMisaligned", "Comfort"]]
    ]
  },

  11: {
    question: "Working inside schedules, rules, and jobsite constraints feels:",
    options: [
      ["Normal — structure keeps things safe.", ["ElectricalAligned", "Grit"]],
      ["Manageable but draining.", ["ElectricalAligned", "Comfort"]],
      ["Restrictive.", ["ElectricalMisaligned", "Comfort"]],
      ["Unacceptable.", ["ElectricalMisaligned", "Comfort"]]
    ]
  },

  // SELF-AWARENESS & DIRECTION (3)

  12: {
    question: "Compared to other trades, electrical feels:",
    options: [
      ["Like a realistic long-term path.", ["ElectricalAligned", "Grit"]],
      ["Worth testing further.", ["ElectricalAligned", "Comfort"]],
      ["Interesting but probably not my lane.", ["ElectricalMisaligned", "Comfort"]],
      ["Not for me.", ["ElectricalMisaligned", "Comfort"]]
    ]
  },

  13: {
    question: "What would frustrate you most over years of work?",
    options: [
      ["People ignoring safety or correctness.", ["ElectricalAligned", "Grit"]],
      ["Pressure to move fast.", ["ElectricalAligned", "Comfort"]],
      ["Repetitive verification.", ["ElectricalMisaligned", "Comfort"]],
      ["Being responsible for hidden mistakes.", ["ElectricalMisaligned", "Comfort"]]
    ]
  },

  14: {
    question: "Be honest: should you keep exploring electrical paths right now?",
    options: [
      ["Yes — it fits how I think and work.", ["ElectricalAligned", "Grit"]],
      ["Maybe — I need specialization clarity.", ["ElectricalAligned", "Comfort"]],
      ["Probably not — something feels off.", ["ElectricalMisaligned", "Comfort"]],
      ["No — I should look elsewhere.", ["ElectricalMisaligned", "Comfort"]]
    ]
  }
};

const tags = {
  ElectricalAligned: 0,
  ElectricalMisaligned: 0,
  Grit: 0,
  Comfort: 0
};

function interpretResults() {
  const aligned = tags.ElectricalAligned || 0;
  const misaligned = tags.ElectricalMisaligned || 0;
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
    gritLabel = "You’re unlikely to be shocked by the responsibility, verification discipline, and cognitive load of electrical work.";
  } else if (gritPct >= 40) {
    gritLabel = "You can probably handle electrical work, but certain realities may tax you more than others.";
  } else {
    gritLabel = "The responsibility, verification demands, and hidden-error risk of electrical work may feel draining.";
  }

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Electrical (${fitPct}% alignment)`;
    description = `
You’re showing strong alignment with the core realities of electrical work: technical thinking, safety responsibility, repetition, and discipline under pressure.<br><br>
<strong>Blunt truth:</strong> this doesn’t mean every electrical lane fits — it means you’re not fighting the fundamentals.<br><br>
${gritLabel}
    `.trim();
    color = "rgb(80, 150, 170)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Electrical (${fitPct}% alignment)`;
    description = `
You’re not a clear yes or no. Some parts of electrical match you, others may create friction depending on specialization and environment.<br><br>
<strong>Translation:</strong> electrical could work, but lane choice matters more for you than for a natural fit.<br><br>
${gritLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Electrical (${fitPct}% alignment)`;
    description = `
Based on your answers, the core realities of electrical work are likely to feel like ongoing friction: safety responsibility, repetition, verification, and hidden error cost.<br><br>
<strong>This isn’t a flaw.</strong> It usually means your strengths belong elsewhere — and discovering that early saves years of quiet burnout.
    `.trim();
    color = "rgb(170, 80, 80)";
  }

  if (band === "strong") {
    $(".good-fit").show();
    $(".no-fit").hide();
    $(".result-container .good-fit").first().text("Next: explore electrical specializations:");
  } else if (band === "middle") {
    $(".good-fit").show();
    $(".no-fit").show();
    $(".result-container .good-fit").first().text("If you want clarity, compare electrical specializations:");
  } else {
    $(".good-fit").hide();
    $(".no-fit").show();
  }

  Object.keys(tags).forEach(k => tags[k] = 0);

  return { title, description, color };
}
