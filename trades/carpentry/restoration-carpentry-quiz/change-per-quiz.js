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
      ["No. I want clean shop or new-build conditions.", ["RestorationMisaligned", "Flexible"]]
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

  // ---- HUMAN FRICTION / ATTRITION LAYER ----

  11: {
    question: "Restoration work often happens in occupied homes with anxious owners. You:",
    options: [
      ["Can stay professional and focused despite interruptions.", ["RestorationAligned", "Disciplined"]],
      ["Can handle it, but it adds stress.", ["RestorationAligned", "Flexible"]],
      ["Get irritated by constant questions or presence.", ["RestorationMisaligned", "Flexible"]],
      ["Strongly dislike working around occupants.", ["RestorationMisaligned", "Flexible"]]
    ]
  },

  12: {
    question: "If a client blames you for an old problem that existed before you touched the house, you:",
    options: [
      ["Document, explain, and stay grounded.", ["RestorationAligned", "Disciplined"]],
      ["Handle it, but it weighs on me.", ["RestorationAligned", "Flexible"]],
      ["Get defensive because it feels unfair.", ["RestorationMisaligned", "Flexible"]],
      ["That kind of blame makes me want out.", ["RestorationMisaligned", "Flexible"]]
    ]
  },

  13: {
    question: "When inspectors, preservation boards, or insurers scrutinize your work, you:",
    options: [
      ["Accept it — scrutiny is part of doing restoration right.", ["RestorationAligned", "Disciplined"]],
      ["Deal with it, but it’s mentally draining.", ["RestorationAligned", "Flexible"]],
      ["Find it frustrating and intrusive.", ["RestorationMisaligned", "Flexible"]],
      ["Strongly dislike oversight-heavy work.", ["RestorationMisaligned", "Flexible"]]
    ]
  },

  14: {
    question: "Be honest: how strong is your pull toward restoration carpentry specifically?",
    options: [
      ["Strong — I like preserving, diagnosing, and solving weird problems.", ["RestorationAligned", "Disciplined"]],
      ["Moderate — I’m curious, but not fully sure.", ["RestorationAligned", "Flexible"]],
      ["Low — I’m more interested in cleaner, predictable work.", ["RestorationMisaligned", "Flexible"]],
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
  const fitScore = aligned - misaligned; // ~ -15 .. +15
  let fitPct = Math.round(((fitScore + 15) / 30) * 100);
  fitPct = Math.max(0, Math.min(100, fitPct));

  // Discipline axis (patience + method + emotional control)
  const disciplineScore = disciplined - flexible; // ~ -15 .. +15
  let disciplinePct = Math.round(((disciplineScore + 15) / 30) * 100);
  disciplinePct = Math.max(0, Math.min(100, disciplinePct));

  let disciplineLabel;
  if (disciplinePct >= 70)
    disciplineLabel = "You’re built for slow, methodical restoration work — steady thinking, careful execution, and emotional control under uncertainty.";
  else if (disciplinePct >= 40)
    disciplineLabel = "You can handle restoration work, but environment, client dynamics, and chaos level will matter a lot.";
  else
    disciplineLabel = "Restoration may feel mentally exhausting due to uncertainty, investigation, and prolonged problem-solving.";

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Restoration Carpentry (${fitPct}% alignment)`;
    description = `
You’re showing strong alignment with restoration carpentry — comfort with unknowns, diagnosis, constraints, and messy realities.<br><br>
<strong>Blunt truth:</strong> restoration is slow, unpredictable, and often thankless until the end. Your answers suggest you can live in that tension.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(60, 160, 120)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Restoration Carpentry (${fitPct}% alignment)`;
    description = `
You have some traits that fit restoration, but friction is likely without the right scope, clients, or expectations.<br><br>
<strong>Translation:</strong> surprises and people dynamics may drain you faster than the carpentry itself.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Restoration Carpentry (${fitPct}% alignment)`;
    description = `
Restoration carpentry will likely feel like constant friction — unknowns, constraints, scrutiny, and slow progress layered with blame.<br><br>
<strong>This isn’t a personal knock.</strong> It usually means your strengths fit better in cleaner, faster, or more predictable carpentry lanes.
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
