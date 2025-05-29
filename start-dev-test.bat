@echo off
echo Starting Copa Starter Kit development server...
echo.
echo This will test if all hydration errors have been resolved.
echo.
cd /d "d:\GithubWorkspace\copa-starter-kit"
pnpm run dev --filter=web
pause
