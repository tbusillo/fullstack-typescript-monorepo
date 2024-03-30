# Install infisical
curl -1sLf \
'https://dl.cloudsmith.io/public/infisical/infisical-cli/setup.deb.sh' \
| sudo -E bash

sudo apt-get update && sudo apt-get install -y infisical

# Setup pnpm globally
pnpm setup && source ~/.bashrc

# Add TSX
pnpm install -g tsx