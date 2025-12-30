// custom-furniture-quiz.js
// Carpentry > Custom Furniture

const obj = {
  0: {
    question: "Custom furniture often involves long builds with lots of planning before anything looks finished. You usually:",
    options: [
      ["Like it — I enjoy designing and building step-by-step toward a clean outcome.", ["FurnitureAligned", "Disciplined"]],
      ["I can do it, but I need milestones to stay motivated.", ["FurnitureAligned", "Flexible"]],
      ["I get impatient when progress isn’t visible quickly.", ["FurnitureMisaligned", "Flexible"]],
      ["I lose interest fast if I can’t see fast payoff.", ["FurnitureMisaligned", "Flexible"]]
    ]
  },

  1: {
    question: "When a piece must be square, flat, and consistent (no wobble, no twist), your reaction is:",
    options: [
      ["That’s the point — I want it true, even if it takes longer.", ["FurnitureAligned", "Disciplined"]],
      ["I can do it, but chasing perfection can frustrate me.", ["FurnitureAligned", "Flexible"]],
      ["If it mostly works, I’m not stressing tiny issues.", ["FurnitureMisaligned", "Flexible"]],
      ["That level of precision sounds annoying to me.", ["FurnitureMisaligned", "Flexible"]]
    ]
  },

  2: {
    question: "How do you feel about measuring, marking, and re-checking before committing to cuts?",
    options: [
      ["Normal — I prefer certainty before I cut.", ["FurnitureAligned", "Disciplined"]],
      ["I can do it, but I don’t love it.", ["FurnitureAligned", "Flexible"]],
      ["I tend to rush and fix problems later.", ["FurnitureMisaligned", "Flexible"]],
      ["I hate checking that much — it slows me down too much.", ["FurnitureMisaligned", "Flexible"]]
    ]
  },

  3: {
    question: "Custom furniture has a lot of surface work (sanding, edge treatment, cleanup, finish prep). You:",
    options: [
      ["Accept it — the surface is the product.", ["FurnitureAligned", "Disciplined"]],
      ["I’ll do it, but it’s not my favorite part.", ["FurnitureAligned", "Flexible"]],
      ["I get bored fast doing sanding/finish prep.", ["FurnitureMisaligned", "Flexible"]],
      ["I strongly dislike surface/detail prep.", ["FurnitureMisaligned", "Flexible"]]
    ]
  },

  4: {
    question: "When joinery or fit is slightly off, you usually:",
    options: [
      ["Fix it properly — bad fit will haunt the whole piece.", ["FurnitureAligned", "Disciplined"]],
      ["Patch it if needed, but I try not to lose time.", ["FurnitureAligned", "Flexible"]],
      ["Ignore it if it won’t fail structurally.", ["FurnitureMisaligned", "Flexible"]],
      ["Get frustrated and lose momentum.", ["FurnitureMisaligned", "Flexible"]]
    ]
  },

  5: {
    question: "How do you feel about making one-off decisions (design choices, proportions, custom details)?",
    options: [
      ["I like it — creative problem-solving with constraints fits me.", ["FurnitureAligned", "Disciplined"]],
      ["I can do it, but I prefer templates or references.", ["FurnitureAligned", "Flexible"]],
      ["Too many choices drain me quickly.", ["FurnitureMisaligned", "Flexible"]],
      ["I prefer work with fixed instructions.", ["FurnitureMisaligned", "Flexible"]]
    ]
  },

  6: {
    question: "Custom furniture includes fixing mistakes (re-cutting, re-milling, re-sanding). You:",
    options: [
      ["Expect it — rework is part of quality.", ["FurnitureAligned", "Disciplined"]],
      ["I can redo things, but it annoys me.", ["FurnitureAligned", "Flexible"]],
      ["Redoing kills my motivation.", ["FurnitureMisaligned", "Flexible"]],
      ["I avoid work where redo is common.", ["FurnitureMisaligned", "Flexible"]]
    ]
  },

  7: {
    question: "How do you handle slow, repetitive precision work (identical parts, careful assembly)?",
    options: [
      ["Fine — repetition is how quality happens.", ["FurnitureAligned", "Disciplined"]],
      ["I can do it, but I need variety.", ["FurnitureAligned", "Flexible"]],
      ["Repetition drains me quickly.", ["FurnitureMisaligned", "Flexible"]],
      ["I avoid picky, repetitive work.", ["FurnitureMisaligned", "Flexible"]]
    ]
  },

  8: {
    question: "When someone critiques a piece visually (symmetry, proportion, alignment), you usually:",
    options: [
      ["Prefer it — I want it intentional.", ["FurnitureAligned", "Disciplined"]],
      ["I can take feedback, but it stings.", ["FurnitureAligned", "Flexible"]],
      ["It feels nitpicky if it functions.", ["FurnitureMisaligned", "Flexible"]],
      ["I hate that kind of critique.", ["FurnitureMisaligned", "Flexible"]]
    ]
  },

  9: {
    question: "Custom furniture means managing wood behavior (movement, grain, tear-out). You:",
    options: [
      ["Like it — material behavior is part of the craft.", ["FurnitureAligned", "Disciplined"]],
      ["I can handle it, but it feels unpredictable.", ["FurnitureAligned", "Flexible"]],
      ["I get annoyed when materials fight back.", ["FurnitureMisaligned", "Flexible"]],
      ["I avoid work where materials misbehave.", ["FurnitureMisaligned", "Flexible"]]
    ]
  },

  10: {
    question: "Which environment sounds more natural?",
    options: [
      ["Shop work with clean builds and finish standards.", ["FurnitureAligned", "Disciplined"]],
      ["Mostly shop work with some variety.", ["FurnitureAligned", "Flexible"]],
      ["Jobsite work with faster payoff.", ["FurnitureMisaligned", "Flexible"]],
      ["Anything but detail-heavy shop work.", ["FurnitureMisaligned", "Flexible"]]
    ]
  },

  // ---- PEOPLE / ATTRITION LAYER ----

  11: {
    question: "Clients often change their mind mid-build (details, proportions, finish). You:",
    options: [
      ["Adapt calmly and re-scope the work.", ["FurnitureAligned", "Disciplined"]],
      ["Can handle it, but it drains me.", ["FurnitureAligned", "Flexible"]],
      ["Get irritated when decisions shift.", ["FurnitureMisaligned", "Flexible"]],
      ["Strongly dislike revision-driven work.", ["FurnitureMisaligned", "Flexible"]]
    ]
  },

  12: {
    question: "When a piece is ‘almost right’ but not perfect, you usually:",
    options: [
      ["Fix it — close isn’t good enough.", ["FurnitureAligned", "Disciplined"]],
      ["Fix it if time allows.", ["FurnitureAligned", "Flexible"]],
      ["Accept it and move on.", ["FurnitureMisaligned", "Flexible"]],
      ["Get stuck obsessing or shut down.", ["FurnitureMisaligned", "Flexible"]]
    ]
  },

  13: {
    question: "After weeks of detail-heavy, solo-focused work, you tend to:",
    options: [
      ["Stay steady — this pace fits me.", ["FurnitureAligned", "Disciplined"]],
      ["Manage it, but mental fatigue builds.", ["FurnitureAligned", "Flexible"]],
      ["Feel drained and irritable.", ["FurnitureMisaligned", "Flexible"]],
      ["Lose motivation completely.", ["FurnitureMisaligned", "Flexible"]]
    ]
  },

  14: {
    question: "Be honest: does custom furniture appeal to you long-term?",
    options: [
      ["Yes — patience, detail, and craft fit me.", ["FurnitureAligned", "Disciplined"]],
      ["Somewhat — I’m interested but cautious.", ["FurnitureAligned", "Flexible"]],
      ["Not really — I prefer faster payoff work.", ["FurnitureMisaligned", "Flexible"]],
      ["No — this isn’t my environment.", ["FurnitureMisaligned", "Flexible"]]
    ]
  }
};

const tags = {
  FurnitureAligned: 0,
  FurnitureMisaligned: 0,
  Disciplined: 0,
  Flexible: 0
};

function interpretResults() {
  const aligned = tags.FurnitureAligned || 0;
  const misaligned = tags.FurnitureMisaligned || 0;
  const disciplined = tags.Disciplined || 0;
  const flexible = tags.Flexible || 0;

  // Alignment axis (-15 .. +15)
  const fitScore = aligned - misaligned;
  let fitPct = Math.round(((fitScore + 15) / 30) * 100);
  fitPct = Math.max(0, Math.min(100, fitPct));

  // Discipline axis (patience + finish tolerance + people pressure)
  const disciplineScore = disciplined - flexible;
  let disciplinePct = Math.round(((disciplineScore + 15) / 30) * 100);
  disciplinePct = Math.max(0, Math.min(100, disciplinePct));

  let disciplineLabel;
  if (disciplinePct >= 70)
    disciplineLabel =
      "You’re built for long builds, revision cycles, and finish-level standards without losing focus or motivation.";
  else if (disciplinePct >= 40)
    disciplineLabel =
      "You can do custom furniture work, but consistency may depend on structure, deadlines, and managing revision fatigue.";
  else
    disciplineLabel =
      "Custom furniture may feel draining due to slow progress, subjective standards, and prolonged detail focus.";

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Custom Furniture (${fitPct}% alignment)`;
    description = `
You’re showing strong alignment with custom furniture — patience, precision tolerance, and comfort with invisible labor and revision cycles.<br><br>
<strong>Blunt truth:</strong> this lane rewards people who value finish quality and quiet craft more than speed or volume. Your answers suggest that won’t break you.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(60, 160, 120)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Custom Furniture (${fitPct}% alignment)`;
    description = `
You have some traits that work in custom furniture, but friction may appear around revision creep, slow payoff, or sustained detail focus.<br><br>
<strong>Translation:</strong> you might do well with the right shop structure — or prefer carpentry paths with faster cycles and clearer endpoints.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Custom Furniture (${fitPct}% alignment)`;
    description = `
Based on your answers, custom furniture will likely feel like constant friction: slow progress, subjective standards, revision loops, and finish discipline that never fully turns off.<br><br>
<strong>This isn’t a personal knock.</strong> It usually means your strengths fit better in faster-moving carpentry or trade environments.
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
