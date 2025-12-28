// restoration-carpentry-quiz.js

const obj = {
  0: {
    question: "When you encounter hidden damage mid-project (rot, water damage, termite galleries), you usually:",
    options: [
      ["Stay calm and treat it like normal — assess, isolate, plan the fix.", ["RestorationAligned", "Disciplined"]],
      ["I can adapt, but surprises stress me out.", ["RestorationAligned", "Flexible"]],
      ["I get annoyed because the plan changes constantly.", ["RestorationMisaligned", "Flexible"]],
      ["I hate unknowns — I want clean, predictable builds.", ["RestorationMisaligned", "Flexible"]]
    ]
  },

  1: {
    question: "Restoration often means matching old work (profiles, trim details, materials). Your reaction:",
    options: [
      ["That’s satisfying — I like replicating and blending repairs.", ["RestorationAligned", "Disciplined"]],
      ["I can do it, but it’s not my favorite kind of detail.", ["RestorationAligned", "Flexible"]],
      ["I’d rather replace than match — matching feels tedious.", ["RestorationMisaligned", "Flexible"]],
      ["I don’t want that level of historical/detail matching at all.", ["RestorationMisaligned", "Flexible"]]
    ]
  },

  2: {
    question: "How do you handle projects where the 'right fix' is slower than the 'fast fix'?",
    options: [
      ["I’ll do it right — longevity matters more than speed.", ["RestorationAligned", "Disciplined"]],
      ["I can do it right if expectations are clear.", ["RestorationAligned", "Flexible"]],
      ["I tend to choose speed unless someone forces me.", ["RestorationMisaligned", "Flexible"]],
      ["I hate slow fixes — I need fast progress to stay motivated.", ["RestorationMisaligned", "Flexible"]]
    ]
  },

  3: {
    question: "Older buildings are rarely square, level, or plumb. Your response:",
    options: [
      ["Normal — I expect it and work with reality.", ["RestorationAligned", "Disciplined"]],
      ["I can adapt, but it takes mental energy.", ["RestorationAligned", "Flexible"]],
      ["It frustrates me because it feels unfair.", ["RestorationMisaligned", "Flexible"]],
      ["I want new-build conditions. Old-house chaos is not for me.", ["RestorationMisaligned", "Flexible"]]
    ]
  },

  4: {
    question: "Restoration requires diagnosing causes (moisture paths, movement, failed flashing), not just fixing symptoms. You:",
    options: [
      ["Like root-cause thinking — I want the real problem solved.", ["RestorationAligned", "Disciplined"]],
      ["I can do it, but I’d rather not get too deep.", ["RestorationAligned", "Flexible"]],
      ["I prefer straightforward tasks without investigation.", ["RestorationMisaligned", "Flexible"]],
      ["I hate detective work — just tell me what to build.", ["RestorationMisaligned", "Flexible"]]
    ]
  },

  5: {
    question: "When you have to salvage materials (reuse trim, save old doors, preserve surfaces), you usually:",
    options: [
      ["Prefer it — preserving good material is part of the craft.", ["RestorationAligned", "Disciplined"]],
      ["I can do it, but replacement is easier.", ["RestorationAligned", "Flexible"]],
      ["I’d rather rip it out and start fresh.", ["RestorationMisaligned", "Flexible"]],
      ["Salvage work feels like slow torture.", ["RestorationMisaligned", "Flexible"]]
    ]
  },

  6: {
    question: "How do you react to strict constraints (historic rules, 'must match existing', limited options)?",
    options: [
      ["Constraints are fine — I like solving within boundaries.", ["RestorationAligned", "Disciplined"]],
      ["I can do it, but I prefer more freedom.", ["RestorationAligned", "Flexible"]],
      ["Constraints irritate me and kill momentum.", ["RestorationMisaligned", "Flexible"]],
      ["I hate constraint-based work. I need autonomy.", ["RestorationMisaligned", "Flexible"]]
    ]
  },

  7: {
    question: "Restoration often includes careful demo and dust control to avoid damaging what stays. You:",
    options: [
      ["Can work carefully and methodically without rushing.", ["RestorationAligned", "Disciplined"]],
      ["I can do it, but it’s annoying and slows me down.", ["RestorationAligned", "Flexible"]],
      ["I tend to get impatient and go too fast.", ["RestorationMisaligned", "Flexible"]],
      ["I don’t want careful demo — I prefer clean-slate tear-outs.", ["RestorationMisaligned", "Flexible"]]
    ]
  },

  8: {
    question: "When repairs require blending (feathering, aligning, hiding seams), you usually:",
    options: [
      ["Enjoy making repairs disappear — that’s the win.", ["RestorationAligned", "Disciplined"]],
      ["I can do it, but I won’t chase perfect blending.", ["RestorationAligned", "Flexible"]],
      ["I don’t care much if the patch is visible.", ["RestorationMisaligned", "Flexible"]],
      ["Visible patches don’t bother me — function is enough.", ["RestorationMisaligned", "Flexible"]]
    ]
  },

  9: {
    question: "Restoration projects can be messy: lead paint, old dust, odd smells, unexpected hazards. Your reaction:",
    options: [
      ["I take safety seriously and work controlled.", ["RestorationAligned", "Disciplined"]],
      ["I can handle it with the right gear and plan.", ["RestorationAligned", "Flexible"]],
      ["I dislike messy environments and get irritable.", ["RestorationMisaligned", "Flexible"]],
      ["No. I want clean shop/new-build conditions.", ["RestorationMisaligned", "Flexible"]]
    ]
  },

  10: {
    question: "How do you feel about long timelines and incremental progress (small wins, many steps)?",
    options: [
      ["Fine — I can stay steady even when progress is slow.", ["RestorationAligned", "Disciplined"]],
      ["I can do it with milestones and structure.", ["RestorationAligned", "Flexible"]],
      ["I struggle when the payoff isn’t immediate.", ["RestorationMisaligned", "Flexible"]],
      ["I lose motivation fast without visible progress.", ["RestorationMisaligned", "Flexible"]]
    ]
  },

  11: {
    question: "Be honest: how strong is your pull toward restoration carpentry specifically?",
    options: [
      ["Strong — I like preserving, diagnosing, and solving weird problems.", ["RestorationAligned", "Disciplined"]],
      ["Moderate — I’m curious, but not fully sure.", ["RestorationAligned", "Flexible"]],
      ["Low — I’m more interested in cleaner, more predictable work.", ["RestorationMisaligned", "Flexible"]],
      ["Very low — this probably isn’t my lane.", ["RestorationMisaligned", "Flexible"]]
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

  // Alignment axis (restoration fit)
  const fitScore = aligned - misaligned; // ~ -12 .. +12
  let fitPct = Math.round(((fitScore + 12) / 24) * 100);
  fitPct = Math.max(0, Math.min(100, fitPct));

  // Discipline axis (steady process + patience)
  const disciplineScore = disciplined - flexible; // ~ -12 .. +12
  let disciplinePct = Math.round(((disciplineScore + 12) / 24) * 100);
  disciplinePct = Math.max(0, Math.min(100, fitPct));

  let disciplineLabel;
  if (disciplinePct >= 70) disciplineLabel = "You’re built for steady, methodical work — careful demo, controlled fixes, and patience when progress is incremental.";
  else if (disciplinePct >= 40) disciplineLabel = "You can do restoration work, but consistency may depend on environment, deadlines, and how chaotic the project gets.";
  else disciplineLabel = "Restoration may feel mentally irritating because it demands patience, problem-solving, and slow accuracy under messy conditions.";

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Restoration Carpentry (${fitPct}% alignment)`;
    description = `
You’re showing strong alignment with restoration carpentry — comfort with unknowns, root-cause thinking, and tolerance for messy, constraint-heavy problem solving.<br><br>
<strong>Blunt truth:</strong> restoration isn’t “cute old-house vibes.” It’s surprises, diagnosis, careful work, and fixes that need to last. Your answers suggest that won’t break you.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(60, 160, 120)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Restoration Carpentry (${fitPct}% alignment)`;
    description = `
You’ve got some traits that can work in restoration, but you may hit friction with the constant unknowns, constraints, and slower progress.<br><br>
<strong>Translation:</strong> you might do well with the right kind of restoration work (light repairs, trim matching, planned scopes) — or you might prefer new-build carpentry lanes with clearer variables.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Restoration Carpentry (${fitPct}% alignment)`;
    description = `
Based on your answers, restoration carpentry will probably feel like constant friction: surprises, detective work, messy constraints, and slow incremental fixes.<br><br>
<strong>This isn’t a personal knock.</strong> It usually means your strengths fit better in carpentry paths with cleaner conditions, clearer plans, and fewer unknowns.
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
