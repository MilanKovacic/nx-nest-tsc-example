# Nx + Nest + TSC example

This repository is an example of using Nx with Nest, without webpack.

## Process

1. Create a new Nx workspace
2. Add a Nest application (apps/backend) using @nx/nest plugin
3. Modify the Nest application to use TSC executor instead of webpack (apps/backend/project.json)
4. Add a Nest library (libs/backend-library) using @nx/nest plugin
5. Import the library into the application (apps/backend/src/main.ts)

## Limitations

- tsc executor currently does not support generating trimmed package.json/lock pairs for production builds
