// framing-quiz.js

const obj = {
  0: {
    question: "On a jobsite, when the pace speeds up, you usually:",
    options: [
      ["Lock in and stay accurate — speed doesn’t make me sloppy.", ["FramingAligned", "Disciplined"]],
      ["I can keep up, but accuracy takes extra effort.", ["FramingAligned", "Flexible"]],
      ["I start missing small details when it gets fast.", ["FramingMisaligned", "Flexible"]],
      ["I hate fast-paced pressure — it makes me careless or stressed.", ["FramingMisaligned", "Flexible"]]
    ]
  },

  1: {
    question: "Framing requires repeated layout + checking (square, plumb, level). Your reaction:",
    options: [
      ["Normal — I’d rather verify than guess.", ["FramingAligned", "Disciplined"]],
      ["I’ll do it, but I don’t enjoy it.", ["FramingAligned", "Flexible"]],
      ["I tend to eyeball unless something looks obviously wrong.", ["FramingMisaligned", "Flexible"]],
      ["That much checking would drive me nuts.", ["FramingMisaligned", "Flexible"]]
    ]
  },

  2: {
    question: "How do you feel about physical output (lifting, carrying, ladders, awkward positions) for long stretches?",
    options: [
      ["I can handle it — physical work doesn’t scare me.", ["FramingAligned", "Disciplined"]],
      ["I can do it, but recovery and pacing matter a lot.", ["FramingAligned", "Flexible"]],
      ["I can manage short bursts, but long days drain me hard.", ["FramingMisaligned", "Flexible"]],
      ["That level of physical grind is a no for me.", ["FramingMisaligned", "Flexible"]]
    ]
  },

  3: {
    question: "When materials are imperfect (warped lumber, uneven surfaces), you usually:",
    options: [
      ["Adjust and keep the build true — that’s part of the job.", ["FramingAligned", "Disciplined"]],
      ["I can work around it, but it frustrates me.", ["FramingAligned", "Flexible"]],
      ["I get annoyed and lose momentum.", ["FramingMisaligned", "Flexible"]],
      ["I hate dealing with imperfect materials/conditions.", ["FramingMisaligned", "Flexible"]]
    ]
  },

  4: {
    question: "Framing mistakes compound fast. When you notice an error early, you tend to:",
    options: [
      ["Fix it immediately so it doesn’t cascade.", ["FramingAligned", "Disciplined"]],
      ["Fix it if it’s big, but small things tempt me to move on.", ["FramingAligned", "Flexible"]],
      ["Hope it won’t matter later unless it becomes obvious.", ["FramingMisaligned", "Flexible"]],
      ["Avoid rework — it kills my motivation.", ["FramingMisaligned", "Flexible"]]
    ]
  },

  5: {
    question: "Which environment feels most natural to you?",
    options: [
      ["Active jobsite work with changing conditions.", ["FramingAligned", "Disciplined"]],
      ["Jobsite work, but I prefer structure and a clear plan.", ["FramingAligned", "Flexible"]],
      ["I prefer controlled indoor/shop environments.", ["FramingMisaligned", "Flexible"]],
      ["I don’t like jobsite environments at all.", ["FramingMisaligned", "Flexible"]]
    ]
  },

  6: {
    question: "How do you handle working at heights (ladders, roofs, scaffolding) when needed?",
    options: [
      ["Fine — I can stay calm and safe up there.", ["FramingAligned", "Disciplined"]],
      ["I can do it, but it takes focus and I’m cautious.", ["FramingAligned", "Flexible"]],
      ["I avoid it when possible — it stresses me out.", ["FramingMisaligned", "Flexible"]],
      ["Nope. Heights are a hard boundary.", ["FramingMisaligned", "Flexible"]]
    ]
  },

  7: {
    question: "Framing often means doing the same task repeatedly (nail patterns, sheathing, blocking). You:",
    options: [
      ["Can repeat clean work all day without drifting.", ["FramingAligned", "Disciplined"]],
      ["Can do repetition, but I need pace and milestones.", ["FramingAligned", "Flexible"]],
      ["Repetition drains me quickly.", ["FramingMisaligned", "Flexible"]],
      ["I avoid repetitive production work.", ["FramingMisaligned", "Flexible"]]
    ]
  },

  8: {
    question: "When tools + safety rules slow you down (PPE, setup, checks), you usually:",
    options: [
      ["Respect it — safe + consistent is the goal.", ["FramingAligned", "Disciplined"]],
      ["I follow rules, but I get impatient sometimes.", ["FramingAligned", "Flexible"]],
      ["I cut corners when no one is watching.", ["FramingMisaligned", "Flexible"]],
      ["I hate constraints — it feels like it kills the job.", ["FramingMisaligned", "Flexible"]]
    ]
  },

  9: {
    question: "If someone critiques your work structurally (layout, plumb, square), you usually:",
    options: [
      ["Prefer it — I want it correct.", ["FramingAligned", "Disciplined"]],
      ["I can take it, but it stings a bit.", ["FramingAligned", "Flexible"]],
      ["Get defensive because it feels nitpicky.", ["FramingMisaligned", "Flexible"]],
      ["Hate critique and avoid it.", ["FramingMisaligned", "Flexible"]]
    ]
  },

  10: {
    question: "Framing is ‘simple’ work done at scale. How do you feel about that?",
    options: [
      ["I like it — simple done right is real skill.", ["FramingAligned", "Disciplined"]],
      ["I can do it if the crew and pace are good.", ["FramingAligned", "Flexible"]],
      ["I get bored if the work isn’t intricate.", ["FramingMisaligned", "Flexible"]],
      ["I need detailed precision work, not production framing.", ["FramingMisaligned", "Flexible"]]
    ]
  },

  11: {
    question: "Be honest: how strong is your pull toward framing carpentry specifically?",
    options: [
      ["Strong — I’m drawn to structural work, pace, and jobsite builds.", ["FramingAligned", "Disciplined"]],
      ["Moderate — I’m curious, but not fully sure yet.", ["FramingAligned", "Flexible"]],
      ["Low — I’m more interested in other carpentry lanes.", ["FramingMisaligned", "Flexible"]],
      ["Very low — this probably isn’t my environment.", ["FramingMisaligned", "Flexible"]]
    ]
  }
};

const tags = {
  FramingAligned: 0,
  FramingMisaligned: 0,
  Disciplined: 0,
  Flexible: 0
};

function interpretResults() {
  const aligned = tags.FramingAligned || 0;
  const misaligned = tags.FramingMisaligned || 0;
  const disciplined = tags.Disciplined || 0;
  const flexible = tags.Flexible || 0;

  // Alignment axis (framing fit)
  const fitScore = aligned - misaligned; // ~ -12 .. +12
  let fitPct = Math.round(((fitScore + 12) / 24) * 100);
  fitPct = Math.max(0, Math.min(100, fitPct));

  // Discipline axis (pace + safety + consistency under fatigue)
  const disciplineScore = disciplined - flexible; // ~ -12 .. +12
  let disciplinePct = Math.round(((disciplineScore + 12) / 24) * 100);
  disciplinePct = Math.max(0, Math.min(100, disciplinePct));

  let disciplineLabel;
  if (disciplinePct >= 70) {
    disciplineLabel = "You’re built to stay controlled under pressure: safety, layout discipline, and consistency even when the pace spikes.";
  } else if (disciplinePct >= 40) {
    disciplineLabel = "You can handle framing demands, but consistency may depend on crew standards, pacing, and how fatigue hits you.";
  } else {
    disciplineLabel = "Framing may feel mentally or physically irritating because it demands steady output + checking + safety discipline when you’re tired.";
  }

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Framing Carpentry (${fitPct}% alignment)`;
    description = `
You’re showing strong alignment with framing: jobsite tolerance, physical output, and the ability to move fast without letting accuracy drift.<br><br>
<strong>Blunt truth:</strong> framing is not “just nailing wood.” It’s production + layout + safety under real conditions. Your answers suggest that pressure won’t break you.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(60, 160, 120)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Framing Carpentry (${fitPct}% alignment)`;
    description = `
You’ve got some traits that can work in framing, but not enough to assume you’ll enjoy the day-to-day without friction.<br><br>
<strong>Translation:</strong> you might do well with the right crew, pacing, and role — or you might prefer a carpentry lane with less jobsite grind or different standards.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Framing Carpentry (${fitPct}% alignment)`;
    description = `
Based on your answers, framing will probably feel like constant friction: pace pressure, physical strain, safety constraints, and repeated layout checking that doesn’t stop.<br><br>
<strong>This isn’t a personal knock.</strong> It usually means your strengths fit better in carpentry paths with different conditions — like finish work, cabinet/furniture shop work, or restoration problem-solving.
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
