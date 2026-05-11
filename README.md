# Synthector Evidence Kit

Synthector is a text-first AI privacy boundary. It is designed to reduce sensitive data exposure in text before that text is passed into downstream AI systems, review workflows, or automation layers.

This public repository is an evidence kit, not the proprietary Synthector engine. It does not include private engine code, detector logic, fusion logic, redaction rules, production endpoints, keys, tenant identifiers, credentials, real JWS receipts, or personal data.

The kit shows:

- Representative synthetic inputs.
- Representative minimized outputs using placeholder tokens such as `[PERSON_NAME]`, `[EMAIL]`, `[CONTACT_PHONE]`, `[STREET_ADDRESS]`, and `[DATE]`.
- Metadata-only receipt examples for the synthetic samples.
- A local receipt-shape verifier for the illustrative demo receipts.

Public demo: https://synthector.com/#demo

Custom testing is available through a controlled technical-fit call. That path is intended for teams that need to evaluate fit with their own requirements under appropriate boundaries.

## Repository Layout

- `sample-inputs/`: synthetic source examples.
- `sample-outputs/`: illustrative minimized outputs.
- `sample-receipts/`: metadata-only demo receipts.
- `verifier-js/`: a local verifier for the demo receipt shape.
- `docs/`: bounded notes on what this kit proves, what it does not prove, the attestation model, and disclosure boundaries.

## Run The Verifier

```sh
npm test
```

Or validate any sample receipt directly:

```sh
node verifier-js/verify-demo-receipt.mjs sample-receipts/contact-center.receipt.json
```

The verifier checks only the shape and internal consistency of these illustrative demo receipts. It does not access the network and does not verify cryptographic signatures.

## Trust Boundary

This kit is intentionally narrow. It helps reviewers inspect a public, synthetic representation of input minimization and receipt metadata. It should be read alongside the disclosure boundaries in `docs/` and should not be treated as a compliance attestation, accuracy benchmark, or substitute for buyer diligence.
