// masonry-diagnostic.js
// Main Trade Diagnostic: Masonry

const obj = {
  0: {
    question: "Which best describes your real-world exposure to masonry-type work (brick, block, stone, concrete, repair)?",
    options: [
      ["I’ve done hands-on work like this and didn’t hate it.", ["MasonryAligned", "Grit"]],
      ["I’ve tried small projects, but I’m still unsure.", ["MasonryAligned", "Comfort"]],
      ["I’ve mostly avoided it, but I’m curious.", ["MasonryMisaligned", "Comfort"]],
      ["I avoid heavy, hands-on material work whenever possible.", ["MasonryMisaligned", "Comfort"]]
    ]
  },

  1: {
    question: "How do you feel about slowing down to measure, level, and re-check layout before committing?",
    options: [
      ["I’m fine slowing down to get it right.", ["MasonryAligned", "Grit"]],
      ["I can do it, but it’s not my favorite.", ["MasonryAligned", "Comfort"]],
      ["I get impatient with that level of detail.", ["MasonryMisaligned", "Comfort"]],
      ["I strongly dislike precision tasks like that.", ["MasonryMisaligned", "Comfort"]]
    ]
  },

  2: {
    question: "Masonry involves dust, grit, slurry, noise, and PPE every day. Your reaction:",
    options: [
      ["That’s normal for the job — I can deal with it.", ["MasonryAligned", "Grit"]],
      ["I tolerate it, but I’d prefer less of it.", ["MasonryAligned", "Comfort"]],
      ["That sounds draining day after day.", ["MasonryMisaligned", "Comfort"]],
      ["That’s a dealbreaker for me.", ["MasonryMisaligned", "Comfort"]]
    ]
  },

  3: {
    question: "How do you handle being on your feet, lifting, kneeling, and handling heavy material for hours?",
    options: [
      ["That kind of physical work is manageable for me.", ["MasonryAligned", "Grit"]],
      ["I can do some of it with the right conditions.", ["MasonryAligned", "Comfort"]],
      ["I don’t handle physical strain well.", ["MasonryMisaligned", "Comfort"]],
      ["I avoid physically demanding work.", ["MasonryMisaligned", "Comfort"]]
    ]
  },

  4: {
    question: "Mortar and concrete don’t wait. How do you feel about timing windows controlling the work?",
    options: [
      ["I can work within a window and stay controlled.", ["MasonryAligned", "Grit"]],
      ["I can do it, but timing pressure stresses me.", ["MasonryAligned", "Comfort"]],
      ["Timing makes me rush and get sloppy.", ["MasonryMisaligned", "Comfort"]],
      ["I hate work where timing controls the day.", ["MasonryMisaligned", "Comfort"]]
    ]
  },

  5: {
    question: "A course or surface is drifting slightly out of level. What feels most true?",
    options: [
      ["Fix it now — small errors compound fast.", ["MasonryAligned", "Grit"]],
      ["I can fix it, but I hate losing time to rework.", ["MasonryAligned", "Comfort"]],
      ["Redoing work kills my motivation.", ["MasonryMisaligned", "Comfort"]],
      ["I avoid work where redoing is common.", ["MasonryMisaligned", "Comfort"]]
    ]
  },

  6: {
    question: "Masonry involves repetitive cycles (spread, set, check, tool, repeat). Your response:",
    options: [
      ["I can repeat technique and keep quality steady.", ["MasonryAligned", "Grit"]],
      ["I can repeat it with some variety or milestones.", ["MasonryAligned", "Comfort"]],
      ["Repetition drains me and quality slips.", ["MasonryMisaligned", "Comfort"]],
      ["I avoid work that feels like production loops.", ["MasonryMisaligned", "Comfort"]]
    ]
  },

  7: {
    question: "How comfortable are you using or learning saws, grinders, and cutters?",
    options: [
      ["Comfortable, or willing to get comfortable.", ["MasonryAligned", "Grit"]],
      ["Willing, but cautious.", ["MasonryAligned", "Comfort"]],
      ["I get nervous around tools like that.", ["MasonryMisaligned", "Comfort"]],
      ["I’d rather avoid those tools.", ["MasonryMisaligned", "Comfort"]]
    ]
  },

  8: {
    question: "Which kind of output feels most satisfying to you?",
    options: [
      ["A physical result that’s solid and permanent.", ["MasonryAligned", "Grit"]],
      ["Either physical or digital — doesn’t matter much.", ["MasonryAligned", "Comfort"]],
      ["Mostly digital or abstract outcomes.", ["MasonryMisaligned", "Comfort"]],
      ["I don’t enjoy physical build work.", ["MasonryMisaligned", "Comfort"]]
    ]
  },

  9: {
    question: "Masonry often means outdoor work, uneven ground, awkward access. You:",
    options: [
      ["Can handle it even if it’s not ideal.", ["MasonryAligned", "Grit"]],
      ["Need the right environment to do well.", ["MasonryAligned", "Comfort"]],
      ["Find that kind of environment miserable.", ["MasonryMisaligned", "Comfort"]],
      ["Avoid environments like that.", ["MasonryMisaligned", "Comfort"]]
    ]
  },

  10: {
    question: "How do you feel about learning primarily by doing — repetition, correction, incremental improvement?",
    options: [
      ["That’s how I learn best.", ["MasonryAligned", "Grit"]],
      ["I can learn that way with guidance.", ["MasonryAligned", "Comfort"]],
      ["I prefer learning by reading or watching.", ["MasonryMisaligned", "Comfort"]],
      ["I don’t enjoy learning physical skills.", ["MasonryMisaligned", "Comfort"]]
    ]
  },

  // ---- HUMAN FRICTION / ATTRITION LAYER ----

  11: {
    question: "Masonry crews can be blunt, direct, and correction-heavy. You:",
    options: [
      ["Handle it fine — clarity matters more than tone.", ["MasonryAligned", "Grit"]],
      ["Can deal with it, but it wears on me.", ["MasonryAligned", "Comfort"]],
      ["Get irritated by blunt supervision.", ["MasonryMisaligned", "Comfort"]],
      ["Strongly dislike that communication style.", ["MasonryMisaligned", "Comfort"]]
    ]
  },

  12: {
    question: "Progress can be slow and praise is rare — the expectation is ‘it should be right.’ That feels:",
    options: [
      ["Fine — I take quiet pride in solid work.", ["MasonryAligned", "Grit"]],
      ["Okay, but I like some recognition.", ["MasonryAligned", "Comfort"]],
      ["Demotivating without feedback.", ["MasonryMisaligned", "Comfort"]],
      ["I need frequent validation to stay engaged.", ["MasonryMisaligned", "Comfort"]]
    ]
  },

  13: {
    question: "After weeks of physical fatigue, dust, and repetition, you usually:",
    options: [
      ["Adapt and build endurance.", ["MasonryAligned", "Grit"]],
      ["Manage it, but energy fluctuates.", ["MasonryAligned", "Comfort"]],
      ["Start burning out mentally.", ["MasonryMisaligned", "Comfort"]],
      ["Feel done long before the project ends.", ["MasonryMisaligned", "Comfort"]]
    ]
  },

  14: {
    question: "Be honest: can you realistically see yourself doing masonry-style work day after day?",
    options: [
      ["Yes — the realities don’t scare me.", ["MasonryAligned", "Grit"]],
      ["Possibly, with the right specialization.", ["MasonryAligned", "Comfort"]],
      ["Probably not long-term.", ["MasonryMisaligned", "Comfort"]],
      ["No — this isn’t my direction.", ["MasonryMisaligned", "Comfort"]]
    ]
  }
};

const tags = {
  MasonryAligned: 0,
  MasonryMisaligned: 0,
  Grit: 0,
  Comfort: 0
};

function interpretResults() {
  const aligned = tags.MasonryAligned || 0;
  const misaligned = tags.MasonryMisaligned || 0;
  const grit = tags.Grit || 0;
  const comfort = tags.Comfort || 0;

  // Alignment axis (masonry fit)
  const fitScore = aligned - misaligned; // ~ -15 .. +15
  let fitPct = Math.round(((fitScore + 15) / 30) * 100);
  fitPct = Math.max(0, Math.min(100, fitPct));

  // Grit axis (tolerance for unglamorous reality)
  const gritScore = grit - comfort; // ~ -15 .. +15
  let gritPct = Math.round(((gritScore + 15) / 30) * 100);
  gritPct = Math.max(0, Math.min(100, gritPct));

  let gritLabel;
  if (gritPct >= 70)
    gritLabel = "You’re unlikely to be shocked by heavy materials, dust, repetition, weather, and slow recognition.";
  else if (gritPct >= 40)
    gritLabel = "You may handle masonry, but certain conditions or crew dynamics could become friction points.";
  else
    gritLabel = "The day-to-day realities of masonry may feel draining rather than energizing.";

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Masonry (${fitPct}% alignment)`;
    description = `
You’re showing strong alignment with masonry’s core realities — physical work, repetitive technique, layout discipline, and gritty conditions.<br><br>
<strong>Reality check:</strong> this doesn’t mean every masonry specialization will fit, but the fundamentals are unlikely to fight your nature.<br><br>
${gritLabel}
    `.trim();
    color = "rgb(60, 160, 120)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Masonry (${fitPct}% alignment)`;
    description = `
You’re not a clear yes or no. Masonry could work, but specialization, crew, and expectations will matter more for you than for a natural fit.<br><br>
${gritLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Masonry (${fitPct}% alignment)`;
    description = `
The core realities of masonry are likely to feel like constant friction — heavy materials, repetition, timing pressure, and unglamorous conditions.<br><br>
<strong>This isn’t a flaw.</strong> It usually means your strengths are better tested in a different kind of work.
    `.trim();
    color = "rgb(170, 80, 80)";
  }

  if (band === "strong") {
    $(".good-fit").show();
    $(".no-fit").hide();
    $(".result-container .good-fit").first().text("Next: take a masonry specialization diagnostic:");
  } else if (band === "middle") {
    $(".good-fit").show();
    $(".no-fit").show();
    $(".result-container .good-fit").first().text("If you want to keep testing, try a masonry specialization diagnostic:");
  } else {
    $(".good-fit").hide();
    $(".no-fit").show();
  }

  Object.keys(tags).forEach(k => (tags[k] = 0));

  return { title, description, color };
}
