const obj = {
  0: {
    question: "When a project needs a repeatable process (label parts, keep stacks organized, follow a sequence), you usually:",
    options: [
      ["Love it — systems keep quality consistent.", ["CabinetAligned", "Disciplined"]],
      ["I can do it, but I have to remind myself.", ["CabinetAligned", "Flexible"]],
      ["I start organized, then drift into chaos.", ["CabinetMisaligned", "Flexible"]],
      ["I hate structured workflows — it feels restrictive.", ["CabinetMisaligned", "Flexible"]]
    ]
  },

  1: {
    question: "Cabinet making punishes small measurement drift across many parts. Your reaction:",
    options: [
      ["That’s why I measure/check early — I don’t want cumulative error.", ["CabinetAligned", "Disciplined"]],
      ["I’ll check, but I can slip when the pace picks up.", ["CabinetAligned", "Flexible"]],
      ["I tend to rely on ‘close enough’ unless something fails.", ["CabinetMisaligned", "Flexible"]],
      ["That level of precision across many pieces sounds miserable.", ["CabinetMisaligned", "Flexible"]]
    ]
  },

  2: {
    question: "How do you feel about repetitive builds (multiple boxes/parts that must match)?",
    options: [
      ["Great — repetition is where craftsmanship shows.", ["CabinetAligned", "Disciplined"]],
      ["Fine, but I need small variations to stay engaged.", ["CabinetAligned", "Flexible"]],
      ["Repetition drains me fast.", ["CabinetMisaligned", "Flexible"]],
      ["I avoid work that’s ‘same thing again’ all day.", ["CabinetMisaligned", "Flexible"]]
    ]
  },

  3: {
    question: "Cabinet work often involves hardware tuning (hinges, slides, reveals). Your response:",
    options: [
      ["I’m fine adjusting until it’s right — that’s part of the job.", ["CabinetAligned", "Disciplined"]],
      ["I can do it, but too much tweaking frustrates me.", ["CabinetAligned", "Flexible"]],
      ["If it opens/closes, I don’t care about perfect alignment.", ["CabinetMisaligned", "Flexible"]],
      ["I hate fiddly adjustments — I’d rather do another kind of carpentry.", ["CabinetMisaligned", "Flexible"]]
    ]
  },

  4: {
    question: "When a part is slightly off, you tend to:",
    options: [
      ["Fix it properly now so it doesn’t cascade later.", ["CabinetAligned", "Disciplined"]],
      ["Patch it if needed, but I try not to lose time.", ["CabinetAligned", "Flexible"]],
      ["Ignore it unless it becomes a visible problem.", ["CabinetMisaligned", "Flexible"]],
      ["Get annoyed and lose momentum.", ["CabinetMisaligned", "Flexible"]]
    ]
  },

  5: {
    question: "Which environment sounds more natural to you?",
    options: [
      ["Shop workflow: controlled, measured, repeatable precision.", ["CabinetAligned", "Disciplined"]],
      ["Mostly shop work, with some variety and installs.", ["CabinetAligned", "Flexible"]],
      ["Jobsite pace: changing conditions, faster execution.", ["CabinetMisaligned", "Flexible"]],
      ["Anything but detail-heavy shop work.", ["CabinetMisaligned", "Flexible"]]
    ]
  },

  6: {
    question: "Sheet goods + part management (cut lists, labeling, grain direction, edge banding) feels:",
    options: [
      ["Satisfying — it’s a clean system when done right.", ["CabinetAligned", "Disciplined"]],
      ["Okay, but it’s not my favorite part.", ["CabinetAligned", "Flexible"]],
      ["Annoying — too much planning and prep.", ["CabinetMisaligned", "Flexible"]],
      ["Like a headache — I’d rather not deal with it.", ["CabinetMisaligned", "Flexible"]]
    ]
  },

  7: {
    question: "If a cabinet run needs leveling or shimming because walls/floors are out of whack, you usually:",
    options: [
      ["Treat it like normal install reality and work the problem.", ["CabinetAligned", "Disciplined"]],
      ["I can do it, but it stresses me out.", ["CabinetAligned", "Flexible"]],
      ["I hate fighting imperfect houses — it feels unfair.", ["CabinetMisaligned", "Flexible"]],
      ["I’d rather avoid installs entirely.", ["CabinetMisaligned", "Flexible"]]
    ]
  },

  8: {
    question: "How do you feel about clean finishes and surfaces (sanding discipline, edge quality, tear-out control)?",
    options: [
      ["I care a lot — surfaces are the product.", ["CabinetAligned", "Disciplined"]],
      ["I care, but I’m not naturally obsessive.", ["CabinetAligned", "Flexible"]],
      ["Function matters more than surface perfection.", ["CabinetMisaligned", "Flexible"]],
      ["I don’t like detail work on surfaces at all.", ["CabinetMisaligned", "Flexible"]]
    ]
  },

  9: {
    question: "When someone points out small alignment issues (doors slightly off, reveals inconsistent), you usually:",
    options: [
      ["Want to fix it — I prefer the work to look intentional.", ["CabinetAligned", "Disciplined"]],
      ["I’ll fix what’s noticeable, but I won’t chase every tiny thing.", ["CabinetAligned", "Flexible"]],
      ["It feels nitpicky if the cabinet still functions.", ["CabinetMisaligned", "Flexible"]],
      ["I hate that kind of critique and avoid it.", ["CabinetMisaligned", "Flexible"]]
    ]
  },

  10: {
    question: "Cabinet making involves lots of ‘unseen’ work (planning, jigs, test fits) before anything looks finished. You:",
    options: [
      ["Like it — prep is how outcomes stay clean.", ["CabinetAligned", "Disciplined"]],
      ["I can do it, but I need milestones to stay motivated.", ["CabinetAligned", "Flexible"]],
      ["I get impatient if I can’t see progress quickly.", ["CabinetMisaligned", "Flexible"]],
      ["I lose interest fast without visible payoff.", ["CabinetMisaligned", "Flexible"]]
    ]
  },

  // ---- HUMAN FRICTION LAYER ----

  11: {
    question: "Cabinet work often involves supervisors, designers, or clients reviewing small details. How does that land with you?",
    options: [
      ["Fine — shared standards help keep quality high.", ["CabinetAligned", "Disciplined"]],
      ["I can handle it if feedback is reasonable.", ["CabinetAligned", "Flexible"]],
      ["It gets irritating when people micromanage details.", ["CabinetMisaligned", "Flexible"]],
      ["I strongly dislike others critiquing fine details.", ["CabinetMisaligned", "Flexible"]]
    ]
  },

  12: {
    question: "If you're asked to redo a cabinet detail that technically works but 'doesn’t look right,' you:",
    options: [
      ["Redo it — visual precision matters in this trade.", ["CabinetAligned", "Disciplined"]],
      ["Redo it, but it annoys me.", ["CabinetAligned", "Flexible"]],
      ["Push back unless the issue is obvious.", ["CabinetMisaligned", "Flexible"]],
      ["Get frustrated and disengage.", ["CabinetMisaligned", "Flexible"]]
    ]
  },

  13: {
    question: "Cabinet shops can be quiet, focused, and repetitive for long stretches. Your reaction:",
    options: [
      ["That environment helps me stay dialed in.", ["CabinetAligned", "Disciplined"]],
      ["I’m okay with it most days.", ["CabinetAligned", "Flexible"]],
      ["I need more interaction or variety to stay sane.", ["CabinetMisaligned", "Flexible"]],
      ["I feel boxed in fast in quiet, repetitive settings.", ["CabinetMisaligned", "Flexible"]]
    ]
  },

  14: {
    question: "Be honest: how strong is your pull toward cabinet making specifically?",
    options: [
      ["Strong — systems, precision, and clean outcomes appeal to me.", ["CabinetAligned", "Disciplined"]],
      ["Moderate — I’m curious, but not fully sure.", ["CabinetAligned", "Flexible"]],
      ["Low — I’m more drawn to other carpentry paths.", ["CabinetMisaligned", "Flexible"]],
      ["Very low — this probably isn’t my environment.", ["CabinetMisaligned", "Flexible"]]
    ]
  }
};

const tags = {
  CabinetAligned: 0,
  CabinetMisaligned: 0,
  Disciplined: 0,
  Flexible: 0
};

function interpretResults() {
  const aligned = tags.CabinetAligned || 0;
  const misaligned = tags.CabinetMisaligned || 0;
  const disciplined = tags.Disciplined || 0;
  const flexible = tags.Flexible || 0;

  const fitScore = aligned - misaligned;
  let fitPct = Math.round(((fitScore + 15) / 30) * 100);
  fitPct = Math.max(0, Math.min(100, fitPct));

  const disciplineScore = disciplined - flexible;
  let disciplinePct = Math.round(((disciplineScore + 15) / 30) * 100);
  disciplinePct = Math.max(0, Math.min(100, disciplinePct));

  let disciplineLabel;
  if (disciplinePct >= 70)
    disciplineLabel = "You’re built for structured workflows, critique tolerance, and consistency under repetition.";
  else if (disciplinePct >= 40)
    disciplineLabel = "You can survive cabinet workflows, but environment and expectations will matter a lot.";
  else
    disciplineLabel = "Cabinet making may feel mentally draining due to precision demands and critique frequency.";

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Cabinet Making (${fitPct}% alignment)`;
    description = `
You show strong alignment with cabinet making — technically and psychologically.<br><br>
<strong>Blunt truth:</strong> this trade rewards people who tolerate repetition, critique, and slow perfection. Your answers suggest that friction won’t break you.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(60, 160, 120)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Cabinet Making (${fitPct}% alignment)`;
    description = `
You have some traits that work here, but cabinet making may feel situational rather than natural.<br><br>
<strong>Translation:</strong> the right shop could make this tolerable — the wrong one will grind you down.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Cabinet Making (${fitPct}% alignment)`;
    description = `
Cabinet making will likely feel like constant friction — detail critique, repetition, and precision pressure without much release.<br><br>
<strong>This isn’t a failure.</strong> It usually means your strengths belong in carpentry paths with faster pace, field problem-solving, or looser tolerances.
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
