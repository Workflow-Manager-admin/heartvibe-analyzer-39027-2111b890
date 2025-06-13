#!/bin/bash
cd /home/kavia/workspace/code-generation/heartvibe-analyzer-39027-2111b890/heartvibe_analyzer
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

