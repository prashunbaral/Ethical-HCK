#!/usr/bin/env node

/**
 * Project Health Check Script
 * Verifies all improvements have been implemented correctly
 */

const fs = require('fs');
const path = require('path');

const checks = [
  {
    name: 'README.md exists and is not empty',
    check: () => {
      const content = fs.readFileSync('README.md', 'utf8');
      return content.length > 1000;
    }
  },
  {
    name: 'Security headers in next.config.js',
    check: () => {
      const content = fs.readFileSync('next.config.js', 'utf8');
      return content.includes('headers()') && content.includes('Strict-Transport-Security');
    }
  },
  {
    name: 'Environment example file exists',
    check: () => fs.existsSync('.env.example')
  },
  {
    name: 'ESLint configuration exists',
    check: () => fs.existsSync('.eslintrc.json')
  },
  {
    name: 'Prettier configuration exists',
    check: () => fs.existsSync('.prettierrc')
  },
  {
    name: 'TypeScript types file exists',
    check: () => fs.existsSync('types/index.ts')
  },
  {
    name: '404 page exists',
    check: () => fs.existsSync('app/not-found.tsx')
  },
  {
    name: 'Error page exists',
    check: () => fs.existsSync('app/error.tsx')
  },
  {
    name: 'Loading page exists',
    check: () => fs.existsSync('app/loading.tsx')
  },
  {
    name: 'AOS initialization component exists',
    check: () => fs.existsSync('components/aos-init.tsx')
  },
  {
    name: 'PWA manifest exists',
    check: () => fs.existsSync('public/manifest.json')
  },
  {
    name: 'Security.txt exists',
    check: () => fs.existsSync('public/.well-known/security.txt')
  },
  {
    name: 'Contributing guidelines exist',
    check: () => fs.existsSync('CONTRIBUTING.md')
  },
  {
    name: 'License file exists',
    check: () => fs.existsSync('LICENSE')
  },
  {
    name: 'CI workflow exists',
    check: () => fs.existsSync('.github/workflows/ci.yml')
  },
  {
    name: 'Deploy workflow exists',
    check: () => fs.existsSync('.github/workflows/deploy.yml')
  },
  {
    name: 'Mobile menu implemented',
    check: () => {
      const content = fs.readFileSync('components/ui/header.tsx', 'utf8');
      return content.includes('mobileMenuOpen') && content.includes('FaBars');
    }
  },
  {
    name: 'Contact form implemented',
    check: () => {
      const content = fs.readFileSync('app/(default)/contact/page.tsx', 'utf8');
      return content.includes('handleSubmit') && content.includes('formData');
    }
  },
  {
    name: 'Accessibility features added',
    check: () => {
      const content = fs.readFileSync('app/layout.tsx', 'utf8');
      return content.includes('Skip to main content') && content.includes('role="main"');
    }
  },
  {
    name: 'SEO metadata enhanced',
    check: () => {
      const content = fs.readFileSync('app/layout.tsx', 'utf8');
      return content.includes('openGraph') && content.includes('twitter');
    }
  }
];

console.log('\n🔍 Running Project Health Check...\n');

let passed = 0;
let failed = 0;

checks.forEach((test) => {
  try {
    if (test.check()) {
      console.log(`✅ ${test.name}`);
      passed++;
    } else {
      console.log(`❌ ${test.name}`);
      failed++;
    }
  } catch (error) {
    console.log(`❌ ${test.name} - Error: ${error.message}`);
    failed++;
  }
});

console.log(`\n📊 Results: ${passed}/${checks.length} checks passed\n`);

if (failed === 0) {
  console.log('🎉 All improvements successfully implemented!\n');
  process.exit(0);
} else {
  console.log(`⚠️  ${failed} check(s) failed. Please review the output above.\n`);
  process.exit(1);
}
