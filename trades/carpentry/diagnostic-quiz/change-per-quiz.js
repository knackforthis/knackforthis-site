const obj = {
  0: {
    question: "Which describes your real-world exposure to carpentry-type tasks?",
    options: [
      ["I’ve done hands-on building/repair work (even basic) and didn’t hate it.", ["CarpentryAligned", "Grit"]],
      ["I’ve tried a few small projects, but I’m still unsure.", ["CarpentryAligned", "Comfort"]],
      ["I’ve mostly avoided this kind of work, but I’m curious.", ["CarpentryMisaligned", "Comfort"]],
      ["I avoid hands-on building work whenever I can.", ["CarpentryMisaligned", "Comfort"]]
    ]
  },

  1: {
    question: "How do you feel about measuring, marking, and re-checking before cutting?",
    options: [
      ["I’m fine slowing down to get it right.", ["CarpentryAligned", "Grit"]],
      ["I can do it, but it’s not my favorite.", ["CarpentryAligned", "Comfort"]],
      ["I get impatient with that level of detail.", ["CarpentryMisaligned", "Comfort"]],
      ["I strongly dislike precision tasks like that.", ["CarpentryMisaligned", "Comfort"]]
    ]
  },

  2: {
    question: "You’re working around sawdust, noise, and safety gear most days. Your reaction is:",
    options: [
      ["That’s normal for the job — I can deal with it.", ["CarpentryAligned", "Grit"]],
      ["I can tolerate it, but I’d prefer less of it.", ["CarpentryAligned", "Comfort"]],
      ["That sounds draining day after day.", ["CarpentryMisaligned", "Comfort"]],
      ["That’s a dealbreaker for me.", ["CarpentryMisaligned", "Comfort"]]
    ]
  },

  3: {
    question: "How do you feel about being on your feet, lifting, kneeling, and working with your hands for hours?",
    options: [
      ["That kind of physical work is manageable for me.", ["CarpentryAligned", "Grit"]],
      ["I can do some of it, but I’d need the right conditions.", ["CarpentryAligned", "Comfort"]],
      ["I don’t handle physical strain well.", ["CarpentryMisaligned", "Comfort"]],
      ["I avoid physically demanding work.", ["CarpentryMisaligned", "Comfort"]]
    ]
  },

  4: {
    question: "A board is slightly warped and nothing lines up perfectly. What feels most true?",
    options: [
      ["I can work with imperfect materials and adjust.", ["CarpentryAligned", "Grit"]],
      ["I can adjust sometimes, but it stresses me out.", ["CarpentryAligned", "Comfort"]],
      ["I get frustrated when things aren’t exact.", ["CarpentryMisaligned", "Comfort"]],
      ["I’d rather not deal with that kind of problem.", ["CarpentryMisaligned", "Comfort"]]
    ]
  },

  5: {
    question: "How do you respond when a mistake means undoing work (re-cutting, re-fitting, redoing)?",
    options: [
      ["I’d rather fix it than leave it wrong.", ["CarpentryAligned", "Grit"]],
      ["I can fix it, but I hate wasting time.", ["CarpentryAligned", "Comfort"]],
      ["Redoing work makes me lose motivation fast.", ["CarpentryMisaligned", "Comfort"]],
      ["I avoid work where redoing is common.", ["CarpentryMisaligned", "Comfort"]]
    ]
  },

  6: {
    question: "Carpentry often involves early start times and jobsite schedules. How does that land?",
    options: [
      ["I can live with it if the work is worth it.", ["CarpentryAligned", "Grit"]],
      ["I can adapt, but it would be a challenge.", ["CarpentryAligned", "Comfort"]],
      ["That schedule doesn’t match how I function.", ["CarpentryMisaligned", "Comfort"]],
      ["That schedule is basically a no.", ["CarpentryMisaligned", "Comfort"]]
    ]
  },

  7: {
    question: "How comfortable are you using power tools (or learning them through practice)?",
    options: [
      ["Comfortable, or I’m willing to get comfortable.", ["CarpentryAligned", "Grit"]],
      ["Willing, but I’m cautious and slow to start.", ["CarpentryAligned", "Comfort"]],
      ["I get nervous around tools like that.", ["CarpentryMisaligned", "Comfort"]],
      ["I’d rather avoid power tools.", ["CarpentryMisaligned", "Comfort"]]
    ]
  },

  8: {
    question: "Which work output feels most satisfying to you?",
    options: [
      ["A physical result I can see and touch.", ["CarpentryAligned", "Grit"]],
      ["Either physical or digital — I don’t care much.", ["CarpentryAligned", "Comfort"]],
      ["Mostly digital/abstract outcomes.", ["CarpentryMisaligned", "Comfort"]],
      ["I don’t enjoy physical build work.", ["CarpentryMisaligned", "Comfort"]]
    ]
  },

  9: {
    question: "Carpentry can mean working in heat, cold, or awkward spaces depending on the job. Your reaction:",
    options: [
      ["Not ideal, but I can handle it.", ["CarpentryAligned", "Grit"]],
      ["I’d need the right environment to do well.", ["CarpentryAligned", "Comfort"]],
      ["That sounds miserable to me.", ["CarpentryMisaligned", "Comfort"]],
      ["I avoid environments like that.", ["CarpentryMisaligned", "Comfort"]]
    ]
  },

  10: {
    question: "How do you feel about learning by doing (trial, repetition, incremental improvement)?",
    options: [
      ["That’s how I learn best.", ["CarpentryAligned", "Grit"]],
      ["I can learn that way, but I prefer guidance.", ["CarpentryAligned", "Comfort"]],
      ["I prefer learning by reading/watching, not doing.", ["CarpentryMisaligned", "Comfort"]],
      ["I don’t like learning physical skills.", ["CarpentryMisaligned", "Comfort"]]
    ]
  },

  11: {
    question: "If you had to summarize your interest in carpentry honestly, which fits best?",
    options: [
      ["I can realistically see myself doing this kind of work.", ["CarpentryAligned", "Grit"]],
      ["I’m interested, but I need proof it fits me.", ["CarpentryAligned", "Comfort"]],
      ["I’m curious, but I suspect it’s not for me long-term.", ["CarpentryMisaligned", "Comfort"]],
      ["This probably isn’t the direction for me.", ["CarpentryMisaligned", "Comfort"]]
    ]
  }
};

const tags = {
  CarpentryAligned: 0,
  CarpentryMisaligned: 0,
  Grit: 0,
  Comfort: 0
};


function interpretResults() {
  const aligned = tags.CarpentryAligned || 0;
  const misaligned = tags.CarpentryMisaligned || 0;
  const grit = tags.Grit || 0;
  const comfort = tags.Comfort || 0;

  // 12 questions => each question adds 2 tags.
  // Alignment axis is based on CarpentryAligned vs CarpentryMisaligned:
  // score range roughly -12 .. +12
  const fitScore = aligned - misaligned;

  let fitPct = Math.round(((fitScore + 12) / 24) * 100);
  fitPct = Math.max(0, Math.min(100, fitPct));

  // Secondary signal (optional, but useful): tolerance for the unglamorous parts
  // range roughly -12 .. +12
  const gritScore = grit - comfort;

  let gritPct = Math.round(((gritScore + 12) / 24) * 100);
  gritPct = Math.max(0, Math.min(100, gritPct));

  let gritLabel;
  if (gritPct >= 70) gritLabel = "You’re unlikely to be shocked by the physical / messy / jobsite side of carpentry.";
  else if (gritPct >= 40) gritLabel = "You can probably handle the conditions, but you may have specific friction points.";
  else gritLabel = "The day-to-day conditions of carpentry may feel draining rather than energizing.";

  // Decide fit band
  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Carpentry (${fitPct}% alignment)`;
    description = `
You’re showing a strong alignment with the core realities of carpentry — hands-on work, practical problem-solving, and tolerance for imperfect conditions.<br><br>
<strong>Reality check:</strong> this doesn’t mean every type of carpentry will feel right, but it does mean the fundamentals are unlikely to fight your nature.<br><br>
${gritLabel}
    `.trim();
    color = "rgb(60, 160, 120)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Carpentry (${fitPct}% alignment)`;
    description = `
You’re not a clear “yes” or “no” — you have some traits that can work well in carpentry, and some that may need strengthening or the right environment to avoid burnout.<br><br>
<strong>Translation:</strong> carpentry could be viable, but specialization and expectations matter a lot more for you than they do for a natural fit.<br><br>
${gritLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Carpentry (${fitPct}% alignment)`;
    description = `
Based on your answers, the core realities of carpentry are likely to feel like ongoing friction — not a challenge that sharpens you, but a grind that drains you.<br><br>
<strong>That’s not a flaw.</strong> It usually means your strengths show up better in a different kind of work. If you’re exploring careers, your time is probably better spent testing other skill paths first.
    `.trim();
    color = "rgb(170, 80, 80)";
  }

  // ---- UI routing (show/hide buttons) ----
  // Good-fit buttons are specialization diagnostics
  // No-fit button routes back to main site/hubs
  if (band === "strong") {
    $('.good-fit').show();
    $('.no-fit').hide();

    // Make the header line match the situation
    $('.result-container .good-fit').first().text('Next: take a specialization diagnostic for carpentry:');
  } else if (band === "middle") {
    // Show both: they might explore carpentry subtypes OR bounce to other hubs
    $('.good-fit').show();
    $('.no-fit').show();

    $('.result-container .good-fit').first().text('If you want to keep testing, try a carpentry specialization diagnostic:');
  } else {
    $('.good-fit').hide();
    $('.no-fit').show();
  }

  // Optional: reset tags here (your endQuiz also resets; double reset is harmless)
  Object.keys(tags).forEach(k => tags[k] = 0);

  return { title, description, color };
}
