const AIBC_SECTIONS = {
  A:"Business Value & Bain", B:"Business Model Canvas", C:"BTM² & Risk",
  D:"Value Drivers & Benefits", E:"Financial KPIs", F:"KPI Calculations",
  G:"SAP Value Method", H:"Business Case Template", L:"Applied Scenarios"
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
  H:"The business case has seven chapters: industry; responsibilities and priorities; canvas; AI use case; business impact (value drivers); costs and gains; financial investment.",
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
  {a:"CEO",f:"Chief Executive Officer",d:"Persona who cares about ROI, shareholder value and ESG."},
  {a:"CFO",f:"Chief Financial Officer",d:"Persona who owns NPV (also ROE, EPS); also IRR and payback."},
  {a:"CIO / CDO",f:"Chief Information / Digital Officer",d:"Persona who owns TCO (cost of technology)."},
  {a:"COO",f:"Chief Operating Officer",d:"Persona who owns downtime and operational KPIs."},
  {a:"CSCO",f:"Chief Supply Chain Officer",d:"Persona who owns stock-outs (and payback in the persona view)."},
  {a:"CRO",f:"Chief Revenue Officer",d:"Persona who owns revenue increase (and IRR in the persona view)."},
  {a:"EBIT",f:"Earnings Before Interest and Taxes",d:"Operating profit (Earnings Before Interest and Taxes)."},
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
    {t:"Canvas in the business case", b:"Chapter 3 of 7."}
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
  {id:"H", label:"Class 3", title:"Business Case Template",
   keyPoints:[
    {t:"Seven chapters", b:"1 Industry · 2 Responsibilities and priorities · 3 Canvas · 4 AI digital project (use case) · 5 Business impact (value drivers) · 6 Costs and gains · 7 Financial investment. Then conclusions, limitations, next steps."},
    {t:"Personas", b:"CFO: NPV · CIO: TCO · CSCO: stock-outs · COO: downtime · CRO: revenue increase · CEO: ROI, shareholder value, ESG."},
    {t:"Environment", b:"Up: supply-chain pressure, skills shortage, cybersecurity. Down: inflation, recession, cost of capital, Ukraine war. Neutral: environmental risks, pandemics."},
    {t:"Challenges", b:"Four: disparate IT landscape; M&A-built units with separate processes; market expansion (expatriates); innovation and transformation (leadership disagreement)."}
   ]},
  {id:"J", label:"Class 4–7", title:"Project, Grading & Exam",
   keyPoints:[
    {t:"Course grade", b:"60% group project + 40% individual exam. Exam minimum 9.5/20. Final = weighted sum."},
    {t:"Project rules", b:"Groups of 5 (Class 1 slides say 4). 15 minutes, max 15 slides. Cover slide: title plus all names and numbers (missing = no score). Sent by 22 Oct, 18:00."},
    {t:"Grading grid (1–5 scale, professor 60%, colleagues 40%)", b:"Teaser 5% · Industry/priorities/responsibilities 10% · AI use case 15% · Canvas and value drivers 15% · Financial investment 30% · Conclusions/limitations/next steps 10% · Presentation 5% + 5% · Discussion 5%."},
    {t:"Exam", b:"29 October (class slides say 18:30; professor's note says 18:45; confirm on Moodle/email). 45 minutes. True/false, multiple choice, one writing question. NOVA IMS PCs or Safe Exam Browser. Rooms 7 and 8. Sign the attendance sheet before leaving."}
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
