const AIBC_WRITING = [
 {title:"Build the business case for an AI project in an industry of your choice",
  minutes:"about 20 min of the 45",
  prompt:"Explain how you would build the business case for an AI project in an industry of your choice. Use the course framework.",
  outline:[
   {h:"1. Industry and priorities (chapters 1–2)", pts:["Describe the industry, market trend and pressures (e.g. margin squeeze).","Name the executives (personas) and the KPI each owns: CFO–NPV, CIO–TCO, COO–downtime, CSCO–stock-outs, CRO–revenue, CEO–ROI/ESG.","State strategic priorities and challenges the AI project answers."]},
   {h:"2. Canvas and AI use case (chapters 3–4)", pts:["Apply the nine canvas blocks and mark where AI changes the model.","Describe the use case and why it redesigns the work instead of layering AI on existing processes (Bain)."]},
   {h:"3. Value drivers (chapter 5)", pts:["Top line, bottom line, green line, strategic and transformational, each tied to a KPI, a baseline and an owner.","Use SAP benchmark ranges (e.g. 5–20% operating cost reduction) and the chain: impact area → value driver → KPI → baseline → improvement % → benefit."]},
   {h:"4. Costs and gains (chapter 6)", pts:["Initial (CAPEX) and recurring (OPEX) costs; benefits over about five years."]},
   {h:"5. Financial investment (chapter 7)", pts:["TCO, ROI, PBP (simple) and NPV, IRR (time value) with a discount rate (10% default, higher for riskier AI) and the decision rule for each."]},
   {h:"6. Conclusions, limitations, next steps", pts:["Risks, estimate quality, sensitivity, and what to validate next."]}
  ],
  keyTerms:["redesign work","soft vs hard benefits","persona KPIs","SAP benchmark","baseline","NPV > 0","IRR > discount rate","limitations"],
  tip:"Name every chapter in order; examiners look for the seven-chapter structure and the decision rules."},
 {title:"Compare the five financial KPIs and say when to use each",
  minutes:"about 15 min",
  prompt:"Explain TCO, ROI, PBP, NPV and IRR: formulas, decision rules, strengths and limitations. When would you use each?",
  outline:[
   {h:"Simple KPIs (no time value)", pts:["TCO = initial + recurring – remaining value; lower is less costly; compares solutions with a similar time scope; ignores benefits.","ROI = (benefits – cost)/cost × 100; must be above 0%; higher is better; ignores time value.","PBP = cost of investment / average annual cash flow; shorter is better; does not compare benefits and costs."]},
   {h:"Advanced KPIs (time value)", pts:["NPV = Σ Cn/(1+r)^n – initial investment; positive means pursue; an amount in euros; does not show recovery period.","IRR = rate where NPV = 0; must exceed r; higher is better; good for comparing projects; a rate not an amount; does not show recovery period."]},
   {h:"When to use", pts:["CFO: NPV (value) and IRR (ranking). CIO: TCO. COO/CSCO: payback speed. Use PBP next to NPV/IRR because they hide the recovery period.","Discount rate: 10% default; 9.5–10.5% low risk, 10.5–12.5% core strategic, 12.5–14.5%+ high risk."]},
   {h:"Worked example", pts:["8,000 cost, 2,500 a year: PBP 3.2 years. Invest 100, get 110 in a year at 10%: NPV 0, IRR 10%."]}
  ],
  keyTerms:["time value of money","discount rate","recovery period","amount vs rate","decision rule"],
  tip:"A comparison table in words (one line per KPI: formula, rule, limit) scores well and is fast to write."},
 {title:"Explain Bain's Elements of Value and how AI creates value",
  minutes:"about 15 min",
  prompt:"Describe Bain's Elements of Value and explain what the course says about how companies create value with AI.",
  outline:[
   {h:"The pyramid", pts:["Based on Maslow. Base: table stakes (specifications, acceptable price, compliance, ethics).","Functional (economic, performance) → ease of doing business (productivity, access, operational, relationship, strategic) → individual (career, personal) → inspirational (vision, hope, social and environmental responsibility)."]},
   {h:"Value formula", pts:["Value = Benefit – Efforts – Risks – Price; subjective and context-sensitive."]},
   {h:"AI and value", pts:["Redesign workflows rather than layer AI tools on existing processes.","Four lessons: redesign work, avoid micro-productivity, shift the centre of gravity to human judgment, balance costs (AI is a cost driver and a cost-control tool)."]},
   {h:"Link to the business case", pts:["Value drivers (top, bottom, green, strategic) are the project-level version; KPIs and financial results make them measurable."]}
  ],
  keyTerms:["table stakes","inspirational","ease of doing business","micro-productivity","human judgment"],
  tip:"Draw the pyramid as a list from base to top, then spend half the answer on AI."},
 {title:"Explain the four value drivers and how soft benefits become hard benefits",
  minutes:"about 15 min",
  prompt:"Define top line, bottom line, green line and strategic and transformational value drivers, give KPI examples and explain how they feed the financial case.",
  outline:[
   {h:"Definitions with KPIs", pts:["Top line: revenue growth (revenue from new products, less loss from stock-outs).","Bottom line: net income after all expenses (days in inventory, logistics cost, DSO).","Green line: conservation of natural resources (energy cost, carbon footprint).","Strategic and transformational: long-term viability (customer satisfaction, on-time delivery, employee engagement)."]},
   {h:"Benchmarks", pts:["SAP benchmark of 26 industries gives average improvement ranges, e.g. 3–10% energy cost, 15–40% customer satisfaction."]},
   {h:"From soft to hard", pts:["Impact area → value driver → KPI → baseline → improvement % → financial benefit; strategic benefits are not quantified financially.","Hard benefits are ROI, IRR, TCO, NPV and PBP computed from costs and the quantified benefits."]},
   {h:"Example", pts:["ProFoods: 20% less carbon and 5% more EBIT = AED 126M; logistics network 5–20% operating cost reduction."]}
  ],
  keyTerms:["baseline","improvement %","benchmark","KPI","soft vs hard"],
  tip:"Give one KPI and one benchmark number per pillar."},
 {title:"Explain BTM² and the role of Value and Risk Management",
  minutes:"about 10–15 min",
  prompt:"Describe SAP's BTM² methodology and where the business case sits within it.",
  outline:[
   {h:"Structure", pts:["Direction: strategy, value and risk management. Enablement: business process, transformational IT, organisational change, competence and training, program/project management.","Meta Management frames everything: why (strategy), what (program), how (project)."]},
   {h:"Value Management", pts:["Envision (identify value, collect benchmarks, conservative estimates, first business case), Engage (plan benefit realisation), Transform (execute and evaluate), Optimize."]},
   {h:"Risk Management", pts:["360° strategic risk assessment; risk map with seven drivers (geopolitical, market, environmental, regulatory and compliance, macro-economic, technology, social).","Risk factors anywhere: lack of vision, no commitment, scope creep, integration complexity, no staff buy-in."]},
   {h:"Course scope", pts:["Planning side of Direction; the business case is the minimum deliverable."]}
  ],
  keyTerms:["Direction","Enablement","Meta Management","Envision","risk map"],
  tip:"Learn the four Value Management phases and the seven risk drivers by heart."},
 {title:"Pitch an AI investment to a CFO, a CIO and a CEO",
  minutes:"about 10–15 min",
  prompt:"Explain how the same AI business case should be presented differently to a CFO, a CIO and a CEO.",
  outline:[
   {h:"CFO", pts:["NPV, IRR and payback, discount rate and sensitivity; cash flows over about five years."]},
   {h:"CIO", pts:["TCO (initial + recurring – remaining value), architecture, security, subscription and support costs."]},
   {h:"CEO", pts:["ROI, shareholder value, ESG and strategic priorities; margin and long-term viability (strategic and transformational)."]},
   {h:"Common thread", pts:["Same numbers, different lens. A business case should be ambitious, collaborative, specific, persona-relevant and realistic."]}
  ],
  keyTerms:["persona","KPI ownership","TCO","NPV","ESG"],
  tip:"Use ProFoods (CFO NPV, CIO TCO, COO downtime, CSCO stock-outs, CRO revenue) as your example."},
 {title:"Apply the course to the Navigator PM1 project: justify and challenge",
  minutes:"about 15–20 min",
  prompt:"The Navigator group proposes 18 IFM sensors on PM1 for 310 k€. Justify the investment with the course KPIs and discuss its limitations.",
  outline:[
   {h:"Justification", pts:["CAPEX 310.3 k€ (97% implementation), OPEX 91.1 k€/yr, TCO 801.7 k€.","Benefits 1,038.3 k€/yr: top line 738.3 (sheet breaks), bottom line 200.0 (maintenance), green line 100.0 (energy and broke).","At 10%: NPV 3,244 k€, IRR 273% (> 10%), ROI 548%, payback 0.37 years."]},
   {h:"Robustness", pts:["Break-even: benefits can fall 82%. Without extra tonnes NPV is still 446 k€. CAPEX +20% gives 3,182; 12% rate gives 3,068."]},
   {h:"Challenges", pts:["About 70% of the benefit comes from sheet breaks and paper price (UWF price fell 9% in 2025).","Maintenance saving of 10% is well above the 0.5–3% asset-maintenance benchmark for Paper & Packaging.","Flat five-year flows, no tax or ramp-up; baselines are estimates to validate with mill data."]},
   {h:"Governance and risk", pts:["14-month gated roadmap reviewed by the AI Governance Steering Committee; risks: OT cybersecurity, model drift, harsh environment, change resistance, each with a mitigation."]}
  ],
  keyTerms:["NPV","IRR > r","sensitivity","benchmark","baseline","limitations"],
  tip:"Numbers first, then critique; show you can question your own assumptions."}
];
