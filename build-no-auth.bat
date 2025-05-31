@echo off
cd apps\web
echo Running build with authentication checks disabled...
pnpm run build:no-auth
cd ..\..
echo Build process completed.
