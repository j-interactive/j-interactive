# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for Joe Griffiths, deployed via GitHub Pages to `j-interactive.dev`. Single-file, no build step, no dependencies beyond a Google Fonts import.

## Architecture

Everything lives in `index.html`: HTML structure, all CSS in a `<style>` block, and any JavaScript inline. There are no separate asset files for styles or scripts. The README mentions `style.css`, `script.js`, and image files that no longer exist -- `index.html` is the sole source of truth.

## Development

Open `index.html` directly in a browser -- no server, build, or install step required.

## Deployment

Pushing to `main` deploys automatically via GitHub Pages. The `CNAME` file maps the repo to `j-interactive.dev`.
