#!/usr/bin/env node

import { readFile } from "node:fs/promises";

const REQUIRED_FIELDS = [
  "receipt_version",
  "attestation_mode",
  "ruleset_version",
  "leak_status",
  "entities_total",
  "entities_by_type",
  "issued_at_utc",
  "input_sha256_demo",
  "output_sha256_demo",
  "notes"
];

const ALLOWED_LEAK_STATUSES = new Set(["pass", "fail"]);

function fail(errors) {
  console.error("FAIL");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exitCode = 1;
}

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function sumEntityCounts(entitiesByType, errors) {
  let total = 0;

  for (const [entityType, count] of Object.entries(entitiesByType)) {
    if (!Number.isInteger(count) || count < 0) {
      errors.push(`entities_by_type.${entityType} must be a non-negative integer`);
      continue;
    }

    total += count;
  }

  return total;
}

async function main() {
  const receiptPath = process.argv[2];
  const errors = [];

  if (!receiptPath) {
    fail(["usage: node verifier-js/verify-demo-receipt.mjs <receipt.json>"]);
    return;
  }

  let receipt;
  try {
    receipt = JSON.parse(await readFile(receiptPath, "utf8"));
  } catch (error) {
    fail([`could not read or parse JSON: ${error.message}`]);
    return;
  }

  if (!isPlainObject(receipt)) {
    fail(["receipt must be a JSON object"]);
    return;
  }

  for (const field of REQUIRED_FIELDS) {
    if (!Object.hasOwn(receipt, field)) {
      errors.push(`missing required field: ${field}`);
    }
  }

  if (receipt.attestation_mode !== "illustrative_demo") {
    errors.push("attestation_mode must be illustrative_demo");
  }

  if (!ALLOWED_LEAK_STATUSES.has(receipt.leak_status)) {
    errors.push("leak_status must be pass or fail");
  }

  if (!Number.isInteger(receipt.entities_total) || receipt.entities_total < 0) {
    errors.push("entities_total must be a non-negative integer");
  }

  if (!isPlainObject(receipt.entities_by_type)) {
    errors.push("entities_by_type must be an object");
  } else {
    const entitySum = sumEntityCounts(receipt.entities_by_type, errors);
    if (Number.isInteger(receipt.entities_total) && receipt.entities_total !== entitySum) {
      errors.push(`entities_total ${receipt.entities_total} does not match entities_by_type sum ${entitySum}`);
    }
  }

  if (errors.length > 0) {
    fail(errors);
    return;
  }

  console.log("PASS");
}

main().catch((error) => {
  fail([error.message]);
});
