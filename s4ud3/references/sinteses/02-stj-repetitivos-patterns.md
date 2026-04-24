# STJ Patterns: What Gets Standardized Through Repetitivos

## Overview

The Superior Tribunal de Justiça (STJ) handles health cases primarily through two channels:
1. **Recursos Repetitivos** (binding themes for infra-constitutional matters)
2. **Súmulas** (consolidated jurisprudence)

This memo maps the key patterns in STJ health jurisprudence, focusing on how standardization affects outcomes.

---

## 1. STJ vs STF: Division of Labor

| Court | Jurisdiction | Health Focus |
|-------|--------------|--------------|
| STF | Constitutional (Art. 196 CF) | Right to health, federative responsibility |
| STJ | Infra-constitutional (laws, CDC) | Health plans, contracts, procedure |

**Practical effect:** Most private health plan litigation goes to STJ; most SUS litigation goes to STF.

---

## 2. Private Health Plans (Saúde Suplementar)

### Core Principle: CDC Applies
STJ consistently applies the Consumer Defense Code (CDC) to health plan contracts:
- Plans are **service providers** (fornecedores)
- Beneficiaries are **consumers** (consumidores)
- Abusive clauses are **null** (nulas de pleno direito)

### Key Standardized Positions

#### 2.1 Rol da ANS (Procedure List)

**Before 2022:**
> The ANS rol is merely exemplary (exemplificativo), not exhaustive. Plans must cover treatments not on the rol if medically necessary.

**After Lei 14.454/2022:**
> The rol is exemplary. Coverage can only be denied if:
> 1. There's an effective substitute on the rol, OR
> 2. The treatment is experimental

**STJ Pattern:**
Courts tend to grant coverage when:
- Physician prescribes treatment
- ANS rol doesn't have effective substitute
- Treatment has ANVISA registration

#### 2.2 Carência (Waiting Periods)

**Standard reasoning:**
> Waiting periods are valid, BUT cannot apply to:
> - Emergencies (urgência/emergência) - max 24h wait
> - Pre-existing conditions that weren't known

**Súmula 609:**
> "A recusa de cobertura securitária, sob a alegação de doença preexistente, é ilícita se não houve a exigência de exames médicos prévios à contratação ou a demonstração de má-fé do segurado."

#### 2.3 Reajustes (Price Adjustments)

**Individual plans:**
- ANS regulates maximum adjustment
- Above-limit adjustments are abusive

**Collective plans:**
- More freedom, but still subject to CDC limits
- Must be justified and transparent

#### 2.4 Cancelamento Unilateral (Unilateral Cancellation)

**Standard position:**
> Plans cannot unilaterally cancel contracts during treatment or for high utilization.

**Exception:**
> Non-payment after proper notification (30 days minimum).

---

## 3. Medications and Treatments

### 3.1 Off-Label Use

**STJ Pattern:**
> Off-label use (uso off-label) must be covered if:
> 1. ANVISA-registered drug (even if for different indication)
> 2. Medical evidence supports the use
> 3. No effective on-label alternative

**Typical language:**
> "O uso off-label de medicamento não obsta a cobertura pelo plano de saúde quando prescrito por médico habilitado."

### 3.2 Experimental Treatments

**General rule:**
> Experimental treatments can be excluded.

**BUT:**
> Treatment is NOT experimental if:
> - ANVISA registered
> - Used in standard medical practice
> - Has scientific support (even if recent)

### 3.3 Home Care

**Standard pattern:**
> If hospital internment is covered, equivalent home care (home care) must also be covered when medically indicated.

**Rationale:**
> Home care often costs LESS than hospitalization; denial is abusive.

---

## 4. Procedural Patterns

### 4.1 Inversão do Ônus da Prova

**Standard application:**
> The burden of proof inverts to the plan (CDC Art. 6, VIII) when:
> - Consumer is hypossuficient
> - Plan has technical knowledge

**Effect:**
> Plan must prove treatment is experimental/excluded; consumer doesn't have to prove it's covered.

### 4.2 Dano Moral (Moral Damages)

**When granted:**
- Denial causing treatment delay
- Cancellation during ongoing treatment
- Denial in emergency situations

**When denied:**
- Mere contractual dispute
- Quick resolution after initial denial

**Typical values:**
- R$ 5.000 - R$ 20.000 for coverage denial
- R$ 20.000 - R$ 50.000 for treatment interruption
- Higher for death/permanent harm cases

### 4.3 Tutela de Urgência

**Standard for granting:**
> Health cases almost always meet urgency requirements:
> - Probability of right: medical prescription
> - Danger of delay: health deterioration

**Rare denials:**
> Only when treatment is clearly experimental or cosmetic.

---

## 5. Themes Under Construction

### Active Repetitivos (Health-Related)

| Theme | Issue | Status |
|-------|-------|--------|
| 1082 | Rol da ANS taxatividade | Judged - exemplary with limits |
| 1069 | Reajuste por sinistralidade | Pending |
| 952 | Cobertura de stent | Judged - must cover |

### Trending Issues
- Mental health coverage (duration limits)
- Fertility treatments
- Cannabis-based medications
- Gene therapy coverage

---

## 6. Reasoning Templates by Case Type

### Template: Coverage Denial

```
1. Is there a valid contract? → Yes → Continue
2. Is treatment ANVISA-registered? → Yes → Presumption of coverage
3. Does contract exclude it? → Check if exclusion is abusive (CDC)
4. Is there effective substitute? → No → Must cover
5. Moral damages? → Evaluate delay/harm
```

### Template: Plan Cancellation

```
1. Was cancellation unilateral? → Yes → Presumption of abuse
2. What was the reason?
   - Non-payment → Check notification requirements
   - High utilization → Abusive
   - Fraud → Valid if proven
3. Was beneficiary in treatment? → Yes → Aggravates abuse
```

### Template: Price Adjustment

```
1. Individual or collective plan?
   - Individual → ANS limits apply strictly
   - Collective → More flexibility, but CDC limits
2. Was adjustment justified?
3. Was there transparency?
4. Above-market adjustment → Presumption of abuse
```

---

## 7. Interaction with STF Precedents

**When private plan denies SUS-available treatment:**
> STJ may order plan to cover, citing that if SUS provides, private plan cannot deny equivalent care.

**When STF tema applies:**
> STJ defers to STF on constitutional matters but applies its own standards for contractual/CDC issues.

---

## 8. Key Statistics (from CNJ data)

- Health plan cases: ~300,000 new cases/year (2024)
- Success rate for consumers: ~75-80%
- Average time to preliminary injunction: 5-15 days
- Average moral damages: R$ 10,000-15,000

---

## Key Documents to Cross-Reference

- `data/stj_teses/tjrj-plano-saude-sumulas.pdf` - State court patterns
- `data/cnj_normas/cnj-relatorio-analitico-2019.pdf` - Litigation statistics
- CDC (Lei 8.078/1990) - Consumer protection framework
- Lei 9.656/1998 - Health plans law
- ANS normative resolutions - Coverage requirements
