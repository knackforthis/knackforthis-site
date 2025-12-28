// rough-carpentry-quiz.js

const obj = {
  0: {
    question: "When the job is physically demanding for hours (lifting, carrying, awkward positions), you usually:",
    options: [
      ["Can handle it steadily — physical output doesn’t scare me.", ["RoughAligned", "Disciplined"]],
      ["I can do it, but I need pacing and recovery to stay consistent.", ["RoughAligned", "Flexible"]],
      ["I start strong, then my quality/attitude drops fast.", ["RoughMisaligned", "Flexible"]],
      ["That kind of physical grind drains me hard.", ["RoughMisaligned", "Flexible"]]
    ]
  },

  1: {
    question: "Rough carpentry often means speed + function over perfect aesthetics. Your reaction:",
    options: [
      ["Great — I like building fast as long as it’s solid and correct.", ["RoughAligned", "Disciplined"]],
      ["I can do it, but I still care about things looking clean.", ["RoughAligned", "Flexible"]],
      ["I struggle when things aren’t precise or ‘pretty.’", ["RoughMisaligned", "Flexible"]],
      ["I hate work where the standard isn’t tight and visible.", ["RoughMisaligned", "Flexible"]]
    ]
  },

  2: {
    question: "How do you handle changing conditions (weather, noise, messy jobsites, imperfect materials)?",
    options: [
      ["Normal — I adapt without spiraling.", ["RoughAligned", "Disciplined"]],
      ["I can adapt, but it wears me down over time.", ["RoughAligned", "Flexible"]],
      ["It frustrates me and I lose focus.", ["RoughMisaligned", "Flexible"]],
      ["I need clean/controlled environments to do good work.", ["RoughMisaligned", "Flexible"]]
    ]
  },

  3: {
    question: "Rough carpentry still requires layout discipline (plumb/square/level), even when moving fast. You tend to:",
    options: [
      ["Check and re-check because structure errors compound.", ["RoughAligned", "Disciplined"]],
      ["I check most of the time, but I can get sloppy when rushed.", ["RoughAligned", "Flexible"]],
      ["I rely on eyeballing more than I should.", ["RoughMisaligned", "Flexible"]],
      ["I hate checking — I just want to build.", ["RoughMisaligned", "Flexible"]]
    ]
  },

  4: {
    question: "When something is off (crooked wall, bad lumber, wrong cut), you usually:",
    options: [
      ["Fix it early so the whole build doesn’t suffer.", ["RoughAligned", "Disciplined"]],
      ["I’ll fix it, but I’m always watching the clock.", ["RoughAligned", "Flexible"]],
      ["I try to ‘make it work’ and hope it disappears later.", ["RoughMisaligned", "Flexible"]],
      ["I get frustrated and it wrecks my momentum.", ["RoughMisaligned", "Flexible"]]
    ]
  },

  5: {
    question: "Which work pace feels most natural?",
    options: [
      ["Fast, physical, production-focused — but controlled.", ["RoughAligned", "Disciplined"]],
      ["A mix: bursts of pace with some slower tasks.", ["RoughAligned", "Flexible"]],
      ["Slow and precise — I don’t like rushing.", ["RoughMisaligned", "Flexible"]],
      ["I avoid high-pressure pace entirely.", ["RoughMisaligned", "Flexible"]]
    ]
  },

  6: {
    question: "How do you feel about repetitive “build cycles” (layout → cut → assemble → set → repeat)?",
    options: [
      ["Fine — repetition is how you move volume and stay efficient.", ["RoughAligned", "Disciplined"]],
      ["Okay, but I need task variety to stay engaged.", ["RoughAligned", "Flexible"]],
      ["Repetition drains me quickly.", ["RoughMisaligned", "Flexible"]],
      ["I avoid work that feels like production loops.", ["RoughMisaligned", "Flexible"]]
    ]
  },

  7: {
    question: "Rough carpentry can mean heights, ladders, scaffolds, and real safety consequences. You:",
    options: [
      ["Take safety seriously and stay disciplined even when tired.", ["RoughAligned", "Disciplined"]],
      ["I’m careful, but fatigue can make me less consistent.", ["RoughAligned", "Flexible"]],
      ["I get careless when trying to go fast.", ["RoughMisaligned", "Flexible"]],
      ["Heights / jobsite hazards make this a poor fit for me.", ["RoughMisaligned", "Flexible"]]
    ]
  },

  8: {
    question: "When a foreman pushes production (faster pace), you usually:",
    options: [
      ["Speed up while keeping fundamentals (square, plumb, secure).", ["RoughAligned", "Disciplined"]],
      ["I can speed up, but quality can drift if pressure stays high.", ["RoughAligned", "Flexible"]],
      ["I rush and mistakes multiply.", ["RoughMisaligned", "Flexible"]],
      ["Pressure to go fast makes me shut down.", ["RoughMisaligned", "Flexible"]]
    ]
  },

  9: {
    question: "How do you feel about tool-heavy work (saws, nailers, compressors, impact drivers) all day?",
    options: [
      ["Comfortable — tools feel like extensions of the workflow.", ["RoughAligned", "Disciplined"]],
      ["Willing, but I prefer a calmer pace with less constant noise.", ["RoughAligned", "Flexible"]],
      ["I’m not confident with fast tool workflows.", ["RoughMisaligned", "Flexible"]],
      ["I’d rather avoid that environment altogether.", ["RoughMisaligned", "Flexible"]]
    ]
  },

  10: {
    question: "Rough work often means your work gets covered (drywall, siding). That feels:",
    options: [
      ["Fine — I’m proud if it’s solid even if nobody sees it.", ["RoughAligned", "Disciplined"]],
      ["Okay, but I do like some visible ‘finished’ payoff.", ["RoughAligned", "Flexible"]],
      ["Demotivating — I want my work to look impressive.", ["RoughMisaligned", "Flexible"]],
      ["Pointless — I need the end result to be visible and polished.", ["RoughMisaligned", "Flexible"]]
    ]
  },

  11: {
    question: "Be honest: how strong is your pull toward rough carpentry specifically?",
    options: [
      ["Strong — I like pace, physical building, and structural reality.", ["RoughAligned", "Disciplined"]],
      ["Moderate — I’m curious, but not fully sure.", ["RoughAligned", "Flexible"]],
      ["Low — I’m more interested in finish/cabinets/other paths.", ["RoughMisaligned", "Flexible"]],
      ["Very low — this probably isn’t my environment.", ["RoughMisaligned", "Flexible"]]
    ]
  }
};

const tags = {
  RoughAligned: 0,
  RoughMisaligned: 0,
  Disciplined: 0,
  Flexible: 0
};

function interpretResults() {
  const aligned = tags.RoughAligned || 0;
  const misaligned = tags.RoughMisaligned || 0;
  const disciplined = tags.Disciplined || 0;
  const flexible = tags.Flexible || 0;

  // Alignment axis (rough fit)
  const fitScore = aligned - misaligned; // ~ -12 .. +12
  let fitPct = Math.round(((fitScore + 12) / 24) * 100);
  fitPct = Math.max(0, Math.min(100, fitPct));

  // Discipline axis (pace control + safety + checking)
  const disciplineScore = disciplined - flexible; // ~ -12 .. +12
  let disciplinePct = Math.round(((disciplineScore + 12) / 24) * 100);
  disciplinePct = Math.max(0, Math.min(100, disciplinePct));

  let disciplineLabel;
  if (disciplinePct >= 70) disciplineLabel = "You can run at production pace without losing safety and layout fundamentals.";
  else if (disciplinePct >= 40) disciplineLabel = "You can do rough work, but consistency may depend on pace, crew standards, and fatigue management.";
  else disciplineLabel = "Rough carpentry may feel chaotic because it demands steady discipline under pressure, noise, and fatigue.";

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Rough Carpentry (${fitPct}% alignment)`;
    description = `
You’re showing strong alignment with rough carpentry — physical tolerance, jobsite adaptability, and comfort with “fast but correct” structural work.<br><br>
<strong>Blunt truth:</strong> rough carpentry isn’t glamorous and it isn’t gentle. But your answers suggest the grind + pace won’t break you.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(60, 160, 120)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Rough Carpentry (${fitPct}% alignment)`;
    description = `
You’ve got some traits that work in rough carpentry, but there may be friction with pace, environment, or the physical grind.<br><br>
<strong>Translation:</strong> you might do well with the right crew and pacing — or you might prefer a carpentry lane with cleaner conditions or tighter visible standards.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Rough Carpentry (${fitPct}% alignment)`;
    description = `
Based on your answers, rough carpentry will probably feel like constant friction: physical strain, noisy jobsites, messy conditions, and pressure to move fast without losing accuracy.<br><br>
<strong>This isn’t a personal knock.</strong> It usually means your strengths fit better in a different carpentry environment (finish, cabinets, furniture) or another trade with different demands.
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
