// This script allows building the app without requiring authentication.
// It temporarily disables the Clerk authentication check by modifying the .env.local file.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

// Define paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.join(__dirname, '..', '.env.local');
const envBackupPath = path.join(__dirname, '..', '.env.local.backup');

// Create a backup of the original .env.local
console.log('Creating backup of .env.local...');
fs.copyFileSync(envPath, envBackupPath);

try {
    // Read the current .env file
    const envContent = fs.readFileSync(envPath, 'utf8');

    // Create a modified version with NEXT_PUBLIC_SKIP_AUTH_CHECK=true
    let newEnvContent = envContent;

    if (!newEnvContent.includes('NEXT_PUBLIC_SKIP_AUTH_CHECK=')) {
        newEnvContent += '\n# Skip authentication checks during development build\nNEXT_PUBLIC_SKIP_AUTH_CHECK=true\n';
    } else {
        newEnvContent = newEnvContent.replace(
            /NEXT_PUBLIC_SKIP_AUTH_CHECK=.*/,
            'NEXT_PUBLIC_SKIP_AUTH_CHECK=true'
        );
    }

    // Write the modified .env file
    console.log('Modifying .env.local to skip auth checks...');
    fs.writeFileSync(envPath, newEnvContent);

    // Run the build command
    console.log('Running build with auth checks disabled...');
    execSync('npx next build', { stdio: 'inherit' });

} catch (error) {
    console.error('Build failed:', error);
    process.exitCode = 1;
} finally {
    // Restore the original .env file
    console.log('Restoring original .env.local...');
    fs.copyFileSync(envBackupPath, envPath);
    fs.unlinkSync(envBackupPath);
}

console.log('Build process completed.');
