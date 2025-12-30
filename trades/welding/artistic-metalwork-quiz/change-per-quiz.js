// artistic-metalwork-quiz.js

const obj = {
  // PEOPLE & INTERACTION (3)

  0: {
    question: "Artistic metalwork often involves clients, designers, or buyers reacting emotionally to your work. You usually:",
    options: [
      ["Handle it well — interpretation and reaction are part of the craft.", ["ArtMetalAligned", "Disciplined"]],
      ["I can manage it if expectations are discussed early.", ["ArtMetalAligned", "Flexible"]],
      ["I get tense when reactions don’t match my intent.", ["ArtMetalMisaligned", "Flexible"]],
      ["I dislike emotionally driven feedback on my work.", ["ArtMetalMisaligned", "Flexible"]]
    ]
  },

  1: {
    question: "A client says, “It’s close, but it doesn’t feel right yet.” Your reaction is:",
    options: [
      ["Normal — refinement is expected.", ["ArtMetalAligned", "Disciplined"]],
      ["I can adjust, but vague feedback frustrates me.", ["ArtMetalAligned", "Flexible"]],
      ["That kind of critique stresses me out.", ["ArtMetalMisaligned", "Flexible"]],
      ["I hate subjective feedback and avoid this dynamic.", ["ArtMetalMisaligned", "Flexible"]]
    ]
  },

  2: {
    question: "How do you feel about explaining your design choices to non-technical people?",
    options: [
      ["Comfortable — articulation is part of authorship.", ["ArtMetalAligned", "Disciplined"]],
      ["I can do it, but it drains me.", ["ArtMetalAligned", "Flexible"]],
      ["I dislike justifying aesthetic decisions.", ["ArtMetalMisaligned", "Flexible"]],
      ["I want my work judged by specs, not taste.", ["ArtMetalMisaligned", "Flexible"]]
    ]
  },

  // TIME & SCHEDULING (2)

  3: {
    question: "Artistic metalwork often takes longer than planned because the piece evolves. You:",
    options: [
      ["Expect it — the timeline flexes with the vision.", ["ArtMetalAligned", "Disciplined"]],
      ["I tolerate it with clear limits.", ["ArtMetalAligned", "Flexible"]],
      ["I get anxious when timelines drift.", ["ArtMetalMisaligned", "Flexible"]],
      ["I strongly prefer predictable schedules.", ["ArtMetalMisaligned", "Flexible"]]
    ]
  },

  4: {
    question: "If a piece needs more time to look right, even if it hurts profitability, you:",
    options: [
      ["Prioritize the outcome — reputation matters.", ["ArtMetalAligned", "Disciplined"]],
      ["Balance quality against time carefully.", ["ArtMetalAligned", "Flexible"]],
      ["Feel stressed choosing between time and finish.", ["ArtMetalMisaligned", "Flexible"]],
      ["Prefer work where time overruns aren’t common.", ["ArtMetalMisaligned", "Flexible"]]
    ]
  },

  // PACE & PRESSURE (2)

  5: {
    question: "When progress is slow and visual payoff is delayed, you usually:",
    options: [
      ["Stay patient and trust the process.", ["ArtMetalAligned", "Disciplined"]],
      ["Push through, but motivation dips.", ["ArtMetalAligned", "Flexible"]],
      ["Get impatient and second-guess decisions.", ["ArtMetalMisaligned", "Flexible"]],
      ["Lose interest and rush to finish.", ["ArtMetalMisaligned", "Flexible"]]
    ]
  },

  6: {
    question: "How do you handle pressure that comes from taste, not specs?",
    options: [
      ["I’m comfortable working without a rulebook.", ["ArtMetalAligned", "Disciplined"]],
      ["I manage it with references and constraints.", ["ArtMetalAligned", "Flexible"]],
      ["It feels mentally exhausting.", ["ArtMetalMisaligned", "Flexible"]],
      ["I avoid pressure that can’t be objectively resolved.", ["ArtMetalMisaligned", "Flexible"]]
    ]
  },

  // REPETITION & TOLERANCE (2)

  7: {
    question: "Artistic metalwork involves long stretches of surface work (grinding, blending, finishing). You:",
    options: [
      ["Accept it — finish is the work.", ["ArtMetalAligned", "Disciplined"]],
      ["I do it, but it’s not energizing.", ["ArtMetalAligned", "Flexible"]],
      ["I get bored and sloppy.", ["ArtMetalMisaligned", "Flexible"]],
      ["I strongly dislike finish-heavy work.", ["ArtMetalMisaligned", "Flexible"]]
    ]
  },

  8: {
    question: "Repeating refinements until something feels right usually makes you:",
    options: [
      ["More focused and precise.", ["ArtMetalAligned", "Disciplined"]],
      ["Tired but compliant.", ["ArtMetalAligned", "Flexible"]],
      ["Frustrated and mentally drained.", ["ArtMetalMisaligned", "Flexible"]],
      ["Irritated and disengaged.", ["ArtMetalMisaligned", "Flexible"]]
    ]
  },

  // VISIBILITY & SCRUTINY (2)

  9: {
    question: "Your work will be looked at closely, photographed, and judged visually. You:",
    options: [
      ["Like that exposure — the work speaks.", ["ArtMetalAligned", "Disciplined"]],
      ["Accept it, but it adds pressure.", ["ArtMetalAligned", "Flexible"]],
      ["Feel exposed and tense.", ["ArtMetalMisaligned", "Flexible"]],
      ["Avoid highly visible work.", ["ArtMetalMisaligned", "Flexible"]]
    ]
  },

  10: {
    question: "If a structurally sound piece looks sloppy, you usually:",
    options: [
      ["Rework it — appearance matters.", ["ArtMetalAligned", "Disciplined"]],
      ["Fix it within reason.", ["ArtMetalAligned", "Flexible"]],
      ["Leave it — function comes first.", ["ArtMetalMisaligned", "Flexible"]],
      ["Move on — cosmetic fixes annoy me.", ["ArtMetalMisaligned", "Flexible"]]
    ]
  },

  // TRADE-SPECIFIC PAIN POINTS (3)

  11: {
    question: "How do you feel about constant experimentation with tools, jigs, heat, and forming techniques?",
    options: [
      ["I enjoy dialing systems in.", ["ArtMetalAligned", "Disciplined"]],
      ["I tolerate it, but prefer simplicity.", ["ArtMetalAligned", "Flexible"]],
      ["It frustrates me over time.", ["ArtMetalMisaligned", "Flexible"]],
      ["I avoid work that requires constant trial and error.", ["ArtMetalMisaligned", "Flexible"]]
    ]
  },

  12: {
    question: "When material behaves unpredictably, you usually:",
    options: [
      ["Adapt and adjust the plan.", ["ArtMetalAligned", "Disciplined"]],
      ["Pause and rethink carefully.", ["ArtMetalAligned", "Flexible"]],
      ["Get stressed and lose momentum.", ["ArtMetalMisaligned", "Flexible"]],
      ["Prefer materials that behave predictably.", ["ArtMetalMisaligned", "Flexible"]]
    ]
  },

  13: {
    question: "Artistic metalwork often means one-offs instead of repeatable systems. Your reaction:",
    options: [
      ["That’s ideal — variety keeps me engaged.", ["ArtMetalAligned", "Disciplined"]],
      ["I like some variety with structure.", ["ArtMetalAligned", "Flexible"]],
      ["I prefer repeatable production work.", ["ArtMetalMisaligned", "Flexible"]],
      ["One-offs sound mentally exhausting.", ["ArtMetalMisaligned", "Flexible"]]
    ]
  },

  // SELF-AWARENESS CHECK (1)

  14: {
    question: "Be honest: how strong is your pull toward artistic metalwork specifically?",
    options: [
      ["Strong — expression and craft matter to me.", ["ArtMetalAligned", "Disciplined"]],
      ["Moderate — I’m curious but cautious.", ["ArtMetalAligned", "Flexible"]],
      ["Low — I prefer spec-driven work.", ["ArtMetalMisaligned", "Flexible"]],
      ["Very low — this environment isn’t for me.", ["ArtMetalMisaligned", "Flexible"]]
    ]
  }
};

const tags = {
  ArtMetalAligned: 0,
  ArtMetalMisaligned: 0,
  Disciplined: 0,
  Flexible: 0
};

function interpretResults() {
  const aligned = tags.ArtMetalAligned || 0;
  const misaligned = tags.ArtMetalMisaligned || 0;
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
    disciplineLabel = "You tolerate ambiguity, iteration, and finish work without panicking or cutting corners.";
  } else if (disciplinePct >= 40) {
    disciplineLabel = "You can handle artistic metalwork, but boundaries and scope control will matter.";
  } else {
    disciplineLabel = "Subjective, finish-heavy work may grind you down over time.";
  }

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Artistic Metalwork (${fitPct}% alignment)`;
    description = `
You show strong alignment with artistic metalwork — comfort with ambiguity, tolerance for iteration, and willingness to live in unfinished states until the work feels right.<br><br>
<strong>Blunt truth:</strong> this lane rewards patience, taste, and restraint more than speed. If you need certainty, it will eat you. Your answers suggest you can stay in the discomfort long enough to make something intentional.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(60, 160, 120)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Artistic Metalwork (${fitPct}% alignment)`;
    description = `
You have some traits that fit artistic metalwork, but friction is likely without clear constraints.<br><br>
<strong>Translation:</strong> functional art, repeatable product lines, or tighter briefs may suit you better than fully open-ended creative work.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Artistic Metalwork (${fitPct}% alignment)`;
    description = `
Based on your answers, artistic metalwork will likely feel frustrating: subjective critique, slow visual payoff, and constant refinement without clear rules.<br><br>
<strong>This isn’t a failure.</strong> It usually means your strengths align better with spec-driven, faster, or more objective welding lanes.
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
