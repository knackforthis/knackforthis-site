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
    question: "Framing requires repeated layout and checking (square, plumb, level). Your reaction:",
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
      ["I hate dealing with imperfect materials and conditions.", ["FramingMisaligned", "Flexible"]]
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
      ["Controlled indoor or shop environments.", ["FramingMisaligned", "Flexible"]],
      ["I don’t like jobsite environments at all.", ["FramingMisaligned", "Flexible"]]
    ]
  },

  6: {
    question: "How do you handle working at heights (ladders, roofs, scaffolding) when needed?",
    options: [
      ["Fine — I can stay calm and safe up there.", ["FramingAligned", "Disciplined"]],
      ["I can do it, but I’m cautious and focused.", ["FramingAligned", "Flexible"]],
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
    question: "When tools and safety rules slow you down (PPE, setup, checks), you usually:",
    options: [
      ["Respect it — safe and consistent is the goal.", ["FramingAligned", "Disciplined"]],
      ["I follow rules, but I get impatient sometimes.", ["FramingAligned", "Flexible"]],
      ["I cut corners when no one is watching.", ["FramingMisaligned", "Flexible"]],
      ["I hate constraints — it feels like they kill the job.", ["FramingMisaligned", "Flexible"]]
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
    question: "Framing is often called “simple work done at scale.” Your reaction:",
    options: [
      ["I respect it — simple done right is real skill.", ["FramingAligned", "Disciplined"]],
      ["I can do it if the crew and pace are good.", ["FramingAligned", "Flexible"]],
      ["I get bored if the work isn’t intricate.", ["FramingMisaligned", "Flexible"]],
      ["I need detail-heavy work, not production framing.", ["FramingMisaligned", "Flexible"]]
    ]
  },

  // ---- HUMAN FRICTION / ATTRITION LAYER ----

  11: {
    question: "Framing crews often have blunt communication and direct correction. You:",
    options: [
      ["Handle it fine — clarity matters more than tone.", ["FramingAligned", "Disciplined"]],
      ["Can deal with it, but it wears on me.", ["FramingAligned", "Flexible"]],
      ["Get irritated by rough communication.", ["FramingMisaligned", "Flexible"]],
      ["Strongly dislike blunt or aggressive supervision.", ["FramingMisaligned", "Flexible"]]
    ]
  },

  12: {
    question: "If weather, delays, or missing materials disrupt the plan, you:",
    options: [
      ["Adapt and keep moving — that’s jobsite reality.", ["FramingAligned", "Disciplined"]],
      ["Adapt, but it adds stress.", ["FramingAligned", "Flexible"]],
      ["Get frustrated and lose focus.", ["FramingMisaligned", "Flexible"]],
      ["Hate unpredictable conditions.", ["FramingMisaligned", "Flexible"]]
    ]
  },

  13: {
    question: "When you’re physically tired but still expected to stay accurate and safe, you:",
    options: [
      ["Slow down and protect quality and safety.", ["FramingAligned", "Disciplined"]],
      ["Push through, but mistakes are more likely.", ["FramingAligned", "Flexible"]],
      ["Rely on momentum more than checking.", ["FramingMisaligned", "Flexible"]],
      ["Feel mentally done before the day is over.", ["FramingMisaligned", "Flexible"]]
    ]
  },

  14: {
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
  const fitScore = aligned - misaligned; // ~ -15 .. +15
  let fitPct = Math.round(((fitScore + 15) / 30) * 100);
  fitPct = Math.max(0, Math.min(100, fitPct));

  // Discipline axis (pace + safety + fatigue control)
  const disciplineScore = disciplined - flexible; // ~ -15 .. +15
  let disciplinePct = Math.round(((disciplineScore + 15) / 30) * 100);
  disciplinePct = Math.max(0, Math.min(100, disciplinePct));

  let disciplineLabel;
  if (disciplinePct >= 70) {
    disciplineLabel = "You’re built to stay controlled under pressure: safety, layout discipline, and accuracy even when tired.";
  } else if (disciplinePct >= 40) {
    disciplineLabel = "You can handle framing demands, but consistency will depend on crew standards, pacing, and recovery.";
  } else {
    disciplineLabel = "Framing may feel mentally or physically draining due to fatigue, safety pressure, and constant checking.";
  }

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Framing Carpentry (${fitPct}% alignment)`;
    description = `
You’re showing strong alignment with framing — jobsite tolerance, physical output, and the ability to move fast without letting accuracy drift.<br><br>
<strong>Blunt truth:</strong> framing is production under pressure, not chaos. Your answers suggest that environment won’t break you.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(60, 160, 120)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Framing Carpentry (${fitPct}% alignment)`;
    description = `
You have some traits that work in framing, but friction is likely under the wrong crew or conditions.<br><br>
<strong>Translation:</strong> the people and pace will matter as much as the work itself.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Framing Carpentry (${fitPct}% alignment)`;
    description = `
Framing will likely feel like constant friction — pace pressure, physical fatigue, blunt supervision, and safety demands that never stop.<br><br>
<strong>This isn’t a personal knock.</strong> It usually means your strengths fit better in a different carpentry lane or trade entirely.
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
