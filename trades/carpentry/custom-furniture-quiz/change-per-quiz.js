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
      ["Too many choices drain me quickly.", ["FurnitureMisaligned", "Flexible"]],
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

  // ---- HUMAN FRICTION / ATTRITION LAYER ----

  11: {
    question: "Custom furniture often involves vague or subjective feedback like “it doesn’t feel right.” You:",
    options: [
      ["Can work through it and refine until it clicks.", ["FurnitureAligned", "Disciplined"]],
      ["Can handle it, but it’s mentally tiring.", ["FurnitureAligned", "Flexible"]],
      ["Get frustrated without clear criteria.", ["FurnitureMisaligned", "Flexible"]],
      ["Strongly dislike subjective critique.", ["FurnitureMisaligned", "Flexible"]]
    ]
  },

  12: {
    question: "If a client or designer changes their mind mid-build, your reaction is:",
    options: [
      ["Annoying, but manageable — it’s part of custom work.", ["FurnitureAligned", "Disciplined"]],
      ["I’ll adapt, but it stresses me out.", ["FurnitureAligned", "Flexible"]],
      ["I push back hard against changes.", ["FurnitureMisaligned", "Flexible"]],
      ["That kind of uncertainty kills my motivation.", ["FurnitureMisaligned", "Flexible"]]
    ]
  },

  13: {
    question: "Custom furniture work often means long stretches working alone or quietly focused. You:",
    options: [
      ["Like it — deep focus suits me.", ["FurnitureAligned", "Disciplined"]],
      ["I’m okay with it most of the time.", ["FurnitureAligned", "Flexible"]],
      ["I need more interaction to stay energized.", ["FurnitureMisaligned", "Flexible"]],
      ["Isolation makes the work feel heavier fast.", ["FurnitureMisaligned", "Flexible"]]
    ]
  },

  14: {
    question: "Be honest: how strong is your pull toward custom furniture specifically?",
    options: [
      ["Strong — I’m drawn to building intentional, lasting pieces.", ["FurnitureAligned", "Disciplined"]],
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
  const fitScore = aligned - misaligned; // ~ -15 .. +15
  let fitPct = Math.round(((fitScore + 15) / 30) * 100);
  fitPct = Math.max(0, Math.min(100, fitPct));

  // Discipline axis (patience + follow-through)
  const disciplineScore = disciplined - flexible; // ~ -15 .. +15
  let disciplinePct = Math.round(((disciplineScore + 15) / 30) * 100);
  disciplinePct = Math.max(0, Math.min(100, disciplinePct));

  let disciplineLabel;
  if (disciplinePct >= 70)
    disciplineLabel = "You’re built for long builds, subjective refinement, and steady follow-through without needing constant momentum.";
  else if (disciplinePct >= 40)
    disciplineLabel = "You can do custom furniture work, but structure, clarity, and boundaries will matter a lot.";
  else
    disciplineLabel = "Custom furniture may feel mentally draining due to slow payoff, rework, and subjective expectations.";

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Custom Furniture (${fitPct}% alignment)`;
    description = `
You’re showing strong alignment with custom furniture — technically and psychologically.<br><br>
<strong>Blunt truth:</strong> this work is slow, subjective, and picky. The reward comes late, not daily. Your answers suggest you can live with that reality.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(60, 160, 120)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Custom Furniture (${fitPct}% alignment)`;
    description = `
You have some traits that fit custom furniture, but friction is likely unless conditions are right.<br><br>
<strong>Translation:</strong> the wrong client or unclear scope will exhaust you faster than the woodworking itself.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Custom Furniture (${fitPct}% alignment)`;
    description = `
Custom furniture will likely feel like constant friction — slow progress, subjective critique, frequent redo, and delayed payoff.<br><br>
<strong>This isn’t a failure.</strong> It usually means your strengths fit better in faster-paced or less taste-driven trades.
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
