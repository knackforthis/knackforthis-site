// restoration-masonry-quiz.js
// Masonry > Restoration Masonry

const obj = {
  0: {
    question: "Restoration masonry is slow accuracy under constraints. When a job rewards patience over speed, you usually:",
    options: [
      ["Love it — I’d rather be correct than fast.", ["RestorationAligned", "Disciplined"]],
      ["I can do it, but I still like visible progress milestones.", ["RestorationAligned", "Flexible"]],
      ["I get restless when progress is slow and careful.", ["RestorationMisaligned", "Flexible"]],
      ["Slow, careful work makes me miserable.", ["RestorationMisaligned", "Flexible"]]
    ]
  },

  1: {
    question: "A big part of restoration is matching existing work (mortar color, joint style, texture, brick/stone character). Your reaction:",
    options: [
      ["That’s satisfying — matching details feels like real craft.", ["RestorationAligned", "Disciplined"]],
      ["I can do it, but I don’t want to obsess over tiny differences.", ["RestorationAligned", "Flexible"]],
      ["I struggle with subtle differences — it feels impossible to match.", ["RestorationMisaligned", "Flexible"]],
      ["I hate aesthetic matching — I prefer new builds with clean standards.", ["RestorationMisaligned", "Flexible"]]
    ]
  },

  2: {
    question: "Restoration means diagnosing weird failures (cracks, spalling, moisture issues) before fixing anything. You tend to:",
    options: [
      ["Dig in — I like root-cause problem solving.", ["RestorationAligned", "Disciplined"]],
      ["I can troubleshoot, but I prefer known methods.", ["RestorationAligned", "Flexible"]],
      ["I get frustrated when the cause isn’t obvious.", ["RestorationMisaligned", "Flexible"]],
      ["I’d rather build new than chase mystery problems.", ["RestorationMisaligned", "Flexible"]]
    ]
  },

  3: {
    question: "How do you handle delicate removal work where one mistake can break surrounding material?",
    options: [
      ["Careful is fine — I can slow down and stay controlled.", ["RestorationAligned", "Disciplined"]],
      ["I can do it, but it takes a lot of focus not to rush.", ["RestorationAligned", "Flexible"]],
      ["I get impatient and start forcing things.", ["RestorationMisaligned", "Flexible"]],
      ["That level of delicacy stresses me out too much.", ["RestorationMisaligned", "Flexible"]]
    ]
  },

  4: {
    question: "Restoration often means working in awkward conditions (tight access, odd angles, old structures). You:",
    options: [
      ["Adapt and improvise without losing quality.", ["RestorationAligned", "Disciplined"]],
      ["Can adapt, but it drains me faster than clean work.", ["RestorationAligned", "Flexible"]],
      ["Lose momentum when conditions aren’t straightforward.", ["RestorationMisaligned", "Flexible"]],
      ["Need clean, repeatable conditions to do good work.", ["RestorationMisaligned", "Flexible"]]
    ]
  },

  5: {
    question: "When repairs require multiple steps and cure times (prep → set → return later), you:",
    options: [
      ["Plan ahead — sequence matters.", ["RestorationAligned", "Disciplined"]],
      ["Follow sequence, but waiting hurts motivation.", ["RestorationAligned", "Flexible"]],
      ["Forget steps or shortcut when it feels slow.", ["RestorationMisaligned", "Flexible"]],
      ["Hate stop-and-go workflows.", ["RestorationMisaligned", "Flexible"]]
    ]
  },

  6: {
    question: "Restoration standards are often invisible — the best work looks like it was always there. That feels:",
    options: [
      ["Perfect — quiet craftsmanship is the goal.", ["RestorationAligned", "Disciplined"]],
      ["Fine, but I still like some visible payoff.", ["RestorationAligned", "Flexible"]],
      ["Demotivating — I want obvious results.", ["RestorationMisaligned", "Flexible"]],
      ["Pointless — I need visible transformation.", ["RestorationMisaligned", "Flexible"]]
    ]
  },

  7: {
    question: "When materials behave inconsistently (old brick softness, historic mortar), you:",
    options: [
      ["Adjust technique and respect the material.", ["RestorationAligned", "Disciplined"]],
      ["Can work with it, but it frustrates me.", ["RestorationAligned", "Flexible"]],
      ["Get annoyed when materials don’t behave predictably.", ["RestorationMisaligned", "Flexible"]],
      ["Hate unpredictable materials.", ["RestorationMisaligned", "Flexible"]]
    ]
  },

  8: {
    question: "Safety and containment (dust control, silica, careful site setup) feel like:",
    options: [
      ["Non-negotiable — it protects the work and people.", ["RestorationAligned", "Disciplined"]],
      ["Necessary, but I get impatient with setup.", ["RestorationAligned", "Flexible"]],
      ["Overkill — I cut corners sometimes.", ["RestorationMisaligned", "Flexible"]],
      ["Momentum killers I hate dealing with.", ["RestorationMisaligned", "Flexible"]]
    ]
  },

  9: {
    question: "When someone critiques your match quality, you usually:",
    options: [
      ["Prefer it — I want it to disappear into the original work.", ["RestorationAligned", "Disciplined"]],
      ["Take it, but it stings.", ["RestorationAligned", "Flexible"]],
      ["Get defensive — it feels picky.", ["RestorationMisaligned", "Flexible"]],
      ["Avoid critique-heavy environments.", ["RestorationMisaligned", "Flexible"]]
    ]
  },

  10: {
    question: "Documentation and consistency (photos, mix notes, repeatable methods) feel:",
    options: [
      ["Normal — consistency is how quality holds.", ["RestorationAligned", "Disciplined"]],
      ["Okay, but I don’t want paperwork creep.", ["RestorationAligned", "Flexible"]],
      ["I’m sloppy with tracking details.", ["RestorationMisaligned", "Flexible"]],
      ["I hate structured process.", ["RestorationMisaligned", "Flexible"]]
    ]
  },

  // ---- HUMAN / ATTRITION LAYER ----

  11: {
    question: "Clients often expect perfection while not understanding old materials. You:",
    options: [
      ["Manage expectations calmly and explain limits.", ["RestorationAligned", "Disciplined"]],
      ["Can handle it, but it wears on me.", ["RestorationAligned", "Flexible"]],
      ["Get irritated by unrealistic expectations.", ["RestorationMisaligned", "Flexible"]],
      ["Strongly dislike client-facing pressure.", ["RestorationMisaligned", "Flexible"]]
    ]
  },

  12: {
    question: "If pre-existing damage gets blamed on your repair, you usually:",
    options: [
      ["Document and stay professional.", ["RestorationAligned", "Disciplined"]],
      ["Defend myself, but it’s stressful.", ["RestorationAligned", "Flexible"]],
      ["Get frustrated and emotional.", ["RestorationMisaligned", "Flexible"]],
      ["Hate blame dynamics — I avoid them.", ["RestorationMisaligned", "Flexible"]]
    ]
  },

  13: {
    question: "After weeks of careful, slow, detail-heavy work, you tend to:",
    options: [
      ["Stay steady — this pace suits me.", ["RestorationAligned", "Disciplined"]],
      ["Manage it, but mental fatigue builds.", ["RestorationAligned", "Flexible"]],
      ["Feel drained and irritated.", ["RestorationMisaligned", "Flexible"]],
      ["Lose motivation fast.", ["RestorationMisaligned", "Flexible"]]
    ]
  },

  14: {
    question: "Be honest: does restoration masonry actually appeal to you long-term?",
    options: [
      ["Yes — patience, craft, and problem solving fit me.", ["RestorationAligned", "Disciplined"]],
      ["Somewhat — I’m interested but cautious.", ["RestorationAligned", "Flexible"]],
      ["Not really — I prefer faster or cleaner work.", ["RestorationMisaligned", "Flexible"]],
      ["No — this isn’t my environment.", ["RestorationMisaligned", "Flexible"]]
    ]
  }
};

const tags = {
  RestorationAligned: 0,
  RestorationMisaligned: 0,
  Disciplined: 0,
  Flexible: 0
};

function interpretResults() {
  const aligned = tags.RestorationAligned || 0;
  const misaligned = tags.RestorationMisaligned || 0;
  const disciplined = tags.Disciplined || 0;
  const flexible = tags.Flexible || 0;

  // Alignment axis (-15 .. +15)
  const fitScore = aligned - misaligned;
  let fitPct = Math.round(((fitScore + 15) / 30) * 100);
  fitPct = Math.max(0, Math.min(100, fitPct));

  // Discipline axis (patience + process + people pressure)
  const disciplineScore = disciplined - flexible;
  let disciplinePct = Math.round(((disciplineScore + 15) / 30) * 100);
  disciplinePct = Math.max(0, Math.min(100, disciplinePct));

  let disciplineLabel;
  if (disciplinePct >= 70)
    disciplineLabel =
      "You can stay patient, process-driven, and professional under slow progress, safety controls, and client scrutiny.";
  else if (disciplinePct >= 40)
    disciplineLabel =
      "You can handle restoration work, but pacing, stop-start sequencing, or client pressure may wear on you.";
  else
    disciplineLabel =
      "Restoration masonry may feel draining due to slow feedback loops, subjective standards, and people-pressure rather than physical difficulty.";

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Restoration Masonry (${fitPct}% alignment)`;
    description = `
You’re showing strong alignment with restoration masonry — patience, matching tolerance, diagnostic thinking, and comfort working carefully under constraints.<br><br>
<strong>Blunt truth:</strong> this trade rewards people who value invisible quality over speed and ego. Your answers suggest that won’t break you.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(60, 160, 120)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Restoration Masonry (${fitPct}% alignment)`;
    description = `
You have some traits that fit restoration masonry, but friction may appear around pace, client dynamics, or process discipline.<br><br>
<strong>Translation:</strong> restoration could work with the right project mix — or you may prefer masonry paths with clearer production rhythm or faster payoff.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Restoration Masonry (${fitPct}% alignment)`;
    description = `
Based on your answers, restoration masonry will likely feel like constant friction: slow progress, subjective matching standards, delicate removal work, and client pressure.<br><br>
<strong>This isn’t a personal knock.</strong> It usually means your strengths fit better in masonry work with clearer production flow or less ambiguity.
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
