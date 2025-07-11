#!/bin/bash
cd /home/runner/workspace
export NODE_ENV=development
npx vite --host 0.0.0.0 --port 5000
