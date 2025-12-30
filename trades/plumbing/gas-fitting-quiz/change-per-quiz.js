// gas-fitting-quiz.js

const obj = {
  // PEOPLE, AUTHORITY & LIABILITY (3)

  0: {
    question: "Gas fitting often means inspectors, utilities, or code officials have final authority over your work. You:",
    options: [
      ["Accept it — safety work demands oversight.", ["GasFittingAligned", "Disciplined"]],
      ["Can handle it with clear communication.", ["GasFittingAligned", "Flexible"]],
      ["Get tense when others scrutinize every step.", ["GasFittingMisaligned", "Flexible"]],
      ["Avoid work where authority overrides autonomy.", ["GasFittingMisaligned", "Flexible"]]
    ]
  },

  1: {
    question: "Knowing people trust your work with their safety makes you feel:",
    options: [
      ["Motivated to be exact every time.", ["GasFittingAligned", "Disciplined"]],
      ["Responsible, but pressured.", ["GasFittingAligned", "Flexible"]],
      ["Anxious and second-guessing.", ["GasFittingMisaligned", "Flexible"]],
      ["Uncomfortable with the liability.", ["GasFittingMisaligned", "Flexible"]]
    ]
  },

  2: {
    question: "If an inspector fails a pressure test and delays the job, you usually:",
    options: [
      ["Fix it methodically and move on.", ["GasFittingAligned", "Disciplined"]],
      ["Redo it, but the delay stresses me.", ["GasFittingAligned", "Flexible"]],
      ["Feel frustrated and defensive.", ["GasFittingMisaligned", "Flexible"]],
      ["Strongly dislike inspection-driven delays.", ["GasFittingMisaligned", "Flexible"]]
    ]
  },

  // TIME & PRESSURE (2)

  3: {
    question: "Gas fitting jobs often feel slow because verification can’t be rushed. You:",
    options: [
      ["Accept it — safety dictates pace.", ["GasFittingAligned", "Disciplined"]],
      ["Tolerate it with checklists.", ["GasFittingAligned", "Flexible"]],
      ["Get impatient waiting on tests.", ["GasFittingMisaligned", "Flexible"]],
      ["Prefer faster work with fewer hold points.", ["GasFittingMisaligned", "Flexible"]]
    ]
  },

  4: {
    question: "When a job runs long because of testing or rechecks, you:",
    options: [
      ["Stay consistent and focused.", ["GasFittingAligned", "Disciplined"]],
      ["Push through, but fatigue shows.", ["GasFittingAligned", "Flexible"]],
      ["Start rushing.", ["GasFittingMisaligned", "Flexible"]],
      ["Lose motivation.", ["GasFittingMisaligned", "Flexible"]]
    ]
  },

  // PACE & RISK MANAGEMENT (2)

  5: {
    question: "When you’re tired or under schedule pressure, your instinct is to:",
    options: [
      ["Slow down and follow every safety step.", ["GasFittingAligned", "Disciplined"]],
      ["Stick to procedure, but feel the pull to speed up.", ["GasFittingAligned", "Flexible"]],
      ["Skip or compress verification steps.", ["GasFittingMisaligned", "Flexible"]],
      ["Avoid this kind of work altogether.", ["GasFittingMisaligned", "Flexible"]]
    ]
  },

  6: {
    question: "Knowing a small mistake could cause a leak or explosion makes you:",
    options: [
      ["More disciplined and methodical.", ["GasFittingAligned", "Disciplined"]],
      ["Careful, but mentally taxed.", ["GasFittingAligned", "Flexible"]],
      ["Anxious and distracted.", ["GasFittingMisaligned", "Flexible"]],
      ["Prefer lower-risk trades.", ["GasFittingMisaligned", "Flexible"]]
    ]
  },

  // REPETITION & PROCEDURAL DISCIPLINE (2)

  7: {
    question: "Gas fitting requires repeating the same checks every time. You:",
    options: [
      ["Like consistency — repetition prevents mistakes.", ["GasFittingAligned", "Disciplined"]],
      ["Can do it with reminders.", ["GasFittingAligned", "Flexible"]],
      ["Get sloppy with repetition.", ["GasFittingMisaligned", "Flexible"]],
      ["Hate repetitive procedural work.", ["GasFittingMisaligned", "Flexible"]]
    ]
  },

  8: {
    question: "Redoing work because a test fails usually makes you:",
    options: [
      ["Calm — better safe than sorry.", ["GasFittingAligned", "Disciplined"]],
      ["Annoyed but compliant.", ["GasFittingAligned", "Flexible"]],
      ["Frustrated and drained.", ["GasFittingMisaligned", "Flexible"]],
      ["Angry — I hate rework.", ["GasFittingMisaligned", "Flexible"]]
    ]
  },

  // VISIBILITY & VERIFICATION (2)

  9: {
    question: "Gas fitting involves documentation and proof (tests, readings, records). You:",
    options: [
      ["Prefer clear verification.", ["GasFittingAligned", "Disciplined"]],
      ["Accept it, but it adds pressure.", ["GasFittingAligned", "Flexible"]],
      ["Dislike documenting work.", ["GasFittingMisaligned", "Flexible"]],
      ["Avoid paperwork-heavy roles.", ["GasFittingMisaligned", "Flexible"]]
    ]
  },

  10: {
    question: "If a system works but hasn’t been fully verified, you:",
    options: [
      ["Do not sign off until it’s tested.", ["GasFittingAligned", "Disciplined"]],
      ["Double-check quickly.", ["GasFittingAligned", "Flexible"]],
      ["Assume it’s fine.", ["GasFittingMisaligned", "Flexible"]],
      ["Prefer work without sign-off responsibility.", ["GasFittingMisaligned", "Flexible"]]
    ]
  },

  // ENVIRONMENT & PRECISION (2)

  11: {
    question: "Gas fitting often happens in finished spaces with tight routing and little margin for error. You:",
    options: [
      ["Work carefully and protect surroundings.", ["GasFittingAligned", "Disciplined"]],
      ["Can do it, but it’s mentally tiring.", ["GasFittingAligned", "Flexible"]],
      ["Get frustrated and rush.", ["GasFittingMisaligned", "Flexible"]],
      ["Avoid working in finished environments.", ["GasFittingMisaligned", "Flexible"]]
    ]
  },

  12: {
    question: "Precise measuring, threading, sealing, and support work feels:",
    options: [
      ["Satisfying when done right.", ["GasFittingAligned", "Disciplined"]],
      ["Okay with focus.", ["GasFittingAligned", "Flexible"]],
      ["Irritating over time.", ["GasFittingMisaligned", "Flexible"]],
      ["Something I want to avoid.", ["GasFittingMisaligned", "Flexible"]]
    ]
  },

  // SELF-AWARENESS CHECK (3)

  13: {
    question: "Which plumbing lane feels most natural to you?",
    options: [
      ["Safety-critical gas work.", ["GasFittingAligned", "Disciplined"]],
      ["A mix of gas and general plumbing.", ["GasFittingAligned", "Flexible"]],
      ["General plumbing with fewer safety steps.", ["GasFittingMisaligned", "Flexible"]],
      ["Anything but gas fitting.", ["GasFittingMisaligned", "Flexible"]]
    ]
  },

  14: {
    question: "Be honest: how strong is your pull toward gas fitting specifically?",
    options: [
      ["Strong — I like precision and responsibility.", ["GasFittingAligned", "Disciplined"]],
      ["Moderate — I respect it, but I’m cautious.", ["GasFittingAligned", "Flexible"]],
      ["Low — other lanes appeal more.", ["GasFittingMisaligned", "Flexible"]],
      ["Very low — this isn’t my environment.", ["GasFittingMisaligned", "Flexible"]]
    ]
  }
};

const tags = {
  GasFittingAligned: 0,
  GasFittingMisaligned: 0,
  Disciplined: 0,
  Flexible: 0
};

function interpretResults() {
  const aligned = tags.GasFittingAligned || 0;
  const misaligned = tags.GasFittingMisaligned || 0;
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
    disciplineLabel =
      "You’re built for gas fitting reality: consistent procedures, verification discipline, and the ability to slow down when pressure hits.";
  } else if (disciplinePct >= 40) {
    disciplineLabel =
      "You can do gas fitting, but habits, checklists, and pacing will matter a lot.";
  } else {
    disciplineLabel =
      "Safety-critical, procedural work may feel mentally heavy and unforgiving over time.";
  }

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Gas Fitting (${fitPct}% alignment)`;
    description = `
You show strong alignment with gas fitting — comfort with responsibility, strict procedure, and verification-heavy work where safety is non-negotiable.<br><br>
<strong>Blunt truth:</strong> gas fitting rewards calm, methodical people. It punishes shortcuts and ego. Your answers suggest you can operate in that reality.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(60, 160, 120)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Gas Fitting (${fitPct}% alignment)`;
    description = `
You have some traits that fit gas fitting, but friction is likely without strong habits and structure.<br><br>
<strong>Translation:</strong> you may like the technical side, but dislike the constant verification and responsibility.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Gas Fitting (${fitPct}% alignment)`;
    description = `
Based on your answers, gas fitting will likely feel stressful: high consequence, strict procedure, verification pressure, and little margin for error.<br><br>
<strong>This isn’t a knock.</strong> It usually means your strengths fit better in plumbing lanes with less safety-critical exposure.
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
