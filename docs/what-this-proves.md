# What This Proves

This evidence kit proves that Synthector can publish a bounded, inspectable demonstration surface without exposing proprietary internals.

It shows a reviewer:

- The kind of text-first privacy boundary Synthector is intended to provide.
- How synthetic source text can be represented before minimization.
- How minimized text can replace sensitive spans with explicit placeholder tokens.
- How receipt-style metadata can summarize a demo run without exposing source text, private rules, or operational infrastructure.
- How a local verifier can validate required receipt fields and simple metadata consistency.

The verifier runs locally and does not make network calls. The included receipts are illustrative metadata examples only.
