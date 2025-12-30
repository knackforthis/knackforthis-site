const obj = {
  0: {
    question: "When work requires going slow to keep details clean, you usually:",
    options: [
      ["Slow down naturally — I’d rather be clean than fast.", ["FinishAligned", "Disciplined"]],
      ["Can slow down, but I have to force it.", ["FinishAligned", "Flexible"]],
      ["Get restless and start cutting corners.", ["FinishMisaligned", "Flexible"]],
      ["Lose patience fast — I need speed to stay engaged.", ["FinishMisaligned", "Flexible"]]
    ]
  },

  1: {
    question: "How do you react when a small flaw will be visible up close?",
    options: [
      ["I’d rather redo it than leave it visible.", ["FinishAligned", "Disciplined"]],
      ["I’ll fix it if it’s obvious, but I won’t chase perfection.", ["FinishAligned", "Flexible"]],
      ["If it functions, I don’t care much how it looks.", ["FinishMisaligned", "Flexible"]],
      ["Visible detail standards annoy me.", ["FinishMisaligned", "Flexible"]]
    ]
  },

  2: {
    question: "Finish carpentry often means repeating precise steps for long stretches. Your response:",
    options: [
      ["That’s fine — repetition is how quality happens.", ["FinishAligned", "Disciplined"]],
      ["I can do it, but I need breaks and variety.", ["FinishAligned", "Flexible"]],
      ["Repetition drains me quickly.", ["FinishMisaligned", "Flexible"]],
      ["I avoid work that feels repetitive and picky.", ["FinishMisaligned", "Flexible"]]
    ]
  },

  3: {
    question: "How do you feel about measuring, re-checking, then re-checking again?",
    options: [
      ["Normal. I prefer certainty before cutting.", ["FinishAligned", "Disciplined"]],
      ["I can do it, but I don’t enjoy it.", ["FinishAligned", "Flexible"]],
      ["I get impatient and want to just move.", ["FinishMisaligned", "Flexible"]],
      ["That level of checking would drive me nuts.", ["FinishMisaligned", "Flexible"]]
    ]
  },

  4: {
    question: "When a cut or fit is slightly off, you tend to:",
    options: [
      ["Correct it until it’s clean and consistent.", ["FinishAligned", "Disciplined"]],
      ["Patch it if needed, then keep moving.", ["FinishAligned", "Flexible"]],
      ["Accept it if it’s not catastrophic.", ["FinishMisaligned", "Flexible"]],
      ["Get frustrated and lose momentum.", ["FinishMisaligned", "Flexible"]]
    ]
  },

  5: {
    question: "Which environment feels most natural to you?",
    options: [
      ["Indoor detail work where finish quality matters.", ["FinishAligned", "Disciplined"]],
      ["Indoor work, but I like some variety in tasks.", ["FinishAligned", "Flexible"]],
      ["Fast-paced work where speed matters more than perfection.", ["FinishMisaligned", "Flexible"]],
      ["I don’t like detail-focused environments.", ["FinishMisaligned", "Flexible"]]
    ]
  },

  6: {
    question: "When someone critiques your work visually (gaps, alignment, symmetry), you usually:",
    options: [
      ["Prefer it — I want the work clean.", ["FinishAligned", "Disciplined"]],
      ["Handle it fine, but it can sting.", ["FinishAligned", "Flexible"]],
      ["Get defensive because it feels nitpicky.", ["FinishMisaligned", "Flexible"]],
      ["Hate that kind of critique and avoid it.", ["FinishMisaligned", "Flexible"]]
    ]
  },

  7: {
    question: "How do you handle long projects where progress is slow but detail matters?",
    options: [
      ["I can stay steady and consistent.", ["FinishAligned", "Disciplined"]],
      ["I can do it with structure and milestones.", ["FinishAligned", "Flexible"]],
      ["I struggle if there’s no fast payoff.", ["FinishMisaligned", "Flexible"]],
      ["I lose interest quickly if results aren’t immediate.", ["FinishMisaligned", "Flexible"]]
    ]
  },

  8: {
    question: "How comfortable are you with precision tools and careful setups (miters, nailers, jigs)?",
    options: [
      ["Comfortable, or willing to practice until I am.", ["FinishAligned", "Disciplined"]],
      ["Willing, but cautious and slower to trust myself.", ["FinishAligned", "Flexible"]],
      ["I prefer rougher work where exactness matters less.", ["FinishMisaligned", "Flexible"]],
      ["I’d rather avoid that kind of precision setup.", ["FinishMisaligned", "Flexible"]]
    ]
  },

  9: {
    question: "Which statement sounds most like you?",
    options: [
      ["I care a lot about clean lines, alignment, and consistency.", ["FinishAligned", "Disciplined"]],
      ["I like clean work, but I’m not obsessive.", ["FinishAligned", "Flexible"]],
      ["I care more about function than polish.", ["FinishMisaligned", "Flexible"]],
      ["I don’t enjoy detail standards at all.", ["FinishMisaligned", "Flexible"]]
    ]
  },

  10: {
    question: "Finish carpentry often involves rework. How do you respond to redoing something?",
    options: [
      ["It’s part of quality — redo is better than sloppy.", ["FinishAligned", "Disciplined"]],
      ["I can redo, but I hate wasting time.", ["FinishAligned", "Flexible"]],
      ["Redoing kills my motivation.", ["FinishMisaligned", "Flexible"]],
      ["I avoid work where redoing is common.", ["FinishMisaligned", "Flexible"]]
    ]
  },

  // ---- HUMAN FRICTION / ATTRITION LAYER ----

  11: {
    question: "Finish carpentry often happens while homeowners, designers, or inspectors watch. You:",
    options: [
      ["Stay focused — observation doesn’t bother me.", ["FinishAligned", "Disciplined"]],
      ["Can handle it, but it adds pressure.", ["FinishAligned", "Flexible"]],
      ["It makes me tense and error-prone.", ["FinishMisaligned", "Flexible"]],
      ["I strongly dislike being watched while working.", ["FinishMisaligned", "Flexible"]]
    ]
  },

  12: {
    question: "If you’re told to redo finish work because it doesn’t meet someone’s taste (not code), you:",
    options: [
      ["Redo it — visible standards are the job.", ["FinishAligned", "Disciplined"]],
      ["Redo it, but it irritates me.", ["FinishAligned", "Flexible"]],
      ["Push back unless it’s clearly wrong.", ["FinishMisaligned", "Flexible"]],
      ["That kind of feedback kills my motivation.", ["FinishMisaligned", "Flexible"]]
    ]
  },

  13: {
    question: "Finish carpentry often mixes precision with schedule pressure. When those conflict, you:",
    options: [
      ["Protect quality even if it takes longer.", ["FinishAligned", "Disciplined"]],
      ["Try to balance both, depending on context.", ["FinishAligned", "Flexible"]],
      ["Lean toward speed to avoid falling behind.", ["FinishMisaligned", "Flexible"]],
      ["Get stressed and lose focus entirely.", ["FinishMisaligned", "Flexible"]]
    ]
  },

  14: {
    question: "Be honest: how strong is your pull toward finish carpentry specifically?",
    options: [
      ["Strong — I’m drawn to visible detail and high standards.", ["FinishAligned", "Disciplined"]],
      ["Moderate — I’m curious, but not fully sure yet.", ["FinishAligned", "Flexible"]],
      ["Low — I’m more interested in other carpentry paths.", ["FinishMisaligned", "Flexible"]],
      ["Very low — this probably isn’t my lane.", ["FinishMisaligned", "Flexible"]]
    ]
  }
};

const tags = {
  FinishAligned: 0,
  FinishMisaligned: 0,
  Disciplined: 0,
  Flexible: 0
};

function interpretResults() {
  const aligned = tags.FinishAligned || 0;
  const misaligned = tags.FinishMisaligned || 0;
  const disciplined = tags.Disciplined || 0;
  const flexible = tags.Flexible || 0;

  // Alignment axis (finish fit)
  const fitScore = aligned - misaligned; // ~ -15 .. +15
  let fitPct = Math.round(((fitScore + 15) / 30) * 100);
  fitPct = Math.max(0, Math.min(100, fitPct));

  // Discipline axis (patience + consistency)
  const disciplineScore = disciplined - flexible; // ~ -15 .. +15
  let disciplinePct = Math.round(((disciplineScore + 15) / 30) * 100);
  disciplinePct = Math.max(0, Math.min(100, disciplinePct));

  let disciplineLabel;
  if (disciplinePct >= 70)
    disciplineLabel = "You’re built for slow, visible, high-standards work without needing constant momentum.";
  else if (disciplinePct >= 40)
    disciplineLabel = "You can handle finish work, but environment and expectations will matter a lot.";
  else
    disciplineLabel = "Finish carpentry may feel mentally exhausting due to visible standards, critique, and redo pressure.";

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Finish Carpentry (${fitPct}% alignment)`;
    description = `
You’re showing strong alignment with finish carpentry — technically and psychologically.<br><br>
<strong>Blunt truth:</strong> finish work is slow, visible, and unforgiving. Your answers suggest that pressure won’t break your focus.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(60, 160, 120)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Finish Carpentry (${fitPct}% alignment)`;
    description = `
You have some traits that work in finish carpentry, but friction is likely under the wrong conditions.<br><br>
<strong>Translation:</strong> the wrong supervisor, client, or schedule will exhaust you faster than the cutting itself.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Finish Carpentry (${fitPct}% alignment)`;
    description = `
Finish carpentry will likely feel like constant friction — visible mistakes, constant critique, and redo under pressure.<br><br>
<strong>This isn’t a personal knock.</strong> It usually means your strengths fit better in faster-paced or less visibility-heavy trades.
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
