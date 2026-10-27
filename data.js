const AIBC_SECTIONS = {
  A:"Business Value & Bain", B:"Canvas & Enterprise Systems", C:"BTM² & Risk",
  D:"Value Drivers & Benefits", E:"Financial KPIs", F:"KPI Calculations",
  G:"AI Evidence & SAP Method", H:"Business Case & ProFoods", I:"SAP Industry Benchmarks",
  J:"Project, Grading & Exam", K:"Navigator Case (Applied)", L:"Cross-cutting & Scenarios"
};

// One-line "key concept" shown in the explanation box (first sentence is used)
const AIBC_CONCEPTS = {
  A:"Business value is the subjective benefit an entity ascribes to something: Value = Benefit – Efforts – Risks – Price. Bain's Elements of Value is a pyramid (table stakes → functional → ease of doing business → individual → inspirational), and real AI value comes from redesigning workflows, not layering AI on top.",
  B:"The Business Model Canvas has nine blocks (customer segments, value propositions, customer relationships, channels, revenue streams, key activities, key resources, key partnerships, cost structure) and suits linear business models. It is chapter 3 of the business case.",
  C:"BTM² is SAP's Business Transformation Management Methodology: Direction (strategy, value, risk) and Enablement, framed by Meta Management (why, what, how). Value Management runs Envision, Engage, Transform, Optimize.",
  D:"Four soft-benefit pillars: top line (revenue), bottom line (net income after expenses), green line (conserving natural resources), strategic and transformational (long-term viability). They are measured by KPIs and converted into money by hard financial KPIs.",
  E:"Five financial KPIs: TCO, ROI and PBP are simple (no time value); NPV and IRR are advanced (discounted). NPV is a euro amount (positive = go); IRR is a rate that must exceed the discount rate.",
  F:"Apply the formulas: TCO = initial + recurring – remaining value; ROI = (benefits – cost)/cost × 100; PBP = cost / average annual cash flow; NPV = Σ Cn/(1+r)^n – investment; IRR = the rate where NPV = 0. Default discount rate is 10%, higher for riskier AI.",
  G:"SAP values AI with product capabilities, industry benchmarks and customer input: impact area → value driver → KPI → baseline → improvement % → financial benefit. Good business cases are ambitious, collaborative, specific, persona-relevant and realistic.",
  H:"The business case has seven chapters: industry; responsibilities and priorities; canvas; AI use case; business impact (value drivers); costs and gains; financial investment. ProFoods is the fictional worked example (20% less carbon, 5% more EBIT = AED 126M).",
  I:"SAP's benchmark gives average KPI improvement ranges after a digital transformation, for 26 industries, grouped by the four pillars. Use ranges as estimating guides, not guarantees.",
  J:"Final grade = 60% group project + 40% individual exam (minimum 9.5/20). Project: 15 minutes, 15 slides, financial investment weighs 30%. Exam: 45 minutes, true/false, multiple choice and one writing question.",
  K:"Navigator's pilot: 18 IFM sensors on PM1 for predictive maintenance and process stability. 310 k€ CAPEX, 91 k€/yr OPEX, 1,038 k€/yr benefits; NPV 3,244 k€, IRR 273%, payback 0.37 years at 10%.",
  L:"Match KPI to question and persona: CFO–NPV, CIO–TCO, COO–downtime, CSCO–stock-outs, CRO–revenue; PBP for speed of recovery, IRR for ranking, NPV for value. Soft benefits come first, hard benefits turn them into money."
};

const AIBC_ACRONYMS = [
  {a:"AIBC",f:"AI Business Case",d:"The NOVA IMS postgraduate course (PGAI4DT, 2026) on justifying AI investments with a business case. Taught by Pedro Ruivo and Lara Marques."},
  {a:"BTM²",f:"Business Transformation Management Methodology",d:"SAP's framework (Uhl and Gollenia): Direction (strategy, value, risk) and Enablement (process, IT, change, training, program/project) with Meta Management (why, what, how)."},
  {a:"BMC",f:"Business Model Canvas",d:"Nine-block tool: customer segments, value propositions, customer relationships, channels, revenue streams, key activities, key resources, key partnerships, cost structure. Suits linear business models."},
  {a:"KPI",f:"Key Performance Indicator",d:"A quantifiable metric used to measure a value driver (e.g. days in inventory, on-time delivery, OEE)."},
  {a:"TCO",f:"Total Cost of Ownership",d:"Initial costs + Recurring costs – Remaining value. Lower is less costly. Ignores benefits. Simple KPI."},
  {a:"ROI",f:"Return on Investment",d:"(Benefits – Cost) / Cost × 100. Must be above 0%; higher is better. Ignores time value of money. Simple KPI."},
  {a:"PBP",f:"Payback Period",d:"Cost of investment / Average annual cash flow. Shorter is better. Does not compare benefits and costs. Simple KPI."},
  {a:"NPV",f:"Net Present Value",d:"Sum of discounted cash flows – Initial investment (Σ Cn/(1+r)^n). Positive = pursue; negative = reject. An amount in euros; does not show recovery period."},
  {a:"IRR",f:"Internal Rate of Return",d:"The discount rate that makes NPV = 0. Should exceed the discount rate r; higher is better. A rate, not a euro value; does not show recovery period."},
  {a:"DCF",f:"Discounted Cash Flow",d:"Valuing future cash flows by discounting them to today's value at a chosen rate (the slides suggest a 5-year DCF for AI projects)."},
  {a:"WACC",f:"Weighted Average Cost of Capital",d:"The blended cost of a company's financing; used as the discount rate (the retail example uses 4%)."},
  {a:"r",f:"Discount rate",d:"Required return. Slides: use 10% as an average; 9.5–10.5% low-risk/operational AI, 10.5–12.5% core strategic, 12.5–14.5%+ high-risk or disruptive."},
  {a:"CAPEX",f:"Capital Expenditure",d:"One-off investment cost (e.g. implementation, sensors, hardware). Not defined in the slides; general finance meaning. Part of TCO's initial costs."},
  {a:"OPEX",f:"Operating Expenditure",d:"Recurring running cost (subscriptions, staff, maintenance). Not defined in the slides; general finance meaning. Part of TCO's recurring costs."},
  {a:"CEO",f:"Chief Executive Officer",d:"ProFoods persona: ROI, shareholder value, ESG. Navigator: EBITDA margin."},
  {a:"CFO",f:"Chief Financial Officer",d:"Persona who owns NPV (also ROE, EPS); in Navigator NPV, IRR, payback."},
  {a:"CIO / CDO",f:"Chief Information / Digital Officer",d:"Persona who owns TCO; in Navigator TCO and uptime."},
  {a:"COO",f:"Chief Operating Officer",d:"Persona who owns downtime; in Navigator OEE and downtime."},
  {a:"CSCO",f:"Chief Supply Chain Officer",d:"Persona who owns stock-outs (and payback in the persona view)."},
  {a:"CRO",f:"Chief Revenue Officer",d:"Persona who owns revenue increase (and IRR in the persona view)."},
  {a:"CISO",f:"Chief Information Security Officer",d:"Navigator persona: IT/OT security, KPI OT incidents = 0; sits on the AI Governance Steering Committee."},
  {a:"EBIT",f:"Earnings Before Interest and Taxes",d:"Operating profit. ProFoods: 5% increase in EBIT = AED 126M."},
  {a:"EBITDA",f:"Earnings Before Interest, Taxes, Depreciation and Amortisation",d:"Navigator 2025: €376M (19% margin), down 31%."},
  {a:"FMCG",f:"Fast-Moving Consumer Goods",d:"ProFoods' sector: dairy, beverage, bakery, poultry and snacks."},
  {a:"UWF",f:"Uncoated Wood-Free (paper)",d:"Navigator's core product (~57% of revenue). PIX A4 office paper avg €1,003/t in 2025 (–9%)."},
  {a:"PM1",f:"Paper Machine 1",d:"Navigator's pilot machine at Figueira da Foz; running since 1991; ~350 kt UWF a year."},
  {a:"IIoT",f:"Industrial Internet of Things",d:"Connected industrial sensors (vibration, temperature, viscosity) feeding edge and cloud analytics."},
  {a:"OT",f:"Operational Technology",d:"Plant-floor systems and sensors; IIoT widens the attack surface, hence IT/OT segregation (Purdue architecture)."},
  {a:"OEE",f:"Overall Equipment Effectiveness",d:"Availability × performance × quality of a machine; KPI of COO and mill director."},
  {a:"MTBF",f:"Mean Time Between Failures",d:"Reliability KPI owned by the maintenance manager at PM1."},
  {a:"SAP RISE",f:"SAP RISE with SAP",d:"Class 2 high-tech example: 29+ use cases mapped to 125 SAP AI use cases; savings €1,542k–€2,268k (2025–2031)."},
  {a:"Soft / hard benefits",f:"Value drivers vs financial KPIs",d:"Soft = top line, bottom line, green line, strategic and transformational (measured by KPIs). Hard = ROI, IRR, TCO, NPV, PBP."}
];

const AIBC_CHAPTER_SUMMARIES = [
  {id:"A", label:"Class 1", title:"Business Value & Bain",
   keyPoints:[
    {t:"Value formula", b:"Value = Benefit (of satisfaction) – Efforts – Risks – Price. Value is subjective and context-sensitive (marginal utility)."},
    {t:"Bain's Elements of Value", b:"Pyramid applying Maslow: table stakes (base) → functional (economic, performance) → ease of doing business (productivity, access, operational, relationship, strategic) → individual (career, personal) → inspirational (vision, hope, social and environmental responsibility)."},
    {t:"AI and value (Bain)", b:"Value comes from redesigning workflows, not layering AI tools. Four lessons: redesign work; avoid stalling at micro-productivity; shift the centre of gravity to human judgment; balance costs (AI is a cost driver and a cost-control tool)."},
    {t:"Who benefits", b:"Customers, shareholders, employees and society; the firm creates value through processes, employees and assets."}
   ]},
  {id:"B", label:"Class 1 · Class 3", title:"Canvas & Enterprise Systems",
   keyPoints:[
    {t:"Nine blocks", b:"Customer segments, value propositions, customer relationships, channels, revenue streams, key activities, key resources, key partnerships, cost structure. For linear business models."},
    {t:"Plain-language version (Class 3)", b:"Who you help · How you help · How you interact · How they know you and how you deliver · What you do · Who you are and what you have · Who helps you · What you give (costs) · What you get (revenue)."},
    {t:"Digital core", b:"Financial, supply chain, procurement, CRM, HR and sustainability modules; BI and e-commerce around; AI chatbots and agentic AI on top. Flows: Lead to Cash, Procure to Pay, Plan to Produce, Design to Operate, Forecast to Plan, Inspect to Quality, In- to Outbound, Acquire to Retire, Account to Report."},
    {t:"Canvas in the business case", b:"Chapter 3 of 7. In the Navigator deck, green blocks mark where AI changes the model."}
   ]},
  {id:"C", label:"Class 1", title:"BTM² & Risk",
   keyPoints:[
    {t:"Structure", b:"Direction: Strategy, Value and Risk management. Enablement: business process, transformational IT, organisational change, competence and training, program/project management. Meta Management: Why (strategy), What (program), How (project)."},
    {t:"Strategy management phases", b:"Start-up and as-is data (3–6 weeks) · analysis of needs and causes with 80/20 (3–4 weeks) · business vision (~3 weeks) · business model (~3 weeks) · integrated transformation plan (~2 weeks)."},
    {t:"Value management", b:"Envision (identify value, benchmarks, conservative estimates, first business case) · Engage (plan benefit realisation) · Transform (execute and evaluate) · Optimize (further potential)."},
    {t:"Risk management", b:"360° strategic risk assessment and risk map with seven drivers: geopolitical, market, environmental, regulatory and compliance, macro-economic, technology, social. Risk factors can arise anywhere: lack of vision, no commitment, scope creep, integration complexity, no staff buy-in."},
    {t:"Soft vs hard benefits", b:"Soft: top line, bottom line, green line, strategic and transformational. Hard: ROI, IRR, TCO, NPV, PBP (example: 12% discount, 35% tax)."}
   ]},
  {id:"D", label:"Class 1 · Class 3", title:"Value Drivers & Benefits",
   keyPoints:[
    {t:"Top line", b:"Revenue or gross sales growth (e.g. increase sales, revenue from new products, less revenue loss from stock-outs)."},
    {t:"Bottom line", b:"Net income after all expenses (interest, G&A, taxes). Examples: days in inventory, logistics cost, days sales outstanding, sourcing savings."},
    {t:"Green line", b:"Conservation of natural resources: energy cost, carbon footprint, environmental safety and compliance."},
    {t:"Strategic and transformational", b:"Drastic changes to long-term viability: customer satisfaction, on-time delivery, employee engagement, forecast accuracy."},
    {t:"ProFoods mapping", b:"Top: e-commerce cloud (1–8% less time to market). Bottom: logistics business network (5–20% less operating cost). Green: sustainability footprint management (20% less carbon). Strategic: transportation management (5–30% better on-time delivery)."}
   ]},
  {id:"E", label:"Class 2", title:"Financial KPIs",
   keyPoints:[
    {t:"TCO", b:"Initial + recurring – remaining value. Lower is less costly. Good for comparing solutions with similar time scope. Ignores benefits."},
    {t:"ROI", b:"(Benefits – cost)/cost × 100. Above 0%, higher is better. Simple comparison of one project. Ignores time value of money."},
    {t:"PBP", b:"Cost of investment / average annual cash flow. Shorter is better. Simple. Does not compare benefits and costs."},
    {t:"NPV", b:"Σ discounted cash flows – initial investment. Positive = pursue. Evaluates investments. Amount in euros. Does not show recovery period."},
    {t:"IRR", b:"Rate making NPV = 0. Should exceed r; higher is better. Compares several projects. A rate, not an amount. Does not show recovery period."},
    {t:"Simple vs advanced", b:"Simple (no time value): TCO, ROI, PBP. Advanced (discounted): NPV, IRR."}
   ]},
  {id:"F", label:"Class 2", title:"KPI Calculations",
   keyPoints:[
    {t:"Slide examples", b:"TCO: 8,000 + 1,000 × 10 – 1,000 = €17,000. ROI: (9 × 3,500 – 18,000)/18,000 = 75%. PBP: 8,000/2,500 = 3.2 years."},
    {t:"Discount rate steps", b:"Use 10% as an average; ask an AI assistant for the rate for a 5-year DCF in your industry and geography; read Damodaran's datasets."},
    {t:"Risk bands (Gemini, retail Portugal)", b:"Low/operational AI 9.5–10.5% · moderate/core strategic 10.5–12.5% · high/R&D or disruptive 12.5–14.5%+."},
    {t:"Rules of thumb", b:"Higher r lowers NPV. IRR > r ⇒ NPV > 0 (conventional flows). IRR < r ⇒ reject. NPV = 0 at r = IRR."},
    {t:"Quick formulas", b:"NPV(10%) of –1,000, +600, +600 ≈ +41. Invest 100, receive 110 in a year at 10% ⇒ NPV 0, IRR 10%."}
   ]},
  {id:"G", label:"Class 2", title:"AI Evidence & SAP Method",
   keyPoints:[
    {t:"SAP / Oxford Economics 2026", b:"Average expected AI ROI: US$6.3m (21%) this year (US$4.7m, 16% last year) → US$15.9m (38%) in two years. US: US$9.9m (24%) → US$26.5m (42%)."},
    {t:"McKinsey State of AI 2026", b:"Revenue gains: marketing and sales, product/service development. Cost benefits: supply chain, service operations, manufacturing."},
    {t:"SAP value estimation", b:"Inputs: product capabilities, industry benchmarks, customer input → efficiency, effectiveness and strategic benefits (strategic not quantified). Chain: impact area → value driver → KPI → baseline → improvement % → benefit."},
    {t:"Examples", b:"High-tech (SAP RISE): 29+ use cases mapped to 125; savings €1,542k–€2,268k (2025–2031); 13 drivers give €365k–537k recurring + €91k–167k indirect. Retail: NPV at 4% WACC, cost of delay shown."},
    {t:"Lessons learned", b:"Ambitious, collaborative, specific to company and industry, relevant to persona, realistic."}
   ]},
  {id:"H", label:"Class 3", title:"Business Case Template & ProFoods",
   keyPoints:[
    {t:"Seven chapters", b:"1 Industry · 2 Responsibilities and priorities · 3 Canvas · 4 AI digital project (use case) · 5 Business impact (value drivers) · 6 Costs and gains · 7 Financial investment. Then conclusions, limitations, next steps."},
    {t:"ProFoods", b:"Fictional FMCG (dairy, beverage, bakery, poultry, snacks), founded in Dubai in 1998. Teaser: –20% carbon footprint, +5% EBIT = AED 126M. Wants to reach expatriates."},
    {t:"Personas", b:"CFO: NPV · CIO: TCO · CSCO: stock-outs · COO: downtime · CRO: revenue increase · CEO: ROI, shareholder value, ESG."},
    {t:"Environment", b:"Up: supply-chain pressure, skills shortage, cybersecurity. Down: inflation, recession, cost of capital, Ukraine war. Neutral: environmental risks, pandemics."},
    {t:"Challenges", b:"Four: disparate IT landscape; M&A-built units with separate processes; market expansion (expatriates); innovation and transformation (leadership disagreement)."}
   ]},
  {id:"I", label:"Class 3", title:"SAP Industry Benchmarks",
   keyPoints:[
    {t:"Common ranges", b:"Customer satisfaction +15–40% · on-time delivery +5–30% · employee engagement +10–20% · energy cost –3–10% · carbon footprint –3–10% · time to market –1–8% · days in inventory –2–15% · logistics cost –1–5% · DSO –2–10%."},
    {t:"Consumer products", b:"Revenue from new products +2–10% · stock-out revenue loss –1–30% · sales forecast accuracy +3–35% · carbon –15–20%."},
    {t:"Paper & Packaging (relevant to Navigator)", b:"Manufacturing cycle time –2–15% · total manufacturing cost –0.1–0.5% · asset maintenance cost –0.5–3% · unplanned downtime –1–5% · scrap cost –5–30% · inventory carrying cost –1–25% · energy –3–10% · water usage reduction."},
    {t:"Other distinctive ranges", b:"Retail unplanned markdowns –5–15% · wholesale revenue leakage –10–20% · construction quote time –60–95% · media subscription renewals +20–40% · utilities OEE +5–25% · public sector citizen satisfaction +15–50% · professional services proposal win rate +1–5%."},
    {t:"How to use", b:"Ranges are averages after a digital transformation; start from the lower end, justify anything outside the range."}
   ]},
  {id:"J", label:"Class 4–7", title:"Project, Grading & Exam",
   keyPoints:[
    {t:"Course grade", b:"60% group project + 40% individual exam. Exam minimum 9.5/20. Final = weighted sum."},
    {t:"Project rules", b:"Groups of 5 (Class 1 slides say 4). 15 minutes, max 15 slides. Cover slide: title plus all names and numbers (missing = no score). Sent by 22 Oct, 18:00."},
    {t:"Grading grid (1–5 scale, professor 60%, colleagues 40%)", b:"Teaser 5% · Industry/priorities/responsibilities 10% · AI use case 15% · Canvas and value drivers 15% · Financial investment 30% · Conclusions/limitations/next steps 10% · Presentation 5% + 5% · Discussion 5%."},
    {t:"Exam", b:"29 October (class slides say 18:30; professor's note says 18:45; confirm on Moodle/email). 45 minutes. True/false, multiple choice, one writing question. NOVA IMS PCs or Safe Exam Browser. Rooms 7 and 8. Sign the attendance sheet before leaving."}
   ]},
  {id:"K", label:"Group project", title:"Navigator Case (Applied)",
   keyPoints:[
    {t:"Pitch", b:"18 IFM sensors on PM1 (6 vibration, 6 temperature, 6 viscosity) for predictive maintenance and process stability. Approve 310 k€."},
    {t:"Context", b:"Navigator: €1.97bn turnover, EBITDA €376M (19%, –31%), #1 UWF in Europe, 130+ countries. Market $366bn (2023) → $512bn (2032), 3.8% CAGR. PIX A4 €1,003/t (–9%)."},
    {t:"Benefits (k€/yr)", b:"Top line 738.3 (87.5 breaks avoided × 30 min = 43.8 h × 41.7 t/h = 1,823 t × €900/t × 45% margin) · Bottom line 200.0 (–10% of ~2,000 maintenance) · Green line 100.0 · Total 1,038.3."},
    {t:"Costs (k€)", b:"CAPEX 310.3 (implementation 300.0, sensors 7.3, PC/software/security 3.0). OPEX 91.1/yr (subscription 36.0, maintenance 1.5, internal person 50.0, sensor replacement 3.6). TCO 801.7."},
    {t:"Financials at 10%", b:"Net cash flow 947.2/yr; Y0 –346.3. NPV 3,244 · IRR 273% · ROI 548% · PBP 0.37 yrs (0.40 discounted)."},
    {t:"Sensitivity", b:"8%: 3,436 · 12%: 3,068 · CAPEX +20%: 3,182 · benefits –50%: 1,276 · savings only: 446 · break-even –82% (≈182 k€)."},
    {t:"Roadmap and risks", b:"14 months: P1 install and baseline (gate 95% telemetry, 30 days) · P2 predictive maintenance shadow→live (gate 3 failures predicted, 0 false positives) · P3 stability and scale-up (gate –25% sheet breaks, one quarter). Risks: OT cybersecurity, model drift, harsh environment, change resistance."},
    {t:"Likely challenges", b:"~70% of benefit rests on sheet breaks and paper price; maintenance saving of 10% is above the 0.5–3% benchmark for Paper & Packaging; flat 5-year flows, no tax or ramp-up."}
   ]},
  {id:"L", label:"All classes", title:"Cross-cutting & Scenarios",
   keyPoints:[
    {t:"Pick the KPI", b:"Rank projects → IRR. Compare total cost → TCO. Speed of recovery → PBP. Absolute value after discounting → NPV. Simple return → ROI."},
    {t:"Pick the persona", b:"CFO–NPV · CIO–TCO · COO–downtime · CSCO–stock-outs · CRO–revenue · CEO–ROI/ESG."},
    {t:"Soft then hard", b:"Estimate soft benefits from benchmarks and baselines, then convert to money with hard KPIs."},
    {t:"Common traps", b:"ROI is not time-adjusted · NPV is an amount, IRR is a rate · discount rate is not fixed (10% default, up with risk) · group size differs across slides."},
    {t:"Estimates", b:"Grounded in benchmarks and baselines, conservative, with likely scenarios, and realistic."}
   ]}
];
