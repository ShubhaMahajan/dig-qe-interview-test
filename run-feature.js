#!/usr/bin/env node

/**
 * Script to run a specific feature file
 * Usage: node run-feature.js login.feature
 *        node run-feature.js basic_auth.feature
 */

import { spawn } from 'child_process';
import path from 'path';

const featureFile = process.argv[2];

if (!featureFile) {
  console.error('❌ Please provide a feature file name');
  console.error('Usage: node run-feature.js <feature-file>');
  console.error('Example: node run-feature.js login.feature');
  process.exit(1);
}

// Set environment variable
process.env.FEATURE = featureFile;

// Run wdio
console.log(`🚀 Running feature file: ${featureFile}\n`);

const wdio = spawn('npx', ['wdio', 'run', 'wdio.conf.js'], {
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, FEATURE: featureFile }
});

wdio.on('close', (code) => {
  process.exit(code);
});
