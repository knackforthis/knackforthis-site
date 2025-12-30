// automotive-welding-quiz.js

const obj = {
  // PEOPLE & INTERACTION (3)

  0: {
    question: "Automotive welding often means explaining repairs to non-welders (customers, mechanics, shop managers). You:",
    options: [
      ["Can do it — explaining tradeoffs is part of the job.", ["AutoWeldingAligned", "Disciplined"]],
      ["I can manage it, but I prefer minimal back-and-forth.", ["AutoWeldingAligned", "Flexible"]],
      ["I dislike justifying my work to people who don’t weld.", ["AutoWeldingMisaligned", "Flexible"]],
      ["I avoid customer-facing or shop-pressure environments.", ["AutoWeldingMisaligned", "Flexible"]]
    ]
  },

  1: {
    question: "If a customer pushes to rush a repair that affects safety, you usually:",
    options: [
      ["Push back — safety comes first.", ["AutoWeldingAligned", "Disciplined"]],
      ["Try to balance speed and safety carefully.", ["AutoWeldingAligned", "Flexible"]],
      ["Feel pressured and uncomfortable.", ["AutoWeldingMisaligned", "Flexible"]],
      ["Prefer not to be put in that position at all.", ["AutoWeldingMisaligned", "Flexible"]]
    ]
  },

  2: {
    question: "When a shop environment is loud, busy, and deadline-driven, you:",
    options: [
      ["Stay focused and keep standards up.", ["AutoWeldingAligned", "Disciplined"]],
      ["Manage it with effort.", ["AutoWeldingAligned", "Flexible"]],
      ["Get scattered and rushed.", ["AutoWeldingMisaligned", "Flexible"]],
      ["Strongly dislike chaotic workspaces.", ["AutoWeldingMisaligned", "Flexible"]]
    ]
  },

  // TIME & SCHEDULING (2)

  3: {
    question: "Automotive welding often runs on tight timelines and ‘get it done’ expectations. You:",
    options: [
      ["Work efficiently without cutting corners.", ["AutoWeldingAligned", "Disciplined"]],
      ["Feel the pressure but manage it.", ["AutoWeldingAligned", "Flexible"]],
      ["Rush and regret it later.", ["AutoWeldingMisaligned", "Flexible"]],
      ["Prefer work without constant time pressure.", ["AutoWeldingMisaligned", "Flexible"]]
    ]
  },

  4: {
    question: "If a job takes longer than quoted due to prep, access, or distortion control, you:",
    options: [
      ["Accept it — hidden problems are normal.", ["AutoWeldingAligned", "Disciplined"]],
      ["Feel stressed but push through.", ["AutoWeldingAligned", "Flexible"]],
      ["Get frustrated at the lost time.", ["AutoWeldingMisaligned", "Flexible"]],
      ["Prefer predictable, scoped work only.", ["AutoWeldingMisaligned", "Flexible"]]
    ]
  },

  // PACE & PRESSURE (2)

  5: {
    question: "When speed conflicts with weld quality, you usually:",
    options: [
      ["Slow down and protect the outcome.", ["AutoWeldingAligned", "Disciplined"]],
      ["Try to compromise carefully.", ["AutoWeldingAligned", "Flexible"]],
      ["Lean toward speed.", ["AutoWeldingMisaligned", "Flexible"]],
      ["Hate being forced to choose at all.", ["AutoWeldingMisaligned", "Flexible"]]
    ]
  },

  6: {
    question: "Knowing a failed weld could put someone at risk makes you:",
    options: [
      ["More focused and deliberate.", ["AutoWeldingAligned", "Disciplined"]],
      ["Careful but tense.", ["AutoWeldingAligned", "Flexible"]],
      ["Anxious and second-guessing.", ["AutoWeldingMisaligned", "Flexible"]],
      ["Prefer lower-stakes welding environments.", ["AutoWeldingMisaligned", "Flexible"]]
    ]
  },

  // REPETITION & TOLERANCE (2)

  7: {
    question: "Automotive welding includes lots of prep: rust removal, grinding, cleaning, fit-up. You:",
    options: [
      ["Accept it — prep determines weld quality.", ["AutoWeldingAligned", "Disciplined"]],
      ["Do it, but need a clear endpoint.", ["AutoWeldingAligned", "Flexible"]],
      ["Rush it and hope for the best.", ["AutoWeldingMisaligned", "Flexible"]],
      ["Strongly dislike prep-heavy work.", ["AutoWeldingMisaligned", "Flexible"]]
    ]
  },

  8: {
    question: "Grinding and finishing after welding usually makes you:",
    options: [
      ["Calm — the finished result matters.", ["AutoWeldingAligned", "Disciplined"]],
      ["Patient enough to get through it.", ["AutoWeldingAligned", "Flexible"]],
      ["Irritated and bored.", ["AutoWeldingMisaligned", "Flexible"]],
      ["Angry — I hate cosmetic cleanup.", ["AutoWeldingMisaligned", "Flexible"]]
    ]
  },

  // VISIBILITY & SCRUTINY (2)

  9: {
    question: "Automotive welds are often visible and failures come back attached to your name. You:",
    options: [
      ["Like the accountability.", ["AutoWeldingAligned", "Disciplined"]],
      ["Accept it, but it adds pressure.", ["AutoWeldingAligned", "Flexible"]],
      ["Feel exposed by it.", ["AutoWeldingMisaligned", "Flexible"]],
      ["Avoid work where mistakes follow you.", ["AutoWeldingMisaligned", "Flexible"]]
    ]
  },

  10: {
    question: "If a weld looks okay but you doubt penetration or fusion, you usually:",
    options: [
      ["Redo it — confidence matters.", ["AutoWeldingAligned", "Disciplined"]],
      ["Reinforce it cautiously.", ["AutoWeldingAligned", "Flexible"]],
      ["Leave it if it’ll probably hold.", ["AutoWeldingMisaligned", "Flexible"]],
      ["Move on — I hate rework.", ["AutoWeldingMisaligned", "Flexible"]]
    ]
  },

  // TRADE-SPECIFIC PAIN POINTS (3)

  11: {
    question: "Thin automotive metal (panels, floors, exhaust) requires heat control and patience. You:",
    options: [
      ["Enjoy dialing it in.", ["AutoWeldingAligned", "Disciplined"]],
      ["Can handle it with care.", ["AutoWeldingAligned", "Flexible"]],
      ["Find it frustrating.", ["AutoWeldingMisaligned", "Flexible"]],
      ["Prefer thicker, more forgiving material.", ["AutoWeldingMisaligned", "Flexible"]]
    ]
  },

  12: {
    question: "Working in cramped positions (under vehicles, awkward angles) usually:",
    options: [
      ["Doesn’t bother me much.", ["AutoWeldingAligned", "Disciplined"]],
      ["Requires pacing and breaks.", ["AutoWeldingAligned", "Flexible"]],
      ["Drains me quickly.", ["AutoWeldingMisaligned", "Flexible"]],
      ["Is a dealbreaker long-term.", ["AutoWeldingMisaligned", "Flexible"]]
    ]
  },

  13: {
    question: "Automotive welding often involves diagnosing why something failed before fixing it. You:",
    options: [
      ["Enjoy troubleshooting.", ["AutoWeldingAligned", "Disciplined"]],
      ["Can do it with guidance.", ["AutoWeldingAligned", "Flexible"]],
      ["Prefer being told exactly what to weld.", ["AutoWeldingMisaligned", "Flexible"]],
      ["Avoid diagnostic responsibility.", ["AutoWeldingMisaligned", "Flexible"]]
    ]
  },

  // SELF-AWARENESS CHECK (1)

  14: {
    question: "Be honest: how strong is your pull toward automotive welding specifically?",
    options: [
      ["Strong — vehicles and real-world repairs motivate me.", ["AutoWeldingAligned", "Disciplined"]],
      ["Moderate — I’m interested but cautious.", ["AutoWeldingAligned", "Flexible"]],
      ["Low — other welding lanes appeal more.", ["AutoWeldingMisaligned", "Flexible"]],
      ["Very low — this environment isn’t for me.", ["AutoWeldingMisaligned", "Flexible"]]
    ]
  }
};

const tags = {
  AutoWeldingAligned: 0,
  AutoWeldingMisaligned: 0,
  Disciplined: 0,
  Flexible: 0
};

function interpretResults() {
  const aligned = tags.AutoWeldingAligned || 0;
  const misaligned = tags.AutoWeldingMisaligned || 0;
  const disciplined = tags.Disciplined || 0;
  const flexible = tags.Flexible || 0;

  const fitScore = aligned - misaligned; // ~ -15 .. +15
  let fitPct = Math.round(((fitScore + 15) / 30) * 100);
  fitPct = Math.max(0, Math.min(100, fitPct));

  const disciplineScore = disciplined - flexible;
  let disciplinePct = Math.round(((disciplineScore + 15) / 30) * 100);
  disciplinePct = Math.max(0, Math.min(100, disciplinePct));

  let disciplineLabel;
  if (disciplinePct >= 70) {
    disciplineLabel = "You tolerate prep, awkward access, and rework without letting standards slide.";
  } else if (disciplinePct >= 40) {
    disciplineLabel = "You can do automotive welding, but job selection and pacing will matter.";
  } else {
    disciplineLabel = "Prep-heavy, time-pressured work may wear you down over time.";
  }

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Automotive Welding (${fitPct}% alignment)`;
    description = `
You show strong alignment with automotive welding — comfort with prep, thin metal control, awkward access, and accountability for safety-critical work.<br><br>
<strong>Blunt truth:</strong> this lane is dirty, rushed, and unforgiving when shortcuts show up later. Your answers suggest you can handle that reality without cutting corners.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(60, 160, 120)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Automotive Welding (${fitPct}% alignment)`;
    description = `
You have some traits that fit automotive welding, but friction is likely without the right shop or job mix.<br><br>
<strong>Translation:</strong> you may do better in specific sub-lanes (exhaust, fabrication, non-cosmetic repairs) rather than high-pressure flat-rate environments.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Automotive Welding (${fitPct}% alignment)`;
    description = `
Based on your answers, automotive welding will likely feel frustrating: prep-heavy work, cramped access, time pressure, and visible consequences when things fail.<br><br>
<strong>This isn’t a knock.</strong> It usually means your strengths align better with cleaner, slower, or more controlled welding environments.
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
