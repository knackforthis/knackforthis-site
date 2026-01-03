  // drain-and-sewer-quiz.js

  const obj = {
    // PEOPLE & CUSTOMER PRESSURE (3)

    0: {
      question: "Drain & sewer calls are often urgent, emotional, and unpleasant for the customer. You:",
      options: [
        ["Stay calm and focused under that pressure.", ["DrainSewerAligned", "Disciplined"]],
        ["Can manage it with a clear process.", ["DrainSewerAligned", "Flexible"]],
        ["Feel stressed when customers are anxious or impatient.", ["DrainSewerMisaligned", "Flexible"]],
        ["Avoid emergency-style customer interactions.", ["DrainSewerMisaligned", "Flexible"]]
      ]
    },

    1: {
      question: "When a customer is watching and wants it fixed immediately, you usually:",
      options: [
        ["Stick to process and explain what you’re doing.", ["DrainSewerAligned", "Disciplined"]],
        ["Work faster, but it raises stress.", ["DrainSewerAligned", "Flexible"]],
        ["Rush and risk mistakes.", ["DrainSewerMisaligned", "Flexible"]],
        ["Strongly dislike being observed under pressure.", ["DrainSewerMisaligned", "Flexible"]]
      ]
    },

    2: {
      question: "Drain & sewer work often makes you the ‘last-resort’ tech. You:",
      options: [
        ["Don’t mind — that role suits me.", ["DrainSewerAligned", "Disciplined"]],
        ["Can handle it occasionally.", ["DrainSewerAligned", "Flexible"]],
        ["Feel worn down by that responsibility.", ["DrainSewerMisaligned", "Flexible"]],
        ["Avoid being the person called for the worst jobs.", ["DrainSewerMisaligned", "Flexible"]]
      ]
    },

    // TIME & URGENCY (2)

    3: {
      question: "Many drain/sewer jobs start with urgency but take longer than expected. You:",
      options: [
        ["Stay methodical until it’s resolved.", ["DrainSewerAligned", "Disciplined"]],
        ["Push through, but fatigue builds.", ["DrainSewerAligned", "Flexible"]],
        ["Get impatient and force solutions.", ["DrainSewerMisaligned", "Flexible"]],
        ["Hate jobs with unclear timelines.", ["DrainSewerMisaligned", "Flexible"]]
      ]
    },

    4: {
      question: "How do you handle unpredictable days with multiple emergency calls?",
      options: [
        ["I like the fast-response rhythm.", ["DrainSewerAligned", "Disciplined"]],
        ["I can manage it with pacing.", ["DrainSewerAligned", "Flexible"]],
        ["It throws me off quickly.", ["DrainSewerMisaligned", "Flexible"]],
        ["I prefer scheduled, predictable work.", ["DrainSewerMisaligned", "Flexible"]]
      ]
    },

    // PACE & PRESSURE (2)

    5: {
      question: "When a blockage doesn’t clear easily, your instinct is to:",
      options: [
        ["Slow down and troubleshoot systematically.", ["DrainSewerAligned", "Disciplined"]],
        ["Keep trying while watching time.", ["DrainSewerAligned", "Flexible"]],
        ["Force it to get the job over with.", ["DrainSewerMisaligned", "Flexible"]],
        ["Lose patience and disengage.", ["DrainSewerMisaligned", "Flexible"]]
      ]
    },

    6: {
      question: "Knowing a rushed drain job can cause repeat backups makes you:",
      options: [
        ["More careful and thorough.", ["DrainSewerAligned", "Disciplined"]],
        ["Aware, but tempted to move on.", ["DrainSewerAligned", "Flexible"]],
        ["Willing to accept the risk.", ["DrainSewerMisaligned", "Flexible"]],
        ["Prefer not to deal with that pressure.", ["DrainSewerMisaligned", "Flexible"]]
      ]
    },

    // REPETITION & ENDURANCE (2)

    7: {
      question: "Drain & sewer work can be repetitive: rods, jetting, camera work, cleanup. You:",
      options: [
        ["Handle repetition fine.", ["DrainSewerAligned", "Disciplined"]],
        ["Can do it with breaks.", ["DrainSewerAligned", "Flexible"]],
        ["Get worn down quickly.", ["DrainSewerMisaligned", "Flexible"]],
        ["Avoid repetitive, dirty work.", ["DrainSewerMisaligned", "Flexible"]]
      ]
    },

    8: {
      question: "Physically demanding tasks (lifting equipment, awkward positions) usually:",
      options: [
        ["Don’t bother me much.", ["DrainSewerAligned", "Disciplined"]],
        ["Require pacing.", ["DrainSewerAligned", "Flexible"]],
        ["Drain my energy fast.", ["DrainSewerMisaligned", "Flexible"]],
        ["Are something I avoid.", ["DrainSewerMisaligned", "Flexible"]]
      ]
    },

    // VISIBILITY & ACCOUNTABILITY (2)

    9: {
      question: "If a drain flows now but fails again in a month, you:",
      options: [
        ["Document and explain long-term risks.", ["DrainSewerAligned", "Disciplined"]],
        ["Mention it briefly.", ["DrainSewerAligned", "Flexible"]],
        ["Assume it’s no longer your problem.", ["DrainSewerMisaligned", "Flexible"]],
        ["Dislike follow-up responsibility.", ["DrainSewerMisaligned", "Flexible"]]
      ]
    },

    10: {
      question: "Using cameras and showing customers what’s wrong makes you:",
      options: [
        ["More confident — evidence matters.", ["DrainSewerAligned", "Disciplined"]],
        ["Okay, but it adds pressure.", ["DrainSewerAligned", "Flexible"]],
        ["Uncomfortable.", ["DrainSewerMisaligned", "Flexible"]],
        ["Avoid diagnostic explanations.", ["DrainSewerMisaligned", "Flexible"]]
      ]
    },

    // ENVIRONMENT & SENSORY TOLERANCE (2)

    11: {
      question: "Sewage, odors, wet environments, and cleanup are:",
      options: [
        ["Just part of the job.", ["DrainSewerAligned", "Disciplined"]],
        ["Tolerable with limits.", ["DrainSewerAligned", "Flexible"]],
        ["Mentally exhausting.", ["DrainSewerMisaligned", "Flexible"]],
        ["A dealbreaker.", ["DrainSewerMisaligned", "Flexible"]]
      ]
    },

    12: {
      question: "Outdoor work, digging, and weather exposure feel:",
      options: [
        ["Manageable.", ["DrainSewerAligned", "Disciplined"]],
        ["Okay with pacing.", ["DrainSewerAligned", "Flexible"]],
        ["Draining over time.", ["DrainSewerMisaligned", "Flexible"]],
        ["Something I want to avoid.", ["DrainSewerMisaligned", "Flexible"]]
      ]
    },

    // SELF-AWARENESS CHECK (3)

    13: {
      question: "Which plumbing lane feels most natural to you?",
      options: [
        ["Urgent drain & sewer problem-solving.", ["DrainSewerAligned", "Disciplined"]],
        ["A mix of drain work and general service.", ["DrainSewerAligned", "Flexible"]],
        ["Clean installs and system builds.", ["DrainSewerMisaligned", "Flexible"]],
        ["Anything but backup work.", ["DrainSewerMisaligned", "Flexible"]]
      ]
    },

    14: {
      question: "Be honest: how strong is your pull toward drain & sewer work specifically?",
      options: [
        ["Strong — I don’t mind the mess and pressure.", ["DrainSewerAligned", "Disciplined"]],
        ["Moderate — I can handle it sometimes.", ["DrainSewerAligned", "Flexible"]],
        ["Low — other plumbing paths appeal more.", ["DrainSewerMisaligned", "Flexible"]],
        ["Very low — this isn’t my environment.", ["DrainSewerMisaligned", "Flexible"]]
      ]
    }
  };

const tags = {
  DrainSewerAligned: 0,
  DrainSewerMisaligned: 0,
  Disciplined: 0,
  Flexible: 0
};

function interpretResults() {
  const aligned = tags.DrainSewerAligned || 0;
  const misaligned = tags.DrainSewerMisaligned || 0;
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
      "You’re built for drain & sewer reality: staying composed under urgency, tolerating unpleasant conditions, and finishing the job properly even when it’s gross.";
  } else if (disciplinePct >= 40) {
    disciplineLabel =
      "You can do drain & sewer work, but pacing, recovery, and job selection will matter.";
  } else {
    disciplineLabel =
      "Urgency, mess, and persistence under discomfort may grind you down over time.";
  }

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Drain & Sewer (${fitPct}% alignment)`;
    description = `
You show strong alignment with drain & sewer work — comfort with urgency, tolerance for mess, and persistence when jobs get physically and mentally uncomfortable.<br><br>
<strong>Blunt truth:</strong> this lane rewards people who don’t flinch when things are unpleasant and who stay disciplined even when nobody’s impressed.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(60, 160, 120)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Drain & Sewer (${fitPct}% alignment)`;
    description = `
You have some traits that fit drain & sewer work, but friction is likely if it becomes your full-time lane.<br><br>
<strong>Translation:</strong> occasional drain work may be fine, but constant urgency and mess could wear you down.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Drain & Sewer (${fitPct}% alignment)`;
    description = `
Based on your answers, drain & sewer work will likely feel draining: urgency, unpleasant conditions, physical strain, and persistence under stress.<br><br>
<strong>This isn’t a knock.</strong> It usually means your strengths align better with cleaner, more predictable plumbing lanes.
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
