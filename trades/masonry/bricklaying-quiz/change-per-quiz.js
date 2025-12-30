const obj = {
  0: {
    question: "Bricklaying is repetitive and methodical: spread mortar, set brick, tap to line, check level, repeat. You mostly:",
    options: [
      ["Like that — repetition plus visible progress is satisfying.", ["BricklayingAligned", "Disciplined"]],
      ["I can do it if the pace stays steady and goals are clear.", ["BricklayingAligned", "Flexible"]],
      ["Repetition drains me fast unless it feels creative.", ["BricklayingMisaligned", "Flexible"]],
      ["That sounds like misery — I need variety all day.", ["BricklayingMisaligned", "Flexible"]]
    ]
  },

  1: {
    question: "How do you feel about working outdoors in heat, cold, or wind with real physical exertion?",
    options: [
      ["Fine — I can operate in weather and keep quality steady.", ["BricklayingAligned", "Disciplined"]],
      ["I can handle it, but weather affects my mood or pace.", ["BricklayingAligned", "Flexible"]],
      ["I struggle to work well when conditions are rough.", ["BricklayingMisaligned", "Flexible"]],
      ["Outdoor weather work is basically a dealbreaker.", ["BricklayingMisaligned", "Flexible"]]
    ]
  },

  2: {
    question: "Brick work depends on small accuracy: plumb, level, line, consistent joints. Your reaction:",
    options: [
      ["That’s appealing — I like tight alignment and clean lines.", ["BricklayingAligned", "Disciplined"]],
      ["I can be accurate, but nonstop precision wears on me.", ["BricklayingAligned", "Flexible"]],
      ["Tiny alignment checks feel annoying and slow.", ["BricklayingMisaligned", "Flexible"]],
      ["I’m not built for that level of consistency.", ["BricklayingMisaligned", "Flexible"]]
    ]
  },

  3: {
    question: "Mortar timing matters (mix, hydration, temperature, workability). You:",
    options: [
      ["Enjoy it — material behavior is part of the craft.", ["BricklayingAligned", "Disciplined"]],
      ["I can learn it if routines stay consistent.", ["BricklayingAligned", "Flexible"]],
      ["I hate when materials change and force adjustments.", ["BricklayingMisaligned", "Flexible"]],
      ["Finicky materials kill my patience fast.", ["BricklayingMisaligned", "Flexible"]]
    ]
  },

  4: {
    question: "A wall starts drifting off line slightly. What do you do?",
    options: [
      ["Fix it early — small errors become big failures.", ["BricklayingAligned", "Disciplined"]],
      ["Fix it if noticeable; otherwise keep moving.", ["BricklayingAligned", "Flexible"]],
      ["Push through — it’ll probably be fine.", ["BricklayingMisaligned", "Flexible"]],
      ["Get irritated and rush, which usually makes it worse.", ["BricklayingMisaligned", "Flexible"]]
    ]
  },

  5: {
    question: "Bricklaying is physically demanding: lifting, bending, kneeling, standing for hours. You:",
    options: [
      ["Can handle that — stamina and grind don’t scare me.", ["BricklayingAligned", "Disciplined"]],
      ["I can do it if I pace and protect my body.", ["BricklayingAligned", "Flexible"]],
      ["That level of physical output would burn me out.", ["BricklayingMisaligned", "Flexible"]],
      ["I’m not interested in a trade that physical.", ["BricklayingMisaligned", "Flexible"]]
    ]
  },

  6: {
    question: "How do you feel about strict visual standards (even joints, clean edges, neat finish)?",
    options: [
      ["I like it — clean work is the point.", ["BricklayingAligned", "Disciplined"]],
      ["I can meet standards, but perfection pressure adds stress.", ["BricklayingAligned", "Flexible"]],
      ["If it holds, I don’t care how it looks.", ["BricklayingMisaligned", "Flexible"]],
      ["Cosmetic expectations annoy me.", ["BricklayingMisaligned", "Flexible"]]
    ]
  },

  7: {
    question: "A lot of bricklaying is prep: layout lines, staging brick, scaffolding, mixing. You:",
    options: [
      ["Accept it — prep is what makes production smooth.", ["BricklayingAligned", "Disciplined"]],
      ["I’ll do it, but I get impatient without momentum.", ["BricklayingAligned", "Flexible"]],
      ["I try to skip prep and start laying.", ["BricklayingMisaligned", "Flexible"]],
      ["I hate setup work and avoid it.", ["BricklayingMisaligned", "Flexible"]]
    ]
  },

  8: {
    question: "Bricklaying often means matching pace and standards with a crew. You:",
    options: [
      ["Work well in shared rhythm and consistency.", ["BricklayingAligned", "Disciplined"]],
      ["I can work with a crew if roles are clear.", ["BricklayingAligned", "Flexible"]],
      ["I dislike synchronized pacing — I want independence.", ["BricklayingMisaligned", "Flexible"]],
      ["Crew-based production stresses me out.", ["BricklayingMisaligned", "Flexible"]]
    ]
  },

  9: {
    question: "On slow days (weather delays, mortar issues, layout problems), you:",
    options: [
      ["Stay calm — I’d rather be right than fast.", ["BricklayingAligned", "Disciplined"]],
      ["Handle it if I understand the plan.", ["BricklayingAligned", "Flexible"]],
      ["Get frustrated and start forcing speed.", ["BricklayingMisaligned", "Flexible"]],
      ["Spiral when progress slows too much.", ["BricklayingMisaligned", "Flexible"]]
    ]
  },

  10: {
    question: "Brick work is highly visible and mistakes stay forever. That feels:",
    options: [
      ["Fine — accountability keeps standards high.", ["BricklayingAligned", "Disciplined"]],
      ["Okay, but it adds pressure.", ["BricklayingAligned", "Flexible"]],
      ["Stressful — I hate permanent mistakes.", ["BricklayingMisaligned", "Flexible"]],
      ["Unacceptable — I don’t want that pressure.", ["BricklayingMisaligned", "Flexible"]]
    ]
  },

  // ---- HUMAN FRICTION / ATTRITION LAYER ----

  11: {
    question: "Foremen may push production while expecting straight lines and clean joints. You:",
    options: [
      ["Balance pace and accuracy without panicking.", ["BricklayingAligned", "Disciplined"]],
      ["Can manage it, but pressure builds over time.", ["BricklayingAligned", "Flexible"]],
      ["Rush and accuracy slips.", ["BricklayingMisaligned", "Flexible"]],
      ["Shut down when speed and quality conflict.", ["BricklayingMisaligned", "Flexible"]]
    ]
  },

  12: {
    question: "Bricklaying offers pride, but rarely praise — walls are expected to be right. You:",
    options: [
      ["Take quiet pride in solid work.", ["BricklayingAligned", "Disciplined"]],
      ["Like some recognition, but can manage without it.", ["BricklayingAligned", "Flexible"]],
      ["Feel demotivated without visible appreciation.", ["BricklayingMisaligned", "Flexible"]],
      ["Need frequent validation to stay engaged.", ["BricklayingMisaligned", "Flexible"]]
    ]
  },

  13: {
    question: "When fatigue sets in late in the day, but joints still need to stay tight, you:",
    options: [
      ["Slow down and protect accuracy.", ["BricklayingAligned", "Disciplined"]],
      ["Push through, but precision drops.", ["BricklayingAligned", "Flexible"]],
      ["Rely on momentum more than checking.", ["BricklayingMisaligned", "Flexible"]],
      ["Feel mentally done before the wall is done.", ["BricklayingMisaligned", "Flexible"]]
    ]
  },

  14: {
    question: "Be honest: does the idea of laying straight, clean brick day after day feel satisfying?",
    options: [
      ["Yes — that kind of steady craft is exactly what I want.", ["BricklayingAligned", "Disciplined"]],
      ["Somewhat — I’m interested but unsure about the grind.", ["BricklayingAligned", "Flexible"]],
      ["Not really — I want more variety or creativity.", ["BricklayingMisaligned", "Flexible"]],
      ["No — this isn’t my kind of work environment.", ["BricklayingMisaligned", "Flexible"]]
    ]
  }
};

const tags = {
  BricklayingAligned: 0,
  BricklayingMisaligned: 0,
  Disciplined: 0,
  Flexible: 0
};

function interpretResults() {
  const aligned = tags.BricklayingAligned || 0;
  const misaligned = tags.BricklayingMisaligned || 0;
  const disciplined = tags.Disciplined || 0;
  const flexible = tags.Flexible || 0;

  // Alignment axis (bricklaying fit)
  const fitScore = aligned - misaligned; // ~ -15 .. +15
  let fitPct = Math.round(((fitScore + 15) / 30) * 100);
  fitPct = Math.max(0, Math.min(100, fitPct));

  // Discipline axis (repetition + accuracy + stamina)
  const disciplineScore = disciplined - flexible; // ~ -15 .. +15
  let disciplinePct = Math.round(((disciplineScore + 15) / 30) * 100);
  disciplinePct = Math.max(0, Math.min(100, disciplinePct));

  let disciplineLabel;
  if (disciplinePct >= 70)
    disciplineLabel = "You’re built for bricklaying’s core reality: repetitive accuracy, physical stamina, and fixing small issues before they compound.";
  else if (disciplinePct >= 40)
    disciplineLabel = "You can do bricklaying, but consistency will depend on pace control, crew standards, and fatigue management.";
  else
    disciplineLabel = "Bricklaying may feel exhausting because it demands physical stamina, precision, and patience without much novelty.";

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Bricklaying (${fitPct}% alignment)`;
    description = `
You’re showing strong alignment with bricklaying — repetition tolerance, physical stamina, and comfort with visible accuracy standards.<br><br>
<strong>Blunt truth:</strong> bricklaying is weather-exposed, physically demanding, and unforgiving of sloppiness. Your answers suggest that reality won’t break you.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(60, 160, 120)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Bricklaying (${fitPct}% alignment)`;
    description = `
You’ve got some traits that could work in bricklaying, but friction is likely without the right crew, pacing, and expectations.<br><br>
<strong>Translation:</strong> repetition and physical grind may wear on you faster than the skill itself.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Bricklaying (${fitPct}% alignment)`;
    description = `
Bricklaying will likely feel like constant friction — repetition, weather exposure, physical strain, and permanent visibility of mistakes.<br><br>
<strong>This isn’t a personal knock.</strong> It usually means your strengths fit better in a masonry or trade lane with more variety or different physical demands.
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
