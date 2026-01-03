// stone-masonry-quiz.js
// Masonry > Stone Masonry

const obj = {
  0: {
    question: "Stone masonry is slow, deliberate work where placement matters more than speed. You usually:",
    options: [
      ["Prefer it — I’d rather place carefully than rush.", ["StoneAligned", "Disciplined"]],
      ["I can do it, but I still want steady progress.", ["StoneAligned", "Flexible"]],
      ["I get impatient when things move slowly.", ["StoneMisaligned", "Flexible"]],
      ["Slow, careful work drains me fast.", ["StoneMisaligned", "Flexible"]]
    ]
  },

  1: {
    question: "Stone rarely comes perfectly square or uniform. When pieces vary, you usually:",
    options: [
      ["Enjoy fitting and shaping until it works.", ["StoneAligned", "Disciplined"]],
      ["Can handle it, but it gets mentally tiring.", ["StoneAligned", "Flexible"]],
      ["Get frustrated when things don’t fit easily.", ["StoneMisaligned", "Flexible"]],
      ["Prefer materials that are uniform and predictable.", ["StoneMisaligned", "Flexible"]]
    ]
  },

  2: {
    question: "How do you feel about lifting, moving, and setting heavy stone repeatedly?",
    options: [
      ["I can handle it steadily with good technique.", ["StoneAligned", "Disciplined"]],
      ["I can do it, but pacing and recovery matter.", ["StoneAligned", "Flexible"]],
      ["Heavy, awkward material wears me down fast.", ["StoneMisaligned", "Flexible"]],
      ["That level of physical strain is a dealbreaker.", ["StoneMisaligned", "Flexible"]]
    ]
  },

  3: {
    question: "Stone masonry rewards visual judgment (line, balance, proportion) more than measurements alone. You:",
    options: [
      ["Trust my eye and refine until it looks right.", ["StoneAligned", "Disciplined"]],
      ["Can do it, but I like reference lines and checks.", ["StoneAligned", "Flexible"]],
      ["Feel unsure when decisions aren’t exact.", ["StoneMisaligned", "Flexible"]],
      ["Prefer work with strict measurements, not visual judgment.", ["StoneMisaligned", "Flexible"]]
    ]
  },

  4: {
    question: "When a stone doesn’t sit cleanly on the first try, you usually:",
    options: [
      ["Pull it, adjust, and reset until it’s right.", ["StoneAligned", "Disciplined"]],
      ["Fix it, but I hate losing time to resets.", ["StoneAligned", "Flexible"]],
      ["Try to make it work as-is.", ["StoneMisaligned", "Flexible"]],
      ["Get frustrated and lose momentum.", ["StoneMisaligned", "Flexible"]]
    ]
  },

  5: {
    question: "How do you feel about cutting, shaping, and dressing stone (saws, grinders, chisels)?",
    options: [
      ["I like shaping material to fit the build.", ["StoneAligned", "Disciplined"]],
      ["I can do it, but I prefer minimal cutting.", ["StoneAligned", "Flexible"]],
      ["Cutting and fitting frustrates me.", ["StoneMisaligned", "Flexible"]],
      ["I avoid work that requires constant shaping.", ["StoneMisaligned", "Flexible"]]
    ]
  },

  6: {
    question: "Stone masonry often hides mistakes later rather than immediately. That reality makes you:",
    options: [
      ["More careful — I want it right before moving on.", ["StoneAligned", "Disciplined"]],
      ["Careful, but I still feel time pressure.", ["StoneAligned", "Flexible"]],
      ["Anxious — delayed consequences stress me out.", ["StoneMisaligned", "Flexible"]],
      ["Indifferent — I’d rather keep moving.", ["StoneMisaligned", "Flexible"]]
    ]
  },

  7: {
    question: "How do you handle repetitive but exact placement (set → check → adjust → repeat)?",
    options: [
      ["Fine — repetition is how consistency happens.", ["StoneAligned", "Disciplined"]],
      ["I can do it, but I need mental breaks.", ["StoneAligned", "Flexible"]],
      ["Repetition drains my focus.", ["StoneMisaligned", "Flexible"]],
      ["I avoid repetitive precision work.", ["StoneMisaligned", "Flexible"]]
    ]
  },

  8: {
    question: "Stone work is often outdoors in heat, cold, dust, and awkward terrain. You:",
    options: [
      ["Can work through it without losing focus.", ["StoneAligned", "Disciplined"]],
      ["Can manage it, but conditions affect my energy.", ["StoneAligned", "Flexible"]],
      ["Get irritated when conditions aren’t comfortable.", ["StoneMisaligned", "Flexible"]],
      ["Prefer controlled indoor environments.", ["StoneMisaligned", "Flexible"]]
    ]
  },

  9: {
    question: "When someone critiques stone placement for look or balance, you usually:",
    options: [
      ["Appreciate it — the wall should read clean.", ["StoneAligned", "Disciplined"]],
      ["I can take it, but it wears on me.", ["StoneAligned", "Flexible"]],
      ["Feel it’s subjective and annoying.", ["StoneMisaligned", "Flexible"]],
      ["Hate aesthetic critique.", ["StoneMisaligned", "Flexible"]]
    ]
  },

  10: {
    question: "Stone masonry often means slow visible progress. That feels:",
    options: [
      ["Fine — I’m okay seeing it build gradually.", ["StoneAligned", "Disciplined"]],
      ["Okay if I know the end goal.", ["StoneAligned", "Flexible"]],
      ["Demotivating without faster payoff.", ["StoneMisaligned", "Flexible"]],
      ["Unbearable — I need quick results.", ["StoneMisaligned", "Flexible"]]
    ]
  },

  // ---- PEOPLE / ATTRITION LAYER ----

  11: {
    question: "Clients or designers may care deeply about how stone ‘feels’ visually. You:",
    options: [
      ["Adapt and refine without taking it personally.", ["StoneAligned", "Disciplined"]],
      ["Can handle it, but it drains me.", ["StoneAligned", "Flexible"]],
      ["Get irritated by subjective preferences.", ["StoneMisaligned", "Flexible"]],
      ["Strongly dislike aesthetic-driven feedback.", ["StoneMisaligned", "Flexible"]]
    ]
  },

  12: {
    question: "Stone masonry often involves working quietly and solo for long stretches. You:",
    options: [
      ["Like the focus and independence.", ["StoneAligned", "Disciplined"]],
      ["Can manage it, but isolation builds.", ["StoneAligned", "Flexible"]],
      ["Feel drained without social energy.", ["StoneMisaligned", "Flexible"]],
      ["Strongly dislike solitary work.", ["StoneMisaligned", "Flexible"]]
    ]
  },

  13: {
    question: "After weeks of slow, physical, detail-focused work, you tend to:",
    options: [
      ["Stay steady — this pace suits me.", ["StoneAligned", "Disciplined"]],
      ["Manage it, but fatigue accumulates.", ["StoneAligned", "Flexible"]],
      ["Feel mentally and physically worn down.", ["StoneMisaligned", "Flexible"]],
      ["Burn out quickly.", ["StoneMisaligned", "Flexible"]]
    ]
  },

  14: {
    question: "Be honest: does stone masonry appeal to you long-term?",
    options: [
      ["Yes — craft, patience, and permanence matter to me.", ["StoneAligned", "Disciplined"]],
      ["Somewhat — I’m interested but cautious.", ["StoneAligned", "Flexible"]],
      ["Not really — I prefer faster or cleaner work.", ["StoneMisaligned", "Flexible"]],
      ["No — this isn’t my environment.", ["StoneMisaligned", "Flexible"]]
    ]
  }
};

const tags = {
  StoneAligned: 0,
  StoneMisaligned: 0,
  Disciplined: 0,
  Flexible: 0
};

function interpretResults() {
  const aligned = tags.StoneAligned || 0;
  const misaligned = tags.StoneMisaligned || 0;
  const disciplined = tags.Disciplined || 0;
  const flexible = tags.Flexible || 0;

  // Alignment axis (-15 .. +15)
  const fitScore = aligned - misaligned;
  let fitPct = Math.round(((fitScore + 15) / 30) * 100);
  fitPct = Math.max(0, Math.min(100, fitPct));

  // Discipline axis (patience + physical + aesthetic tolerance)
  const disciplineScore = disciplined - flexible;
  let disciplinePct = Math.round(((disciplineScore + 15) / 30) * 100);
  disciplinePct = Math.max(0, Math.min(100, disciplinePct));

  let disciplineLabel;
  if (disciplinePct >= 70)
    disciplineLabel =
      "You’re built for slow, physical craft work that demands patience, visual judgment, and consistency without rushing.";
  else if (disciplinePct >= 40)
    disciplineLabel =
      "You can do stone masonry, but consistency may depend on pacing, project type, and managing fatigue.";
  else
    disciplineLabel =
      "Stone masonry may feel draining due to slow progress, heavy material handling, and constant visual decision-making.";

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Stone Masonry (${fitPct}% alignment)`;
    description = `
You’re showing strong alignment with stone masonry — patience, physical tolerance, and comfort with visual, craft-driven decisions.<br><br>
<strong>Blunt truth:</strong> stone masonry rewards people who value permanence and precision over speed. Your answers suggest that environment won’t grind you down.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(60, 160, 120)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Stone Masonry (${fitPct}% alignment)`;
    description = `
You have some traits that work in stone masonry, but friction may show up around pace, physical strain, or subjective standards.<br><br>
<strong>Translation:</strong> you might do well in certain stone niches — or prefer masonry lanes with clearer production rhythm.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Stone Masonry (${fitPct}% alignment)`;
    description = `
Based on your answers, stone masonry will likely feel like constant friction: slow builds, heavy material, visual subjectivity, and delayed payoff.<br><br>
<strong>This isn’t a personal knock.</strong> It usually means your strengths fit better in masonry or trades with faster cycles and clearer standards.
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
