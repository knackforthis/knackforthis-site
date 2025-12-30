const obj = {
  0: {
    question: "When the job is physically demanding for hours (lifting, carrying, awkward positions), you usually:",
    options: [
      ["Can handle it steadily — physical output doesn’t scare me.", ["RoughAligned", "Disciplined"]],
      ["I can do it, but I need pacing and recovery to stay consistent.", ["RoughAligned", "Flexible"]],
      ["I start strong, then my quality or attitude drops fast.", ["RoughMisaligned", "Flexible"]],
      ["That kind of physical grind drains me hard.", ["RoughMisaligned", "Flexible"]]
    ]
  },

  1: {
    question: "Rough carpentry often means speed and function over perfect aesthetics. Your reaction:",
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
      ["I need clean, controlled environments to do good work.", ["RoughMisaligned", "Flexible"]]
    ]
  },

  3: {
    question: "Rough carpentry still requires layout discipline (plumb, square, level) even when moving fast. You tend to:",
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
    question: "How do you feel about repetitive build cycles (layout → cut → assemble → set → repeat)?",
    options: [
      ["Fine — repetition is how you move volume efficiently.", ["RoughAligned", "Disciplined"]],
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
      ["Heights or jobsite hazards make this a poor fit for me.", ["RoughMisaligned", "Flexible"]]
    ]
  },

  8: {
    question: "When a foreman pushes production harder, you usually:",
    options: [
      ["Speed up while protecting layout and safety basics.", ["RoughAligned", "Disciplined"]],
      ["I can speed up, but quality drifts if pressure stays high.", ["RoughAligned", "Flexible"]],
      ["I rush and mistakes multiply.", ["RoughMisaligned", "Flexible"]],
      ["Pressure to go fast makes me shut down.", ["RoughMisaligned", "Flexible"]]
    ]
  },

  9: {
    question: "How do you feel about tool-heavy, noisy work (saws, nailers, compressors) all day?",
    options: [
      ["Comfortable — tools feel like extensions of the workflow.", ["RoughAligned", "Disciplined"]],
      ["Willing, but the constant noise wears on me.", ["RoughAligned", "Flexible"]],
      ["I’m not confident with fast tool workflows.", ["RoughMisaligned", "Flexible"]],
      ["I’d rather avoid that environment entirely.", ["RoughMisaligned", "Flexible"]]
    ]
  },

  10: {
    question: "Rough work often gets covered (drywall, siding, roofing). That feels:",
    options: [
      ["Fine — I care that it’s solid, not visible.", ["RoughAligned", "Disciplined"]],
      ["Okay, but I like some visible payoff.", ["RoughAligned", "Flexible"]],
      ["Demotivating — I want my work to look impressive.", ["RoughMisaligned", "Flexible"]],
      ["Pointless — I need finished results to stay engaged.", ["RoughMisaligned", "Flexible"]]
    ]
  },

  // ---- HUMAN FRICTION / ATTRITION LAYER ----

  11: {
    question: "Rough crews often communicate bluntly and correct mistakes fast. You:",
    options: [
      ["Handle it fine — clarity matters more than tone.", ["RoughAligned", "Disciplined"]],
      ["Can deal with it, but it wears on me.", ["RoughAligned", "Flexible"]],
      ["Get irritated by rough communication.", ["RoughMisaligned", "Flexible"]],
      ["Strongly dislike blunt or aggressive supervision.", ["RoughMisaligned", "Flexible"]]
    ]
  },

  12: {
    question: "Weather delays, early mornings, and schedule shifts are common. You:",
    options: [
      ["Adapt and keep showing up consistently.", ["RoughAligned", "Disciplined"]],
      ["Handle it, but it affects my energy.", ["RoughAligned", "Flexible"]],
      ["Find it disruptive and demoralizing.", ["RoughMisaligned", "Flexible"]],
      ["Hate unpredictable schedules.", ["RoughMisaligned", "Flexible"]]
    ]
  },

  13: {
    question: "When you’re exhausted but the work still needs to be accurate and safe, you:",
    options: [
      ["Slow down and protect fundamentals.", ["RoughAligned", "Disciplined"]],
      ["Push through, but mistakes creep in.", ["RoughAligned", "Flexible"]],
      ["Rely on momentum more than checking.", ["RoughMisaligned", "Flexible"]],
      ["Feel mentally done before the day ends.", ["RoughMisaligned", "Flexible"]]
    ]
  },

  14: {
    question: "Be honest: how strong is your pull toward rough carpentry specifically?",
    options: [
      ["Strong — I like pace, physical building, and structural reality.", ["RoughAligned", "Disciplined"]],
      ["Moderate — I’m curious, but not fully sure.", ["RoughAligned", "Flexible"]],
      ["Low — I’m more interested in finish, cabinets, or furniture.", ["RoughMisaligned", "Flexible"]],
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
  const fitScore = aligned - misaligned; // ~ -15 .. +15
  let fitPct = Math.round(((fitScore + 15) / 30) * 100);
  fitPct = Math.max(0, Math.min(100, fitPct));

  // Discipline axis (pace control + safety + fatigue management)
  const disciplineScore = disciplined - flexible; // ~ -15 .. +15
  let disciplinePct = Math.round(((disciplineScore + 15) / 30) * 100);
  disciplinePct = Math.max(0, Math.min(100, disciplinePct));

  let disciplineLabel;
  if (disciplinePct >= 70)
    disciplineLabel = "You can maintain production pace without sacrificing safety, layout discipline, or judgment.";
  else if (disciplinePct >= 40)
    disciplineLabel = "You can do rough work, but consistency will depend on crew standards, fatigue, and pace control.";
  else
    disciplineLabel = "Rough carpentry may feel chaotic because it demands discipline under noise, pressure, and physical exhaustion.";

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Rough Carpentry (${fitPct}% alignment)`;
    description = `
You’re showing strong alignment with rough carpentry — physical tolerance, jobsite adaptability, and comfort with fast-but-correct structural work.<br><br>
<strong>Blunt truth:</strong> rough carpentry is loud, physical, and rarely praised. Your answers suggest the grind won’t break you.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(60, 160, 120)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Rough Carpentry (${fitPct}% alignment)`;
    description = `
You have some traits that work in rough carpentry, but friction is likely depending on crew, pace, and physical demands.<br><br>
<strong>Translation:</strong> the people and schedule may matter as much as the work itself.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Rough Carpentry (${fitPct}% alignment)`;
    description = `
Rough carpentry will likely feel like constant friction — physical strain, noise, messy conditions, blunt supervision, and pressure to move fast.<br><br>
<strong>This isn’t a personal knock.</strong> It usually means your strengths fit better in cleaner, slower, or more precision-driven carpentry paths.
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

  Object.keys(tags).forEach(k => tags[k] = 0);

  return { title, description, color };
}
