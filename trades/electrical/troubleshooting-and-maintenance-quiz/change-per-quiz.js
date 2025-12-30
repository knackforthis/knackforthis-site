// troubleshooting-and-maintenance-quiz.js

const obj = {
  0: {
    question: "Troubleshooting work usually starts with something broken and incomplete information. You usually:",
    options: [
      ["Like figuring things out from symptoms and clues.", ["TroubleshootingAligned", "Disciplined"]],
      ["Can do it, but I prefer some guidance or history.", ["TroubleshootingAligned", "Flexible"]],
      ["Feel stressed when problems aren’t clearly defined.", ["TroubleshootingMisaligned", "Flexible"]],
      ["Strongly dislike open-ended problem solving.", ["TroubleshootingMisaligned", "Flexible"]]
    ]
  },

  1: {
    question: "How do you feel about methodical testing (meters, isolation, step-by-step checks)?",
    options: [
      ["That’s how problems actually get solved.", ["TroubleshootingAligned", "Disciplined"]],
      ["I’ll do it, but I sometimes want faster answers.", ["TroubleshootingAligned", "Flexible"]],
      ["I get impatient testing things one step at a time.", ["TroubleshootingMisaligned", "Flexible"]],
      ["I prefer trial-and-error over structured testing.", ["TroubleshootingMisaligned", "Flexible"]]
    ]
  },

  2: {
    question: "Maintenance work often means preventing failures, not creating something new. Your reaction:",
    options: [
      ["I like keeping systems reliable and stable.", ["TroubleshootingAligned", "Disciplined"]],
      ["I’m okay with it, but I prefer new installs.", ["TroubleshootingAligned", "Flexible"]],
      ["I get bored maintaining existing systems.", ["TroubleshootingMisaligned", "Flexible"]],
      ["I strongly prefer building new things only.", ["TroubleshootingMisaligned", "Flexible"]]
    ]
  },

  3: {
    question: "When a fix doesn’t work the first time, you:",
    options: [
      ["Re-check assumptions and keep narrowing it down.", ["TroubleshootingAligned", "Disciplined"]],
      ["Try again with a different approach.", ["TroubleshootingAligned", "Flexible"]],
      ["Get frustrated and lose momentum.", ["TroubleshootingMisaligned", "Flexible"]],
      ["Feel discouraged and want to move on.", ["TroubleshootingMisaligned", "Flexible"]]
    ]
  },

  4: {
    question: "Troubleshooting often means working alone with responsibility for the outcome. You:",
    options: [
      ["Like owning the diagnosis and solution.", ["TroubleshootingAligned", "Disciplined"]],
      ["Can do it, but I like backup available.", ["TroubleshootingAligned", "Flexible"]],
      ["Feel uneasy when responsibility rests on me.", ["TroubleshootingMisaligned", "Flexible"]],
      ["Avoid work where I’m solely responsible.", ["TroubleshootingMisaligned", "Flexible"]]
    ]
  },

  5: {
    question: "How do you feel about documentation (notes, service logs, explaining what failed and why)?",
    options: [
      ["It matters — it helps the next person.", ["TroubleshootingAligned", "Disciplined"]],
      ["I can do it, but it feels tedious.", ["TroubleshootingAligned", "Flexible"]],
      ["I often skip documentation if I can.", ["TroubleshootingMisaligned", "Flexible"]],
      ["I strongly dislike documenting work.", ["TroubleshootingMisaligned", "Flexible"]]
    ]
  },

  6: {
    question: "When systems behave intermittently or inconsistently, you:",
    options: [
      ["Stay patient and wait for patterns.", ["TroubleshootingAligned", "Disciplined"]],
      ["Keep testing, but it can wear on me.", ["TroubleshootingAligned", "Flexible"]],
      ["Get irritated when issues aren’t repeatable.", ["TroubleshootingMisaligned", "Flexible"]],
      ["Hate chasing problems that come and go.", ["TroubleshootingMisaligned", "Flexible"]]
    ]
  },

  7: {
    question: "Troubleshooting often involves revisiting the same system multiple times. You:",
    options: [
      ["Accept it — reliability takes follow-up.", ["TroubleshootingAligned", "Disciplined"]],
      ["I can do it, but I’d prefer fewer callbacks.", ["TroubleshootingAligned", "Flexible"]],
      ["Callbacks feel like failure to me.", ["TroubleshootingMisaligned", "Flexible"]],
      ["I avoid work where callbacks are common.", ["TroubleshootingMisaligned", "Flexible"]]
    ]
  },

  8: {
    question: "How do you handle pressure when equipment downtime matters?",
    options: [
      ["Stay calm and work the process.", ["TroubleshootingAligned", "Disciplined"]],
      ["Feel pressure but can still function.", ["TroubleshootingAligned", "Flexible"]],
      ["Rush and make mistakes under pressure.", ["TroubleshootingMisaligned", "Flexible"]],
      ["Strongly dislike pressure-driven environments.", ["TroubleshootingMisaligned", "Flexible"]]
    ]
  },

  9: {
    question: "Maintenance schedules, inspections, and checklists are part of the job. You:",
    options: [
      ["Like systems that prevent problems.", ["TroubleshootingAligned", "Disciplined"]],
      ["Can follow them, but I don’t love routine.", ["TroubleshootingAligned", "Flexible"]],
      ["Find routine maintenance boring.", ["TroubleshootingMisaligned", "Flexible"]],
      ["Avoid routine and repetitive work.", ["TroubleshootingMisaligned", "Flexible"]]
    ]
  },

  // ---- ATTRITION & PEOPLE REALITY QUESTIONS ----

  10: {
    question: "When things are working smoothly because of your work and nobody notices, you:",
    options: [
      ["Feel fine — preventing failure is the win.", ["TroubleshootingAligned", "Disciplined"]],
      ["Accept it, but occasionally wish it were acknowledged.", ["TroubleshootingAligned", "Flexible"]],
      ["Feel undervalued or overlooked.", ["TroubleshootingMisaligned", "Flexible"]],
      ["Lose motivation quickly without recognition.", ["TroubleshootingMisaligned", "Flexible"]]
    ]
  },

  11: {
    question: "When a failure is caused by poor design or past shortcuts but you’re still expected to fix it, you:",
    options: [
      ["Treat it as part of the job and focus on resolution.", ["TroubleshootingAligned", "Disciplined"]],
      ["Handle it, but it builds resentment over time.", ["TroubleshootingAligned", "Flexible"]],
      ["Feel blamed for problems you didn’t create.", ["TroubleshootingMisaligned", "Flexible"]],
      ["Strongly dislike inheriting other people’s messes.", ["TroubleshootingMisaligned", "Flexible"]]
    ]
  },

  12: {
    question: "Over long periods with few visible wins, your motivation tends to:",
    options: [
      ["Stay steady — reliability itself is meaningful.", ["TroubleshootingAligned", "Disciplined"]],
      ["Dip sometimes, but recover with structure.", ["TroubleshootingAligned", "Flexible"]],
      ["Gradually erode without novelty or praise.", ["TroubleshootingMisaligned", "Flexible"]],
      ["Collapse if the work feels invisible.", ["TroubleshootingMisaligned", "Flexible"]]
    ]
  },

  13: {
    question: "Which work style feels most natural?",
    options: [
      ["Diagnose, stabilize, and quietly keep systems running.", ["TroubleshootingAligned", "Disciplined"]],
      ["A mix of troubleshooting and new installs.", ["TroubleshootingAligned", "Flexible"]],
      ["Mostly new installs with clear endpoints.", ["TroubleshootingMisaligned", "Flexible"]],
      ["Anything but troubleshooting-focused work.", ["TroubleshootingMisaligned", "Flexible"]]
    ]
  },

  14: {
    question: "Be honest: how strong is your pull toward troubleshooting and maintenance work?",
    options: [
      ["Strong — I like solving problems and keeping things running.", ["TroubleshootingAligned", "Disciplined"]],
      ["Moderate — I’m curious but unsure long-term.", ["TroubleshootingAligned", "Flexible"]],
      ["Low — I prefer other electrical paths.", ["TroubleshootingMisaligned", "Flexible"]],
      ["Very low — this probably isn’t for me.", ["TroubleshootingMisaligned", "Flexible"]]
    ]
  }
};

const tags = {
  TroubleshootingAligned: 0,
  TroubleshootingMisaligned: 0,
  Disciplined: 0,
  Flexible: 0
};

function interpretResults() {
  const aligned = tags.TroubleshootingAligned || 0;
  const misaligned = tags.TroubleshootingMisaligned || 0;
  const disciplined = tags.Disciplined || 0;
  const flexible = tags.Flexible || 0;

  // Alignment axis (15 questions)
  const fitScore = aligned - misaligned; // ~ -15 .. +15
  let fitPct = Math.round(((fitScore + 15) / 30) * 100);
  fitPct = Math.max(0, Math.min(100, fitPct));

  // Discipline axis (patience + follow-through + attrition tolerance)
  const disciplineScore = disciplined - flexible; // ~ -15 .. +15
  let disciplinePct = Math.round(((disciplineScore + 15) / 30) * 100);
  disciplinePct = Math.max(0, Math.min(100, disciplinePct));

  let disciplineLabel;
  if (disciplinePct >= 70)
    disciplineLabel = "You’re built for long-haul reliability work — patience, ownership, and low need for external validation.";
  else if (disciplinePct >= 40)
    disciplineLabel = "You can do troubleshooting work, but attrition will depend on structure, recognition, and workload balance.";
  else
    disciplineLabel = "Troubleshooting may grind you down over time because wins are invisible, blame is common, and progress is slow.";

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Troubleshooting & Maintenance (${fitPct}% alignment)`;
    description = `
You’re showing strong alignment with troubleshooting and maintenance — not just problem-solving ability, but tolerance for invisibility, responsibility, and long-term reliability work.<br><br>
<strong>Blunt truth:</strong> this lane doesn’t reward ego. It rewards people who can keep systems alive quietly while others forget they exist.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(80, 150, 170)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Troubleshooting & Maintenance (${fitPct}% alignment)`;
    description = `
You have some traits that work here, but attrition risks are real for you.<br><br>
<strong>Translation:</strong> you may do better in a hybrid role — troubleshooting plus installs, projects, or visible wins — rather than pure maintenance.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Troubleshooting & Maintenance (${fitPct}% alignment)`;
    description = `
Based on your answers, troubleshooting-focused work will likely feel like slow erosion: invisible wins, inherited blame, and delayed payoff.<br><br>
<strong>This isn’t a personal knock.</strong> It usually means you’ll thrive more in install-focused or project-based work with clearer closure.
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
