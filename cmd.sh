#!/bin/bash

# Array of directories containing Next.js projects
directories=("1-static-page" "2-dynamic-routing" "3-api-routes" "4-form-and-state-management" "5-image-optimization")

# Array to hold process IDs of background tasks
pids=()

# Function to start Next.js in each directory
start_projects() {
  for dir in "${directories[@]}"; do
    (
        cd "$dir" || exit
        echo "Starting Next.js in $dir"
        npm run dev &
        pids+=($!) # Save the process ID
    )
  done
}


# Function to stop all child processes
stop_projects() {
  echo "Stopping all projects..."
  for pid in "${pids[@]}"; do
    echo "Stopping process $pid"
    kill "$pid" 2>/dev/null
  done
  exit 0
}

# Function to display usage information
usage() {
  echo "Usage: $0 {start|stop}"
  exit 1
}

# Trap SIGINT (Ctrl+C) and SIGTERM to stop all projects when the script is terminated
trap stop_projects SIGINT SIGTERM

# Parse command-line arguments
if [[ "$1" == "start" ]]; then
  start_projects
  wait # Keep the script running to wait for background processes
elif [[ "$1" == "stop" ]]; then
  stop_projects
else
  usage
fi