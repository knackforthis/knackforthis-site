// plumbing-diagnostic.js
// Main hub diagnostic for /trades/plumbing/diagnostic-quiz/
// Routes users to plumbing specialty pages if fit is strong/mixed, otherwise back to main/hubs.

const obj = {
  0: {
    question: "Which describes your real-world exposure to plumbing-type tasks?",
    options: [
      ["I’ve dealt with basic plumbing issues (even small) and didn’t hate it.", ["PlumbingAligned", "Grit"]],
      ["I’ve tried a couple small things, but I’m still unsure.", ["PlumbingAligned", "Comfort"]],
      ["I’ve mostly avoided it, but I’m curious.", ["PlumbingMisaligned", "Comfort"]],
      ["I avoid this kind of work whenever I can.", ["PlumbingMisaligned", "Comfort"]]
    ]
  },

  1: {
    question: "How do you feel about messy realities (water, grime, tight spaces, unpleasant smells sometimes)?",
    options: [
      ["It’s part of the job — I can deal with it.", ["PlumbingAligned", "Grit"]],
      ["I can tolerate it, but I’d prefer less of it.", ["PlumbingAligned", "Comfort"]],
      ["That sounds draining day after day.", ["PlumbingMisaligned", "Comfort"]],
      ["That’s a dealbreaker for me.", ["PlumbingMisaligned", "Comfort"]]
    ]
  },

  2: {
    question: "Plumbing often means working in cramped or awkward positions (under sinks, crawlspaces, behind walls). You:",
    options: [
      ["Can handle that kind of physical awkwardness.", ["PlumbingAligned", "Grit"]],
      ["I can do it sometimes, but I’d need the right conditions.", ["PlumbingAligned", "Comfort"]],
      ["I don’t do well with cramped/awkward work.", ["PlumbingMisaligned", "Comfort"]],
      ["I strongly avoid spaces like that.", ["PlumbingMisaligned", "Comfort"]]
    ]
  },

  3: {
    question: "How do you feel about diagnosing problems when the symptoms are vague (slow drain, intermittent leak, “it’s making a noise”)?",
    options: [
      ["I like figuring out causes from clues.", ["PlumbingAligned", "Grit"]],
      ["I can do it, but I prefer a clear process.", ["PlumbingAligned", "Comfort"]],
      ["I get stressed when the problem isn’t obvious.", ["PlumbingMisaligned", "Comfort"]],
      ["I hate mystery problems — I want clear instructions.", ["PlumbingMisaligned", "Comfort"]]
    ]
  },

  4: {
    question: "Plumbing involves measurement and precision (slope, alignment, fittings, code requirements). Your reaction is:",
    options: [
      ["I’m fine slowing down to get it right.", ["PlumbingAligned", "Grit"]],
      ["I can do it, but detail work can frustrate me.", ["PlumbingAligned", "Comfort"]],
      ["I get impatient with precision steps.", ["PlumbingMisaligned", "Comfort"]],
      ["I strongly dislike precision tasks like that.", ["PlumbingMisaligned", "Comfort"]]
    ]
  },

  5: {
    question: "How do you respond when a mistake means undoing work (redoing a connection, re-cutting pipe, opening something back up)?",
    options: [
      ["I’d rather fix it than leave it wrong.", ["PlumbingAligned", "Grit"]],
      ["I can fix it, but I hate wasting time.", ["PlumbingAligned", "Comfort"]],
      ["Redoing work makes me lose motivation fast.", ["PlumbingMisaligned", "Comfort"]],
      ["I avoid work where redo is common.", ["PlumbingMisaligned", "Comfort"]]
    ]
  },

  6: {
    question: "Plumbing can include customer-facing situations (homes, businesses, people watching, questions, complaints). How does that land?",
    options: [
      ["I can handle it — I can stay professional and clear.", ["PlumbingAligned", "Grit"]],
      ["I can do it, but it adds stress.", ["PlumbingAligned", "Comfort"]],
      ["I dislike being observed or questioned while I work.", ["PlumbingMisaligned", "Comfort"]],
      ["I strongly avoid customer-facing work.", ["PlumbingMisaligned", "Comfort"]]
    ]
  },

  7: {
    question: "How do you feel about safety and risk (hot water, gas lines nearby, pressure, contamination concerns)?",
    options: [
      ["I take it seriously and I’m careful by default.", ["PlumbingAligned", "Grit"]],
      ["I can be careful, but I don’t like feeling responsible for risk.", ["PlumbingAligned", "Comfort"]],
      ["Risk makes me anxious and rushed.", ["PlumbingMisaligned", "Comfort"]],
      ["I’d rather avoid work with that kind of consequence.", ["PlumbingMisaligned", "Comfort"]]
    ]
  },

  8: {
    question: "Plumbing work can be physically demanding (lifting, carrying, kneeling, pulling, awkward leverage). You:",
    options: [
      ["That kind of physical work is manageable for me.", ["PlumbingAligned", "Grit"]],
      ["I can do some of it, but I’d need pacing.", ["PlumbingAligned", "Comfort"]],
      ["I don’t handle physical strain well.", ["PlumbingMisaligned", "Comfort"]],
      ["I avoid physically demanding work.", ["PlumbingMisaligned", "Comfort"]]
    ]
  },

  9: {
    question: "How do you feel about learning by doing (trial, repetition, incremental improvement)?",
    options: [
      ["That’s how I learn best.", ["PlumbingAligned", "Grit"]],
      ["I can learn that way, but I prefer guidance.", ["PlumbingAligned", "Comfort"]],
      ["I prefer learning by reading/watching, not doing.", ["PlumbingMisaligned", "Comfort"]],
      ["I don’t like learning physical skills.", ["PlumbingMisaligned", "Comfort"]]
    ]
  },

  10: {
    question: "Plumbing often means unpredictable days (what you find is worse than expected, parts runs, delays). Your reaction:",
    options: [
      ["Normal — I can adapt without spiraling.", ["PlumbingAligned", "Grit"]],
      ["I can adapt, but unpredictability stresses me out.", ["PlumbingAligned", "Comfort"]],
      ["I get frustrated when the plan changes.", ["PlumbingMisaligned", "Comfort"]],
      ["I want predictable work with stable scope.", ["PlumbingMisaligned", "Comfort"]]
    ]
  },

  11: {
    question: "If you had to summarize your interest in plumbing honestly, which fits best?",
    options: [
      ["I can realistically see myself doing this kind of work.", ["PlumbingAligned", "Grit"]],
      ["I’m interested, but I need proof it fits me.", ["PlumbingAligned", "Comfort"]],
      ["I’m curious, but I suspect it’s not for me long-term.", ["PlumbingMisaligned", "Comfort"]],
      ["This probably isn’t the direction for me.", ["PlumbingMisaligned", "Comfort"]]
    ]
  }
};

const tags = {
  PlumbingAligned: 0,
  PlumbingMisaligned: 0,
  Grit: 0,
  Comfort: 0
};

function interpretResults() {
  const aligned = tags.PlumbingAligned || 0;
  const misaligned = tags.PlumbingMisaligned || 0;
  const grit = tags.Grit || 0;
  const comfort = tags.Comfort || 0;

  // Alignment axis: score range roughly -12 .. +12
  const fitScore = aligned - misaligned;
  let fitPct = Math.round(((fitScore + 12) / 24) * 100);
  fitPct = Math.max(0, Math.min(100, fitPct));

  // Secondary signal: tolerance for the unglamorous parts (mess + awkwardness + unpredictability)
  const gritScore = grit - comfort;
  let gritPct = Math.round(((gritScore + 12) / 24) * 100);
  gritPct = Math.max(0, Math.min(100, gritPct));

  let gritLabel;
  if (gritPct >= 70) gritLabel = "You’re unlikely to be shocked by the messy / awkward / unpredictable side of plumbing.";
  else if (gritPct >= 40) gritLabel = "You can probably handle the conditions, but you may have specific friction points.";
  else gritLabel = "The day-to-day realities of plumbing may feel draining rather than energizing.";

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Plumbing (${fitPct}% alignment)`;
    description = `
You’re showing a strong alignment with the core realities of plumbing — hands-on problem-solving, tolerance for imperfect conditions, and willingness to learn through real work.<br><br>
<strong>Reality check:</strong> this doesn’t mean every plumbing lane will feel right, but it does mean the fundamentals are unlikely to fight your nature.<br><br>
${gritLabel}
    `.trim();
    color = "rgb(60, 160, 120)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Plumbing (${fitPct}% alignment)`;
    description = `
You’re not a clear “yes” or “no” — you have some traits that can work well in plumbing, and some that may need the right environment to avoid burnout.<br><br>
<strong>Translation:</strong> plumbing could be viable, but which lane you choose matters a lot more for you than it does for a natural fit.<br><br>
${gritLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Plumbing (${fitPct}% alignment)`;
    description = `
Based on your answers, the core realities of plumbing are likely to feel like ongoing friction — not a challenge that sharpens you, but a grind that drains you.<br><br>
<strong>That’s not a flaw.</strong> It usually means your strengths show up better in a different kind of work. If you’re exploring careers, your time is probably better spent testing other skill paths first.
    `.trim();
    color = "rgb(170, 80, 80)";
  }

  // ---- UI routing (show/hide buttons) ----
  // Good-fit buttons are plumbing lanes; no-fit routes to main page / other hubs
  if (band === "strong") {
    $(".good-fit").show();
    $(".no-fit").hide();

    // If you use a text-only divider inside result-container with class good-fit, update it:
    $(".result-container .good-fit").first().text("Next: take a specialization diagnostic for plumbing:");
  } else if (band === "middle") {
    $(".good-fit").show();
    $(".no-fit").show();

    $(".result-container .good-fit").first().text("If you want to keep testing, try a plumbing specialization diagnostic:");
  } else {
    $(".good-fit").hide();
    $(".no-fit").show();
  }

  // Reset
  Object.keys(tags).forEach((k) => (tags[k] = 0));

  return { title, description, color };
}
