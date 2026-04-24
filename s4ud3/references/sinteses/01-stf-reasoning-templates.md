# STF Reasoning Templates in Health Cases

## Overview

This memo synthesizes the typical reasoning patterns used by the Supremo Tribunal Federal (STF) in health litigation cases, particularly in the binding precedents (teses de repercussão geral) that shape all downstream litigation.

---

## 1. The Core Constitutional Framework

### Right to Health (Art. 196 CF/88)
The STF consistently begins from Article 196:
> "A saúde é direito de todos e dever do Estado, garantido mediante políticas sociais e econômicas..."

**Key interpretive moves:**
- Health as a **fundamental right** (direito fundamental)
- State duty is **objective** (não discricionário)
- BUT: must be implemented through **public policies** (políticas públicas)

### The Tension
STF reasoning always navigates between:
1. **Individual right** to health (subjective, immediately enforceable)
2. **Collective dimension** (requires policy, budgeting, planning)

---

## 2. Tema 6 (RE 566.471) - High-Cost Medications Not in SUS

### The Problem
Medications registered by ANVISA but not incorporated into SUS lists (RENAME, PCDT).

### STF Reasoning Template

**Step 1: Acknowledge the right**
> The right to health is fundamental and the State has a duty to provide it.

**Step 2: Introduce limits**
> However, judicialization cannot substitute for health policy decisions made by technically competent bodies (CONITEC).

**Step 3: Establish cumulative requirements**
For judicial grant of non-incorporated medications, ALL of these must be proven:

| Requirement | Rationale |
|-------------|-----------|
| 1. Financial incapacity | Prevents wealthy individuals from bypassing public queues |
| 2. No express rejection by CONITEC | If CONITEC evaluated and rejected, judiciary should defer |
| 3. No therapeutic substitute in SUS | Must exhaust incorporated alternatives first |
| 4. Evidence-based efficacy | Medicine-based evidence, not just prescriptions |
| 5. Lawsuit against União | Federal responsibility for high-cost/rare disease drugs |

**Step 4: Procedural safeguards**
> Judges should consult NAT-Jus technical opinions before deciding.

### Typical Language Patterns
- "reserva do possível" (reserve of the possible) - budgetary limits
- "mínimo existencial" (existential minimum) - core inviolable rights
- "medicina baseada em evidências" (evidence-based medicine)
- "substituto terapêutico" (therapeutic substitute)

---

## 3. Tema 793 (RE 855.178) - Solidary Liability

### The Problem
Which federative entity (União, State, Municipality) should be sued?

### STF Reasoning Template

**Step 1: Affirm solidarity**
> The federative entities have solidary responsibility for health provision.

**Step 2: BUT establish litigation rules**
> Solidarity does not mean the plaintiff can choose any entity arbitrarily.

**Step 3: Competence follows policy**
The entity to be sued depends on where the medication/treatment is allocated in SUS policy:
- **Basic pharmacy** (Componente Básico) → Municipality
- **Strategic pharmacy** (Componente Estratégico) → State
- **Specialized pharmacy** (Componente Especializado) → State + União
- **Not in any list** → União (Tema 6 applies)

**Step 4: Internal reimbursement**
> If the "wrong" entity is condemned, it may seek reimbursement from the competent entity.

### Practical Effect
Judges should still grant the medication but should identify the correct responsible entity. The 2024 interfederative agreements (Súmula Vinculante 60) operationalize this.

---

## 4. Tema 1.234 (RE 1.366.243) - ANVISA-Registered, Not Incorporated

### The Problem
What about drugs that ANVISA approved but CONITEC hasn't evaluated yet?

### STF Reasoning Template

**Distinguish from Tema 6:**
- Tema 6 = CONITEC evaluated and either rejected or didn't incorporate
- Tema 1.234 = CONITEC hasn't evaluated at all

**The 2024 Agreements (Súmulas Vinculantes 60-61)**
Three interfederative agreements homologated by STF:

1. **Administrative flow**: Patients must first request through administrative channels
2. **NAT-Jus consultation**: Judges must request technical opinion
3. **Reimbursement rules**: If State/Municipality provides, União reimburses (for federal-competence drugs)

### Key Innovation
> The STF moved from pure adjudication to **collaborative governance** (governança judicial colaborativa).

---

## 5. Súmulas Vinculantes 60 and 61

### SV 60 (Procedural)
Establishes that ALL medication requests (administrative and judicial) must follow the three interfederative agreements.

**Effect:** Creates a mandatory "administrative exhaustion" requirement before litigation.

### SV 61 (Substantive)
For ANVISA-registered but non-incorporated drugs, the Tema 6 requirements apply.

**Effect:** Codifies the five cumulative requirements as binding precedent.

---

## 6. Common Reasoning Failures (What Courts Get Wrong)

### Over-granting
- Ignoring CONITEC negative recommendations
- Not verifying therapeutic substitutes
- Accepting any medical prescription as "evidence"

### Under-granting
- Requiring impossible proof of "system failure"
- Demanding administrative exhaustion when patient is in urgent condition
- Ignoring off-label uses with strong evidence

### Procedural Errors
- Suing wrong entity and not redirecting
- Not consulting NAT-Jus
- Granting brand-name when generic exists

---

## 7. Evolution of STF Reasoning (Timeline)

| Year | Development |
|------|-------------|
| 2009 | STA 175 - Health rights are justiciable but require balancing |
| 2010 | Audiência Pública nº 4 - Hear experts on judicialization |
| 2019 | Tema 6 - Five requirements established |
| 2020 | Tema 793 - Solidary liability with competence rules |
| 2024 | Tema 1.234 + SVs 60-61 - Collaborative governance model |

---

## 8. How to Read an STF Health Decision

1. **Identify the tema** being applied (6, 793, 1.234, or combination)
2. **Check if requirements verified** (especially for Tema 6)
3. **Look for NAT-Jus reference** (post-2024 decisions should cite)
4. **Note the competent entity** assigned
5. **Check for tutela de urgência** reasoning (periculum in mora)

---

## Key Documents to Cross-Reference

- `data/stf_teses/sumulas-vinculantes-60-61-saude.txt` - Full text of SVs
- `data/stf_teses/temas-1234-6-manual-pge-ms.pdf` - Practical application guide
- `data/cnj_resolucoes/resolucao-479-2022-natjus.pdf` - NAT-Jus procedures
- `data/rename/rename-2024.pdf` - What IS incorporated
- `data/mapeamento_medicamentos_judicializados.csv` - Drug-specific status
