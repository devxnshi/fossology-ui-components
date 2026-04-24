#!/bin/bash

# ─────────────────────────────────────────────
#  FOSSology UI Components — Automated Setup
#  Just run: bash setup.sh
#  No coding knowledge needed!
# ─────────────────────────────────────────────

set -e  # Stop immediately if anything goes wrong

echo ""
echo "============================================"
echo "  FOSSology UI — Setting everything up..."
echo "============================================"
echo ""

# ── Step 1: Back up README so Next.js doesn't complain ──
if [ -f "README.md" ]; then
  echo "📄 Saving your existing README..."
  mv README.md README_backup.md
fi

# ── Step 2: Set up Next.js with Tailwind CSS ──
echo "⚙️  Installing Next.js with Tailwind CSS..."
echo "    (This takes about 2 minutes — please wait)"
echo ""

npx create-next-app@latest . \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --yes

echo ""
echo "✅ Next.js + Tailwind installed!"
echo ""

# ── Step 3: Restore the README ──
if [ -f "README_backup.md" ]; then
  mv README_backup.md README.md
fi

# ── Step 4: Create the components folder ──
echo "📁 Creating your components folder..."
mkdir -p src/components
echo "✅ Components folder created at: src/components"
echo ""

# ── Step 5: Install Storybook ──
echo "📚 Installing Storybook..."
echo "    (This takes another 2–3 minutes — please wait)"
echo ""

npx storybook@latest init --yes

echo ""
echo "============================================"
echo "  🎉 All done! Everything is ready."
echo "============================================"
echo ""
echo "  To open your component gallery, run:"
echo "  npm run storybook"
echo ""
echo "  To open your Next.js website, run:"
echo "  npm run dev"
echo ""
echo "  Your components folder is at:"
echo "  src/components/"
echo ""
