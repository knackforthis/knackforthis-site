// renewable-energy-quiz.js

const obj = {
  // VALUES vs REALITY (3)

  0: {
    question: "Renewable energy work often attracts people for the mission (clean energy), but the job itself is technical and procedural. You:",
    options: [
      ["Care about the mission and can handle the technical grind.", ["RenewableAligned", "Disciplined"]],
      ["Like the idea, but need structure to stay grounded.", ["RenewableAligned", "Flexible"]],
      ["Like the mission more than the work itself.", ["RenewableMisaligned", "Flexible"]],
      ["Are more interested in hands-on work than ideals.", ["RenewableMisaligned", "Flexible"]]
    ]
  },

  1: {
    question: "How do you feel about work where results aren’t immediate (planning, permitting, staging before install)?",
    options: [
      ["Fine — long arcs don’t bother me.", ["RenewableAligned", "Disciplined"]],
      ["I can handle it with clear milestones.", ["RenewableAligned", "Flexible"]],
      ["It frustrates me.", ["RenewableMisaligned", "Flexible"]],
      ["I need fast, visible progress.", ["RenewableMisaligned", "Flexible"]]
    ]
  },

  2: {
    question: "If the work feels repetitive but meaningful, you:",
    options: [
      ["Can stay steady and focused.", ["RenewableAligned", "Disciplined"]],
      ["Can tolerate it for a while.", ["RenewableAligned", "Flexible"]],
      ["Lose motivation.", ["RenewableMisaligned", "Flexible"]],
      ["Check out mentally.", ["RenewableMisaligned", "Flexible"]]
    ]
  },

  // CONDITIONS & CONSTRAINTS (3)

  3: {
    question: "Renewable installs often depend on weather, site access, and external delays. You:",
    options: [
      ["Accept it as part of the job.", ["RenewableAligned", "Disciplined"]],
      ["Can adapt, but it stresses me.", ["RenewableAligned", "Flexible"]],
      ["Get irritated when plans shift.", ["RenewableMisaligned", "Flexible"]],
      ["Hate work controlled by outside variables.", ["RenewableMisaligned", "Flexible"]]
    ]
  },

  4: {
    question: "Working outdoors, on roofs, in open fields, or exposed environments feels:",
    options: [
      ["Normal — I can handle environmental exposure.", ["RenewableAligned", "Disciplined"]],
      ["Okay with the right gear.", ["RenewableAligned", "Flexible"]],
      ["Draining over time.", ["RenewableMisaligned", "Flexible"]],
      ["Not something I want long-term.", ["RenewableMisaligned", "Flexible"]]
    ]
  },

  5: {
    question: "How do you feel about physically repetitive installs (panels, racking, mounts, runs)?",
    options: [
      ["Fine — consistency builds speed and quality.", ["RenewableAligned", "Disciplined"]],
      ["I can do it with rotation.", ["RenewableAligned", "Flexible"]],
      ["Repetition wears me down.", ["RenewableMisaligned", "Flexible"]],
      ["I strongly dislike repetitive physical work.", ["RenewableMisaligned", "Flexible"]]
    ]
  },

  // PROCESS, CODE, & INSPECTION (3)

  6: {
    question: "Renewable work is code-heavy and inspection-driven. You:",
    options: [
      ["Respect that — safety and compliance matter.", ["RenewableAligned", "Disciplined"]],
      ["Can do it, but it’s tedious.", ["RenewableAligned", "Flexible"]],
      ["Get annoyed by inspections.", ["RenewableMisaligned", "Flexible"]],
      ["Avoid rule-heavy environments.", ["RenewableMisaligned", "Flexible"]]
    ]
  },

  7: {
    question: "Utility coordination, permits, and waiting on approvals feels:",
    options: [
      ["Normal — systems take time.", ["RenewableAligned", "Disciplined"]],
      ["Manageable with patience.", ["RenewableAligned", "Flexible"]],
      ["Like pointless delay.", ["RenewableMisaligned", "Flexible"]],
      ["Extremely frustrating.", ["RenewableMisaligned", "Flexible"]]
    ]
  },

  8: {
    question: "When installs must be done exactly to spec with little improvisation, you:",
    options: [
      ["Follow the process.", ["RenewableAligned", "Disciplined"]],
      ["Can adapt, but prefer flexibility.", ["RenewableAligned", "Flexible"]],
      ["Feel boxed in.", ["RenewableMisaligned", "Flexible"]],
      ["Strongly dislike rigid installs.", ["RenewableMisaligned", "Flexible"]]
    ]
  },

  // PACE, FATIGUE, & PRESSURE (3)

  9: {
    question: "After multiple days of similar installs, you feel:",
    options: [
      ["Steady — rhythm helps me.", ["RenewableAligned", "Disciplined"]],
      ["A bit tired but okay.", ["RenewableAligned", "Flexible"]],
      ["Mentally bored.", ["RenewableMisaligned", "Flexible"]],
      ["Completely drained.", ["RenewableMisaligned", "Flexible"]]
    ]
  },

  10: {
    question: "When progress is slow due to factors outside your control, you:",
    options: [
      ["Stay patient.", ["RenewableAligned", "Disciplined"]],
      ["Manage, but feel pressure.", ["RenewableAligned", "Flexible"]],
      ["Get frustrated.", ["RenewableMisaligned", "Flexible"]],
      ["Lose motivation fast.", ["RenewableMisaligned", "Flexible"]]
    ]
  },

  11: {
    question: "How do you handle work that’s physically demanding but mentally procedural?",
    options: [
      ["Well — I like predictable systems.", ["RenewableAligned", "Disciplined"]],
      ["Okay in moderation.", ["RenewableAligned", "Flexible"]],
      ["I need more problem-solving.", ["RenewableMisaligned", "Flexible"]],
      ["I need more variation.", ["RenewableMisaligned", "Flexible"]]
    ]
  },

  // SELF-AWARENESS & DIRECTION (3)

  12: {
    question: "What would frustrate you most long-term?",
    options: [
      ["Poor planning or unsafe shortcuts.", ["RenewableAligned", "Disciplined"]],
      ["Repetition without growth.", ["RenewableAligned", "Flexible"]],
      ["Waiting and bureaucracy.", ["RenewableMisaligned", "Flexible"]],
      ["Rigid systems and slow payoff.", ["RenewableMisaligned", "Flexible"]]
    ]
  },

  13: {
    question: "Which role sounds more natural?",
    options: [
      ["Install-focused renewable technician.", ["RenewableAligned", "Disciplined"]],
      ["Hybrid electrical + renewables.", ["RenewableAligned", "Flexible"]],
      ["Traditional electrical or construction.", ["RenewableMisaligned", "Flexible"]],
      ["Anything but renewables.", ["RenewableMisaligned", "Flexible"]]
    ]
  },

  14: {
    question: "Be honest: should you keep exploring renewable energy work?",
    options: [
      ["Yes — I understand the tradeoffs.", ["RenewableAligned", "Disciplined"]],
      ["Maybe — depends on the role.", ["RenewableAligned", "Flexible"]],
      ["Probably not.", ["RenewableMisaligned", "Flexible"]],
      ["No — this isn’t my lane.", ["RenewableMisaligned", "Flexible"]]
    ]
  }
};

const tags = {
  RenewableAligned: 0,
  RenewableMisaligned: 0,
  Disciplined: 0,
  Flexible: 0
};

function interpretResults() {
  const aligned = tags.RenewableAligned || 0;
  const misaligned = tags.RenewableMisaligned || 0;
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
      "You’re built for renewable reality: patience, process discipline, and tolerance for slow payoff and external constraints.";
  } else if (disciplinePct >= 40) {
    disciplineLabel =
      "You can do renewable work, but role choice and structure will matter a lot for sustainability.";
  } else {
    disciplineLabel =
      "Renewable energy work may feel mentally irritating because it demands patience, repetition, and comfort with delays outside your control.";
  }

  let band, title, description, color;

  if (fitPct >= 70) {
    band = "strong";
    title = `Strong Fit: Renewable Energy (${fitPct}% alignment)`;
    description = `
You’re showing strong alignment with renewable energy work — steady installs, process discipline, and patience with slow system-level progress.<br><br>
<strong>Blunt truth:</strong> renewables aren’t fast gratification work. They reward people who can keep showing up even when progress is invisible or delayed.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(80, 150, 170)";
  } else if (fitPct >= 40) {
    band = "middle";
    title = `Mixed Fit: Renewable Energy (${fitPct}% alignment)`;
    description = `
You have some traits that work in renewable energy, but enough friction points that the wrong role could wear you down.<br><br>
<strong>Translation:</strong> hybrid roles or shorter-cycle projects may suit you better than pure install pipelines.<br><br>
${disciplineLabel}
    `.trim();
    color = "rgb(120, 140, 220)";
  } else {
    band = "low";
    title = `Low Fit: Renewable Energy (${fitPct}% alignment)`;
    description = `
Based on your answers, renewable energy work will likely feel like constant friction: repetition, waiting, procedural installs, and delayed payoff.<br><br>
<strong>This isn’t a moral judgment.</strong> It just means your strengths likely shine brighter in faster-feedback or more improvisational work.
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
