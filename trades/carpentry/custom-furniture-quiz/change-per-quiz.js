// custom-furniture-quiz.js

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
    question: "How do you feel about making one-off decisions (design choices, proportions, small custom details)?",
    options: [
      ["I like it — I enjoy creative problem-solving with constraints.", ["FurnitureAligned", "Disciplined"]],
      ["I can do it, but I prefer some templates or standards.", ["FurnitureAligned", "Flexible"]],
      ["Too many choices drains me quickly.", ["FurnitureMisaligned", "Flexible"]],
      ["I prefer work with clear instructions, not design decisions.", ["FurnitureMisaligned", "Flexible"]]
    ]
  },

  6: {
    question: "Custom furniture usually includes fixing small mistakes (re-cutting parts, re-milling, filling, re-sanding). You:",
    options: [
      ["Expect it — rework is part of getting it right.", ["FurnitureAligned", "Disciplined"]],
      ["I can redo things, but it annoys me.", ["FurnitureAligned", "Flexible"]],
      ["Redoing kills my motivation.", ["FurnitureMisaligned", "Flexible"]],
      ["I avoid work where redo is common.", ["FurnitureMisaligned", "Flexible"]]
    ]
  },

  7: {
    question: "How do you handle slow, repetitive precision work (cutting multiple identical parts, careful assembly)?",
    options: [
      ["Fine — repetition is how quality happens.", ["FurnitureAligned", "Disciplined"]],
      ["I can do it, but I need breaks and variety.", ["FurnitureAligned", "Flexible"]],
      ["Repetition drains me quickly.", ["FurnitureMisaligned", "Flexible"]],
      ["I avoid work that feels repetitive and picky.", ["FurnitureMisaligned", "Flexible"]]
    ]
  },

  8: {
    question: "When someone critiques a piece visually (symmetry, proportion, alignment), you usually:",
    options: [
      ["Prefer it — I want the piece to look intentional.", ["FurnitureAligned", "Disciplined"]],
      ["I can take feedback, but it can sting.", ["FurnitureAligned", "Flexible"]],
      ["It feels nitpicky if it functions.", ["FurnitureMisaligned", "Flexible"]],
      ["I hate that kind of critique and avoid it.", ["FurnitureMisaligned", "Flexible"]]
    ]
  },

  9: {
    question: "Custom furniture often means dealing with wood behavior (movement, grain, tear-out, warping). You:",
    options: [
      ["Like it — it’s part of the craft and I’ll learn to manage it.", ["FurnitureAligned", "Disciplined"]],
      ["I can handle it, but it feels unpredictable sometimes.", ["FurnitureAligned", "Flexible"]],
      ["I get annoyed when materials don’t behave.", ["FurnitureMisaligned", "Flexible"]],
      ["I’d rather avoid work where materials can ‘fight back.’", ["FurnitureMisaligned", "Flexible"]]
    ]
  },

  10: {
    question: "Which environment sounds more natural to you?",
    options: [
      ["Shop work where the goal is clean builds and clean finishes.", ["FurnitureAligned", "Disciplined"]],
      ["Mostly shop work, but I want variety (install, mix of tasks).", ["FurnitureAligned", "Flexible"]],
      ["Jobsite work with faster pace and fewer aesthetic standards.", ["FurnitureMisaligned", "Flexible"]],
      ["Anything but detail-heavy shop work.", ["FurnitureMisaligned", "Flexible"]]
    ]
  },

  11: {
    question: "Be honest: how strong is your pull toward custom furniture specifically?",
    options: [
      ["Strong — I’m drawn to building pieces that look intentional and last.", ["FurnitureAligned", "Disciplined"]],
      ["Moderate — I’m curious, but not fully sure yet.", ["FurnitureAligned", "Flexible"]],
      ["Low — I’m more interested in other carpentry lanes.", ["FurnitureMisaligned", "Flexible"]],
      ["Very low — this probably isn’t my environment.", ["FurnitureMisaligned", "Flexible"]]
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

  // Alignment axis (furniture fit)
  const fitScore = aligned - misaligned; // ~ -12 .. +12
  let fitPct = Math.round(((fitScore + 12) / 24) * 100);
  fitPct = Math.max(0, Math.min(100, fitPct));

  // Discipline axis (patience + follow-through)
  const disciplineScore = disciplined - flexible; // ~ -12 .. +12
  let disciplinePct = Math.round(((disciplineScore + 12) / 24) * 100);
  disciplinePct = Math.max(0, Math.min(100, disciplinePct));

  let disciplineLabel;
  if (disciplinePct >= 70) disciplineLabel = "You’re built for long builds: steady focus, careful execution, and follow-through without needing chaos to stay engaged.";
  else if (disciplinePct >= 40) disciplineLabel = "You can do furniture work, but consistency may depend on structure, deadlines, and clear milestones.";
  else disciplineLabel = "Furniture work may feel mentally irritating because it demands patience, surface discipline, and slow progress without immediate payoff.";

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Custom Furniture (${fitPct}% alignment)`;
    description = `
You’re showing strong alignment with custom furniture — patience for long builds, tolerance for precision, and comfort with finish-level standards.<br><br>
<strong>Blunt truth:</strong> custom furniture is slow, picky, and full of “invisible work” before it looks impressive. Your answers suggest that won’t break you.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(60, 160, 120)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Custom Furniture (${fitPct}% alignment)`;
    description = `
You’ve got some traits that work in custom furniture, but not enough consistency to assume you’ll enjoy the day-to-day without friction.<br><br>
<strong>Translation:</strong> you might do well with the right structure (clear designs, deadlines, a shop workflow) — or you might prefer a carpentry lane with faster payoff and fewer finish demands.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Custom Furniture (${fitPct}% alignment)`;
    description = `
Based on your answers, custom furniture will probably feel like constant friction: slow progress, surface discipline, precision demands, and frequent rework.<br><br>
<strong>This isn’t a personal knock.</strong> It usually means your strengths fit better in paths where speed, field problem-solving, or structural outcomes matter more than finish-level refinement.
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
